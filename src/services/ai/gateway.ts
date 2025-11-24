import type {
  AIRole,
  AIMessage,
  AIToolDefinition,
  AIGatewayRequest,
  AIGatewayResponse,
  AIToolCall,
} from "./types";
import {
  AIProvider,
  AIProviderName,
  OpenAICompatibleProvider,
  PROVIDER_CONFIGS,
} from "./providers";
import type { OpenAIChatChunk } from "@agent-labs/agent-toolkit";

export type {
  AIRole,
  AIMessage,
  AIToolDefinition,
  AIGatewayRequest,
  AIGatewayResponse,
  AIToolCall,
};

export interface AIGatewayServiceOptions {
  provider?: AIProvider;
  providerName?: AIProviderName;
  baseUrl?: string;
  apiKey?: string;
  model?: string;
}

export class AIGatewayService {
  private readonly serviceOptions?: AIGatewayServiceOptions;
  private readonly providerCache = new Map<string, AIProvider>();
  private readonly defaultProvider: AIProvider;
  private readonly defaultProviderName: AIProviderName;

  constructor(options?: AIGatewayServiceOptions) {
    this.serviceOptions = options;

    if (options?.provider) {
      this.defaultProvider = options.provider;
      this.defaultProviderName =
        options.providerName ||
        (options.provider.name as AIProviderName) ||
        "openai";
      this.providerCache.set(this.defaultProviderName, options.provider);
      return;
    }

    const providerName =
      options?.providerName ||
      (import.meta.env.VITE_AI_PROVIDER as AIProviderName) ||
      "openai";

    this.defaultProviderName = providerName;
    const provider = this.resolveProvider(providerName);
    this.defaultProvider = provider;
    this.providerCache.set(providerName, provider);
  }

  private resolveProvider(providerName: AIProviderName): AIProvider {
    const config = PROVIDER_CONFIGS[providerName];
    if (!config) {
      throw new Error(`未识别的 AI provider: ${providerName}`);
    }

    const baseUrl = this.serviceOptions?.baseUrl || config.baseUrl;
    const apiKey = this.serviceOptions?.apiKey || config.apiKey;
    const defaultModel = this.serviceOptions?.model || config.defaultModel;

    return new OpenAICompatibleProvider(providerName, {
      baseUrl,
      apiKey,
      defaultModel,
    });
  }

  private getProvider(providerName?: AIProviderName): AIProvider {
    if (!providerName) {
      return this.defaultProvider;
    }

    const cached = this.providerCache.get(providerName);
    if (cached) {
      return cached;
    }

    const provider = this.resolveProvider(providerName);
    this.providerCache.set(providerName, provider);
    return provider;
  }

  private parseModel(model?: string): {
    provider: AIProviderName;
    model?: string;
  } {
    if (!model) {
      return { provider: this.defaultProviderName, model: undefined };
    }

    const segments = model.split("/");
    if (segments.length > 1) {
      const providerCandidate = segments[0] as AIProviderName;
      if (PROVIDER_CONFIGS[providerCandidate]) {
        const actualModel = segments.slice(1).join("/");
        return {
          provider: providerCandidate,
          model: actualModel || undefined,
        };
      }
    }

    return {
      provider: this.defaultProviderName,
      model,
    };
  }

  async chat(req: Partial<AIGatewayRequest>): Promise<AIGatewayResponse> {
    const { provider, model } = this.parseModel(req.model);
    const targetProvider = this.getProvider(provider);
    return targetProvider.chat({
      ...req,
      model,
    });
  }

  async chatStream(
    req: Partial<AIGatewayRequest>,
    onChunk: (chunk: string) => void
  ): Promise<AIGatewayResponse> {
    const { provider, model } = this.parseModel(req.model);
    const targetProvider = this.getProvider(provider);
    const stream = await targetProvider.chatStream({
      ...req,
      model,
    });

    let fullContent = "";
    const toolCalls: AIGatewayResponse["toolCalls"] = [];

    for await (const chunk of stream) {
      const choice = chunk.choices?.[0];
      const delta = choice?.delta;
      if (!delta) continue;

      if (delta.content) {
        fullContent += delta.content;
        onChunk(delta.content);
      }

      if (delta.tool_calls) {
        for (const toolCall of delta.tool_calls) {
          const index = toolCall.index ?? 0;
          if (!toolCalls[index]) {
            toolCalls[index] = {
              id: toolCall.id || "",
              type: "function",
              function: {
                name: "",
                arguments: "",
              },
            };
          }
          if (toolCall.function?.name) {
            toolCalls[index].function.name += toolCall.function.name;
          }
          if (toolCall.function?.arguments) {
            toolCalls[index].function.arguments += toolCall.function.arguments;
          }
        }
      }
    }

    const result: AIGatewayResponse = {
      messages: [
        {
          role: "assistant",
          content: fullContent,
        },
      ],
      toolCalls: toolCalls.length > 0 ? toolCalls : undefined,
    };

    return result;
  }

  /**
   * Low-level streaming helper for agent-style orchestration.
   * Exposes raw OpenAI-compatible delta chunks that can be converted
   * into AgentEvent streams using the agent-toolkit utilities.
   */
  async chatStreamChunks(
    req: Partial<AIGatewayRequest>
  ): Promise<AsyncIterable<OpenAIChatChunk>> {
    const { provider, model } = this.parseModel(req.model);
    const targetProvider = this.getProvider(provider);
    return targetProvider.chatStream({
      ...req,
      model,
    });
  }
}

export const aiGateway = new AIGatewayService();

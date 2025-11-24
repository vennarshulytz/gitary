export type AIRole = "system" | "user" | "assistant" | "tool";

export interface AIMessage {
  role: AIRole;
  content: string;
  name?: string;
  /**
   * Optional tool_calls field for assistant messages, following
   * OpenAI ChatCompletionMessageParam semantics. This allows us to
   * pass structured tool call history back to the model instead of
   * flattening everything into plain text.
   */
  toolCalls?: AIToolCall[];
}

export interface AIToolDefinition {
  type: "function";
  function: {
    name: string;
    description?: string;
    parameters?: Record<string, any>;
  };
}

export interface AIGatewayRequest {
  messages: AIMessage[];
  tools?: AIToolDefinition[];
  model?: string;
}

export interface AIToolCall {
  id: string;
  type: "function";
  function: {
    name: string;
    arguments: string;
  };
}

export interface AIGatewayResponse {
  messages: AIMessage[];
  toolCalls?: AIToolCall[];
}

export type StreamChunk = {
  content: string;
  done: boolean;
};

import type { UIMessage } from "@agent-labs/agent-chat";

interface ToolInvocationListProps {
  message: UIMessage;
}

/**
 * Renders tool invocation parts for a single assistant message.
 * - Keeps the raw structure from AgentChat (toolInvocation).
 * - Limits height with scroll so large args/results不会撑爆布局。
 */
export const ToolInvocationList = ({ message }: ToolInvocationListProps) => {
  const parts = message.parts || [];
  const toolParts = parts.filter((part) => part.type === "tool-invocation") as {
    type: "tool-invocation";
    toolInvocation: {
      toolCallId: string;
      toolName: string;
      status: string;
      args: unknown;
      result?: unknown;
      error?: string;
    };
  }[];

  if (!toolParts.length) return null;

  return (
    <div className="mt-2 space-y-2">
      {toolParts.map((part, idx) => {
        const inv = part.toolInvocation;
        const argsPreview =
          typeof inv.args === "string"
            ? inv.args
            : JSON.stringify(inv.args, null, 2);

        const hasResult =
          inv.result !== undefined || (inv.error && inv.error.length > 0);

        const resultText =
          inv.error && inv.error.length
            ? `error: ${inv.error}`
            : inv.result !== undefined
            ? typeof inv.result === "string"
              ? inv.result
              : JSON.stringify(inv.result, null, 2)
            : undefined;

        return (
          <div
            key={idx}
            className="rounded-md border border-dashed border-border/60 bg-muted/40 px-3 py-2 text-xs text-muted-foreground"
          >
            <div className="font-semibold text-[11px] uppercase tracking-wide mb-1">
              Tool: {inv.toolName}{" "}
              <span className="ml-1 text-[10px] font-normal opacity-70">
                ({inv.status})
              </span>
            </div>
            <div className="space-y-1">
              <div className="text-[11px] font-mono opacity-80">
                <span className="font-semibold">args:</span>{" "}
                <span className="break-all whitespace-pre-wrap">
                  {argsPreview}
                </span>
              </div>
              {hasResult && resultText && (
                <div className="text-[11px] font-mono opacity-80 max-h-40 overflow-y-auto overflow-x-auto pr-1">
                  <span className="font-semibold">result:</span>{" "}
                  <span className="break-all whitespace-pre-wrap">
                    {resultText}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

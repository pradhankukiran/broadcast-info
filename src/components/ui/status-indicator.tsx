import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  ready: boolean | undefined;
  /** Optional accessible label text */
  label?: string;
}

export function StatusIndicator({ ready, label }: StatusIndicatorProps) {
  const color = ready === undefined ? "bg-muted" : ready ? "bg-green-500" : "bg-red-500";
  const ringColor =
    ready === undefined ? "bg-muted" : ready ? "bg-green-400" : "bg-red-400";

  return (
    <span className="relative flex h-4 w-4" aria-label={label ?? "Backend status"}>
      {/* Outer ring */}
      <span
        className={cn(
          "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
          ringColor
        )}
      />
      {/* Inner dot */}
      <span
        className={cn("relative inline-flex rounded-full h-4 w-4", color)}
      />
    </span>
  );
} 
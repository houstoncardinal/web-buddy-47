import { cn } from "@/lib/utils";

export function AiIndicator({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex h-2.5 w-2.5 shrink-0", className)}>
      <span className="absolute inset-0 rounded-full bg-ai animate-ai-pulse" />
      <span className="absolute -inset-1.5 rounded-full border border-ai/40 animate-ai-orbit" />
    </span>
  );
}

export function AiTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ai/40 bg-ai/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ai">
      <AiIndicator />
      {children}
    </span>
  );
}

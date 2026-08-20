import { Button } from "@/components/ui/button";
import { AiTag } from "@/components/AiBadge";

export function AiValueCallout() {
  return (
    <section className="px-5 pb-24 pt-4 sm:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] surface-card ai-glow px-6 py-16 text-center sm:px-14">
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-72 halo animate-drift" />
        <div className="relative mx-auto max-w-3xl">
          <AiTag>Always on</AiTag>
          <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Your website should never say:
          </p>
          <p className="mt-3 text-3xl font-bold text-muted-foreground/70 line-through decoration-destructive/70 sm:text-4xl">
            “Sorry, we're closed.”
          </p>
          <h2 className="mt-8 text-3xl font-bold uppercase leading-tight sm:text-5xl">
            Let AI keep the <span className="text-gradient-ai">conversation going.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Your AI Business Concierge can engage visitors outside normal business hours, answer
            approved questions, and capture potential leads while your team is away.
          </p>
          <Button variant="ai" size="xl" className="mt-9">
            Add AI to my website
          </Button>
        </div>
      </div>
    </section>
  );
}

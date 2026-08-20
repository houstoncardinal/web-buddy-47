import { ArrowDown } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Your business",
    items: [
      "Website",
      "Services",
      "FAQs",
      "Policies",
      "Products",
      "Documents",
      "Approved information",
    ],
  },
  {
    id: "02",
    title: "AI knowledge",
    copy: "The information is organized into a business-specific knowledge base.",
  },
  {
    id: "03",
    title: "Your AI concierge",
    copy: "The assistant uses that approved information to respond to customer questions.",
  },
  {
    id: "04",
    title: "More engagement",
    copy: "Visitors can get answers, ask questions, and submit inquiries even when your team isn't available.",
  },
];

export function AiTrainingFlow() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <div className="max-w-2xl">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-ai">
          How it works
        </span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          How the AI becomes business-specific
        </h2>
      </div>

      <ol className="mt-12 space-y-0">
        {steps.map((step, i) => (
          <li key={step.id}>
            <div
              className="relative overflow-hidden rounded-2xl surface-card p-6 animate-rise"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="pointer-events-none absolute -left-10 top-0 h-full w-24 halo opacity-60" />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start">
                <span className="text-sm font-semibold tracking-[0.2em] text-ai">{step.id}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold uppercase tracking-wide">{step.title}</h3>
                  {step.copy && (
                    <p className="mt-2 text-sm text-muted-foreground">{step.copy}</p>
                  )}
                  {step.items && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {step.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-secondary/70 px-3 py-1 text-xs text-secondary-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {i < steps.length - 1 && (
              <div className="flex items-center justify-center gap-3 py-4">
                <span className="h-px w-16 flow-line" />
                <ArrowDown className="h-4 w-4 text-ai" aria-hidden />
                <span className="h-px w-16 flow-line" />
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

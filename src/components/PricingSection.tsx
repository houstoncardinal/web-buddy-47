import { Button } from "@/components/ui/button";
import { AiIndicator, AiTag } from "@/components/AiBadge";
import { AiFeatureList, FeatureGroup } from "@/components/FeatureList";
import { cn } from "@/lib/utils";

function PlanShell({
  index,
  name,
  price,
  badge,
  description,
  featured,
  aiStatus,
  children,
  cta,
}: {
  index: string;
  name: string;
  price: string;
  badge: string;
  description: string;
  featured?: boolean;
  aiStatus: string;
  children: React.ReactNode;
  cta: string;
}) {
  return (
    <article
      className={cn(
        "relative flex flex-col rounded-3xl surface-card p-7 animate-rise",
        featured && "ai-glow",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Plan {index}
        </span>
        <span
          className={cn(
            "rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em]",
            featured
              ? "bg-gold/15 text-gold border border-gold/40"
              : "border border-border bg-secondary text-secondary-foreground",
          )}
        >
          {badge}
        </span>
      </div>

      <h3 className="mt-5 text-3xl font-bold uppercase tracking-tight">{name}</h3>
      <p className="mt-2 text-4xl font-bold">
        {price}
        <span className="ml-1 text-base font-normal text-muted-foreground">/ month</span>
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-ai/30 bg-ai/8 px-4 py-3">
        <AiIndicator />
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ai">
            AI Business Concierge
          </p>
          <p className="text-xs text-muted-foreground">{aiStatus}</p>
        </div>
      </div>

      <div className="mt-7 flex flex-1 flex-col gap-7">{children}</div>

      <Button variant={featured ? "gold" : "aiOutline"} size="xl" className="mt-8 w-full">
        {cta}
      </Button>
    </article>
  );
}

function AiHighlight({
  tag,
  headline,
  copy,
  items,
}: {
  tag?: string;
  headline: string;
  copy?: string;
  items: string[];
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-ai/30 bg-ai/8 p-5">
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-32 halo" />
      <div className="relative">
        {tag ? <AiTag>{tag}</AiTag> : <AiTag>AI Business Concierge</AiTag>}
        <h4 className="mt-3 text-lg font-semibold leading-snug">{headline}</h4>
        {copy && <p className="mt-2 text-sm text-muted-foreground">{copy}</p>}
        <AiFeatureList items={items} />
      </div>
    </div>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="max-w-2xl">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-ai">
          Pricing
        </span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Not just hosting. A digital customer-engagement system.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Every plan includes a professional website plus an AI Business Concierge trained on the
          information your business provides and approves.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <PlanShell
          index="01"
          name="Launch"
          price="$299"
          badge="Website + AI + Support"
          description="Everything you need to establish a professional online presence, support your customers, and turn website visitors into leads."
          aiStatus="Included"
          cta="Start with Launch"
        >
          <FeatureGroup
            title="Included"
            items={[
              "FREE 10-page professional website",
              "$3,000 website development value",
              "Website hosting",
              "Domain included",
              "SSL security",
              "Website maintenance",
              "Customer support",
              "Mobile responsive design",
              "Basic website updates",
            ]}
          />
          <AiHighlight
            tag="Powered by AI"
            headline="Your Website. Your AI Assistant. 24/7."
            items={[
              "AI-powered website live chat",
              "AI trained specifically on your business",
              "Trained using your business information, services, FAQs, and approved content",
              "Answers common customer questions",
              "Available 24/7",
              "Captures customer inquiries and leads",
              "Helps visitors navigate your services",
              "Hands off conversations to your team when appropriate",
            ]}
          />
        </PlanShell>

        <PlanShell
          index="02"
          name="Growth"
          price="$799"
          badge="Most popular"
          description="Your complete digital growth system — professional website, AI customer engagement, and ongoing social media management."
          aiStatus="Included + Advanced Lead Engagement"
          featured
          cta="Choose Growth"
        >
          <FeatureGroup
            title="Everything in Launch"
            items={[
              "FREE 10-page professional website",
              "Hosting",
              "Domain",
              "SSL security",
              "Website maintenance",
              "Customer support",
              "AI Business Concierge",
              "AI trained on your business",
              "24/7 website customer engagement",
              "Lead capture",
            ]}
          />
          <FeatureGroup
            title="Social media management"
            items={[
              "Facebook management",
              "Instagram management",
              "TikTok management",
              "X management",
              "Social media content creation",
              "Posting & scheduling",
              "Social media strategy",
              "Monthly marketing management",
            ]}
          />
          <AiHighlight
            tag="Advanced AI Business Concierge"
            headline="Your business, always ready to answer."
            copy="Give your customers an intelligent assistant that understands your business and can engage visitors around the clock."
            items={[
              "AI trained on your business knowledge",
              "Business-specific FAQs",
              "Services & product information",
              "Customer qualification",
              "Lead capture",
              "Appointment/inquiry assistance",
              "24/7 automated conversations",
              "Human handoff when needed",
              "Conversation history / lead information where supported",
            ]}
          />
        </PlanShell>

        <PlanShell
          index="03"
          name="Scale"
          price="$999"
          badge="Full-service partner"
          description="For businesses that want a dedicated digital team — everything in Growth plus expanded website work and priority marketing support."
          aiStatus="Included + Advanced Lead Engagement"
          cta="Talk to us about Scale"
        >
          <FeatureGroup
            title="Everything in Growth"
            items={[
              "Professional website, hosting, domain & SSL",
              "Website maintenance and expanded updates",
              "Social media management across Facebook, Instagram, TikTok & X",
              "Monthly marketing management",
              "Priority customer support",
            ]}
          />
          <AiHighlight
            tag="Advanced AI Business Concierge"
            headline="24/7 engagement, tuned as your business grows."
            copy="Your knowledge base is reviewed and expanded over time so the assistant keeps answering with approved information."
            items={[
              "AI trained on your business knowledge",
              "Ongoing knowledge base updates",
              "Customer qualification and lead capture",
              "Appointment/inquiry assistance",
              "Human handoff when needed",
              "Conversation history / lead information where supported",
            ]}
          />
        </PlanShell>
      </div>

      <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">
        The AI Business Concierge responds using information provided and approved by your business.
        It is not an autonomous employee, does not guarantee perfect accuracy, and only performs
        actions that have been configured and integrated for your account.
      </p>
    </section>
  );
}

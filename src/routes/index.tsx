import { createFileRoute } from "@tanstack/react-router";
import { PricingSection } from "@/components/PricingSection";
import { AiChatShowcase } from "@/components/AiChatShowcase";
import { AiTrainingFlow } from "@/components/AiTrainingFlow";
import { AiValueCallout } from "@/components/AiValueCallout";
import { AiTag } from "@/components/AiBadge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pricing — Website + AI Business Concierge Plans" },
      {
        name: "description",
        content:
          "Launch $299/mo, Growth $799/mo and Scale $999/mo: professional website, hosting, support and a 24/7 AI Business Concierge trained on your business.",
      },
      { property: "og:title", content: "Pricing — Website + AI Business Concierge Plans" },
      {
        property: "og:description",
        content:
          "Professional websites with an AI Business Concierge trained on your approved business information, engaging visitors 24/7.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-6 pt-20 sm:px-8">
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-96 halo" />
        <div className="relative mx-auto max-w-4xl text-center">
          <AiTag>AI-powered customer engagement</AiTag>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-6xl">
            A website that works —{" "}
            <span className="text-gradient-ai">and an assistant that answers.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Professional website, hosting, support and marketing, paired with a business-trained AI
            concierge that engages your visitors 24/7.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="ai" size="xl" asChild>
              <a href="#pricing">See plans</a>
            </Button>
            <Button variant="aiOutline" size="xl" asChild>
              <a href="#pricing">Talk to us</a>
            </Button>
          </div>
        </div>
      </section>

      <PricingSection />
      <AiChatShowcase />
      <AiTrainingFlow />
      <AiValueCallout />
    </main>
  );
}

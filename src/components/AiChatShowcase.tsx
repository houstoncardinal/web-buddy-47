import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { AiIndicator } from "@/components/AiBadge";
import { cn } from "@/lib/utils";

type Msg = {
  role: "customer" | "ai";
  text: string;
};

const script: Msg[] = [
  { role: "customer", text: "Do you offer same-day service?" },
  {
    role: "ai",
    text: "Yes. Our team offers same-day service for qualifying appointments. Would you like me to help you request an appointment?",
  },
  { role: "customer", text: "How much does it cost?" },
  {
    role: "ai",
    text: "Pricing depends on the service you need. I can collect a few details and help connect you with the team for an accurate quote.",
  },
];

function Bubble({ msg }: { msg: Msg }) {
  const isAi = msg.role === "ai";
  return (
    <div className={cn("flex animate-rise", isAi ? "justify-start" : "justify-end")}>
      <div className={cn("max-w-[85%]", isAi ? "" : "text-right")}>
        <p
          className={cn(
            "mb-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em]",
            isAi ? "text-ai" : "text-muted-foreground",
          )}
        >
          {isAi ? "AI Business Concierge" : "Customer"}
        </p>
        <div
          className={cn(
            "rounded-2xl px-4 py-3 text-sm leading-relaxed",
            isAi
              ? "border border-ai/30 bg-ai/10 text-foreground rounded-tl-sm"
              : "bg-secondary text-secondary-foreground rounded-tr-sm",
          )}
        >
          {msg.text}
        </div>
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div className="flex items-center gap-1.5 rounded-2xl border border-ai/25 bg-ai/8 px-4 py-3 w-fit">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-ai animate-typing"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

export function AiChatShowcase() {
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const run = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      setStep(0);
      setTyping(false);
      let delay = 700;
      script.forEach((msg, i) => {
        if (msg.role === "ai") {
          timers.current.push(setTimeout(() => setTyping(true), delay));
          delay += 1100;
        }
        timers.current.push(
          setTimeout(() => {
            setTyping(false);
            setStep(i + 1);
          }, delay),
        );
        delay += 1400;
      });
      timers.current.push(setTimeout(run, delay + 6000));
    };
    run();
    return () => timers.current.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 halo" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl">
            What if your website could{" "}
            <span className="text-gradient-ai">answer customers for you?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Meet your AI Business Concierge — an intelligent assistant trained around your business,
            available to your customers 24/7.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] surface-card ai-glow p-2">
            <div className="rounded-[1.4rem] bg-background/60 p-5">
              <header className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-ai/40 bg-ai/12">
                    <AiIndicator />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">AI Business Concierge</p>
                    <p className="text-xs text-ai">Online · Trained on your business</p>
                  </div>
                </div>
                <span className="rounded-full border border-border px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Demo
                </span>
              </header>

              <div className="mt-5 flex min-h-[22rem] flex-col justify-end gap-5">
                {script.slice(0, step).map((msg) => (
                  <Bubble key={msg.text} msg={msg} />
                ))}
                {typing && <Typing />}
                {step >= script.length && (
                  <div className="animate-rise pt-1">
                    <Button variant="ai" size="lg" className="w-full sm:w-auto">
                      Request a quote
                    </Button>
                  </div>
                )}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-border bg-secondary/60 px-4 py-3">
                <span className="text-sm text-muted-foreground">Ask a question…</span>
                <span className="ml-auto text-[0.6rem] uppercase tracking-[0.16em] text-ai">
                  Send
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "Answers from approved content",
                copy: "Responses come from the information, services, FAQs and policies your business provides and approves.",
              },
              {
                title: "Always-on lead capture",
                copy: "Visitors can ask questions and submit inquiries after hours, and details are saved for your team.",
              },
              {
                title: "Human handoff",
                copy: "When a conversation needs a person, the assistant passes it to your team instead of guessing.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl surface-card p-5">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.copy}</p>
              </div>
            ))}
            <p className="text-xs text-muted-foreground">
              Illustrative demo. Actual answers and capabilities depend on the content and
              integrations configured for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

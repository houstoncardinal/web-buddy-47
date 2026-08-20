import { Check } from "lucide-react";

export function FeatureGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-foreground/85">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AiFeatureList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-foreground/90">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-ai" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

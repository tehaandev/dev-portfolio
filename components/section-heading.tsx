import { FadeIn } from "@/components/FadeIn";

export function SectionHeading({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <FadeIn className="mb-12 max-w-3xl md:mb-16">
      <p className="eyebrow mb-3">{label}</p>
      <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.028em] text-balance md:text-[3.5rem]">
        {children}
      </h2>
    </FadeIn>
  );
}

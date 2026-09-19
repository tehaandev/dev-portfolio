export function SectionHeading({
  index,
  label,
  children,
}: {
  index: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-border mb-16 grid grid-cols-1 gap-6 border-t pt-8 md:mb-24 md:grid-cols-12">
      <p className="eyebrow md:col-span-3">
        <span className="text-wine">{index}</span> - {label}
      </p>
      <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance md:col-span-9 md:text-6xl">
        {children}
      </h2>
    </div>
  );
}

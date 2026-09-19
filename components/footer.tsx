import dayjs from "dayjs";
import Link from "next/link";

const links = [
  { href: "https://github.com/tehaandev", label: "GitHub" },
  { href: "https://www.linkedin.com/in/tehaan-perera/", label: "LinkedIn" },
  { href: "https://calendar.app.google/7VhtRKka3953z2hq5", label: "Schedule" },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 md:px-10">
      <div className="border-border flex flex-col gap-10 border-t py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-3xl">Tehaan Perera</p>
          <p className="eyebrow mt-3">
            © {dayjs().year().toString()} - Designed &amp; built in-house
          </p>
        </div>
        <nav className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw text-muted-foreground hover:text-foreground pb-0.5 text-[0.8125rem] tracking-wide transition-colors duration-300">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

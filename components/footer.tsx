import dayjs from "dayjs";
import Link from "next/link";

const links = [
  { href: "https://github.com/tehaandev", label: "GitHub" },
  { href: "https://www.linkedin.com/in/tehaan-perera/", label: "LinkedIn" },
  { href: "https://calendar.app.google/7VhtRKka3953z2hq5", label: "Schedule" },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 md:px-8">
      <div className="border-border text-muted-foreground flex flex-col gap-4 border-t py-8 text-[0.8125rem] md:flex-row md:items-center md:justify-between">
        <p>
          {`© ${dayjs().year().toString()} Tehaan Perera. Designed &amp; built
          in-house.`}
        </p>
        <nav className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

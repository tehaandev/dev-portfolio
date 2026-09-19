"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/blog", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle colour theme"
      className="text-muted-foreground hover:text-foreground -m-2 p-2 transition-colors duration-300">
      {/* CSS-driven icon swap avoids a hydration mismatch */}
      <Sun className="hidden h-4 w-4 dark:block" strokeWidth={1.5} />
      <Moon className="h-4 w-4 dark:hidden" strokeWidth={1.5} />
    </button>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-[background-color,border-color] duration-500 ${
        scrolled || isMenuOpen
          ? "bg-background/80 border-border backdrop-blur-xl"
          : "border-transparent"
      }`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
        <Link
          href="/"
          className="font-serif text-2xl leading-none tracking-tight">
          Tehaan Perera
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-draw text-muted-foreground hover:text-foreground pb-0.5 text-[0.8125rem] tracking-wide transition-colors duration-300">
              {link.label}
            </Link>
          ))}
          <span className="bg-border h-4 w-px" aria-hidden />
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-6 md:hidden">
          <ThemeToggle />
          <button
            className="eyebrow text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-(--ease-lux) md:hidden ${
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}>
        <nav className="overflow-hidden">
          <div className="flex flex-col px-6 pt-4 pb-10">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-border flex items-baseline justify-between border-b py-4 font-serif text-3xl"
                onClick={() => setIsMenuOpen(false)}>
                {link.label}
                <span className="eyebrow">0{i + 1}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

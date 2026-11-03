"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/blog", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const toggle = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    // Cross-fade the whole page so the brightness change isn't an abrupt jump
    if (!document.startViewTransition) return setTheme(next);
    document.startViewTransition(() => flushSync(() => setTheme(next)));
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="press text-muted-foreground hover:text-foreground hover:bg-secondary flex h-9 w-9 items-center justify-center rounded-full">
      {/* CSS-driven icon swap avoids a hydration mismatch */}
      <Sun className="hidden h-[1.125rem] w-[1.125rem] dark:block" />
      <Moon className="h-[1.125rem] w-[1.125rem] dark:hidden" />
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

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background-color,backdrop-filter] duration-300 ${
        scrolled || isMenuOpen ? "material" : ""
      }`}>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="press flex items-center gap-2.5 text-[1.0625rem] font-semibold tracking-[-0.02em]">
          <Image src="/favicon.svg" alt="" width={28} height={28} unoptimized />
          Tehaan Perera
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="press text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full px-3.5 py-1.5 text-sm">
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            className="press hover:bg-secondary relative flex h-9 w-9 items-center justify-center rounded-full"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {/* Two bars that rotate into an X */}
            <span
              className={`bg-foreground absolute h-[1.5px] w-4 rounded-full transition-transform duration-300 ease-(--ease-spring) ${
                isMenuOpen ? "rotate-45" : "-translate-y-[3px]"
              }`}
            />
            <span
              className={`bg-foreground absolute h-[1.5px] w-4 rounded-full transition-transform duration-300 ease-(--ease-spring) ${
                isMenuOpen ? "-rotate-45" : "translate-y-[3px]"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Dim to focus; tap anywhere to dismiss. Absolute, not fixed — the
          header's backdrop-filter makes it the containing block */}
      <div
        className={`absolute inset-x-0 top-full h-svh bg-black/20 transition-[opacity,visibility] duration-[350ms] ease-(--ease-spring) md:hidden ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      {/* Grows out of the menu button (top-right) and returns the same way.
          CSS transitions are interruptible: re-tapping mid-flight reverses it.
          `invisible` keeps closed links out of the tab order and screen readers. */}
      <nav
        id="mobile-nav"
        className={`bg-popover absolute top-full right-3 w-60 origin-top-right rounded-2xl p-1.5 shadow-[0_12px_40px_oklch(0_0_0/18%),0_0_0_1px_var(--border)] transition-[opacity,scale,filter,visibility] duration-[350ms] ease-(--ease-spring) md:hidden ${
          isMenuOpen
            ? "visible scale-100 opacity-100 blur-0"
            : "invisible scale-90 opacity-0 blur-[6px]"
        }`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="press active:bg-secondary flex rounded-xl px-4 py-3 text-[1.0625rem] font-medium"
            onClick={() => setIsMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

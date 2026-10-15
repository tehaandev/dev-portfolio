"use client";

import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/blog", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

// Critically damped, interruptible — re-tapping mid-flight reverses from the live value
const spring = { type: "spring", bounce: 0, duration: 0.35 } as const;

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
          className="press text-[1.0625rem] font-semibold tracking-[-0.02em]">
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

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dim to focus; tap anywhere to dismiss. Absolute, not fixed — the
                header's backdrop-filter makes it the containing block */}
            <motion.div
              key="scrim"
              className="absolute inset-x-0 top-full h-svh bg-black/20 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={spring}
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Grows out of the menu button (top-right) and returns the same way */}
            <motion.nav
              key="menu"
              id="mobile-nav"
              className="bg-popover absolute top-full right-3 w-60 origin-top-right rounded-2xl p-1.5 shadow-[0_12px_40px_oklch(0_0_0/18%),0_0_0_1px_var(--border)] md:hidden"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
              transition={spring}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="press active:bg-secondary flex rounded-xl px-4 py-3 text-[1.0625rem] font-medium"
                  onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

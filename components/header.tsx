"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={twMerge(
        "fixed top-0 z-50 w-full",
        "lg:bg-background/70 lg:shadow-[0_40px_40px_-10px_oklch(0_0_0/0.4)] lg:backdrop-blur-md",
      )}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="text-foreground text-lg font-bold tracking-tight">
          Tehaan<span className="text-primary">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                i === 0
                  ? "text-primary border-primary border-b-2 pb-1 text-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
              }>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://calendar.app.google/7VhtRKka3953z2hq5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-container text-on-primary-container hidden items-center rounded-md px-4 py-2 text-sm font-semibold transition-opacity duration-200 hover:opacity-90 md:flex">
            Schedule a Call
          </Link>

          <button
            className="hover:bg-accent/50 rounded-md p-2 transition-colors md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`border-border bg-background/70 border-t backdrop-blur-md transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}>
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground px-3 py-2.5 text-sm font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="https://calendar.app.google/7VhtRKka3953z2hq5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-container text-on-primary-container flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold"
              onClick={() => setIsMenuOpen(false)}>
              Schedule a Call
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

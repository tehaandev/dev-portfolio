"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between max-md:p-3">
        <Link href="/" className="font-bold text-xl">
          DevPortfolio.
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-8">
            <Link
              href="/#hero"
              className="text-sm font-medium hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-primary"
            >
              Blog
            </Link>
            <Link
              href="/#projects"
              className="text-sm font-medium hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="/#experience"
              className="text-sm font-medium hover:text-primary"
            >
              Experience
            </Link>
            <Link
              href="/#credentials"
              className="text-sm font-medium hover:text-primary"
            >
              Credentials
            </Link>
            <Link
              href="/#skills"
              className="text-sm font-medium hover:text-primary"
            >
              Skills
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
        <Button size="sm" className="hidden md:block">
          <Link
            href="https://calendar.app.google/7VhtRKka3953z2hq5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule Call
          </Link>
        </Button>

        {/* Mobile navigation */}
        <div
          className={`absolute top-16 left-0 right-0 bg-background border-b md:hidden transition-transform duration-300 ease-in-out transform ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col p-4 space-y-2">
            <Link
              href="/#hero"
              className="py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/#projects"
              className="py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/#experience"
              className="py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="/#credentials"
              className="py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Credentials
            </Link>
            <Link
              href="/#skills"
              className="py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="/#contact"
              className="py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button size="sm" asChild className="mt-2">
              <Link
                href="https://calendar.app.google/7VhtRKka3953z2hq5"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule Call
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}


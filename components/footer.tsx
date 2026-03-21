import dayjs from "dayjs";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-border bg-card w-full border-t px-6 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-xs font-medium tracking-widest uppercase md:flex-row">
        <div className="text-muted-foreground">
          © {dayjs().year()} Tehaan Perera. All rights reserved.
        </div>
        <div className="flex gap-8">
          <Link
            href="https://github.com/tehaandev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200">
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/tehaan-perera/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200">
            LinkedIn
          </Link>
          <Link
            href="https://calendar.app.google/7VhtRKka3953z2hq5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200">
            Schedule
          </Link>
        </div>
      </div>
    </footer>
  );
}

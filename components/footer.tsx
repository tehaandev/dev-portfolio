import dayjs from "dayjs";
import SocialIcons from "./ui/social-icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:h-20 md:flex-row md:py-0">
          <div className="flex flex-col items-center md:items-start gap-1">
            <Link href="/" className="font-bold text-base tracking-tight">
              Tehaan<span className="text-primary">.</span>
            </Link>
            <p className="text-xs text-muted-foreground">
              © {dayjs().year()} Tehaan Perera. All rights reserved.
            </p>
          </div>
          <SocialIcons className="flex items-center gap-3" />
        </div>
      </div>
    </footer>
  );
}

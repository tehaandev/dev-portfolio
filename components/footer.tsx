import dayjs from "dayjs";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="container px-4 md:px-6 border-t py-6 md:py-0 mx-auto">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {dayjs().year()} Tehaan Perera. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/tehaandev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tehaan-perera/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://x.com/tehaandev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
            aria-label="Twitter"
          >
            <FaXTwitter className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:hello@tehaan.me"
            className="text-muted-foreground hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}


import React from "react";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
export default function SocialIcons(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  return (
    <div {...props}>
      <Link
        href="https://github.com/tehaandev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        aria-label="GitHub"
      >
        <FaGithub className="h-5 w-5" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/tehaan-perera/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </Link>
      <Link
        href="https://x.com/tehaandev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        aria-label="Twitter"
      >
        <FaXTwitter className="h-5 w-5" />
      </Link>
      <Link
        href="mailto:hello@tehaan.me"
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        aria-label="Email"
      >
        <Mail className="h-5 w-5" />
      </Link>
    </div>
  );
}


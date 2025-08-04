import dayjs from "dayjs";
import SocialIcons from "./ui/social-icons";

export function Footer() {
  return (
    <footer className="container px-4 md:px-6 border-t py-6 md:py-0 mx-auto">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {dayjs().year()} Tehaan Perera. All rights reserved.
        </p>
        <SocialIcons className="flex items-center gap-4" />
      </div>
    </footer>
  );
}


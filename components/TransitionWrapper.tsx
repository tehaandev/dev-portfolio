"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function TransitionWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // Fade on navigation only: fading the first load would delay its first paint
  const [entryPath] = useState(pathname);
  return (
    <div
      key={pathname}
      className={
        pathname === entryPath ? undefined : "animate-[fade_0.3s_ease-out]"
      }>
      {children}
    </div>
  );
}

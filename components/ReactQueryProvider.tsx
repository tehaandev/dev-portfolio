"use client";
import queryClient from "@/lib/query";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}


import { ThemeProvider } from "@/providers/ThemeProvider";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

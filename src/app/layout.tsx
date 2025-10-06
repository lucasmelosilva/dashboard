import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin']});

export const metadata: Metadata = {
  title: "Dashboard",
  description: ""
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
  )}>
        {children}
      </body>
    </html>
  );
}

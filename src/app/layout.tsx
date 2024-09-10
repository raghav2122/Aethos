import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" h-full>
      <body
        className={cn('relative  antialiased')}>
          <main className="relative flex flex-col min-h-screen">
            <div className="flex-grow flex-1">
            {children}
            </div>
          </main>
      </body>
    </html>
  );
}

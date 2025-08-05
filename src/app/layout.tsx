import { Header } from "@/app/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "antialiased w-full leading-10 lowercase min-h-screen flex flex-col justify-between",
          inter.className
        )}
      >
        <Header />
        <main className="max-w-4xl mx-auto container px-5 md:px-0 flex-auto flex flex-col">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}

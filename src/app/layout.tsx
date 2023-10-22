import { Header } from "@/app/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { Footer } from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sebastian Semeniuc",
  description: "Developer and creator of things.",
  openGraph: {
    title: "Sebastian Semeniuc",
    description: "Developer and creator of things.",
    url: "https://ssemeniuc.com",
    siteName: "Sebastian Semeniuc",
    images: [
      {
        url: "https://ssemeniuc.com/images/og-image.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  twitter: {
    title: "Sebastian Semeniuc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx("antialiased w-full", inter.className)}>
        <Header />
        <main className="mt-6 max-w-4xl mx-auto flex-auto flex flex-col">
          <div>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}

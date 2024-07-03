import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://eneaxharja.com"),
  title: {
    default: "Enea Xharja",
    template: "%s | Enea Xharja",
  },
  description: "Software Engineer",
  openGraph: {
    title: "Enea Xharja",
    description: "Software Engineer",
    url: "https://eneaxharja.com",
    siteName: "Enea Xharja",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Enea Xharja",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#202020] text-white ${inter.className}`}>
        <main className="bg-black p-4 m-2 rounded-lg">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

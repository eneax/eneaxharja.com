import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Enea Xharja",
    template: "%s | Enea Xharja",
  },
  description:
    "Welcome to my own little corner of the web, where I share my personal collection of notes, code snippets, and resources on topics that interest me.",
  twitter: {
    title: "Enea Xharja",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`max-w-2xl mx-auto flex flex-col justify-center px-8 md:px-0 bg-gray-900 text-primary-50 ${inter.className}`}
      >
        <header>
          <nav className="flex items-center justify-between py-8">
            <Link href="/" title="Enea Xharja">
              <div className="rounded-full shadow-lg p-[1px] bg-primary-50 group transform transition ease-out hover:scale-105">
                <div className="rounded-full p-[1px] h-[40px] w-[40px] transition duration-300 group-hover:scale-105">
                  <Image
                    src="/images/avatar.png"
                    alt="A photo of Enea Xharja"
                    quality={95}
                    className="rounded-full"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </Link>

            <Link href="/archives" className="btn">
              Archives
            </Link>
          </nav>
        </header>

        <main>
          {children}

          <footer className="flex flex-col justify-center w-full my-8">
            <hr className="border-1 border-gray-800 mb-8" />
            <div className="flex flex-col">
              <Link
                href="/"
                className="text-sm text-center no-underline text-primary-50/50 hover:text-primary-50/70 transition"
              >
                © {new Date().getFullYear()} Enea Xharja
              </Link>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}

import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProfileImage = () => (
  <div className="rounded-full shadow-lg p-[1px] bg-primary-50 group transform transition ease-out hover:scale-105">
    <div className="rounded-full p-[1px] h-[36px] w-[36px] transition duration-300 group-hover:scale-105">
      <Image
        src="/images/avatar.png"
        alt="A photo of Enea Xharja"
        quality={95}
        className="rounded-full"
        width={36}
        height={36}
      />
    </div>
  </div>
);

const Container = ({
  children,
  ...customMeta
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  const router = useRouter();

  const meta = {
    title: "Enea Xharja - Software Engineer",
    description: `Welcome to my own little corner of the web, where I share my personal collection of notes, code snippets, and resources on topics that interest me.`,
    image: "https://eneaxharja.com/images/avatar.png",
    type: "website",
    date: new Date().toISOString(),
    ...customMeta,
  };

  return (
    <div className="bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://eneaxharja.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://eneaxharja.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Enea Xharja" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@eneaxharja" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <nav className="max-w-2xl mx-auto p-8 md:px-0">
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            title="Enea Xharja"
            className="rounded-full flex items-center space-x-2 no-underline"
          >
            <ProfileImage />
            <span className="tracking-tight font-semibold text-xl text-primary-50">
              Enea Xharja
            </span>
          </Link>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto flex flex-col justify-center px-8 md:px-0 bg-gray-900">
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
    </div>
  );
};

export default Container;

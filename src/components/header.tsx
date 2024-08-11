import Link from "next/link";

export default function Header() {
  return (
    <header className="antialiased max-w-xl md:w-full mt-16 mb-8 mx-4 md:mx-auto tracking-tight flex flex-col items-start">
      <Link href="/">
        <h1 className="font-bold text-neutral-100">Enea Xharja</h1>
        <span className="text-neutral-400 text-sm">Software Engineer</span>
      </Link>
    </header>
  );
}

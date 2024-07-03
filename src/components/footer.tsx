export default function Footer() {
  const today = new Date().getFullYear();

  return (
    <footer className="antialiased max-w-xl mt-16 mb-4 mx-4 md:mx-auto tracking-tight border-t border-zinc-800">
      <p className="text-sm text-center text-neutral-400 pt-4">
        © {today} Enea Xharja
      </p>
    </footer>
  );
}

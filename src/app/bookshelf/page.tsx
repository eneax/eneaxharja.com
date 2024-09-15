import books from "@/app/bookshelf/bookshelf.json";
import Email from "@/components/email";

export const metadata = {
  title: "Bookshelf",
  description: "A complete catalog of the books I own.",
};

export default function BookshelfPage() {
  const sortedBooks = books.items.sort((a, b) => {
    if (new Date(a.title) > new Date(b.title)) {
      return -1;
    }
    return 1;
  });

  return (
    <section className="antialiased max-w-xl mx-4 mt-8 md:mx-auto">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Bookshelf
      </h1>

      <p className="mb-4">
        {`Below is a complete catalog of the books I own. I always enjoy reading
        others' lists and browsing their bookshelves, so this intended to be a
        digital version of that.`}
      </p>

      <div className="my-8">
        {sortedBooks.map(({ title, author }) => (
          <div key={title} className="flex flex-col space-y-1 mb-4">
            <p className="text-neutral-100 tracking-tight">{title}</p>
            <p className="text-neutral-400">{author}</p>
          </div>
        ))}
      </div>

      <p className="mb-4">
        Got recommendations? Drop me a note: <Email />.
      </p>
    </section>
  );
}

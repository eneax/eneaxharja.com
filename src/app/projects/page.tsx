import projects from "@/app/projects/projects.json";

export const metadata = {
  title: "Projects",
  description: "Things I have made trying to put a dent in the universe.",
};

export default function ProjectsPage() {
  const sortedProjects = projects.items.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) {
      return -1;
    }
    return 1;
  });

  return (
    <section className="antialiased max-w-xl mx-4 mt-8 md:mx-auto">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>

      <p className="mb-4">
        I have worked on many projects over the years but these are the ones I
        am most proud of. They are all public-source and available on{" "}
        <a href="https://github.com/eneax" className="link">
          GitHub
        </a>
        .
      </p>

      <div className="my-8">
        {sortedProjects.map(({ date, title, description, url }) => (
          <a key={date} href={url} className="flex flex-col space-y-1 mb-4">
            <p className="text-neutral-100 tracking-tight">{title}</p>
            <p className="text-neutral-400">{description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

import photos from "./photos.json";
import BlurImage from "@/components/blur-image";

export const metadata = {
  title: "Photos",
  description: "A collection of moments captured in time.",
};

export default function PhotosPage() {
  const sortedPhotos = photos.items.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) {
      return -1;
    }
    return 1;
  });

  return (
    <section>
      <div className="antialiased max-w-xl mt-8 mx-4 md:mx-auto">
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Photos</h1>

        <p className="mb-4">A collection of moments captured in time.</p>
      </div>

      <div className="flex flex-col min-h-screen my-0 mx-auto overflow-hidden p-2">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(440px,1fr))] gap-2">
          {sortedPhotos.map(({ title, url }) => (
            <li
              key={title}
              className="inline-block relative overflow-hidden h-[480px] md:h-[700px] outline-0"
            >
              <BlurImage
                src={url}
                alt={title}
                priority
                fill
                sizes="(min-width: 1024px) 440px, 100vw"
                className="object-cover absolute inset-0 w-full h-auto select-none"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

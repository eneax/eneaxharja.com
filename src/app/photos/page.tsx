import * as React from "react";

import photos from "@/app/photos/photos.json";
import ImageGallery from "@/components/image-gallery";

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
        <ImageGallery data={sortedPhotos} itemsPerPage={6} />
      </div>
    </section>
  );
}

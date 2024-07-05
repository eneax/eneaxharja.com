"use client";

import * as React from "react";

import useInfiniteScroll from "@/lib/useInfiniteScroll";
import ImageBlur from "@/components/image-blur";

interface ImageGalleryProps {
  data: {
    title: string;
    url: string;
  }[];
  itemsPerPage?: number;
}

export default function ImageGallery({
  data,
  itemsPerPage = 9,
}: ImageGalleryProps) {
  const { items, hasMore, loaderRef } = useInfiniteScroll({
    data,
    itemsPerPage,
  });

  const renderedItems = React.useMemo(
    () =>
      items.map(({ title, url }) => (
        <li
          key={title}
          className="inline-block relative overflow-hidden h-[480px] md:h-[700px] outline-0"
        >
          <ImageBlur
            src={url}
            alt={`Image of ${title}`}
            priority
            fill
            sizes="(min-width: 1024px) 440px, 100vw"
            className="object-cover absolute inset-0 w-full h-auto select-none"
          />
        </li>
      )),
    [items]
  );

  return (
    <>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(440px,1fr))] gap-2">
        {renderedItems}
      </ul>

      {hasMore && (
        <div
          ref={loaderRef}
          aria-live="polite"
          className="flex items-center justify-center mt-8"
        >
          <p className="text-neutral-400 text-sm italic">Loading...</p>
        </div>
      )}
    </>
  );
}

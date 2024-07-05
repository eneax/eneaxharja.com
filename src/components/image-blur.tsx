"use client";

import * as React from "react";
import type { ImageProps } from "next/image";
import NextImage from "next/image";

export default function ImageBlur(props: ImageProps) {
  const [isLoading, setLoading] = React.useState(true);

  return (
    <NextImage
      {...props}
      className={`duration-700 ease-in-out ${props.className} ${
        isLoading
          ? "scale-[1.02] blur-xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      onLoad={() => setLoading(false)}
    />
  );
}

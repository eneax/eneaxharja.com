import * as React from "react";
import Link from "next/link";
import { type ImageProps } from "next/image";

import ImageBlur from "components/ImageBlur";

const MdxComponents = {
  h2: (props: any) => <h2 className="mt-8" {...props} />,
  h3: (props: any) => <h3 className="mt-8" {...props} />,
  a: ({ href = "", ...props }) => {
    if (href.startsWith("http")) {
      return <a href={href} target="_blank" rel="noopener" {...props} />;
    }

    return <Link href={href} {...props} />;
  },
  Img: ({
    children,
    caption,
    ...props
  }: {
    children: React.ReactNode;
    caption?: string;
  } & ImageProps) => {
    return (
      <div className="mb-8">
        <ImageBlur {...props} />

        {caption && (
          <div className="mt-2">
            <small>{caption}</small>
          </div>
        )}
      </div>
    );
  },
  blockquote: (props: any) => (
    <blockquote
      className="border-l-2 border-primary-400/75 pl-4 mb-8 italic"
      {...props}
    />
  ),
};

export default MdxComponents;

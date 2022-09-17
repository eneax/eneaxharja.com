import { makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";

import { Post } from "./data/types/Post";
import { rehypePrettyCodeOptions } from "./lib/rehypePrettyCode";

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});

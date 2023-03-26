import type { NextPage } from "next";

import Container from "components/Container";

const NotFound: NextPage = () => (
  <Container title="404 - Enea Xharja">
    <article className="flex flex-col mt-16 min-h-[calc(100vh-17rem)]">
      <h1 className="mb-4">404: Not Found</h1>
      <p>It seems you are looking for a page that does not exist.</p>
    </article>
  </Container>
);

export default NotFound;

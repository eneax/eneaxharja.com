import type { NextPage } from "next";

import Container from "components/Container";

const NotFound: NextPage = () => (
  <Container title="404 - Enea Xharja">
    <div className="flex flex-col justify-center border-gray-700 mx-auto w-full pt-16 ">
      <div className="flex flex-col min-h-[calc(100vh-17rem)]">
        <h1 className="mb-8">404: Not Found</h1>
        <p>It seems you are looking for a page that does not exist.</p>
      </div>
    </div>
  </Container>
);

export default NotFound;

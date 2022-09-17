import type { NextPage } from "next";

import Container from "components/Container";

const About: NextPage = () => (
  <Container title="About - Enea Xharja">
    <div className="flex flex-col justify-center items-center border-gray-700 mx-auto py-16">
      <div className="flex flex-col">
        <h1 className="mb-8">About</h1>
        <p>
          Hey, my name is Enea and I'm a web developer. Welcome to my little
          corner of the web, where I share my personal collection of notes, code
          snippets, and resources on topics that interest me.
        </p>
        <p>
          Most of my open source projects focus on helping people learn more
          about programming, enabling them to start their own personal projects,
          and hopefully also inspire someone to do the same and contribute to
          open source communities. Check out my{" "}
          <a href="https://github.com/eneax">GitHub</a> profile to see
          everything I have build so far.
        </p>
        <h2 className="mt-8">What I'm doing now</h2>
        <small>Updated on September 17, 2022</small>
        <ul className="my-4 list-disc">
          <li>
            Getting started with{" "}
            <a href="https://aws.amazon.com/getting-started">AWS</a>
          </li>
          <li>
            Reading{" "}
            <a href="https://www.hosanagar.com/book">
              A Human's Guide to Machine Intelligence
            </a>{" "}
            by Kartik Hosanagar
          </li>
          <li>
            Listening to the{" "}
            <a href="https://www.ridehome.info/show/techmeme-ride-home">
              Techmeme Ride Home
            </a>{" "}
            podcast
          </li>
        </ul>
        <h2 className="mt-8">Connect</h2>
        <p>
          I love hearing from readers - praise, criticism, suggestions, feedback
          or thoughts on any of my notes. Emails are always welcome. I really do
          read all my emails, but if I don't respond, or do so only after an
          unreasonable amount of time has passed, don't take it personally.
        </p>
        <p>
          Here's how to reach me:{" "}
          <span className="text-lg text-primary-400">
            eneaxharja [at] gmail [dot] com
          </span>
          .
        </p>
      </div>
    </div>
  </Container>
);

export default About;

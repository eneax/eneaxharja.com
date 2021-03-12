import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// styles
const DirectoryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const CardContainer = styled.div`
  padding: 2rem;
  border: 1px solid var(--textLighter);
  border-radius: var(--radius);

  h3 {
    margin-top: 0;
    color: var(--textLighter);
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }
`;

const HomeDirectory = () => (
  <DirectoryContainer>
    <CardContainer>
      <h3>Notes</h3>
      <ul>
        <li>
          <Link to="/css">CSS</Link>
        </li>
        <li>
          <Link to="/javascript">JavaScript</Link>
        </li>
        <li>
          <Link to="/react">React</Link>
        </li>
        <li>
          <Link to="/gatsby">Gatsby</Link>
        </li>
        <li>
          <Link to="/jamstack">Jamstack</Link>
        </li>
      </ul>
    </CardContainer>

    <CardContainer>
      <h3>Projects</h3>
      <ul>
        <li>
          <Link to="/coffee-shop">coffee-shop</Link>
        </li>
        <li>
          <Link to="/gatsby-landing-page-arty">Arty</Link>
        </li>
        <li>
          <Link to="/gatsby-dev-portfolio">gatsby-dev-portfolio</Link>
        </li>
        <li>
          <Link to="/globetrotter">Globetrotter</Link>
        </li>
        <li>
          <Link to="/projects">More projects</Link>
        </li>
      </ul>
    </CardContainer>

    <CardContainer>
      <h3>Fun</h3>
      <ul>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/games">Video Games</Link>
        </li>
        <li>
          <Link to="/travel">Travel</Link>
        </li>
      </ul>
    </CardContainer>

    <CardContainer>
      <h3>Miscellany</h3>
      <ul>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/uses">Uses</Link>
        </li>
        <li>
          <Link to="/about-this-site">About this site</Link>
        </li>
      </ul>
    </CardContainer>
  </DirectoryContainer>
);

export default HomeDirectory;

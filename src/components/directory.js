import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { ExternalLink } from '../utils/hyperLinks';
import { darkTheme } from '../utils/colors';

// styles
const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;

  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const CardContainer = styled.div`
  padding: 1rem;
  border: 1px solid ${darkTheme.textLighter};
  border-radius: 0.25rem;

  h3 {
    margin-top: 0;
    color: ${darkTheme.textLighter};
  }

  ul {
    list-style-type: none;
    margin-left: 0;
  }
`;

const Directory = () => (
  <GridContainer>
    <CardContainer>
      <h3>Notes</h3>
      <ul>
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
        {/* <li>gatsby-dev-portfolio</li>
        <li>gatsby-restaurant</li>
        <li>globetrotter</li> */}
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
          <ExternalLink href="https://www.youtube.com/c/EneaXharja17">
            Video Games
          </ExternalLink>
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
  </GridContainer>
);

export default Directory;

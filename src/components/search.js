import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

import useOnClickOutside from '../utils/useOnClickOutside';

// styles
const SearchContainer = styled.div`
  position: relative;
  width: 20rem;
`;

const SearchBox = styled.div`
  position: relative;

  input {
    width: 100%;
    font-size: 2rem;
    line-height: 1.5rem;
    padding: 1rem 5rem 1rem 1rem;
    border-radius: var(--radius);
    background-color: var(--body);
    color: var(--text);
    border: 1px solid var(--primaryLighter);

    &::placeholder {
      color: var(--textLighter);
    }
    &:focus {
      border: 1px solid var(--primary);
      box-shadow: inset 0 0 0 1px transparent;
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
  }

  svg {
    position: absolute;
    right: 0.75rem;
    top: 0.2rem;
    transform: translateY(50%);
    color: var(--textLighter);
  }
`;

const SearchResult = styled.div`
  position: absolute;
  left: 0;
  top: 4.75rem;
  height: 20rem;
  width: 20rem;
  overflow-y: scroll;
  backdrop-filter: blur(10px);
  background-color: var(--bodyLighter);
  border: 1px solid var(--primary);
  border-radius: var(--radius);
  padding: 2rem;

  a {
    color: var(--text);
  }
`;

// ui
const Search = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { frontmatter: { published: { eq: true } } }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              frontmatter {
                title
                slug
                date(formatString: "MMMM DD, YYYY")
                category
              }
            }
          }
        }
      }
    `
  );

  const allNotes = data.allMdx.edges;
  const emptyQuery = '';

  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  });

  const [focused, setFocused] = React.useState(false);
  const handleInputFocus = () => setFocused(true);

  const result = React.useRef();
  useOnClickOutside(result, () => {
    setFocused(false);
  });

  const handleInputChange = event => {
    const query = event.target.value;
    const notes = data.allMdx.edges || [];

    const filteredData = notes.filter(note => {
      const { title, category } = note.node.frontmatter;

      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (category && category.toLowerCase().includes(query.toLowerCase()))
      );
    });

    setState({
      query,
      filteredData,
    });
  };

  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const notes = hasSearchResults ? filteredData : allNotes;

  return (
    <SearchContainer>
      <SearchBox onClick={handleInputFocus}>
        <MdSearch />

        <input
          type="text"
          aria-label="Search"
          placeholder="Search"
          autoCorrect="off"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </SearchBox>

      {focused && (
        <SearchResult ref={result}>
          {notes.length ? (
            notes.map(({ node: { frontmatter: { title, slug } } }) => (
              <p key={slug}>
                <Link to={`/${slug}`}>{title}</Link>
              </p>
            ))
          ) : (
            <p>Your search did not match any documents.</p>
          )}
        </SearchResult>
      )}
    </SearchContainer>
  );
};

export default Search;

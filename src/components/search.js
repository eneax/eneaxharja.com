import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

import { darkTheme } from '../utils/colors';
import useOnClickOutside from '../utils/useOnClickOutside';

// styles
const SearchContainer = styled.div`
  position: relative;
`;

const SearchBox = styled.div`
  position: relative;
  width: 10rem;

  svg {
    position: absolute;
    left: 0.75rem;
    top: 0.2rem;
    transform: translateY(50%);
    color: rgba(107, 114, 128, 1);
  }

  input {
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 0.5rem 0.5rem 0.5rem 2.5rem;
    border-radius: 0.375rem;
    background-color: ${darkTheme.body};
    color: ${darkTheme.text};
    border: 1px solid ${darkTheme.primaryLighter};

    &::placeholder {
      color: rgba(107, 114, 128, 1);
    }
    &:focus {
      border: 1px solid ${darkTheme.primary};
      box-shadow: inset 0 0 0 1px transparent;
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
  }
`;

const SearchResult = styled.div`
  position: absolute;
  left: 0;
  top: 2.5rem;
  height: 10rem;
  width: 10rem;
  overflow-y: scroll;

  backdrop-filter: blur(10px);
  background-color: rgba(61, 220, 132, 0.5);
  border: 1px solid ${darkTheme.primary};
  border-radius: 0.375rem;
  padding: 1rem;

  a {
    color: ${darkTheme.text};
    background-image: none;
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
    const filteredData = notes.filter(
      ({ frontmatter: { title, category } }) =>
        title.toLowerCase().includes(query.toLowerCase()) ||
        (category && category.toLowerCase().includes(query.toLowerCase()))
    );

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
            <p>No notes found</p>
          )}
        </SearchResult>
      )}
    </SearchContainer>
  );
};

export default Search;

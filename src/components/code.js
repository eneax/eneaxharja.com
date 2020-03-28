/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { MdContentCopy } from 'react-icons/md';
import { copyToClipboard, handleLanguageColor, darkTheme } from '../utils';

const Code = ({ code, language, ...props }) => {
  if (props['react-live']) {
    return (
      <LiveProvider code={code} noInline theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }

  const handleClick = () => {
    copyToClipboard(code);
  };

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <CodeWrapper>
          <Language language={language}>{language}</Language>
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                <LineNumber>{i + 1}</LineNumber>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
          <CopyCode onClick={handleClick}>
            <MdContentCopy />
          </CopyCode>
        </CodeWrapper>
      )}
    </Highlight>
  );
};

Code.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  'react-live': PropTypes.bool,
};

export default Code;

// styles
const CodeWrapper = styled.div`
  position: relative;

  pre {
    text-align: left;
    overflow-x: auto;

    & .token-line {
      line-height: 1.3em;
      height: 1.3em;
    }
  }
`;

const Language = styled.span`
  ${({ language }) => handleLanguageColor(language)};
  position: absolute;
  top: 0px;
  left: 1.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.075em;
  line-height: 1;
  border-radius: 0px 0px 4px 4px;
  padding: 0.25rem 0.5rem;
  cursor: default;
`;

const CopyCode = styled.button`
  background-color: transparent;
  color: ${darkTheme.text};
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.2rem;
  border: 0;
  border-radius: 3px;
  opacity: 1;
  transition: all 0.2s;
  cursor: pointer;

  svg {
    font-size: 1rem;
  }
`;

const LineNumber = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
  text-align: right;
  margin-right: 1rem;
  margin-left: -1rem;
`;

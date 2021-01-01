/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { MdContentCopy } from 'react-icons/md';

import { copyToClipboard } from '../utils/copyToClipboard';

// styles
const handleLanguageColor = language => {
  switch (language) {
    case 'html':
      return `color: #fff; background: rgb(0, 90, 156)`;
    case 'css':
      return `color: #fff; background: rgb(255, 152, 0)`;
    case 'json':
      return `color: #232129; background: #f5f0f6`;
    case 'js':
      return `color: #232129; background: rgb(247, 223, 30)`;
    case 'jsx':
      return `color: #232129; background: rgb(97, 218, 251)`;
    case 'graphql':
      return `color: #fff; background: rgb(225, 0, 152)`;
    case 'shell':
      return `color: #232129; background: #d9d7e0`;
    case 'bash':
      return `color: #232129; background: #d9d7e0`;
    default:
      return `color: #232129; background: #fff`;
  }
};

const CodeWrapper = styled.div`
  position: relative;
  font-size: 1.5rem;

  pre {
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    overflow: auto;

    & .token-line {
      line-height: 2.25rem;
      height: 2.25rem;
    }
  }
`;

const Language = styled.span`
  ${({ language }) => handleLanguageColor(language)};
  position: absolute;
  top: 0px;
  left: 3rem;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  line-height: 1;
  border-radius: 0px 0px 4px 4px;
  padding: 0.5rem 1rem;
  cursor: default;
`;

const CopyCode = styled.button`
  background-color: transparent;
  color: var(--text);
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.4rem;
  border: 0;
  border-radius: 3px;
  opacity: 1;
  transition: all 0.2s;
  cursor: pointer;

  /* copied text */
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
  line-height: 1;

  svg {
    font-size: 2rem;
  }
`;

const LineNumber = styled.span`
  display: inline-block;
  width: 4rem;
  user-select: none;
  opacity: 0.3;
  text-align: right;
  margin-right: 2rem;
  margin-left: -2rem;
`;

// ui
const Code = ({ code, language, ...props }) => {
  const [copied, setCopied] = useState(false);

  if (props['react-live']) {
    return (
      <LiveProvider code={code} noInline theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }

  const delay = duration =>
    new Promise(resolve => setTimeout(resolve, duration));

  const handleCopyCodeClick = async () => {
    copyToClipboard(code);

    setCopied(true);
    await delay(5000);
    setCopied(false);
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
          <CopyCode onClick={handleCopyCodeClick}>
            {copied ? `Copied!` : <MdContentCopy />}
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

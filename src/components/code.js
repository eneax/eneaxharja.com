import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import styled from 'styled-components'
import { copyToClipboard, darkTheme } from '../utils'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const Code = ({ code, language, ...props }) => {
  if (props['react-live']) {
    return (
      <LiveProvider code={code} noInline={true} theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  }

  const handleClick = () => {
    copyToClipboard(code)
  }

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleClick}>Copy</CopyCode>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNumber>{i + 1}</LineNumber>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}

export default Code

// styles
const Pre = styled.pre`
  position: relative;
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow-x: auto;
  border-radius: 3px;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`

const LineNumber = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
  text-align: right;
  margin-right: 1rem;
  margin-left: -1rem;
`

const CopyCode = styled.button`
  background-color: ${darkTheme.primaryDarker};
  color: ${darkTheme.text};
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border: 0;
  border-radius: 3px;
  margin: 0.25rem;
  opacity: 0.4;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background-color: ${darkTheme.primaryDarkerHover};
  }
`

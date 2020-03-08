import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import styled from 'styled-components'

const Code = ({ code, language }) => {
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
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
`
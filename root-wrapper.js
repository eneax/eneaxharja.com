import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Code from './src/components/code'
import { InlineCodeWrapper } from './src/elements'

const components = { 
  'p.inlineCode': props => (
    <InlineCodeWrapper 
      {...props}
    />
  ),
  pre: ({children: {props}}) => {
    if (props.mdxType === 'code') {
      return (
        <Code 
          code={props.children.trim()}
          language={props.className && props.className.replace('language-', '')}
          {...props}
        />
      )
    }
  }
}


export const wrapRootElement = ({element}) => (<MDXProvider components={components}>{element}</MDXProvider>)
/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';

import Code from './src/components/code';

const components = {
  'p.inlineCode': props => <code {...props} />,
  pre: ({
    children: {
      props,
      props: { mdxType, children, className },
    },
  }) => {
    if (mdxType === 'code') {
      return (
        <Code
          code={children.trim()}
          language={className && className.replace('language-', '')}
          {...props}
        />
      );
    }
  },
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.object.isRequired,
};

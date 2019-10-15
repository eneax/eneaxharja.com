import React, { Fragment } from 'react'

import FunCard from './funCard'


const FunList = ({ funResources }) => {
  return (
    <Fragment>
      {
        funResources.map(({ node }, index) => (
          <FunCard 
            key={index}
            item={node}
          />
        ))
      }      
    </Fragment>
  )
}

export default FunList

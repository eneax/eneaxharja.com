import React, { Fragment } from 'react'

import TravelsCard from './travelsCard'


const TravelsList = ({ travelsResources }) => {
  return (
    <Fragment>
      {
        travelsResources.map(({ node }, index) => (
          <TravelsCard 
            key={index}
            item={node}
          />
        ))
      }      
    </Fragment>
  )
}

export default TravelsList

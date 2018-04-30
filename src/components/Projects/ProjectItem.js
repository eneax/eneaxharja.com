import React from 'react';

const PortfolioItem = ( props ) => {
  if (props.render) return props.render;
  else
    return (
      <div className="fl w-100 w-50-m w-third-ns pa2">
        <div className="bg-washed-blue br3 grow shadow-5">
          <div className="center mw6 br3 hidden mv3 tc">

            <h1 className="f5 bg-washed-green br3 br--top black-70 mv0 pv2 ph3 courier">Project Title</h1>
            
            <div className="pa3 bt b--black-10 black-70 georgia">
              <p className="f6 f5-ns lh-copy measure">Project Description</p>
              <a className="f6 grow dib v-mid ph3 pv2 mb3" src="#">Code</a>
              <a className="f6 grow dib v-mid ph3 pv2 mb3" src="#">Live</a>
            </div>

          </div>
        </div>
      </div>
  )
}

export default PortfolioItem;



 
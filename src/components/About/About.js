import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const About = () => {
	return (
    <div>
      <main className="pt1">
        <div className="ph2 ph5-m ph6-l">
          <div className="pv3 f5 f2-ns measure center">
            <h1 className="fw6 f2 fl w-100 black-70 mt0 mb3 courier">About Me</h1>
          </div>

          <div className="measure f3 center mv5 black-70 tj">
            <p className="lh-copy pt3 mt0 mb0 f4 f3-ns black-70 georgia">
              I’m currently living in Chiusi (Tuscany), Italy and working as a Freelance Web Developer.
            </p>
            <p className="lh-copy indent f4 f3-ns black-70 georgia">
              Most of my time is spent writing <a className="link underline dark-gray hover-bg-washed-blue bg-animate" href="https://github.com/eneax" target="_blank" rel="noopener noreferrer">code</a> for the web. I create websites for small businesses and portfolio pages that are responsive and can adapt the layout to a variety of devices and screen sizes.
            </p>
            <p className="lh-copy indent f4 f3-ns black-70 georgia">
              When I’m not coding, I read <Link className="link underline dark-gray hover-bg-washed-blue bg-animate" to='/books'>books</Link>, procastinate on <a className="link underline dark-gray hover-bg-washed-blue bg-animate" href='https://waitbutwhy.com/' target='_blank' rel='noopener noreferrer'>Wait But Why</a> and <a className='link underline dark-gray hover-bg-washed-blue bg-animate' href='http://www.ynharari.com/' target='_blank' rel='noopener noreferrer'>Y. N. Harari</a> or 
              just walk around in nature.
            </p>
            <p className="lh-copy indent f4 f3-ns black-70 georgia">
              I'm open to new opportunities and always looking for new projects where I can contribute. Feel free to take a look at my complete resume over <a className='link underline dark-gray hover-bg-washed-blue bg-animate' href='https://drive.google.com/open?id=14qK2Mu5CkkZfep2Ywr_hiQPpc5uc0uLx' target='_blank' rel='noopener noreferrer'>here</a>.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
	)
}

export default About;

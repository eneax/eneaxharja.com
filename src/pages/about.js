import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Container, TitleWrapper, MainTextWrapper } from '../components/General'
import Footer from '../components/Footer'

export default class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <TitleWrapper>
            <h1>About</h1>
          </TitleWrapper>

          <MainTextWrapper>
            <p>
              I’m currently living in Chiusi (Tuscany), Italy and working
              as a Freelance Web Developer.
            </p>
            <p>
              Most of my time is spent writing <a href='https://github.com/eneax' target='_blank' rel='noopener noreferrer'>
                code</a> for the web. I create websites for small businesses and portfolio pages that are responsive and can adapt the layout to a variety of devices and screen sizes.
            </p>
            <p>
              When I’m not coding, I read <Link to='/library'>books</Link>, procrastinate on <a href='https://waitbutwhy.com/' target='_blank' rel='noopener noreferrer'>Wait But Why</a> and <a href='http://www.ynharari.com/' target='_blank' rel='noopener noreferrer'>Y. N. Harari</a> or just walk around in nature.
            </p>
            <p>
              I'm open to new opportunities and always looking for new
              projects where I can contribute. Feel free to take a look at
                  my complete resume over <a href='https://www.dropbox.com/s/33hpu9pkavp32oq/eneaxharja-resume.pdf?dl=0' target='_blank' rel='noopener noreferrer'>here</a>.
            </p>
          </MainTextWrapper>
        </Container>

        <Footer/>
      </div>
    )
  }
}


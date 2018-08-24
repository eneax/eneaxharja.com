import React, { Component } from 'react'
import { Container, Row, Col, TitleWrapper, SubTitleWrapper, MainTextWrapper, ImageWrapper } from '../components/General'
import Footer from '../components/Footer'

import projectOne from '../images/projects/project1.png'
import projectTwo from '../images/projects/project2.png'
import projectThree from '../images/projects/project3.png'
import projectFour from '../images/projects/project4.png'
import projectFive from '../images/projects/project5.png'
import projectSix from '../images/projects/project6.png'


const projects = [
  {
    repo: 'https://github.com/eneax/eneax.github.io',
    title: 'eneaxharja[dot]com',
    link: 'https://github.com/eneax/eneax.github.io',
    img: '',
    desc: 'My Own Little Corner of the Web. Designed on a MacBook Pro in Tuscany (Italy). Built on Gatsby, the blazing-fast static site generator for React, and coded with VS Code.',
  },
  {
    repo: 'https://github.com/eneax/minimal-blog',
    title: 'Minimal Blog',
    link: 'https://minimal-blog-x.netlify.com',
    img: '',
    desc: 'A minimal blog built with Gatsby, Netlify CMS, GraphQL and Web Animations API.',
  },
  {
    repo: 'https://github.com/eneax/globetrotter',
    title: 'Globetrotter',
    link: 'https://aqueous-badlands-68133.herokuapp.com',
    img: '',
    desc: 'Responsive travel agency website made using React and React Router v4.',
  },
  {
    repo: 'https://github.com/eneax/krix-portfolio',
    title: 'Portfolio Website',
    link: 'https://gentle-bastion-82801.herokuapp.com',
    img: '',
    desc: 'Clean and minimal portfolio website built with React and React Router v4.',
  },
  {
    repo: 'https://github.com/eneax/thriving-cities',
    title: 'Thriving Cities',
    link: 'https://tranquil-shore-37678.herokuapp.com',
    img: '',
    desc: 'This project represents a responsive single page company website built with React and Bootstrap.',
  },
  {
    repo: 'https://github.com/eneax/weather-app',
    title: 'Weather App',
    link: 'https://weather-app-x.firebaseapp.com',
    img: '',
    desc: 'A functioning Weather app built with React and Open Weather API.',
  }
]


const ProjectItem = ({ repo, title, link, img, desc }) => {
  return (
    <Col>
      <SubTitleWrapper>
        <a href={`${repo}`} target="_blank" rel="noopener noreferrer">
          <h2>{title}</h2>
        </a>
      </SubTitleWrapper>

      <ImageWrapper>
        <a href={`${link}`} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={`${title} Pic`} />
        </a>
      </ImageWrapper>

      <p>{desc}</p>
    </Col>
  )
}


export default class Projects extends Component {
  render() {
    return <div>
        <Container>
          <TitleWrapper>
            <h1>Projects</h1>
          </TitleWrapper>

          <MainTextWrapper>
            <p>
              Explore some of my favorite projects I've worked on over the
              last few months.
            </p>

            <Row>
              {
                projects.map((project, i) => (
                  <ProjectItem
                    key={i}
                    link={projects[i].link}
                    title={projects[i].title}
                    img={projects[i].img}
                    desc={projects[i].desc}
                    repo={projects[i].repo}
                  />
                ))
              }
            </Row>
          </MainTextWrapper>
        </Container>

        <Footer />
      </div>
  }
}

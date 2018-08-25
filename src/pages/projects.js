import React, { Component } from 'react'
import { Container, Row, Col, TitleWrapper, SubTitleWrapper, MainTextWrapper, ImageWrapper } from '../components/General'
import Footer from '../components/Footer'
import Img from 'gatsby-image'


const Projects = ({ data }) => {
  return (
    <div>
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

            <Col>
              <SubTitleWrapper>
                <a href='https://github.com/eneax/eneax.github.io' target="_blank" rel="noopener noreferrer">
                  <h2>eneaxharja[dot]com</h2>
                </a>
              </SubTitleWrapper>
              <ImageWrapper>
                <a href='https://github.com/eneax/eneax.github.io' target="_blank" rel="noopener noreferrer">
                  <Img sizes={data.image1.sizes} alt='eneaxharja[dot]com Pic' />
                </a>
              </ImageWrapper>
              <p>My Own Little Corner of the Web. Designed on a MacBook Pro in Tuscany (Italy). Built on Gatsby, the blazing-fast static site generator for React, and coded with VS Code.</p>
            </Col>

            <Col>
              <SubTitleWrapper>
                <a href='https://github.com/eneax/minimal-blog' target="_blank" rel="noopener noreferrer">
                  <h2>Minimal Blog</h2>
                </a>
              </SubTitleWrapper>
              <ImageWrapper>
                <a href='https://minimal-blog-x.netlify.com' target="_blank" rel="noopener noreferrer">
                  <Img sizes={data.image2.sizes} alt='Minimal Blog Pic' />
                </a>
              </ImageWrapper>
              <p>A minimal blog built with Gatsby, Netlify CMS, GraphQL and Web Animations API.</p>
            </Col>

            <Col>
              <SubTitleWrapper>
                <a href='https://github.com/eneax/globetrotter' target="_blank" rel="noopener noreferrer">
                  <h2>Globetrotter</h2>
                </a>
              </SubTitleWrapper>
              <ImageWrapper>
                <a href='https://aqueous-badlands-68133.herokuapp.com' target="_blank" rel="noopener noreferrer">
                  <Img sizes={data.image3.sizes} alt='Globetrotter Pic' />
                </a>
              </ImageWrapper>
              <p>Responsive travel agency website made using React and React Router v4.</p>
            </Col>

            <Col>
              <SubTitleWrapper>
                <a href='https://github.com/eneax/krix-portfolio' target="_blank" rel="noopener noreferrer">
                  <h2>Portfolio Website</h2>
                </a>
              </SubTitleWrapper>
              <ImageWrapper>
                <a href='https://gentle-bastion-82801.herokuapp.com' target="_blank" rel="noopener noreferrer">
                  <Img sizes={data.image4.sizes} alt='Portfolio Website Pic' />
                </a>
              </ImageWrapper>
              <p>Clean and minimal portfolio website built with React and React Router v4.</p>
            </Col>

            <Col>
              <SubTitleWrapper>
                <a href='https://github.com/eneax/thriving-cities' target="_blank" rel="noopener noreferrer">
                  <h2>Thriving Cities</h2>
                </a>
              </SubTitleWrapper>
              <ImageWrapper>
                <a href='https://tranquil-shore-37678.herokuapp.com' target="_blank" rel="noopener noreferrer">
                  <Img sizes={data.image5.sizes} alt='Thriving Cities Pic' />
                </a>
              </ImageWrapper>
              <p>This project represents a responsive single page company website built with React and Bootstrap.</p>
            </Col>

            <Col>
              <SubTitleWrapper>
                <a href='https://github.com/eneax/weather-app' target="_blank" rel="noopener noreferrer">
                  <h2>Weather App</h2>
                </a>
              </SubTitleWrapper>
              <ImageWrapper>
                <a href='https://weather-app-x.firebaseapp.com' target="_blank" rel="noopener noreferrer">
                  <Img sizes={data.image6.sizes} alt='Weather App Pic' />
                </a>
              </ImageWrapper>
              <p>A functioning Weather app built with React and Open Weather API.</p>
            </Col>

          </Row>
        </MainTextWrapper>
      </Container>

      <Footer />
    </div>
  )
}

export default Projects


export const query = graphql`
  query imageGallery {
    image1: imageSharp(id: {regex: "/projectOne.png/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    image2: imageSharp(id: {regex: "/project2.png/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    image3: imageSharp(id: {regex: "/project3.png/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    image4: imageSharp(id: {regex: "/project4.png/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    image5: imageSharp(id: {regex: "/project5.png/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    image6: imageSharp(id: {regex: "/project6.png/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`










/*

import React, { Component } from 'react'
import { Container, Row, Col, TitleWrapper, SubTitleWrapper, MainTextWrapper, ImageWrapper } from '../components/General'
import Footer from '../components/Footer'

import projectOne from '../images/projects/projectOne.png'
// import projectTwo from '../images/projects/project2.png'
// import projectThree from '../images/projects/project3.png'
// import projectFour from '../images/projects/project4.png'
// import projectFive from '../images/projects/project5.png'
// import projectSix from '../images/projects/project6.png'


const projects = [
  {
    repo: 'https://github.com/eneax/eneax.github.io',
    title: 'eneaxharja[dot]com',
    link: 'https://github.com/eneax/eneax.github.io',
    img: 'https://drive.google.com/open?id=17KNaDTaZrk1MUPmvvO-NGJOdA1LtvNl8',
    desc: 'My Own Little Corner of the Web. Designed on a MacBook Pro in Tuscany (Italy). Built on Gatsby, the blazing-fast static site generator for React, and coded with VS Code.',
  },
  {
    repo: 'https://github.com/eneax/minimal-blog',
    title: 'Minimal Blog',
    link: 'https://minimal-blog-x.netlify.com',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a20bc6324f6ef2969d9a7cae56b8d4d1&auto=format&fit=crop&w=1650&q=80',
    desc: 'A minimal blog built with Gatsby, Netlify CMS, GraphQL and Web Animations API.',
  },
  {
    repo: 'https://github.com/eneax/globetrotter',
    title: 'Globetrotter',
    link: 'https://aqueous-badlands-68133.herokuapp.com',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a20bc6324f6ef2969d9a7cae56b8d4d1&auto=format&fit=crop&w=1650&q=80',
    desc: 'Responsive travel agency website made using React and React Router v4.',
  },
  {
    repo: 'https://github.com/eneax/krix-portfolio',
    title: 'Portfolio Website',
    link: 'https://gentle-bastion-82801.herokuapp.com',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a20bc6324f6ef2969d9a7cae56b8d4d1&auto=format&fit=crop&w=1650&q=80',
    desc: 'Clean and minimal portfolio website built with React and React Router v4.',
  },
  {
    repo: 'https://github.com/eneax/thriving-cities',
    title: 'Thriving Cities',
    link: 'https://tranquil-shore-37678.herokuapp.com',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a20bc6324f6ef2969d9a7cae56b8d4d1&auto=format&fit=crop&w=1650&q=80',
    desc: 'This project represents a responsive single page company website built with React and Bootstrap.',
  },
  {
    repo: 'https://github.com/eneax/weather-app',
    title: 'Weather App',
    link: 'https://weather-app-x.firebaseapp.com',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a20bc6324f6ef2969d9a7cae56b8d4d1&auto=format&fit=crop&w=1650&q=80',
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


*/ 
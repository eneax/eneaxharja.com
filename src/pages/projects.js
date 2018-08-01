import React, { Component } from 'react'
import { Container, Row, Col, TitleWrapper, SubTitleWrapper, MainTextWrapper, ImageWrapper } from '../components/General'
import Footer from '../components/Footer'
import projects from '../libs/projects-data'


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
          <img src={img} alt="pic" />
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

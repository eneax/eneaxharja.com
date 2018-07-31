import React, { Component } from 'react'
import { Main, MainWrapper, TitleWrapper, MainTextWrapper, Container, Row, Col6Medium4, Thumbnail} from '../components/General'
import Footer from '../components/Footer'
import pic from '../images/relax-and-read.jpg'
import logo from '../images/logo.png'

export default class BookList extends Component {
  render() {
    return (
      <div>
        <Container>
          <TitleWrapper>
            <h1>Library</h1>
          </TitleWrapper>

          <MainTextWrapper>
            <p>
              The reading list below contains the books (at least the ones
              it is worth mentioning) I've read over the years.
              </p>
            <p>
              Some of these taught me important life lessons and
              completely changed the way I think and live my life today.
              Check it out and maybe you will find your next book!
              </p>
          </MainTextWrapper>

          <Row>
            <Col6Medium4>
              <Thumbnail>
                <img src={logo} alt='pic' />
                <h5>Title</h5>
                <p>Author</p>
              </Thumbnail>
            </Col6Medium4>
            <Col6Medium4>
              <Thumbnail>
                <img src={logo} alt='pic' />
                <h5>Title</h5>
                <p>Author</p>
              </Thumbnail>
            </Col6Medium4>
            <Col6Medium4>
              <Thumbnail>
                <img src={logo} alt='pic' />
                <h5>Title</h5>
                <p>Author</p>
              </Thumbnail>
            </Col6Medium4>
            <Col6Medium4>
              <Thumbnail>
                <img src={logo} alt='pic' />
                <h5>Title</h5>
                <p>Author</p>
              </Thumbnail>
            </Col6Medium4>
            <Col6Medium4>
              <Thumbnail>
                <img src={logo} alt='pic' />
                <h5>Title</h5>
                <p>Author</p>
              </Thumbnail>
            </Col6Medium4>
          </Row>
        </Container>

        <Footer />
      </div>
    )
  }
}









/*

import React, { Component } from 'react'
import { Main, MainWrapper, TitleWrapper, MainTextWrapper, Container, Row, Col, Thumbnail} from '../components/General'
import Footer from '../components/Footer'
import pic from '../images/relax-and-read.jpg'
import logo from '../images/logo.png'

export default class BookList extends Component {
  render() {
    return (
      <div>
        <Main>
          <MainWrapper>
            <TitleWrapper>
              <h1>Library</h1>
            </TitleWrapper>

            <MainTextWrapper>
              <p>
                The reading list below contains the books (at least the ones
                it is worth mentioning) I've read over the years.
              </p>
              <p>
                Some of these taught me important life lessons and
                completely changed the way I think and live my life today.
                Check it out and maybe you will find your next book!
              </p>
            </MainTextWrapper>

            <Container>
              <Row>
                <Col>
                  <Thumbnail>
                    <img src={logo} alt='pic' />
                    <h5>Title</h5>
                    <p>Author</p>
                  </Thumbnail>
                </Col>
                <Col>
                  <Thumbnail>
                    <img src={logo} alt='pic' />
                    <h5>Title</h5>
                    <p>Author</p>
                  </Thumbnail>
                </Col>
                <Col>
                  <Thumbnail>
                    <img src={logo} alt='pic' />
                    <h5>Title</h5>
                    <p>Author</p>
                  </Thumbnail>
                </Col>
                <Col>
                  <Thumbnail>
                    <img src={logo} alt='pic' />
                    <h5>Title</h5>
                    <p>Author</p>
                  </Thumbnail>
                </Col>
                <Col>
                  <Thumbnail>
                    <img src={logo} alt='pic' />
                    <h5>Title</h5>
                    <p>Author</p>
                  </Thumbnail>
                </Col>
              </Row>
            </Container>

          </MainWrapper>
          
        </Main>

       
      </div>
    )
  }
}



*/ 
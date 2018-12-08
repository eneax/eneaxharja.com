import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'


// graphql query
const POST_LIST_QUERY = graphql`
  query BlogPostListing { 
    allMarkdownRemark(sort: {
      order: DESC
      fields:[frontmatter___date]
    }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

// styles
// const Container = styled.div`
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;
//   margin-right: auto;
//   margin-left: auto;
// `

// const Row = styled.div`
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-wrap: wrap;
//   flex-wrap: wrap;
//   margin-right: -15px;
//   margin-left: -15px;
// `

// const Col = styled.div`
//   position: relative;
//   width: 100%;
//   min-height: 1px;
//   padding-right: 15px;
//   padding-left: 15px;
//   @media (min-width: 992px) {
//     -ms-flex: 0 0 66.666667%;
//     flex: 0 0 66.666667%;
//     max-width: 66.666667%;
//   }
//   @media (min-width: 768px) {
//     -ms-flex: 0 0 83.333333%;
//     flex: 0 0 83.333333%;
//     max-width: 83.333333%;
//   }
//   margin-right: auto !important;
//   margin-left: auto !important;
// `

// const PostPreview = styled.div`
//   a {
//     color: #212529;
//     text-decoration: none;
//     &:focus,
//     &:hover {
//       text-decoration: none;
//       color: #2c7873;
//     }
//     h2 {
//       font-size: 30px;
//       margin-top: 30px;
//       margin-bottom: 10px;
//     }
//     h3 {
//       font-weight: 300;
//       margin: 0 0 10px;
//     }
//   }
//   p {
//     font-size: 18px;
//     font-style: italic;
//     margin-top: 0;
//     color: #868e96;
//   }
//   @media only screen and (min-width: 768px) {
//     a {
//       h2 {
//         font-size: 36px;
//       }
//     }
//   }
// `


const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
	@media (min-width: 576px) {
    max-width: 540px;
	}
	@media (min-width: 768px) {
    max-width: 720px;
	}
	@media (min-width: 992px) {
    max-width: 960px;
	}
	@media (min-width: 1200px) {
    max-width: 1140px;
	}
`

const TitleWrapper = styled.div`
  padding: 1rem 1rem;
  margin-bottom: 2rem;
	border-radius: 0.3rem;
	h1 {
		font-family: avenir,sans-serif;
		text-align: center;
		margin-bottom: 0;
	}
`

const MainTextWrapper = styled.div`
  max-width: 30em;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 4rem;
  margin-top: 0;
  font-size: 1.2rem;
  text-align: justify;
  background-color: #fff;
  font-weight: 100;
  a {
    color: #000;
    text-decoration: none;
    &:focus,
    &:hover {
      text-decoration: none;
      color: #663399;
    }
    h2 {
      margin-bottom: .5rem;
		  font-weight: 500;
    }
    h3 {
      font-weight: 300;
      margin: 0 0 10px;
    }
  }
  p {
    font-size: 18px;
    font-style: italic;
    margin-top: 0;
    color: #868e96;
  }
  @media only screen and (min-width: 768px) {
    a {
      h2 {
        font-size: 36px;
      }
    }
  }
`


const PostList = () => (
  <>
    <TitleWrapper>
      <h1>Blog</h1>
    </TitleWrapper>

    <StaticQuery
      query={POST_LIST_QUERY}
      render={({ allMarkdownRemark }) => (
        allMarkdownRemark.edges.map(({ node }) => (
          <Container key={node.frontmatter.slug}>

            <MainTextWrapper>
              <Link to={`/posts${node.frontmatter.slug}`} >
                <h2>{node.frontmatter.title}</h2>
                <h3>{node.excerpt}</h3>
              </Link>
              <p>{node.frontmatter.date}</p>
            </MainTextWrapper>

          </Container>
        ))
      )}
    />
  </>
)

export default PostList






// const PostList = () => (
//   <StaticQuery 
//     query={POST_LIST_QUERY}
//     render={({allMarkdownRemark}) => (
//       allMarkdownRemark.edges.map(({node}) => (

//         <Container>
//           <Row>
//             <Col>
//               <PostPreview key={node.frontmatter.slug}>
//                 <Link to={`/posts${node.frontmatter.slug}`}>
//                   <h2>{node.frontmatter.title}</h2>
//                   <h3>{node.excerpt}</h3>
//                 </Link>
//                 <p>{node.frontmatter.date}</p>
//               </PostPreview>
//             </Col>
//           </Row>
//         </Container>

//       ))
//     )}
//   />
// )

// export default PostList











/*

const PostList = () => (
  <StaticQuery 
    query={POST_LIST_QUERY}
    render={({allMarkdownRemark}) => (
      allMarkdownRemark.edges.map(({node}) => (

        <article key={node.frontmatter.slug}>
          
          <Link to={`/posts${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>

          <p>{node.excerpt}</p>
          
          <p>{node.frontmatter.date}</p>

        </article>

      ))
    )}
  />
)


*/ 
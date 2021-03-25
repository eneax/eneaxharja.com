import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const BioContainer = styled.div`
  display: flex;
  margin-bottom: var(--spacing-16);

  p {
    margin-bottom: var(--spacing-0);
  }

  .bio-avatar {
    min-width: 50px;
    

    border-radius: 100%;
    margin-right: var(--spacing-2);
    margin-bottom: var(--spacing-0);
    float: left;
  }

  .links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <BioContainer>
      {author?.name && (
        <div>
          <StaticImage
            className="bio-avatar"
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/profile-pic.jpg"
            width={50}
            height={50}
            quality={95}
            alt="Profile picture"
          />
          <p>
            Welcome to my little corner of the web, where I share my open
            collection of notes, code snippets, and resources on things that
            interest me.
          </p> 

          {/* <div className="links">
            <Link to="/projects">projects</Link> &bull;{" "}
            <Link to="/bookshelf">bookshelf</Link> &bull;{" "}
            <Link to="/about">uses</Link> &bull;{" "}
            <Link to="/photos">photos</Link> &bull;{" "}
            <Link to="/games">games</Link>
          </div> */}
        </div>
      )}
    </BioContainer>
  )
}

export default Bio

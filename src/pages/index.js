import React, { useState } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import "../../static/normalize.css"
import "../../static/milligram.css"
import "./index.css"

import "../../static/fontawesome-free-5.8.1-web/css/all.min.css"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default ({ data }) => {

  const [expanded, setExpanded] = useState(false)

  const postList = data.allFeedMedium.edges.map((post, i) => {
    if ( i < 5) {
      return <h4 key={i}><a href={post.node.link} target="_blank" rel="noopener noreferrer"><p>{post.node.title}</p></a></h4>
    }
  })

  const postContainer = <div>{postList}</div>

  const toggleList = () => {
    setExpanded(!expanded)
  }
  
  const dropdownArrow =  expanded ?
      <span onClick={toggleList}><i className="fas fa-caret-up fa-fw icon-medium-right"></i></span>
    :
      <span onClick={toggleList}><i className="fas fa-caret-down fa-fw icon-medium-right"></i></span>   

  return (
    <section>
      <SEO title="Sanjay Nair" />
      <div>
        <div className="background"></div>

        <div className="container pad-top">
          <div className="row image-header">
            <div className="column center">
              <img src="headshot.webp" className="headshot" alt="That's me!" />
              <h1>Sanjay Nair</h1>
              <h4>Software Engineer</h4>
            </div>
          </div>

          <div className="row">
            <div className="column column-50 column-offset-25 center">
              <p>
                I am a software engineer based in Atlanta, Georgia.
                I enjoy working with full stack teams on value driven projects.
                In my spare time I like building software, speaking about tech, and writing.
            </p>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="column center">
                <div><h3><i className="fab fa-medium fa-fw icon-link"></i><a href="https://medium.com/@nirespire" target="_blank" rel="noopener noreferrer">Articles</a>{dropdownArrow}</h3></div>
                <ReactCSSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeout={300}
                  transitionLeaveTimeout={300}>
                  {expanded ? postContainer : ""}
                </ReactCSSTransitionGroup>
                <div><h3><i className="fab fa-youtube fa-fw icon-link"></i><a href="https://www.youtube.com/playlist?list=PLEes72Fb4Ddh27N8XIbD7RQFaKwxPWCE3" target="_blank" rel="noopener noreferrer">Talks</a></h3></div>
                <div><h3><i className="fab fa-youtube fa-fw icon-link"></i><a href="https://www.youtube.com/playlist?list=PLEes72Fb4DdiRQ1Jxs9AG0ynJUAWJHp5S" target="_blank" rel="noopener noreferrer">Live Coding</a></h3></div>
                <div><h3><i className="fab fa-twitter fa-fw icon-link"></i><a href="https://twitter.com/Nirespire" target="_blank" rel="noopener noreferrer">Twitter</a></h3></div>
                <div><h3><i className="fab fa-linkedin fa-fw icon-link"></i><a href="https://www.linkedin.com/in/sanjaynair8/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h3></div>
                <div><h3><i className="fab fa-github-square fa-fw icon-link"></i><a href="https://github.com/Nirespire" target="_blank" rel="noopener noreferrer">Github</a></h3></div>
                <div><h3><i className="fas fa-book fa-fw icon-link"></i><a href="https://www.mendeley.com/authors/57192428597/" target="_blank" rel="noopener noreferrer">Publications</a></h3></div>
                <div><h3><i className="fas fa-envelope fa-fw icon-link"></i><a href="mailto:contact@sanjaynair.dev" target="_blank" rel="noopener noreferrer">Contact</a></h3></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  query {
    allFeedMedium {
      edges {
        node {
          title
          link
        }
      }
    }
  }
`

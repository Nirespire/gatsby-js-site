import React, { Component } from "react"
// import { StaticQuery } from "gatsby"
import SEO from '../components/seo'
import '../../static/normalize.css'
import '../../static/milligram.css'
import './index.css'

import '../../static/fontawesome-free-5.8.1-web/css/all.min.css'


class App extends Component {
  render = () => {
    return (
      <section>
        <SEO/>
        <div>
          <div class="background"></div>

          <div class="container pad-top">
            <div class="row image-header">
              <div class="column center">
                <img src="headshot.png" class="headshot" alt="That's me!" />
                <h1>Sanjay Nair</h1>
                <h4>Software Engineer</h4>
              </div>
            </div>

            <div class="row">
              <div class="column column-50 column-offset-25 center">
                <p>
                  I am a software engineer based out of Atlanta, Georgia.
                  I enjoy working with full stack teams on value driven projects.
                  In my spare time I like to work on personal projects like building software, speaking about tech, and writing.
              </p>
              </div>
            </div>

            <div class="row">
              <div class="column center">
                <div><h3><i class="fab fa-medium fa-fw icon-link"></i><a href="https://medium.com/@nirespire" target="_blank" rel="noopener noreferrer">Articles</a></h3></div>
                <div><h3><i class="fab fa-youtube fa-fw icon-link"></i><a href="https://www.youtube.com/playlist?list=PLEes72Fb4Ddh27N8XIbD7RQFaKwxPWCE3" target="_blank" rel="noopener noreferrer">Talks</a></h3></div>
                <div><h3><i class="fab fa-youtube fa-fw icon-link"></i><a href="https://www.youtube.com/playlist?list=PLEes72Fb4DdiRQ1Jxs9AG0ynJUAWJHp5S" target="_blank" rel="noopener noreferrer">Live Coding</a></h3></div>
                <div><h3><i class="fab fa-twitter fa-fw icon-link"></i><a href="https://twitter.com/Nirespire" target="_blank" rel="noopener noreferrer">Twitter</a></h3></div>
                <div><h3><i class="fab fa-linkedin fa-fw icon-link"></i><a href="https://www.linkedin.com/in/sanjaynair8/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h3></div>
                <div><h3><i class="fab fa-github-square fa-fw icon-link"></i><a href="https://github.com/Nirespire" target="_blank" rel="noopener noreferrer">Github</a></h3></div>
                <div><h3><i class="fas fa-envelope fa-fw icon-link"></i><a href="mailto:sanjayhnair@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a></h3></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default App

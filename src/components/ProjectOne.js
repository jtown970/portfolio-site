import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

function ProjectOne() {
  return (
    <div className="login-container">
      <div className="left">
        <div className="back-arrow">
        <Link style={{ textDecoration: "none" }} to="/welcome">
          <svg width="31" height="44" viewBox="0 0 31 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30.518" y="25.6074" width="23" height="6" transform="rotate(-178.862 30.518 25.6074)" fill="#484A4D"/>
            <path d="M0.547589 21.6817L11.3707 0.301317L11.4717 43.0106L0.547589 21.6817Z" fill="#484A4D"/>
          </svg>
          </Link>
        </div>
        <div className="about-text">
        <div id='about'>
        <h1>The Code Pound <span className="span-info"></span></h1>
        <div className='about'>
          {/* <img src="" alt="ADDALT" /> */}
          <iframe
            title="What is Codepound"
            width='560'
            height='315'
            src='https://www.youtube.com/embed/e_MR32HrPxM'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen></iframe>

        </div>
        {/* <div className="project-description">
            <h2>Project <span className="span-login">Description</span></h2>
            <p className='about-Project'>
                Welcome to the CodePound! A social media site geared toward developers and the ability
                for said developers to share the creative projects they have built throughout their
                careers. The CodePound is comparable to Instagram in sense of the post comment/ like of
                each project (the “like” can be a “bone” or something to set itself apart) However, not
                only does it allow developers to share projects, but receive feedback and or help on
                projects in order to better refine these projects for live hosting. Thus, when employers
                or others see these projects there is a more polished project backed by a community of
                developers who are helping one another grow... Also great for any developer hoping to
                get some extra teaching experience and learn some new things by helping other
                developers.
              </p>
          </div> */}
      </div>
        </div> 
      </div>
      <div className="right">
        <div className="project-info">
          <div className="project-description">
            <h2 className="project-h2">Main <span className="span-login">Contributions</span></h2>
            <ul className="codePound-duties">
              <li className="duties-list">| Created db using PostgreSQL |</li>
              <li className="duties-list">| Created APIs for data to flow from back-end to front-end |</li>
              <li className="duties-list">| Build out controller files for user authentication |</li>
              <li className="duties-list">| Built out controller file for creating, reading, updating, and deleting posts |</li>
              <li className="duties-list">| Helping the front-end developers with axios calls and prop drilling data |</li>
              <li className="duties-list">| Set up a ubuntu server with digitalOcean |</li>
            </ul>
          </div>
          <p className="about-bio"></p>
        </div>
        <div className="forward-arrow">
        <Link style={{ textDecoration: "none" }} to="/project/2">
          <svg width="31" height="44" viewBox="0 0 31 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="19" width="23" height="6" fill="#1E90FF"/>
            <path d="M30.0424 22.3299L19.646 43.9209L18.697 1.22209L30.0424 22.3299Z" fill="#1E90FF"/>
          </svg>
          </Link>
        </div>

      </div>
    </div>
  )
}

const mapStateToProps = reduxState => reduxState

export default withRouter(connect(mapStateToProps)(ProjectOne))
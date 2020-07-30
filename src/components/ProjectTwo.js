import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import iVote from '../img/I-vote.PNG'

function ProjectTwo() {
  return (
    <div className="login-container">
      <div className="left">
        <div className="back-arrow">
        <Link style={{ textDecoration: "none" }} to="/project/1">
          <svg width="31" height="44" viewBox="0 0 31 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30.518" y="25.6074" width="23" height="6" transform="rotate(-178.862 30.518 25.6074)" fill="#484A4D"/>
            <path d="M0.547589 21.6817L11.3707 0.301317L11.4717 43.0106L0.547589 21.6817Z" fill="#484A4D"/>
          </svg>
          </Link>
        </div>
        <div className="about-text">
        <div id='about'>
        <h1>Ivote <span className="span-info"></span></h1>
        <div className='about'>
          <img className="ivote-img" src={iVote} alt="ADDALT" />
        </div>
        <div className="ivote-description">
            <h2>Project <span className="span-description">Description</span></h2>
            <p className='about-Project'>
                Ivote is a web app that allows users to vote on the same bills as the house of representatives.  User votes create a dynamic chart to view their votes on.  Users can then compare their votes to the house of representatives, and see which member of the house has similar views on issues.  Users can also see what the total user votes are and see how their views line up with their community. 
              </p>
          </div>
      </div>
        </div> 
      </div>
      <div className="right">
        <div className="project-info">
          <div className="project-description">
            <h2 className="project-h2">The Project <span className="span-login">Details</span></h2>
            <ul className="codePound-duties">
              <li className="duties-list">| Created using the PERN stack |</li>
              <li className="duties-list">| This project is full crud following restful principles |</li>
              <li className="duties-list">| Utilized the power of Redux to track state throughout |</li>
              <li className="duties-list">| User authentication and encryption  |</li>
              <li className="duties-list">| Utilized puppeteer for web scraping to ensure the most up to date information |</li>
              <li className="duties-list">| This project can be found on <a className="github-link" href="https://github.com/jtown970/Ivote">GitHub</a> |</li>
            </ul>
          </div>
          <p className="about-bio"></p>
        </div>
        {/* <div className="forward-arrow">
          
          <svg width="31" height="44" viewBox="0 0 31 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="19" width="23" height="6" fill="#1E90FF"/>
            <path d="M30.0424 22.3299L19.646 43.9209L18.697 1.22209L30.0424 22.3299Z" fill="#1E90FF"/>
          </svg>

        </div> */}

      </div>
    </div>
  )
}

const mapStateToProps = reduxState => reduxState

export default withRouter(connect(mapStateToProps)(ProjectTwo))
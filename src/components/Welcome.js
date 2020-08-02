import React, { useState } from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import myResume from '../img/smaller-resume.PNG'
import codePound from '../img/code-pound-home.PNG'
import iVote from '../img/I-vote.PNG'
 const Welcome = () => {

  const [knowledge, setKnowledge] = useState(true)
  const [resume, setResume] = useState(false)
  const [portfolio, setPortfolio] = useState(false)
  const [spanInput, setSpan] = useState('Knowledge')
  const [story, setStory] = useState(true)
  const [passion, setPassion] = useState(false)
  const [goals, setGoals] = useState(false)
  const [aboutSpanInput, setAboutSpan] = useState('Story')


    // pop up
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = document.querySelector(button.dataset.modalTarget)
    openModal(modal2)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
// end of pop up

  function toggleKnowledge(){
    setKnowledge(true)
    setSpan('Knowledge')
  }

  function toggleResume(){
    setResume(true)
    setKnowledge(false)
    setPortfolio(false)
    setSpan('Resume')
  }

  function togglePortfolio(){
    setPortfolio(true)
    setResume(false)
    setKnowledge(false)
    setSpan('Portfolio')
  }

  function toggleStory(){
    setStory(true)
    setAboutSpan('Story')
  }

  function togglePassion(){
    setPassion(true)
    setGoals(false)
    setStory(false)
    setAboutSpan('Passion')
  }

  function toggleGoals(){
    setGoals(true)
    setPassion(false)
    setStory(false)
    setAboutSpan('Goals')
  }

  // function toggleSeeResume() {
  //   setSeeResume(!seeResume)
  // }




  return (
    <div className="about-container">
      <div className="left-tech">
        <div className="tech-text">
          <p className="tech-title">Current <span className="span-info">{spanInput}</span></p>
          <div className="tech-info">
              { knowledge === true ? (
            <ul className="tech-info-display">
                  <li className="languages-list">| PostgreSQL |</li>
                  <li className="languages-list">| React |</li>
                  <li className="languages-list">| Express |</li>
                  <li className="languages-list">| Node |</li>
                  <li className="languages-list">| JavaScript |</li>
                  <li className="languages-list">| Massive |</li>
                  <li className="languages-list">| Redux |</li>
                  <li className="languages-list">| Hooks |</li>
                  <li className="languages-list">| Bcrypt |</li>
                  <li className="languages-list">| Sass |</li>
                  <li className="languages-list">| Less |</li>
            </ul>
              ) : ( resume === true ?(
                <div>
                  <img data-modal-target="#modal2" className="my-resume" src={myResume} alt="resume"/>
                  {/* popup start */}
                  <div className="third">
                    {/* <h2 className="right">AZ house Reps</h2> */}
                    {/* <button className="btn btn-background-circle see-votes" data-modal-target="#modal2">View</button> */}
                    <div className="modal" id="modal2">
                      <div className="modal-header">
                        <div className="title">My resume</div>
                        <button data-close-button className="close-button">&times;</button>
                      </div>
                      <div className="newbody">
                        <div className="hours">
                        <div className="left-nav">
                      {/* <p>Jason Towner</p>
                      <p>Full Stack developer</p> */}
                      <img className="my-resume-popup" src={myResume} alt="resume"/>
                    </div>
                        </div>
                      </div>
                    </div>
                    <div id="overlay"></div>

                  </div>
                  {/* popup end */}
                </div>
              ) : ( portfolio === true ? (
                <div className="about-portfolio">
                  <Link style={{ textDecoration: "none" }} to="/project/1">
                    <img className="about-img about-project2" src={codePound} alt=" the code pound full-stack project"/>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/project/2">
                    <img className="about-img about-project1" src={iVote} alt="I vote full-stack project"/>
                  </Link>
                </div> 
               ) : null ))}
          </div>
          <div className="tech-sections">
            <ul className="tech-list">
              <li onClick={() => toggleKnowledge()} className="tech-list-item">Knowledge</li>
              <li onClick={() => toggleResume()} className="tech-list-item">Resume</li>
              <li onClick={() => togglePortfolio()} className="tech-list-item">Portfolio</li>
            </ul>
          </div>
        </div> 
      </div>
      
      <div className="right-about">
        <div className="about-info">
          <p className="about-text">My <span className="span-login">{aboutSpanInput}</span></p>
          { story === true ? (
          <p className="about-bio">I am Jason Towner and I'm a Full Stack web developer.I started programming after 13 years in the restaurant business (yes, I started bussing tables at age 11).  Creating an experience in the food industry is limited to the people who come into your restaurant.  With coding and web development, what you create can be experienced by people worldwide.  That ability to influence without boundaries is what keeps me passionate about coding.  I am hoping to join a company to create something bigger than myself and help make an impact on a larger level.</p>
          ) : ( passion === true ? (
            <p className="about-bio">The top three things I am passionate about are programming, photography, and the outdoors. Programming has changed my life in many ways. It sparked my curiosity, improved my patience, and opened up a new career path.  Photography and the outdoors go hand in hand. I have had the opportunity to create some epic adventures in some of the most beautiful places.  The camera allows to me capture those moments in time and then look back and enjoy and share with friends and family. </p>
          ) : ( goals === true ? (
            <p className="about-bio">My goals are separated into three areas that all overlap.<br/>Work: I aim not to land a great job but to begin a great career, one that I can feel confident that what I'm doing on a daily basis adds up to make positive impact.<br/>Heath: I aim to hike every 14er in Colorado. This goal was set after reaching my first summit over 14k feet.  I currently done 14 14ers and not ready to stop any time soon.<br/>Happiness: That is a harder one to pin down, but hearing “Your hired” from you would more likely help. haha </p>
          ): null ))}
        </div>
        {/* <div className="tech-sections"> */}
          <ul className="tech-list">
            <li onClick={() => toggleStory()} className="tech-list-item about-list-items">Story</li>
            <li onClick={() => togglePassion()} className="tech-list-item about-list-items">Passion</li>
            <li onClick={() => toggleGoals()} className="tech-list-item about-list-items">Goals</li>
          </ul>
        {/* </div> */}
      </div>
    </div>
  )
}

const mapStateToProps = reduxState => reduxState

export default withRouter(connect(mapStateToProps)(Welcome))
// export default Welcome
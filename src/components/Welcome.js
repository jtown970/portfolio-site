import React, { useState } from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
// import myRes from '../img/myResume.PNG'
import myResume from '../img/cleanResume.PNG'
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
  const [seeResume, setSeeResume] = useState(false)


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
          <p className="about-bio">Hey my name is Jason Towner I'm a 26 year old Full Stack web developer. <br/>I made the switch to programing when I was 24 after working in restaurants for 13 yep started bussing table at 11.  I feel in love with coding when I first saw that I could build something that would alow people from all over the world to use something I was able to build.</p>
          ) : ( passion === true ? (
            <p className="about-bio">While there are many things I would say I'm passionate about the main three would be programming, photography, and the outdoors.  Programming has changed my life in many ways it sparks my curiosity, improved my patience, and opened up a new carer path. photography and the outdoors go hand in hand.  I had the opportunity to adventure to some amazing places over the years and the camera allows to me capture that moment in time to look back on and enjoy and sure with friends and family. </p>
          ) : ( goals === true ? (
            <p className="about-bio"> My goals are separated into three areas yet all overlap. starting with work, I aim not to land a great job but to begin a great career, one that I'm confident that what I'm doing on a daily basis adds up to make positive impact.  Heath, I aim to hike every 14er in colorado, this goal was set after reacting my first summit over 14k feet and continues after reacting my 14th.  Happiness is a harder one to pin down, but hearing your hired from you would more likely help. haha </p>
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
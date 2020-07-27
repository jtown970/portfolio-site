import React from 'react'
import computer from '../img/computer.jpg'
import thing from '../img/phone.PNG'
export default function Home() {
  return (
    <div className="home-container">
      <div className="first-project">
        <img className="computer-img" src={computer}/>
        <p className="project-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className="second-project">
        <p className="project-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <img className="computer-img" src={computer}/>
      </div>
      <div className="third-project">
        <img className="computer-img" src={computer}/>
        <p className="project-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className="phone-container">
        <img className="computer-img" src={thing}/>
        <div className="phone-buttons">
          <button className="phone-btn 1">CALL</button>
          <button className="phone-btn 2">EMAIL</button>
          <button className="phone-btn 3">GITHUB</button>
          {/* <p className="phone-btn 4">LINKEDIN</p>
          <p className="phone-btn 5">INNSTAGRAM</p> */}
          <button className="phone-btn 6">RESUME</button>
        </div>
      </div>
    </div>
  )
}

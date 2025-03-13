import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a passionate Full Stack Developer and ICT undergraduate with a strong interest in building dynamic and efficient digital solutions. With a deep understanding of both Front-End and Back-End Development, I enjoy creating seamless and user-friendly web applications. My problem-solving skills and ability to adapt to new technologies allow me to develop innovative solutions that meet real-world needs.</p>
                <p>Always eager to expand my knowledge and stay updated with the latest advancements in the tech industry. Whether working on personal projects or collaborating with teams, I strive to write clean, maintainable code and build scalable applications. My goal is to continuously enhance my skills and contribute to impactful digital experiences.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width: '80%'}} /></div>
                <div className="about-skill"><p>JavaScript</p> <hr style={{width: '60%'}} /></div>
                <div className="about-skill"><p>WordPress</p> <hr style={{width: '20%'}} /></div>
                <div className="about-skill"><p>React JS</p> <hr style={{width: '40%'}} /></div>
                <div className="about-skill"><p>Node JS</p> <hr style={{width: '10%'}} /></div>
                <div className="about-skill"><p>Express JS</p> <hr style={{width: '10%'}} /></div>
                <div className="about-skill"><p>Mongo DB</p> <hr style={{width: '10%'}} /></div>
                <div className="about-skill"><p>Java</p> <hr style={{width: '40%'}} /></div>
                <div className="about-skill"><p>Python</p> <hr style={{width: '50%'}} /></div>
                <div className="about-skill"><p>C</p> <hr style={{width: '50%'}} /></div>
                <div className="about-skill"><p>Bash Script</p> <hr style={{width: '50%'}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement"><h1>Soon..</h1><p>YEARS OF EXPERIENCE</p></div><hr />
        <div className="about-achievement"><h1>Soon..</h1><p>PROJECT COMPLETED</p></div><hr />
        <div className="about-achievement"><h1>Soon..</h1><p>HAPPY CLIENTS</p></div>
      </div>
    </div>
  )
}

export default About

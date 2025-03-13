import React from 'react'
import './Hero.css'
import profile_img from '../../assets/pic1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="profile pic" />
      <h1><span>I'm Udara  Dilshan</span><br />"A Tech Enthusiast Crafting Seamless Web Experiences with Modern Full-Stack Development"</h1>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">Resume</div>
      </div>
      </div>
  )
}

export default Hero

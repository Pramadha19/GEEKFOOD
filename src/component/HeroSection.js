
import HeroImg from "./../assest/Images/hero-img.avif";
import React from 'react'
import "./HeroSection.css"
import { HeroButton } from './HeroButton'


export const HeroSection = () => {
  const style1 = {
    backgroundColor: "#E11D48",
    color: "#FFFFFF",
  }

  const style2 = {
    backgroundColor: "#FFFFFF",
    color: "#E11D48"
  }

  const style3 = {
    backgroundColor: "#4F46EF",
    color : "#FFFFFF",
  }

  return (
    <div className="hero-section-main">

        <div className='hero-section-image'>
            <div className='hero-section-text'>
                <h1 className='headline'>Let us find your</h1>
                <h1 className='headline hd-line-2' >Forever Food.</h1>
                <p className='hero-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p className='hero-para'>Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                <div className='btn-div'>
                  <HeroButton customStyle = {style1}>Search Now</HeroButton>
                  <HeroButton customStyle = {style2}>Know more</HeroButton>
                </div> 
            </div>  
        </div>

        <div className='hero-section-bottom'>
          <div className='left-part'>
            <img className="left-img" src={HeroImg} alt='img-hero'></img>     
          </div>
          <div className='right-part'>
            <div className="right-container">
              <div className="right-main-contain">
              <h1 className="right-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit.     Tempore, debitis.</h1>
                <p className="right-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <HeroButton customStyle = {style3}>Get in Touch</HeroButton>
              </div>
                
            </div>
          </div>
        </div>
        
    </div>
  )
}
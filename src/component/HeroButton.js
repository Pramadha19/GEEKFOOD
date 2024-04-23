import React from 'react'
import "./HeroButton.css"

export const HeroButton = (props) => {
  return (
    <div>
        <button className="hero-button" style = {props.customStyle}>{props.children}</button>
    </div>
  )
}
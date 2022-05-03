import React from 'react'
import FlowerFrame from '../assets/Flower-Box.png'

// Render sequential Frames ROTATED with CSS >>>
   //    to eliminate need for additional image files >

const Frame = () => {
   
  return (
    <div className="frameContainer">
       <img alt="Wreath of framed flowers with subject text nested within" src={FlowerFrame}></img>
    </div>
  )
}

export default Frame;
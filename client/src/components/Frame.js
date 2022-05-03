import React from 'react'
import CircleFrame from '../assets/circle-frame.png';

// Render sequential Frames ROTATED with CSS >>>
   //    to eliminate need for additional image files >

const Frame = () => {
  return (
     <div className="frameContain">
         <div text="frameOne"id="frameOne">
            <img alt="Wreath of framed flowers with subject text nested within" src={CircleFrame}></img>
         </div>
         <div text="frameTwo" style={{transform: "rotate(180deg)"}}id="frameTwo">
            <img  style={{transform: "rotate(180deg)"}}alt="Wreath of framed flowers with subject text nested within" src={CircleFrame}></img>
         </div>
         <div text="frameThree" id="frameThree">
            <img alt="Wreath of framed flowers with subject text nested within" src={CircleFrame}></img>
         </div>
         <div text="frameFour" id="frameFour">
            <img alt="Wreath of framed flowers with subject text nested within" src={CircleFrame}></img>
         </div>
         <div text="frameFive" id="frameFive">
            <img alt="Wreath of framed flowers with subject text nested within" src={CircleFrame}></img>
         </div>
      </div>   
  )
}

export default Frame;
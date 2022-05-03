import React from 'react'
import CircleFrame from '../assets/circle-frame.png';

// Render sequential Frames ROTATED with CSS >>>
   //    to eliminate need for additional image files >

const Frame = () => {
  return (
     <div className="frameContain">
         <div id="frameOne">
            <img alt="Wreath of framed flowers with subject text nested within" src={CircleFrame}></img>
         </div>
         <div id="frameTwo">
            <img alt="Wreath of framed flowers with subject text nested within" src={CircleFrame}></img>
         </div>
         <div id="frameThree">
            <img alt="Wreath of framed flowers with subject text nested within" src={CircleFrame}></img>
         </div>
         <div id="frameFour">
            <img alt="Wreath of framed flowers with subject text nested within" src={CircleFrame}></img>
         </div>
         <div id="frameFive">
            <img alt="Wreath of framed flowers with subject text nested within" src={CircleFrame}></img>
         </div>
      </div>   
  )
}

export default Frame;
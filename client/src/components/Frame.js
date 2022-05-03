import React from 'react'
import CircleFrame from '../assets/circle-frame.png';

// Render sequential Frames ROTATED with CSS >>>
   //    to eliminate need for additional image files >

const Frame = () => {
  return (
     <div className="frameContain">
         <div id="frameOne">
            <img text="frameOne" alt="Wreath of framed flowers with subject text nested within" src={CircleFrame}></img>
         </div>
         <div text="frameTwo" style={{transform: "rotate(180deg)"}}id="frameTwo">
            <img text="frameOne" style={{transform: "rotate(180deg)"}}alt="Wreath of framed flowers with subject text nested within" src={CircleFrame}></img>
         </div>
         <div text="frameThree" id="frameThree">
            <img text="frameOne" alt="Wreath of framed flowers with subject text nested within" src={CircleFrame}></img>
         </div>
         <div text="frameFour" id="frameFour">
            <img text="frameOne" alt="Wreath of framed flowers with subject text nested within" src={CircleFrame}></img>
         </div>
         <div text="frameFive" id="frameFive">
            <img text="frameOne" alt="Wreath of framed flowers with subject text nested within" src={CircleFrame}></img>
         </div>
      </div>   
  )
}

export default Frame;
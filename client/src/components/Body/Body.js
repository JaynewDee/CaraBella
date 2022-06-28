import React from "react";
import Selfie from "../../assets/Bio_pic.png";
import HRule from "../HRule";

const Body = () => {
  return (
    <div id="bodyBox">
      <HRule />
      <div className="aboutSection">
        <img className="selfie" alt="" src={Selfie}></img>
        <div className="selfie-section">
          <h3>Foundations</h3>
          <p>
            Tricia Kelly founded Cara Bella in 2022 out of a profound passion
            for skincare and holistic wellness.
          </p>
        </div>
      </div>
      <div className="aboutSection">
        <div className="experience-section">
          <h3>Experience</h3>
          <p>
            A Board-Certified Family Nurse Practitioner with over 25 years'
            experience as a registered dental hygienist, 10 years as registered
            nurse, and 5 years as family nurse practitioner, Tricia wishes to
            utilize her wealth of medical experience to spread the joy of a
            healthy and vibrant life.
          </p>
        </div>
      </div>
      <div className="aboutSection">
        <div className="inspiration-section">
          <h3>Inspiration</h3>
          <p>
            With advances in the emerging science of anti-aging, it has never
            been easier or more affordable to make a meaningful cosmetic change,
            and we'll be right there with you every step of the way!
          </p>
        </div>
      </div>
      <HRule />
    </div>
  );
};

export default Body;

// "brochure" version ---
/* 
  Cara Bella was founded in
  2022 by Tricia Kelly, FNP-BC,
  who is passionate about
  skin health and anti-aging
  treatments.
  Tricia has been a registered
  Dental Hygienist for over 25 years.
  She practiced as a Registered Nurse
  for 10 years and now as Family Nurse
  Practitioner for the last 5 years.
  Tricia has a passion for health prevention,
  science for anti-agin, and overall wellness.
*/

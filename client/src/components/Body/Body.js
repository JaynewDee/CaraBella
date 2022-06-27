import React from "react";
import Selfie from "../../assets/Bio_pic.png";

const Body = () => {
  return (
    <div id="bodyBox">
      {/* Iterable info sections */}
      <div style={{ width: "100vw" }}>
        <img className="selfie" alt="" src={Selfie}></img>
      </div>
      <div style={{ width: "100vw" }}></div>
      <div style={{ width: "100vw" }}></div>
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

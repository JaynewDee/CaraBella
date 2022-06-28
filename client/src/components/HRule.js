import React from "react";
import { GiSunflower } from "react-icons/gi";
const HRule = () => {
  return (
    <div className="horizontal-rule">
      <div className="left-rule"></div>
      <GiSunflower size={"3rem"} className="icon" />
      <div className="right-rule"></div>
    </div>
  );
};

export default HRule;

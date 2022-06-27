import React from "react";
// import Palette from './Palette';

const ServiceSection = () => {
  const andperse = "&";

  return (
    <>
      <div id="mainSection">
        <div className="contentBox">
          <div className="subBoxOne">
            <h3 id="service"> in service of </h3>
          </div>
          <div className="subBoxTwo">
            <h2 id="wellness">WELLNESS</h2>
            <span className="andperse">{andperse}</span>
            <h2 id="beauty">BEAUTY</h2>
          </div>
        </div>
        {/* <Palette /> */}
      </div>
    </>
  );
};

export default ServiceSection;

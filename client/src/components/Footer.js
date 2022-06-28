import React from "react";
import FlowerFrame from "../assets/Flower-Box.jpg";

const Footer = () => {
  return (
    <footer id="footerBox">
      <div className="flower-box">
        <img
          style={{ maxWidth: "30rem", opacity: ".5" }}
          alt="lovely wreath of peach and green flowers encircling a geometric frame"
          src={FlowerFrame}
        />
        <p className="reach-out">
          Please reach out to Tricia with any questions regarding pleasantries
          offered. We look forward to serving you!
        </p>
      </div>
      <section className="details">
        <h3 className="fullname"> Tricia Kelly </h3>
        <p className="contacts">
          <a href="mailto:tricia@carabellaaesthetics.com">
            tricia@carabellaaesthetics.com
          </a>
          <a href="mailto:tricia@carabellaaesthetics.com">1-817-905-6050</a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;

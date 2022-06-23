import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [scroll, setScroll] = useState(false);
  const andperse = "&";
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <header
      id="fixedBar"
      style={
        scroll
          ? {
              boxShadow: "0 0px 12px rgba(0, 0, 0, 0.3)",
            }
          : { boxShadow: "inset 0 0px 2px rgba(0, 0, 0, 0.5" }
      }
    >
      <div id="titleWrap">
        <h1
          onClick={(e) => {
            window.location.replace("/");
          }}
          id="brandName"
        >
          CARA BELLA{" "}
        </h1>
        <span className="divider"> | </span>
        <h2 id="subtitle"> SPA {andperse} AESTHETICS</h2>
      </div>

      <nav id="linkBox">
        <Link to="/contact" className="link">
          CONTACT
        </Link>
        <span className="divider"> | </span>
        <Link to="/schedule" className="link">
          SCHEDULE
        </Link>
        <span className="divider"> | </span>
        <Link to="/about" className="link">
          ABOUT
        </Link>
      </nav>
    </header>
  );
};

export default Header;

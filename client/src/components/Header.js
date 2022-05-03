import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  
  const andperse = '&';
  
  return (
    <header id="fixedBar">
      <div id="titleWrap">
         <h1 id="brandName">CARA BELLA </h1>
         <span className="divider"> | </span>
         <h2 id="subtitle"> SPA {andperse} AESTHETICS</h2>
      </div>
      <nav id="linkBox">

            <Link to="/contact" className="link">CONTACT</Link>
            <span className="divider"> | </span>
            <Link to="/services" className="link">SERVICES</Link>
            <span className="divider"> | </span>
            <Link to="/about"className="link">ABOUT</Link>
      </nav>

    </header>
  )
}

export default Header
import React from 'react'

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
            <a className="link">LOGIN</a>
            <span className="divider"> | </span>
            <a className="link">SERVICES</a>
            <span className="divider"> | </span>
            <a className="link">ABOUT</a>
      </nav>

    </header>
  )
}

export default Header
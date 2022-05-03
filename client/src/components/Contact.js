import React from 'react';
import HeaderFrame from '../assets/header-frame.png'

const Contact = () => {

  return (
   <div id="contactBox">
      <>
      <section className="details">
         <img alt="Wreath of pink flowers along the border of the header" src={HeaderFrame}/>
         <h2>E-Mail</h2>
            <p>
               <a href="mailto:tricia@carabellaaesthetics.com">tricia@carabellaaesthetics.com</a>
            </p>
      </section>
         
         
         <section className="details">
         <img alt="Wreath of pink flowers along the border of the header" src={HeaderFrame}/>
         <h2>Phone</h2>
            <p>
               <a href="/">817-905-6050</a>
            </p>
         </section>
            
         <section className="details">
            <button onClick={((e) => {
               e.preventDefault();
               return (
                  <form>
                     <textarea style={{width: "66%"}}></textarea>
                  </form>
               )
            })}>Compose Message</button>
         </section>
            
      </>
   </div>
  )
}

export default Contact;
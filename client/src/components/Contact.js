import React from 'react';
import HeaderFrame from '../assets/header-frame.png'

const Contact = () => {

  return (
   <div id="contactBox">
      <>
      <section className="details">
         <h2>E-Mail</h2>
            <p>
               <a href="mailto:tricia@carabellaaesthetics.com">tricia@carabellaaesthetics.com</a>
            </p>
      </section>
         
         
         <section className="details">
         <h2>Phone</h2>
            <p>
               <a href="/">817-905-6050</a>
            </p>
         </section>
            
         <section className="details">
            <button>Send Flowers</button>
         </section>
            
      </>
   </div>
  )
}

export default Contact;
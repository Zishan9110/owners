import React, { useRef } from 'react'
import './contact.css';
import Facebook from '../../Assets/Facebook.png';
import Instagram from '../../Assets/Instagram.png';
import Twitter from '../../Assets/Twitter.png';
import YouTube from '../../Assets/YouTube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_memegko', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact">
        <h2>Contact Me</h2>
        <div className="contactPara">
        <p>Please Fill Out The Form Below To Discuss Only Opourtunity Work.</p>
        </div>
       
        <div className="ContactForm" ref={form} onSubmit={sendEmail}>
            <div className="contactMail">
            <input type="text" placeholder='Your Name' className="contactName" />
            </div>
            <br/>
            <div className="contactMail">
            <input type="text" placeholder='Your Email'className="ContactEmail" />
            </div>
            <br/>
            <div className="contactMsg">
            <textarea name="" id="" cols="30" rows="10">Your Massage</textarea>
            </div>
        </div>
        <button className="contactBtn">Submit</button>

        <div className="links">
          <img src={Facebook} alt="" className="link" />
          <img src={Instagram} alt="" className="link" />
          <img src={Twitter} alt="" className="link" />
          <img src={YouTube} alt="" className="link" />
        </div>

    </section>
  )
}

export default Contact
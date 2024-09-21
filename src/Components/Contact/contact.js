import React, { useRef } from 'react';
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
        <p>Please Fill Out The Form Below To Discuss Only Opportunity Work.</p>
      </div>
      
      <form className="ContactForm" ref={form} onSubmit={sendEmail}>
        <div className="contactMail">
          <input type="text" placeholder='Your Name' className="contactName" required />
        </div>
        <br />
        <div className="contactMail">
          <input type="email" placeholder='Your Email' className="ContactEmail" required />
        </div>
        <br />
        <div className="contactMsg">
          <textarea name="message" placeholder="Your Message" cols="30" rows="10" required></textarea>
        </div>
        <button className="contactBtn" type="submit">Submit</button>
      </form>

      <div className="links">
        <a href="https://www.facebook.com/profile.php?id=100088116139465">
          <img src={Facebook} alt="Facebook" className="link" />
        </a>
        <img src={Instagram} alt="Instagram" className="link" />
        <img src={Twitter} alt="Twitter" className="link" />
        <img src={YouTube} alt="YouTube" className="link" />
      </div>
    </section>
  );
}

export default Contact;

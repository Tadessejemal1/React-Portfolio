import React, { useRef, useState } from 'react';
import './Contacts.css';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookMessenger } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const Done = () => (
    <p>Your message has been successfully sent. I will contact soon</p>
  );
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4g2k6jy', 'template_tqj835v', form.current, 'acwXwUXIBkVFYGc5f')
      .then((result) => {
        // eslint-disable-next-line no-console
        console.log(result.text);
      }, (error) => {
        // eslint-disable-next-line no-console
        console.log(error.text);
      });
    e.target.reset();
    setDone(true);
  };
  return (
    <section id="contact">
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <AiOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>tadessejemal63@gmail.com</h5>
            <a href="mailto:tadessejemal63@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact-option">
            <FaFacebookMessenger className="contact-option-icon" />
            <h4>Messager</h4>
            <h5>Tadesse Jemal</h5>
            <a href="https://m.me/tadesse.jemal.1/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact-option">
            <IoLogoWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>+251918042280</h5>
            <a href="https://api.whatsapp.com/send?phone+251918042280" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Enter Your Email" required />
          <textarea name="message" rows="7" placeholder="your message" required />
          <button type="submit" className="btn btn-primary">Send a message</button>
          {done ? <Done /> : null}
        </form>
      </div>
    </section>
  );
};

export default Contacts;

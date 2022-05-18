import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";


function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  
  const Done =() =>{
    return (
      <p>Your message has been successfully sent. I will contact soon</p>
    )
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_4rf5r7c', e.target, 'acwXwUXIBkVFYGc5f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      setDone(true);
  };
  return (
    <div className='contact'>
      <div className='contact-bg'></div>
      <div className='contact-wrapper'>
        <div className='contact-left'>
          <h1>Let's discuss your project</h1>
          <div className='contact-info'>
            <div className='contact-info-item'>
              <img 
                src='/image/phone.png'
                alt='Phone image'
                className='contact-icon'
              />
              +251-918-0422-80
            </div>   
            <div className='contact-info-item'>
              <img 
                src='/image/email.png'
                alt='Email image'
                className='contact-icon'
              />
              tadessejemal63@gmail.com
            </div>   
          </div>
        </div>
        <div className='contact-right'></div>
        <p className="contact-desc">Get in touch</p>
          <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done ? <Done /> : null}
          </form>
        </div>
    </div>
    
  )
}

export default Contact;

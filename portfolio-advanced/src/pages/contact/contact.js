import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nlcuvv3', 'template_0y102c9', form.current, 'user_chRW4wSjncPZQsX9SHv72')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Message Sent!');
          e.target.reset();
  };

  return (
      <div id='contact' className='email-container mx-auto col-3'>
          <h2 className='contact-title'>Contact Me:</h2>
    <form className='email-form d-flex align-items-center' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className='name-input' type="text" name="name" />
      <label>Email</label>
      <input className='email-input' type="email" name="email" />
      <label>Message</label>
      <textarea className='text-input' name="message" />
      <input className='send-btn' type="submit" value="Send" />
    </form>
    </div>
  );
};
import React, { useRef } from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xsccto7', 'template_brp7of7', form.current, 'ocK3BDqaZ_4dpbv11')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container con__container">
        <div className="con_options">
          <article className="con__option">
            <MdOutlineEmail className="con__option-icon"/>
            <h4>Email</h4>
            <h5>khushiarora752002@gmail.com</h5>
            <a href="mailto:khushiarora752002@gmail.com">Send an Email</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text"  name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="msg" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
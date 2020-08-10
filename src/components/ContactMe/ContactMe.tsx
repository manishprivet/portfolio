import React from "react";
import "./ContactMe.css";

function ContactMe() {
  return (
    <div className='contact-card'>
      <h1 className='header-f'>Contact Me</h1>
      <div className='social'>
        <a
          className='social-link'
          href='https://www.github.com/manishprivet'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={require("../../images/github.png")} alt='' width='59px' />
        </a>
        <a
          className='social-link'
          href='https://www.facebook.com/manishprivet'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={require("../../images/facebook.png")} alt='' width='50px' />
        </a>
        <a
          className='social-link'
          href='https://www.instagram.com/manishprivet'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={require("../../images/instagram.png")}
            alt=''
            width='50px'
          />
        </a>
        <a
          className='social-link'
          href='https://www.twitter.com/manishprivet'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={require("../../images/twitter.png")} alt='' width='50px' />
        </a>
      </div>
    </div>
  );
}

export default ContactMe;

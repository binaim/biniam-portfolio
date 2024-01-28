import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

function sendEmail() {
  // Make a request to your AWS API Gateway endpoint
  fetch('https://y9hotjb2ie.execute-api.us-east-2.amazonaws.com/prod/notifications', {
    method: 'POST',
    body: JSON.stringify({}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      console.log('Email sent successfully');
    } else {
      console.error('Failed to send email');
    }
  })
  .catch(error => {
    console.error('Error sending email:', error);
  });
}


function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/binaim/SCADA-AUTOMATION-SERVICES"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/biniam-ghebremedhin-244311235/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillInstagram className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="mailto:luwyzb@gmail.com" onClick={sendEmail}
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;

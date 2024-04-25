import React from "react";
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import "./Foooter.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText1">
            Our vision is to make all people <br />
            the best moments more special.
          </span>
        </div>

        {/* Right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Craft My Event</span>
          <span className="secondaryText2">
            bdvjlhbdsfjhlvbfsldj,<br/>,hbvdjhdscvjhbsdjcvb jsdhb<br/> jbdscjhvbdsjhvbjhdsbvjhbds
          </span>
          <div className="flexCenter f-menu">
            <div className="phone-number secondaryText1">
              <FaPhone /> Phone No: +91 87538739738
            </div>
            <div className="email-address secondaryText1">
              <FaEnvelope /> Email: kdsbvkdsbvh@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

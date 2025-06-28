import React from "react";
import "./Footer.css";
import footer_logo from "../assets/logo_big.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";
import instagram_icon from "../assets/instagram_icon.png";
import pinterest_icon from "../assets/pinterest_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>buybuy</p>
      </div>
      <ul className="footer-links">
        <li>company</li>
        <li>products</li>
        <li>offices</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>

        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>

        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2025</p>
      </div>
    </div>
  );
};

export default Footer;

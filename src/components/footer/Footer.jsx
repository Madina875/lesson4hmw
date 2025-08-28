import React from "react";
import "../footer/Footer.scss";
import { Instagram, MessageCircleMore, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <p>Footer</p>
          <ul>
            <li>
              <a href="#">users</a>
            </li>
            <li>
              <a href="#">posts</a>
            </li>
            <li>
              <a href="#">products</a>
            </li>
          </ul>
          <div className="footer-icons">
            <Instagram />
            <Youtube />
            <Twitter />
            <MessageCircleMore />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

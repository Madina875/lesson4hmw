import React from "react";
import "../header/Header.scss";
import { Instagram, MessageCircleMore, Twitter, Youtube } from "lucide-react";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="header-wrapper">
          <p>website</p>
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
          <div className="icons">
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

export default Header;

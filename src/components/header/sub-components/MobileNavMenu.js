import PropTypes from "prop-types";
import React from "react";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
      <li className="active"><a href="/home">Home</a></li>
      <li><a href="/shop">Shop Car</a></li>
       
        <li className="menu-item-has-children">
        <a href="#">Resources</a>
          <ul className="sub-menu">
          <li>
          <li><a href="/about">About</a></li>
          </li>
          <li>
          <li><a href="/about-faq">FAQ</a></li>
          </li>
          <li>
          <li><a href="/contact">Contact Us</a></li>
          </li>
          </ul>
        </li>
        <li><a href="/blog">Blog</a></li> 
        <li><a href="/contact">Contact Us</a></li> 
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object
};

export default multilanguage(MobileNavMenu);

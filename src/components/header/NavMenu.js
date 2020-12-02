import PropTypes from "prop-types";
import React from "react";
//import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
     <nav className="navbar">
            <div className="container">
              <div id="navbar">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="/home-auto-parts">Home</a></li>
                  <li><a href="/shop-grid-standard">Collections</a></li>
                  <li>
                  <a href="#">Pages
                      {sidebarMenu ? (
                        <span>
                          <i className="fa fa-angle-right"></i>
                        </span>
                      ) : (
                        <i className="fa fa-angle-down" />
                      )}
                      </a>
                    <ul className="submenu">
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
                      <li><a href="/blog-no-sidebar">Blog</a></li> 
                      <li><a href="/contact">Contact Us</a></li> 
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default multilanguage(NavMenu);

import PropTypes from "prop-types";
import React from "react";
import HeaderFour from "../wrappers/header/HeaderFour";
import FooterOne from "../wrappers/footer/FooterOne";

const LayoutFive = ({ children }) => {
  return (
    <div className="wrapper">
      {/* header */}
      <HeaderFour />
      {children}
     <FooterOne
        backgroundColorClass="bg-gray"
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
    </div>
  );
};

LayoutFive.propTypes = {
  children: PropTypes.any
};

export default LayoutFive;

import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To AR Financials</h1>
          <p>
          At AR Financials we provide services related to banking and finance to our customers. Financial products are quite complex and therefore our aim is to enable our customers to make well-informed decisions.AR Financials works as a bridge between financial institutions and consumers to empowers and enables them by finding, comparing, researching and applying for financial products only after having full visibility to the market-wide product offered by all Providers.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;

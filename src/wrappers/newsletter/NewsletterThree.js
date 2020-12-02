import PropTypes from "prop-types";
import React from "react";

const NewsletterThree = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass,
  subscribeColorClass
}) => {
  return (
    <div
      className={`subscribe-area-3 ${bgColorClass ? bgColorClass : ""} ${
        spaceTopClass ? spaceTopClass : ""
      } ${spaceBottomClass ? spaceBottomClass : ""} `}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-7 col-md-10 ml-auto mr-auto">
            <div
              className={`subscribe-style-3 text-center ${
                subscribeColorClass ? subscribeColorClass : ""
              }`}
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsletterThree.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  bgColorClass: PropTypes.string,
  subscribeColorClass: PropTypes.string
};

export default NewsletterThree;

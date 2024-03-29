import React from "react";

const MobileWidgets = () => {
  return (
    <div className="offcanvas-widget-area">
      <div className="off-canvas-contact-widget">
        <div className="header-contact-info">
          <ul className="header-contact-info__list">
            <li>
              <i className="fa fa-phone"></i>{" "}
              <a href="tel://+92 333 5522 722">+92 333 5522 722 </a>
            </li>
            <li>
              <i className="fa fa-envelope"></i>{" "}
              <a href="autoloan@arfinancials.com">autoloan@arfinancials.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/*Off Canvas Widget Social Start*/}
      <div className="off-canvas-widget-social">
        <a href="https://www.youtube.com/channel/UCtWqfprIjbcBks_mdVwmx9g/featured" title="YouTube">
          <i className="fa fa-youtube"></i>
        </a>
        <a href="https://www.facebook.com/ARFinancials" title="Facebook">
          <i className="fa fa-facebook"></i>
        </a>
       
      </div>
      {/*Off Canvas Widget Social End*/}
    </div>
  );
};

export default MobileWidgets;

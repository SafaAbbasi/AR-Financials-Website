import PropTypes from "prop-types";
import React from "react";
import Faq from "react-faq-component";

const FAQ = ({ spaceTopClass, spaceBottomClass }) => {

    const styles = {
        bgColor: 'white',
        titleTextColor: "black",
        rowTitleColor: "black",
        rowContentColor: 'grey',
        arrowColor: "blue",
    };
     
    const config = {
         animate: true,
         arrowIcon: "V",
         tabFocus: true
    };
  return (
      <div className="container">
       <div spaceTopClass="pt-100" spaceBottomClass="pb-70">
        <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
  );
};

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "What are the service charges of AR Financials?",
            content: `AR Financials works as a bridge between banks and customers and we don't charge any fee for our services / consultanch related to car financing.`,
        },
        {
            title: "Will I be offered the best rates in the market?",
            content:
                " AR financials works with different banks in market and our service is to compare the plans offered by different banks and offer you the best rate available to you.",
        },
        {
            title: "What if my car finance application  has been rejected?",
            content: `Don’t worry if you have been declined for car finance. If you are declined for finance, we work with other companies and banks who offer vehicle financing. They will assess your affordability and circumstances and offer you a rate. `,
        },
        {
            title: "Do I need a guarantor?",
            content: `The banks we work with do not require a guarantor, so if you receive a text message with good news, you have been approved on your own merit and do not require a guarantor.`,
        },
        {
            title: "What is Hire purchase?",
            content: `Hire Purchase (HP) secures your finance agreement against the car. It’s a way of spreading out the cost of the car in a series of monthly payments. Once you’ve completed all your payments, you’ll own the vehicle outright. Your monthly payments will include the cost of the vehicle, plus the interest, and an administration fee – you also have the option of paying for this upfront. Any fees on the agreement are charged by the lender you may be matched with, as a broker we do not charge any fees to you for our service.`,
        },
    ],
};
FAQ.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FAQ;
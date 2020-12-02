import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderTwentyOne from "../../wrappers/hero-slider/HeroSliderTwentyOne";
import TabProductThirteen from "../../wrappers/product/TabProductThirteen";
import CountDownThree from "../../wrappers/countdown/CountDownThree";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import BrandLogoSliderFive from "../../wrappers/brand-logo/BrandLogoSliderFive";


const HomeAutoParts = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>AR Financials |  Home</title>
        <meta
          name="description"
          content="Auto parts home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <HeroSliderTwentyOne />
        {/* tab product */}
        <TabProductThirteen
          spaceBottomClass="pb-60"
          spaceTopClass="pt-100"
          category="auto parts"
        />
        {/* countdown */}
        <CountDownThree
          spaceBottomClass="pb-80"
          dateTime="November 13, 2020 12:12:00"
          countDownImage="/assets/img/banner/deal-7.png"
        />
         {/* brand logo slider */}
         <BrandLogoSliderOne spaceBottomClass="pb-100" 
         />
          {/* brand logo slider */}
          <BrandLogoSliderFive spaceBottomClass="pb-100" 
          />
        </LayoutOne>
    </Fragment>
  );
};

export default HomeAutoParts;

import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutEight from "../../layouts/LayoutEight";
import HeroSliderTwentyTwo from "../../wrappers/hero-slider/HeroSliderTwentyTwo";


const HomeAutoParts = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>AR Financials | Home</title>
        <meta
          name="description"
          content="AR Financials Website"
        />
      </MetaTags>
      <LayoutEight headerTop="visible">
        {/* hero slider */}
        <HeroSliderTwentyTwo />
        </LayoutEight>
    </Fragment>
  );
};

export default HomeAutoParts;

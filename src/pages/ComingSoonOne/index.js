import React from "react";

import { Stack, Img, Column } from "components";

const ComingSoonOnePage = () => {
  return (
    <>
      <Stack className="bg-white_A700 3xl:h-[1036px] lg:h-[671px] xl:h-[767px] 2xl:h-[863px] mx-[auto] w-[100%]">
        <Img
          src="images/img_bg.png"
          className="absolute 3xl:h-[1035px] lg:h-[670px] xl:h-[767px] 2xl:h-[862px] w-[100%]"
          alt="BG"
        />
        <Column className="absolute bottom-[7%] inset-x-[0] items-center mx-[auto] w-[26%]">
          <div className="bg-white_A700 lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] outline outline-[0.5px] outline-indigo_50 rounded-radius10 w-[100%]"></div>
          <div className="bg-red_500 lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] outline outline-[0.5px] outline-red_900 rounded-radius10 w-[100%]"></div>
          <Img
            src="images/img_social.svg"
            className="lg:h-[17px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] lg:mt-[126px] xl:mt-[144px] 2xl:mt-[163px] 3xl:mt-[195px] w-[43%]"
            alt="Social"
          />
        </Column>
      </Stack>
    </>
  );
};

export default ComingSoonOnePage;

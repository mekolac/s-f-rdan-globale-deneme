import React from "react";

import { Column, Img } from "components";

const ComingSoonTwoPage = () => {
  return (
    <>
      <Column className="bg-gray_50 items-center justify-end mx-[auto] lg:p-[48px] xl:p-[55px] 2xl:p-[62px] 3xl:p-[74px] w-[100%]">
        <Img
          src="images/img_content_white_A700_249X475.svg"
          className="lg:h-[175px] xl:h-[200px] 2xl:h-[225px] 3xl:h-[270px] lg:mt-[277px] xl:mt-[317px] 2xl:mt-[357px] 3xl:mt-[429px] w-[32%]"
          alt="Content"
        />
        <Img
          src="images/img_social_indigo_400.svg"
          className="lg:h-[17px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] lg:mt-[105px] xl:mt-[120px] 2xl:mt-[135px] 3xl:mt-[162px] w-[12%]"
          alt="Social"
        />
      </Column>
    </>
  );
};

export default ComingSoonTwoPage;

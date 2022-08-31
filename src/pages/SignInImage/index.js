import React from "react";

import { Column, Stack, Img } from "components";

const SignInImagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 items-center mx-[auto] w-[100%]">
        <Stack className="3xl:h-[1115px] lg:h-[722px] xl:h-[826px] 2xl:h-[929px] w-[100%]">
          <div className="absolute bg-gray_600 3xl:h-[1115px] lg:h-[722px] xl:h-[826px] 2xl:h-[929px] w-[100%]"></div>
          <Stack className="absolute bg-black_900_71 lg:h-[404px] xl:h-[462px] 2xl:h-[519px] 3xl:h-[623px] inset-[0] justify-center m-[auto] lg:px-[38px] xl:px-[44px] 2xl:px-[49px] 3xl:px-[59px] rounded-radius10 shadow-bs3 w-[33%]">
            <Img
              src="images/img_content_white_A700.svg"
              className="absolute bottom-[7%] lg:h-[199px] xl:h-[227px] 2xl:h-[255px] 3xl:h-[306px] inset-x-[0] mx-[auto] w-[79%]"
              alt="Content"
            />
          </Stack>
        </Stack>
      </Column>
    </>
  );
};

export default SignInImagePage;

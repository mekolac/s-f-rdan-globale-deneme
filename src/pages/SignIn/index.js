import React from "react";

import { Column, Stack, Img } from "components";

const SignInPage = () => {
  return (
    <>
      <Column className="bg-white_A700 items-center mx-[auto] w-[100%]">
        <Stack className="bg-gray_51 3xl:h-[1115px] lg:h-[722px] xl:h-[826px] 2xl:h-[929px] lg:px-[149px] xl:px-[170px] 2xl:px-[191px] 3xl:px-[230px] w-[100%]">
          <div className="absolute bg-white_A700 lg:h-[404px] xl:h-[462px] 2xl:h-[519px] 3xl:h-[623px] inset-[0] justify-center m-[auto] rounded-radius10 shadow-bs2 w-[33%]"></div>
          <Img
            src="images/img_content_white_A700.svg"
            className="absolute bottom-[10%] lg:h-[199px] xl:h-[227px] 2xl:h-[255px] 3xl:h-[306px] inset-x-[0] mx-[auto] w-[26%]"
            alt="Content"
          />
        </Stack>
      </Column>
    </>
  );
};

export default SignInPage;

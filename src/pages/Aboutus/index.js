import React from "react";

import { Column, Stack, Img, Row, Line } from "components";

const AboutusPage = () => {
  return (
    <>
      <Column className="bg-white_A700 items-center mx-[auto] w-[100%]">
        <Stack className="lg:h-[391px] xl:h-[447px] 2xl:h-[503px] 3xl:h-[603px] w-[100%]">
          <div className="absolute bg-red_500 lg:h-[32px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] outline outline-[0.5px] outline-red_900 right-[1%] rounded-radius5 top-[3%] w-[9%]"></div>
          <Img
            src="images/img_group6.png"
            className="absolute lg:h-[391px] xl:h-[447px] 2xl:h-[503px] 3xl:h-[603px] w-[100%]"
            alt="PathTwo"
          />
        </Stack>
        <Row className="items-center justify-center lg:mt-[335px] xl:mt-[383px] 2xl:mt-[431px] 3xl:mt-[517px] w-[69%]">
          <div className="bg-gray_600 lg:h-[361px] xl:h-[413px] 2xl:h-[464px] 3xl:h-[557px] rounded-radius10 w-[32%]"></div>
          <div className="bg-gray_600 lg:h-[361px] xl:h-[413px] 2xl:h-[464px] 3xl:h-[557px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] rounded-radius10 w-[66%]"></div>
        </Row>
        <Img
          src="images/img_list_gray_600.svg"
          className="lg:h-[341px] xl:h-[390px] 2xl:h-[438px] 3xl:h-[526px] lg:mt-[267px] xl:mt-[305px] 2xl:mt-[344px] 3xl:mt-[412px] w-[58%]"
          alt="List"
        />
        <footer className="lg:mt-[134px] xl:mt-[153px] 2xl:mt-[172px] 3xl:mt-[207px] w-[100%]">
          <Column
            className="bg-cover bg-repeat justify-end lg:pt-[161px] xl:pt-[184px] 2xl:pt-[207px] 3xl:pt-[248px] lg:px-[161px] xl:px-[184px] 2xl:px-[207px] 3xl:px-[248px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group42.png')" }}
          >
            <Line className="bg-bluegray_900 h-[1px] lg:mt-[464px] xl:mt-[531px] 2xl:mt-[598px] 3xl:mt-[717px] mx-[auto] w-[97%]" />
            <Row className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] justify-end 3xl:ml-[1123px] lg:ml-[728px] xl:ml-[832px] 2xl:ml-[936px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] xl:pr-[11px] 2xl:pr-[12px] 3xl:pr-[15px] lg:pr-[9px] 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
              <Column
                className="bg-cover bg-repeat lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] items-center lg:mb-[48px] xl:mb-[55px] 2xl:mb-[62px] 3xl:mb-[74px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                style={{ backgroundImage: "url('images/img_object.png')" }}
              >
                <div className="bg-indigo_400 lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"></div>
              </Column>
              <Column
                className="bg-cover bg-repeat lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] items-center lg:mb-[48px] xl:mb-[55px] 2xl:mb-[62px] 3xl:mb-[74px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                style={{
                  backgroundImage: "url('images/img_object_16X16.png')",
                }}
              >
                <div className="bg-white_A700 lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"></div>
              </Column>
              <Column
                className="bg-cover bg-repeat lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] items-center lg:mb-[48px] xl:mb-[55px] 2xl:mb-[62px] 3xl:mb-[74px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                style={{ backgroundImage: "url('images/img_object_1.png')" }}
              >
                <div className="bg-white_A700 lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"></div>
              </Column>
            </Row>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default AboutusPage;

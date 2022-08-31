import React from "react";

import { Column, Stack, Img, Row, Line } from "components";

const CaseStudyDetailsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 justify-end mx-[auto] py-[1px] w-[100%]">
        <Column className="items-end lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] lg:px-[12px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] w-[100%]">
          <div className="bg-red_500 lg:h-[32px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] outline outline-[0.5px] outline-red_900 rounded-radius5 w-[9%]"></div>
        </Column>
        <Column className="items-center 2xl:mt-[106px] 3xl:mt-[127px] lg:mt-[82px] xl:mt-[94px] w-[100%]">
          <Stack className="bg-white_A700 border border-indigo_50 border-solid lg:h-[43px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] rounded-radius8 w-[9%]">
            <Img
              src="images/img_covet.svg"
              className="absolute bottom-[0] lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] inset-x-[0] mx-[auto] w-[65%]"
              alt="Covet"
            />
          </Stack>
          <Column className="items-center lg:mt-[242px] xl:mt-[277px] 2xl:mt-[311px] 3xl:mt-[373px] w-[69%]">
            <div className="bg-gray_600 lg:h-[413px] xl:h-[472px] 2xl:h-[531px] 3xl:h-[637px] rounded-radius10 w-[100%]"></div>
            <Row className="items-center justify-between lg:mt-[361px] xl:mt-[413px] 2xl:mt-[464px] 3xl:mt-[557px] w-[100%]">
              <div className="bg-gray_600 lg:h-[306px] xl:h-[350px] 2xl:h-[394px] 3xl:h-[473px] rounded-radius10 w-[49%]"></div>
              <div className="bg-gray_600 lg:h-[306px] xl:h-[350px] 2xl:h-[394px] 3xl:h-[473px] rounded-radius10 w-[49%]"></div>
            </Row>
            <Img
              src="images/img_content_red_500.svg"
              className="lg:h-[465px] xl:h-[531px] 2xl:h-[598px] 3xl:h-[717px] lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[82%]"
              alt="Content"
            />
          </Column>
          <Column className="items-center xl:mt-[101px] 2xl:mt-[114px] 3xl:mt-[137px] lg:mt-[88px] w-[100%]">
            <Img
              src="images/img_more.png"
              className="lg:h-[540px] xl:h-[618px] 2xl:h-[695px] 3xl:h-[834px] w-[100%]"
              alt="More"
            />
            <footer className="2xl:mt-[106px] 3xl:mt-[127px] lg:mt-[82px] xl:mt-[94px] w-[100%]">
              <Column
                className="bg-cover bg-repeat justify-end lg:pt-[161px] xl:pt-[184px] 2xl:pt-[207px] 3xl:pt-[248px] lg:px-[161px] xl:px-[184px] 2xl:px-[207px] 3xl:px-[248px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group42.png')" }}
              >
                <Line className="bg-bluegray_900 h-[1px] lg:mt-[466px] xl:mt-[533px] 2xl:mt-[599px] 3xl:mt-[719px] mx-[auto] w-[97%]" />
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
                    style={{
                      backgroundImage: "url('images/img_object_1.png')",
                    }}
                  >
                    <div className="bg-white_A700 lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"></div>
                  </Column>
                </Row>
              </Column>
            </footer>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default CaseStudyDetailsPage;

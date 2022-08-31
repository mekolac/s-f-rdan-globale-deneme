import React from "react";

import { Column, Row, Stack, Img, Line } from "components";

const ContactThreePage = () => {
  return (
    <>
      <Column className="bg-white_A700 items-end justify-end mx-[auto] lg:pt-[11px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] w-[100%]">
        <Row className="items-end justify-end w-[85%]">
          <Column className="lg:mt-[333px] xl:mt-[381px] 2xl:mt-[429px] 3xl:mt-[515px] w-[45%]">
            <div className="bg-white_A700 lg:h-[52px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] outline outline-[0.5px] outline-indigo_50 rounded-radius10 w-[88%]"></div>
            <div className="bg-white_A700 lg:h-[52px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] outline outline-[0.5px] outline-indigo_50 rounded-radius10 w-[88%]"></div>
            <div className="bg-white_A700 lg:h-[52px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] outline outline-[0.5px] outline-indigo_50 rounded-radius10 w-[88%]"></div>
            <div className="bg-white_A700 lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] outline outline-[0.5px] outline-indigo_50 rounded-radius10 w-[88%]"></div>
            <div className="bg-red_500 lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] outline outline-[0.5px] outline-red_900 rounded-radius10 w-[42%]"></div>
          </Column>
          <Column className="w-[55%]">
            <div className="bg-red_500 lg:h-[32px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[410px] xl:ml-[469px] 2xl:ml-[528px] 3xl:ml-[634px] outline outline-[0.5px] outline-red_900 rounded-radius5 w-[19%]"></div>
            <Column className="bg-bluegray_100 items-center lg:mt-[115px] xl:mt-[132px] 2xl:mt-[148px] 3xl:mt-[178px] rounded-radius10 w-[100%]">
              <Stack
                className="bg-cover bg-repeat 3xl:h-[1013px] lg:h-[656px] xl:h-[751px] 2xl:h-[844px] lg:px-[173px] xl:px-[198px] 2xl:px-[223px] 3xl:px-[267px] rounded-radius10 w-[100%]"
                style={{ backgroundImage: "url('images/img_group1.png')" }}
              >
                <Img
                  src="images/img_location.svg"
                  className="absolute bottom-[18%] lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] right-[0] w-[6%]"
                  alt="location"
                />
              </Stack>
            </Column>
          </Column>
        </Row>
        <Column className="items-center lg:mt-[118px] xl:mt-[135px] 2xl:mt-[152px] 3xl:mt-[182px] w-[100%]">
          <footer className="bg-gray_900 w-[100%]">
            <Column className="justify-end lg:mb-[27px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] lg:mt-[266px] xl:mt-[304px] 2xl:mt-[342px] 3xl:mt-[410px] mx-[auto] w-[69%]">
              <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
              <Row className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] justify-end 3xl:ml-[1107px] lg:ml-[717px] xl:ml-[820px] 2xl:ml-[923px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] xl:pr-[11px] 2xl:pr-[12px] 3xl:pr-[15px] lg:pr-[9px] 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
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
      </Column>
    </>
  );
};

export default ContactThreePage;

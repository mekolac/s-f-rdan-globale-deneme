import React from "react";

import { Column, Img, Line, Row } from "components";

const CareerDetailsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 justify-end mx-[auto] lg:pt-[11px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] w-[100%]">
        <Column className="items-end lg:px-[12px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] w-[100%]">
          <div className="bg-red_500 lg:h-[32px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] outline outline-[0.5px] outline-red_900 rounded-radius5 w-[9%]"></div>
        </Column>
        <Column className="items-center lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] lg:px-[455px] xl:px-[520px] 2xl:px-[585px] 3xl:px-[702px] w-[100%]">
          <Img
            src="images/img_content_indigo_400.svg"
            className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[91%]"
            alt="Content"
          />
        </Column>
        <Img
          src="images/img_body.svg"
          className="lg:h-[542px] xl:h-[620px] 2xl:h-[698px] 3xl:h-[837px] lg:ml-[304px] xl:ml-[348px] 2xl:ml-[391px] 3xl:ml-[470px] lg:mr-[640px] xl:mr-[732px] 2xl:mr-[824px] 3xl:mr-[988px] lg:mt-[606px] xl:mt-[694px] 2xl:mt-[780px] 3xl:mt-[936px] w-[16%]"
          alt="Body"
        />
        <Column className="items-center xl:mt-[103px] 2xl:mt-[116px] 3xl:mt-[139px] lg:mt-[90px] w-[100%]">
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

export default CareerDetailsPage;

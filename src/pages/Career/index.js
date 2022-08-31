import React from "react";

import { Column, Img, Line, Row } from "components";

const CareerPage = () => {
  return (
    <>
      <Column className="bg-white_A700 mx-[auto] w-[100%]">
        <Column className="items-center w-[100%]">
          <Column
            className="bg-cover bg-repeat items-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group6.png')" }}
          >
            <div className="bg-red_500 lg:h-[32px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[335px] xl:mb-[383px] 2xl:mb-[431px] 3xl:mb-[517px] mr-[1px] outline outline-[0.5px] outline-red_900 rounded-radius5 w-[9%]"></div>
          </Column>
          <Img
            src="images/img_content_gray_600_476X1115.svg"
            className="lg:h-[334px] xl:h-[382px] 2xl:h-[429px] 3xl:h-[515px] lg:mt-[264px] xl:mt-[302px] 2xl:mt-[340px] 3xl:mt-[408px] w-[70%]"
            alt="Content"
          />
        </Column>
        <Img
          src="images/img_features_249X822.svg"
          className="lg:h-[175px] xl:h-[200px] 2xl:h-[225px] 3xl:h-[270px] lg:ml-[171px] xl:ml-[196px] 2xl:ml-[220px] 3xl:ml-[264px] 3xl:mt-[101px] lg:mt-[65px] xl:mt-[75px] 2xl:mt-[84px] w-[51%]"
          alt="Features"
        />
        <Column className="items-center lg:mt-[114px] xl:mt-[131px] 2xl:mt-[147px] 3xl:mt-[177px] w-[100%]">
          <Img
            src="images/img_jobs.svg"
            className="lg:h-[571px] xl:h-[653px] 2xl:h-[735px] 3xl:h-[881px] w-[100%]"
            alt="Jobs"
          />
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

export default CareerPage;

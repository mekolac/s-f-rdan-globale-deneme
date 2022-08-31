import React from "react";

import { Column, Img, Line, Row } from "components";

const CaseStudyPage = () => {
  return (
    <>
      <Column className="bg-white_A700 justify-end mx-[auto] lg:pt-[11px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] w-[100%]">
        <Column className="items-end lg:px-[12px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] w-[100%]">
          <div className="bg-red_500 lg:h-[32px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] outline outline-[0.5px] outline-red_900 rounded-radius5 w-[9%]"></div>
        </Column>
        <Column className="items-center lg:mt-[312px] xl:mt-[357px] 2xl:mt-[401px] 3xl:mt-[481px] w-[100%]">
          <Column className="items-center w-[100%]">
            <Img
              src="images/img_list_1789X1600.svg"
              className="lg:h-[1253px] xl:h-[1433px] 2xl:h-[1612px] 3xl:h-[1934px] w-[100%]"
              alt="List"
            />
            <footer className="3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] w-[100%]">
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

export default CaseStudyPage;

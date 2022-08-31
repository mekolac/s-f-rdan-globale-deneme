import React from "react";

import {
  Column,
  Stack,
  Img,
  Row,
  Text,
  Button,
  Input,
  Line,
  Grid,
  List,
} from "components";

const LandingOnePage = () => {
  function handleNavigate1() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate2() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate3() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <Column className="bg-white_A700 font-circularstd mx-[auto] w-[100%]">
        <Column className="items-center lg:pr-[11px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] w-[100%]">
          <Stack className="lg:h-[609px] xl:h-[696px] 2xl:h-[783px] 3xl:h-[940px] w-[100%]">
            <Stack className="absolute lg:h-[609px] xl:h-[696px] 2xl:h-[783px] 3xl:h-[940px] left-[0] w-[91%]">
              <Img
                src="images/img_oval.png"
                className="absolute bg-gradient  lg:h-[475px] xl:h-[543px] 2xl:h-[611px] 3xl:h-[733px] left-[0] rounded-radius50 top-[0] lg:w-[474px] xl:w-[542px] 2xl:w-[610px] 3xl:w-[732px]"
                alt="Oval"
              />
              <Row className="absolute bottom-[0] items-center pl-[3px] right-[0] w-[83%]">
                <Column className="pb-[1px] pr-[1px] w-[53%]">
                  <Text className="font-bold lg:leading-[58px] xl:leading-[67px] 2xl:leading-[75px] 3xl:leading-[90px] ml-[2px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] 3xl:text-[86px] text-gray_900 lg:tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 xl:tracking-ls2 w-[76%]">
                    Redesigned, <br />
                    how you build landing page!
                  </Text>
                  <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_600 tracking-ls1 w-[85%]">
                    Create custom landing pages with Omega that convert more
                    visitors than any website. With lots of unique blocks, you
                    can easily build a page without coding.
                  </Text>
                  <Button
                    className="font-medium lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[32%]"
                    shape="RoundedBorder5"
                    size="xl"
                    variant="OutlineRed900"
                  >
                    Get Started
                  </Button>
                  <Row className="items-center lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[27%]">
                    <Img
                      src="images/img_play.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] w-[7%]"
                      alt="play"
                    />
                    <Text className="font-medium 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-indigo_400 tracking-ls1 w-[auto]">
                      Watch the intro video
                    </Text>
                  </Row>
                </Column>
                <Stack className="lg:h-[474px] xl:h-[543px] 2xl:h-[610px] 3xl:h-[732px] w-[47%]">
                  <Stack className="absolute lg:h-[474px] xl:h-[543px] 2xl:h-[610px] 3xl:h-[732px] left-[12%] w-[59%]">
                    <Img
                      src="images/img_shadow.png"
                      className="absolute bottom-[0] lg:h-[24px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] inset-x-[0] mx-[auto] w-[95%]"
                      alt="Shadow"
                    />
                    <div className="absolute bg-gray_600 lg:h-[424px] xl:h-[485px] 2xl:h-[545px] 3xl:h-[654px] inset-[0] justify-center m-[auto] w-[88%]"></div>
                    <Img
                      src="images/img_iphonebody.png"
                      className="absolute bottom-[3%] lg:h-[462px] xl:h-[528px] 2xl:h-[594px] 3xl:h-[713px] w-[100%]"
                      alt="iPhoneBody"
                    />
                  </Stack>
                  <Row className="absolute bg-indigo_400 items-center left-[0] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius8 shadow-bs1 top-[14%] w-[54%]">
                    <Button
                      className="flex lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center mb-[1px] ml-[1px] rounded-radius50 lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                      variant="icbFillAmber300"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex items-center justify-center"
                        alt="checkmark"
                      />
                    </Button>
                    <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700 tracking-ls1 w-[auto]">
                      You have successfully logged in
                    </Text>
                  </Row>
                  <Input
                    className="bottom-[0] font-normal p-[0] right-[0] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                    wrapClassName="2xl:mb-[124px] 3xl:mb-[149px] absolute bottom-[20%] flex lg:mb-[96px] w-[54%] xl:mb-[110px]"
                    name="GroupCopy"
                    placeholder="Appointment with the doctor was successful. Move to next!"
                    prefix={
                      <Img
                        src="images/img_checkmark.svg"
                        className="bg-indigo_400 left-[3%] right-[1%] absolute lg:w-[11px] lg:ml-[11px] lg:mr-[5px] xl:w-[12px] xl:ml-[12px] xl:mr-[6px] 2xl:w-[14px] 2xl:ml-[14px] 2xl:mr-[7px] 3xl:w-[17px] 3xl:ml-[17px] 3xl:mr-[8px] rounded-radius155 my-[auto]"
                        alt="checkmark"
                      />
                    }
                    size="sm"
                    variant="OutlineGray90032"
                  ></Input>
                </Stack>
              </Row>
            </Stack>
            <Column className="absolute inset-x-[0] mx-[auto] top-[2%] w-[98%]">
              <Row className="w-[100%]">
                <Text className="font-black 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                  Omega
                </Text>
                <Stack className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] 3xl:ml-[1146px] lg:ml-[742px] xl:ml-[849px] 2xl:ml-[955px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[15%]">
                  <Text className="absolute font-normal lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-indigo_400 tracking-ls1 w-[auto]">
                    <span className="text-indigo_400 font-circularstd">
                      Demos{" "}
                    </span>
                    <span className="text-gray_900 font-circularstd">
                      {" "}
                      Pages Support
                    </span>
                  </Text>
                  <Column
                    className="absolute bg-cover bg-repeat items-center left-[26%] top-[25%] w-[4%]"
                    style={{
                      backgroundImage: "url('images/img_object_5X9.png')",
                    }}
                  >
                    <div className="bg-gray_900 lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] w-[100%]"></div>
                  </Column>
                </Stack>
                <Button
                  className="font-medium lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center tracking-ls1 w-[9%]"
                  shape="RoundedBorder5"
                  size="lg"
                  variant="OutlineRed9001_2"
                >
                  Get Started
                </Button>
              </Row>
              <Row className="justify-end ml-[auto] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[29%]">
                <Column className="bg-white_A700 lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[76px] outline outline-[0.5px] outline-indigo_50 pb-[1px] px-[1px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] shadow-bs w-[50%]">
                  <Line className="bg-red_500 h-[2px] w-[100%]" />
                  <Text className="font-normal lg:leading-[28px] xl:leading-[32px] 2xl:leading-[36px] 3xl:leading-[43px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-indigo_400 tracking-ls1 w-[51%]">
                    <span className="text-indigo_400 font-circularstd">
                      SaaS Landing
                      <br />
                    </span>
                    <span className="text-gray_900 font-circularstd">
                      Startup Landing
                      <br />
                      App Landing
                      <br />
                      Desktop Landing
                    </span>
                  </Text>
                </Column>
                <Column className="bg-white_A700 items-center lg:mb-[49px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[76px] outline outline-[0.5px] outline-indigo_50 pb-[1px] px-[1px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] shadow-bs w-[50%]">
                  <Line className="bg-indigo_400 h-[2px] w-[100%]" />
                  <Row className="justify-between lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] w-[80%]">
                    <Text className="font-normal lg:leading-[28px] xl:leading-[32px] 2xl:leading-[36px] 3xl:leading-[43px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_900 tracking-ls1 w-[64%]">
                      <span className="text-gray_900 font-circularstd">
                        SaaS Landing
                        <br />
                      </span>
                      <span className="text-indigo_400 font-circularstd">
                        Startup Landing
                        <br />
                      </span>
                      <span className="text-gray_900 font-circularstd">
                        App Landing
                        <br />
                        Desktop Landing
                      </span>
                    </Text>
                    <Column
                      className="bg-cover bg-repeat items-center lg:mt-[30px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] w-[3%]"
                      style={{
                        backgroundImage: "url('images/img_object_9X5.png')",
                      }}
                    >
                      <div className="bg-gray_900 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] rotate-[90deg] w-[100%]"></div>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Stack>
        </Column>
        <Column className="items-end xl:mt-[101px] 2xl:mt-[114px] 3xl:mt-[137px] lg:mt-[88px] lg:pl-[172px] xl:pl-[197px] 2xl:pl-[222px] 3xl:pl-[266px] w-[100%]">
          <Row className="items-center justify-end w-[100%]">
            <Text className="font-normal lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 tracking-ls1 w-[auto]">
              Popular teams who use Omega for appoinments{" "}
            </Text>
            <Line className="bg-indigo_50 h-[2px] lg:ml-[36px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[56px] w-[69%]" />
          </Row>
        </Column>
        <Row className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] lg:ml-[170px] xl:ml-[195px] 2xl:ml-[219px] 3xl:ml-[263px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
          <Column
            className="bg-cover bg-repeat items-center mt-[3px] w-[100%]"
            style={{ backgroundImage: "url('images/img_object_24X140.png')" }}
          >
            <div className="bg-bluegray_400_a2 lg:h-[17px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] w-[100%]"></div>
          </Column>
          <Column
            className="bg-cover bg-repeat items-center mt-[2px] w-[100%]"
            style={{ backgroundImage: "url('images/img_object_30X148.png')" }}
          >
            <div className="bg-bluegray_400_a2 lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[100%]"></div>
          </Column>
          <Column
            className="bg-cover bg-repeat items-center mt-[4px] w-[100%]"
            style={{ backgroundImage: "url('images/img_object_28X147.png')" }}
          >
            <div className="bg-bluegray_400_a2 lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[100%]"></div>
          </Column>
          <Column
            className="bg-cover bg-repeat items-center lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] w-[93%]"
            style={{ backgroundImage: "url('images/img_object_34X93.png')" }}
          >
            <div className="bg-bluegray_400_a2 lg:h-[24px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] w-[100%]"></div>
          </Column>
          <Column
            className="bg-cover bg-repeat items-center mt-[4px] w-[100%]"
            style={{ backgroundImage: "url('images/img_object_26X101.png')" }}
          >
            <div className="bg-bluegray_400_a2 lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] w-[100%]"></div>
          </Column>
          <Column
            className="bg-cover bg-repeat items-center w-[100%]"
            style={{ backgroundImage: "url('images/img_object_30X110.png')" }}
          >
            <div className="bg-bluegray_400_a2 lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[100%]"></div>
          </Column>
        </Row>
        <Column className="items-center w-[100%]">
          <Stack className="3xl:h-[1014px] lg:h-[657px] xl:h-[751px] 2xl:h-[845px] w-[100%]">
            <Column className="absolute bg-indigo_400 bottom-[1%] items-end lg:pb-[580px] xl:pb-[663px] 2xl:pb-[746px] 3xl:pb-[895px] lg:pl-[580px] xl:pl-[663px] 2xl:pl-[746px] 3xl:pl-[895px] w-[100%]">
              <Img
                src="images/img_oval_103X620.png"
                className="3xl:h-[112px] lg:h-[73px] xl:h-[83px] 2xl:h-[93px] rounded-radius310 w-[80%]"
                alt="Oval One"
              />
            </Column>
            <Img
              src="images/img_whitecurve1.png"
              className="absolute bottom-[0] 2xl:h-[110px] 3xl:h-[132px] lg:h-[86px] xl:h-[98px] w-[100%]"
              alt="whitecurveOne"
            />
            <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[70%]">
              <Grid className="lg:gap-[21px] xl:gap-[24px] 2xl:gap-[27px] 3xl:gap-[32px] grid grid-cols-2 w-[48%]">
                <Column className="bg-white_A700 hover:cursor-pointer lg:p-[18px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Button
                    className="flex lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center ml-[2px] rounded-radius50 lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                    size="lgIcn"
                    variant="icbFillRed50018"
                  >
                    <Img
                      src="images/img_grid.svg"
                      className="flex items-center justify-center"
                      alt="grid"
                    />
                  </Button>
                  <Text className="font-bold ml-[2px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                    Multiple Layouts
                  </Text>
                  <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] ml-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[88%]">
                    With lots of unique blocks, you can easily build a page
                    without coding.
                  </Text>
                </Column>
                <Column className="bg-white_A700 hover:cursor-pointer lg:p-[18px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Button
                    className="flex lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center ml-[2px] rounded-radius50 lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                    size="mdIcn"
                    variant="icbFillAmber30019"
                  >
                    <Img
                      src="images/img_computer.svg"
                      className="flex items-center justify-center"
                      alt="computer"
                    />
                  </Button>
                  <Text className="font-bold ml-[2px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                    Fully Responsive
                  </Text>
                  <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] ml-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[88%]">
                    With lots of unique blocks, you can easily build a page
                    without coding.
                  </Text>
                </Column>
                <Column className="bg-white_A700 hover:cursor-pointer lg:p-[18px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Button
                    className="flex lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center ml-[2px] rounded-radius50 lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                    size="lgIcn"
                  >
                    <Img
                      src="images/img_bookmark.svg"
                      className="flex items-center justify-center"
                      alt="bookmark"
                    />
                  </Button>
                  <Text className="font-bold ml-[2px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                    Well Documented
                  </Text>
                  <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] ml-[2px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[88%]">
                    With lots of unique blocks, you can easily build a page
                    without coding.
                  </Text>
                </Column>
                <Column className="bg-white_A700 hover:cursor-pointer lg:p-[18px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Button
                    className="flex lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center ml-[2px] rounded-radius50 lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                    size="lgIcn"
                    variant="icbFillBluegray80019"
                  >
                    <Img
                      src="images/img_car.svg"
                      className="flex items-center justify-center"
                      alt="car"
                    />
                  </Button>
                  <Text className="font-bold ml-[2px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                    Great Support
                  </Text>
                  <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] ml-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[88%]">
                    With lots of unique blocks, you can easily build a page
                    without coding.
                  </Text>
                </Column>
              </Grid>
              <Column className="lg:ml-[46px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[71px] w-[46%]">
                <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[89%]">
                  Build a perfect landing page fast.
                </Text>
                <Column className="lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[100%]">
                  <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700_b3 tracking-ls1 w-[100%]">
                    Create custom landing pages with Omega that converts more
                    visitors than any website. With lots of unique blocks, you
                    can easily build a page without coding.
                  </Text>
                  <Button
                    className="font-medium lg:mt-[32px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[42%]"
                    shape="RoundedBorder5"
                    size="xl"
                    variant="OutlineIndigo50"
                  >
                    Check all features
                  </Button>
                </Column>
              </Column>
            </Row>
          </Stack>
          <Row className="items-center justify-center 3xl:mt-[108px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] w-[69%]">
            <Column className="w-[52%]">
              <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[89%]">
                Save tons of time on design & coding.
              </Text>
              <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] ml-[3px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_600 tracking-ls1 w-[89%]">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </Text>
              <Button
                className="font-medium ml-[3px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[35%]"
                shape="RoundedBorder5"
                size="xl"
                variant="OutlineRed9001_2"
              >
                Get Started
              </Button>
            </Column>
            <Stack className="lg:h-[419px] xl:h-[479px] 2xl:h-[539px] 3xl:h-[647px] w-[48%]">
              <Stack className="absolute lg:h-[419px] xl:h-[479px] 2xl:h-[539px] 3xl:h-[647px] right-[0] w-[78%]">
                <div className="absolute bg-gray_600 lg:h-[397px] xl:h-[454px] 2xl:h-[510px] 3xl:h-[612px] left-[0] rounded-radius10 shadow-bs top-[0] w-[93%]"></div>
                <div className="2xl:p-[6px] 3xl:p-[7px] absolute bg-gradient1  lg:p-[4px] rounded-radius10 w-[91%] xl:p-[5px] ">
                  <div className="absolute bg-white_A700 bottom-[0] lg:h-[397px] xl:h-[454px] 2xl:h-[510px] 3xl:h-[612px] outline right-[0] rounded-radius10"></div>
                </div>
              </Stack>
              <Row className="absolute bg-amber_300 bottom-[23%] items-center left-[0] lg:p-[15px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] rounded-radius10 shadow-bs1 w-[58%]">
                <Button
                  className="flex lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center rounded-radius50 lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                  variant="icbFillIndigo400"
                >
                  <Img
                    src="images/img_notification.svg"
                    className="flex items-center justify-center"
                    alt="notification"
                  />
                </Button>
                <Column className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] my-[1px] w-[62%]">
                  <Text className="font-normal ml-[2px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-gray_900_85 tracking-ls1 w-[auto]">
                    Next meeting on 30 mins
                  </Text>
                  <Text className="font-medium leading-[normal] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[100%]">
                    Project Discussion with John
                  </Text>
                </Column>
              </Row>
            </Stack>
          </Row>
          <Stack className="3xl:h-[1023px] lg:h-[663px] xl:h-[758px] 2xl:h-[852px] 2xl:mt-[109px] 3xl:mt-[131px] lg:mt-[85px] xl:mt-[97px] w-[100%]">
            <Row className="absolute bg-gray_50 xl:p-[104px] 2xl:p-[117px] 3xl:p-[140px] lg:p-[91px] top-[1%] w-[100%]">
              <Stack className="lg:h-[422px] xl:h-[482px] 2xl:h-[543px] 3xl:h-[651px] mb-[2px] lg:mt-[52px] xl:mt-[60px] 2xl:mt-[67px] 3xl:mt-[81px] w-[37%]">
                <Stack className="absolute lg:h-[422px] xl:h-[482px] 2xl:h-[543px] 3xl:h-[651px] right-[0] w-[83%]">
                  <div className="absolute bg-gray_600 lg:h-[397px] xl:h-[454px] 2xl:h-[510px] 3xl:h-[612px] right-[0] rounded-radius10 shadow-bs top-[0] w-[92%]"></div>
                  <div className="2xl:p-[6px] 3xl:p-[7px] absolute bg-gradient1  lg:p-[4px] rounded-radius10 w-[90%] xl:p-[5px] ">
                    <div className="absolute bg-gray_50 bottom-[0] lg:h-[401px] xl:h-[458px] 2xl:h-[516px] 3xl:h-[619px] left-[0] outline rounded-radius10"></div>
                  </div>
                </Stack>
                <Row className="absolute bg-red_500 left-[0] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius10 shadow-bs1 top-[23%] w-[62%]">
                  <Button
                    className="flex lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center ml-[4px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                    variant="icbFillIndigo400"
                  >
                    <Img
                      src="images/img_notification.svg"
                      className="flex items-center justify-center"
                      alt="notification One"
                    />
                  </Button>
                  <Column className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] mt-[4px] w-[64%]">
                    <Text className="font-normal ml-[2px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-white_A700_90 tracking-ls1 w-[auto]">
                      Deadline: Oct 29, 2020
                    </Text>
                    <Text className="font-medium leading-[normal] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 tracking-ls1 w-[100%]">
                      You’ve got a new project from David!
                    </Text>
                  </Column>
                </Row>
              </Stack>
              <Column className="xl:ml-[101px] 2xl:ml-[114px] 3xl:ml-[137px] lg:ml-[88px] xl:mt-[101px] 2xl:mt-[114px] 3xl:mt-[137px] lg:mt-[88px] w-[38%]">
                <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[82%]">
                  It’s everything you’ll ever need.
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] ml-[3px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_600 tracking-ls1 w-[99%]">
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </Text>
                <Row className="bg-white_A700 items-center ml-[2px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] outline outline-[0.5px] outline-indigo_50 lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius10 w-[70%]">
                  <Button
                    className="flex lg:h-[39px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] items-center justify-center rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[49px] 3xl:w-[59px]"
                    size="mdIcn"
                    variant="icbFillRed50018"
                  >
                    <Img
                      src="images/img_volume.svg"
                      className="flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px]"
                      alt="volume"
                    />
                  </Button>
                  <Text className="font-bold leading-[normal] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[74%]">
                    <span className="text-gray_900 font-circularstd">
                      50+ Unique Design Blocks{" "}
                    </span>
                    <span className="text-gray_600 font-circularstd font-normal">
                      with Carefully Coded
                    </span>
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center ml-[2px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] outline outline-[0.5px] outline-indigo_50 lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius10 w-[70%]">
                  <Button
                    className="flex lg:h-[39px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] items-center justify-center rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[49px] 3xl:w-[59px]"
                    size="mdIcn"
                  >
                    <Img
                      src="images/img_file.svg"
                      className="flex items-center justify-center"
                      alt="file"
                    />
                  </Button>
                  <Text className="font-bold leading-[normal] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[55%]">
                    <span className="text-gray_900 font-circularstd">
                      Mobile First Design
                      <br />
                    </span>
                    <span className="text-gray_600 font-circularstd font-normal">
                      on Every Devices
                    </span>
                  </Text>
                </Row>
              </Column>
            </Row>
            <Img
              src="images/img_whitecurve2.png"
              className="absolute 2xl:h-[110px] 3xl:h-[132px] lg:h-[86px] xl:h-[98px] top-[0] w-[100%]"
              alt="whitecurveTwo"
            />
          </Stack>
          <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] 3xl:mt-[108px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-center text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[29%]">
            Customers are loving our Omega
          </Text>
          <List
            className="lg:gap-[21px] xl:gap-[24px] 2xl:gap-[27px] 3xl:gap-[32px] grid grid-cols-3 min-h-[auto] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[69%]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 items-center outline outline-[0.5px] outline-indigo_50 lg:p-[18px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius10 w-[100%]">
              <Row className="mt-[2px] w-[99%]">
                <div className="bg-gray_600 lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] mt-[2px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]"></div>
                <Column className="mb-[1px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[9px] w-[68%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                    Jonathan Taylor
                  </Text>
                  <Text className="font-normal mt-[4px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[auto]">
                    CEO at Creativex
                  </Text>
                </Column>
                <Img
                  src="images/img_twitter.svg"
                  className="common-pointer lg:h-[16px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] w-[9%]"
                  onClick={handleNavigate2}
                  alt="twitter"
                />
              </Row>
              <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[100%]">
                <span className="text-gray_900 font-circularstd">
                  OMG! I cannot believe that I have got a brand new landing page
                  after getting{" "}
                </span>
                <span className="text-indigo_400 font-circularstd">@Omega</span>
                <span className="text-gray_900 font-circularstd">…</span>
              </Text>
            </Column>
            <Column className="bg-white_A700 outline outline-[0.5px] outline-indigo_50 lg:p-[17px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius10 w-[100%]">
              <Row className="items-end ml-[3px] w-[98%]">
                <div className="bg-gray_600 lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]"></div>
                <Column className="mb-[1px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[9px] w-[68%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                    Gavin Park
                  </Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[auto]">
                    CEO at Orbital
                  </Text>
                </Column>
                <Img
                  src="images/img_twitter.svg"
                  className="common-pointer lg:h-[16px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] w-[9%]"
                  onClick={handleNavigate3}
                  alt="twitter One"
                />
              </Row>
              <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[14px] lg:mb-[9px] ml-[1px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-indigo_400 tracking-ls1 w-[93%]">
                <span className="text-indigo_400 font-circularstd">@Omega</span>
                <span className="text-gray_900 font-circularstd">
                  {" "}
                  is great for creating landing pages within minutes! It
                  actually takes less time…
                </span>
              </Text>
            </Column>
            <Column className="bg-white_A700 items-center outline outline-[0.5px] outline-indigo_50 lg:p-[18px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius10 w-[100%]">
              <Row className="mt-[3px] w-[99%]">
                <div className="bg-gray_600 lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] mt-[1px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]"></div>
                <Column className="mb-[1px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[9px] w-[68%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                    Betty Norton
                  </Text>
                  <Text className="font-normal lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[auto]">
                    Freelance Designer
                  </Text>
                </Column>
                <Img
                  src="images/img_twitter.svg"
                  className="common-pointer lg:h-[16px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[9px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[9%]"
                  onClick={handleNavigate1}
                  alt="twitter Two"
                />
              </Row>
              <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[97%]">
                <span className="text-gray_900 font-circularstd">
                  Whenever I need to create a new landing page for clients,{" "}
                </span>
                <span className="text-indigo_400 font-circularstd">@Omega</span>
                <span className="text-gray_900 font-circularstd">
                  {" "}
                  is my solution…
                </span>
              </Text>
            </Column>
          </List>
          <Row className="justify-center lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[55px] w-[10%]">
            <Img
              src="images/img_map.svg"
              className="lg:h-[11px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] mt-[2px] w-[10%]"
              alt="map"
            />
            <Text className="font-medium mb-[1px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-indigo_400 tracking-ls1 w-[auto]">
              See all testimonials
            </Text>
          </Row>
          <footer className="lg:mt-[61px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[95px] w-[100%]">
            <Stack className="3xl:h-[1184px] lg:h-[767px] xl:h-[877px] 2xl:h-[987px] w-[100%]">
              <Column className="absolute bg-gray_900 lg:pb-[618px] xl:pb-[707px] 2xl:pb-[796px] 3xl:pb-[955px] lg:pr-[618px] xl:pr-[707px] 2xl:pr-[796px] 3xl:pr-[955px] top-[1%] w-[100%]">
                <Img
                  src="images/img_oval_198X565.png"
                  className="lg:h-[139px] xl:h-[159px] 2xl:h-[179px] 3xl:h-[214px] rounded-radius2825 w-[79%]"
                  alt="Oval Five"
                />
              </Column>
              <Img
                src="images/img_whitecurve1.png"
                className="absolute 2xl:h-[110px] 3xl:h-[132px] lg:h-[86px] xl:h-[98px] top-[0] w-[100%]"
                alt="whitecurveThree"
              />
              <Column className="absolute bottom-[2%] inset-x-[0] items-center mx-[auto] 3xl:pb-[10px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] 3xl:pr-[10px] lg:pr-[7px] xl:pr-[8px] 2xl:pr-[9px] w-[71%]">
                <Text className="font-bold lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                  Get started
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-white_A700_b2 tracking-ls1 w-[45%]">
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </Text>
                <Column className="items-center lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[55px] w-[48%]">
                  <Input
                    className="font-normal p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_600 text-gray_600 tracking-ls1 w-[100%]"
                    wrapClassName="w-[100%]"
                    type="text"
                    name="Input"
                    placeholder="Your name"
                    size="md"
                    variant="FillWhiteA700"
                  ></Input>
                  <Input
                    className="font-normal p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_600 text-gray_600 tracking-ls1 w-[100%]"
                    wrapClassName="2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[10px] w-[100%] xl:mt-[12px]"
                    type="email"
                    name="InputCopy"
                    placeholder="Email address"
                    size="md"
                    variant="FillWhiteA700"
                  ></Input>
                  <Button
                    className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[99%]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="OutlineRed9001_2"
                  >
                    Get Started
                  </Button>
                </Column>
                <Column className="xl:mt-[105px] 2xl:mt-[118px] 3xl:mt-[142px] lg:mt-[92px] w-[98%]">
                  <Row className="w-[92%]">
                    <Text className="font-black lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                      Omega
                    </Text>
                    <Column className="xl:ml-[105px] 2xl:ml-[118px] 3xl:ml-[142px] lg:ml-[92px] mt-[3px] w-[11%]">
                      <Text className="font-bold lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700 tracking-ls1 w-[auto]">
                        About
                      </Text>
                      <Text className="font-normal lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[95%]">
                        Our mission
                        <br />
                        Our story
                        <br />
                        Team Members
                      </Text>
                    </Column>
                    <Column className="xl:ml-[105px] 2xl:ml-[118px] 3xl:ml-[142px] lg:ml-[92px] mt-[3px] w-[11%]">
                      <Text className="font-bold lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700 tracking-ls1 w-[auto]">
                        Learn
                      </Text>
                      <Text className="font-normal lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[82%]">
                        Tutorials
                        <br />
                        How it works
                        <br />
                        F.A.Q
                      </Text>
                    </Column>
                    <Column className="xl:ml-[105px] 2xl:ml-[118px] 3xl:ml-[142px] lg:ml-[92px] mt-[2px] w-[11%]">
                      <Text className="font-bold lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700 tracking-ls1 w-[auto]">
                        Stories
                      </Text>
                      <Text className="font-normal lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[71%]">
                        Blog
                        <br />
                        Tech stories
                      </Text>
                    </Column>
                    <Column className="xl:ml-[105px] 2xl:ml-[118px] 3xl:ml-[142px] lg:ml-[92px] my-[1px] w-[8%]">
                      <Text className="font-bold lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700 tracking-ls1 w-[auto]">
                        Hire
                      </Text>
                      <Text className="font-normal lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[100%]">
                        Career
                        <br />
                        Freelancers
                        <br />
                        Trainee
                      </Text>
                    </Column>
                  </Row>
                  <Line className="bg-bluegray_900 h-[1px] 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] w-[100%]" />
                  <Row className="lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                    <Text className="font-normal mt-[4px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[9px] text-white_A700_b2 tracking-ls1 w-[auto]">
                      © 2020 UXTheme, All Rights Reserved
                    </Text>
                    <Column
                      className="bg-cover bg-repeat lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] items-center mb-[1px] lg:ml-[571px] xl:ml-[653px] 2xl:ml-[734px] 3xl:ml-[881px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                      style={{
                        backgroundImage: "url('images/img_object.png')",
                      }}
                    >
                      <div className="bg-indigo_400 lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"></div>
                    </Column>
                    <Column
                      className="bg-cover bg-repeat lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] items-center mb-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                      style={{
                        backgroundImage: "url('images/img_object_16X16.png')",
                      }}
                    >
                      <div className="bg-white_A700 lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"></div>
                    </Column>
                    <Column
                      className="bg-cover bg-repeat lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] items-center mb-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                      style={{
                        backgroundImage: "url('images/img_object_1.png')",
                      }}
                    >
                      <div className="bg-white_A700 lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"></div>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Stack>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default LandingOnePage;

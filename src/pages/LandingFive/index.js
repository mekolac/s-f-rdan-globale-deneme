import React from "react";

import {
  Column,
  Row,
  Text,
  Stack,
  Button,
  Img,
  List,
  Line,
  Switch,
} from "components";

const LandingFivePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-circularstd items-center mx-[auto] 3xl:pb-[113px] lg:pb-[73px] xl:pb-[84px] 2xl:pb-[94px] w-[100%]">
        <Column className="bg-gradient2  lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[100%]">
          <header className="mx-[auto] w-[98%]">
            <Row className="w-[100%]">
              <Text className="font-black 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                Omega
              </Text>
              <Stack className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] 3xl:ml-[1146px] lg:ml-[742px] xl:ml-[849px] 2xl:ml-[955px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[15%]">
                <Text className="absolute font-normal lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-red_500 tracking-ls1 w-[auto]">
                  <span className="text-red_500 font-circularstd">Demos</span>
                  <span className="text-indigo_400 font-circularstd"> </span>
                  <span className="text-red_500 font-circularstd"> </span>
                  <span className="text-gray_900 font-circularstd"> </span>
                  <span className="text-gray_50 font-circularstd">
                    Pages Support
                  </span>
                </Text>
                <Column
                  className="absolute bg-cover bg-repeat items-center left-[26%] top-[25%] w-[4%]"
                  style={{
                    backgroundImage: "url('images/img_object_5X9.png')",
                  }}
                >
                  <div className="bg-red_500 lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] w-[100%]"></div>
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
          </header>
          <Stack className="lg:h-[534px] xl:h-[611px] 2xl:h-[687px] 3xl:h-[824px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] lg:ml-[158px] xl:ml-[180px] 2xl:ml-[203px] 3xl:ml-[244px] 3xl:mt-[108px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] w-[86%]">
            <Column
              className="absolute bg-cover bg-repeat items-center right-[0] w-[79%]"
              style={{
                backgroundImage: "url('images/img_object_762X1070.png')",
              }}
            >
              <Img
                src="images/img_bitmap_762X1070.png"
                className="lg:h-[534px] xl:h-[611px] 2xl:h-[687px] 3xl:h-[824px] w-[100%]"
                alt="Bitmap One"
              />
            </Column>
            <Column className="absolute left-[0] top-[14%] w-[38%]">
              <Text className="font-bold lg:text-[56px] xl:text-[64px] 2xl:text-[72px] 3xl:text-[86px] text-white_A700 lg:tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 xl:tracking-ls2 w-[auto]">
                Get your next landing page.
              </Text>
              <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] ml-[2px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700_b2 tracking-ls1 w-[99%]">
                Create custom landing pages with Omega that convert more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </Text>
              <Button
                className="font-medium ml-[2px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[49%]"
                shape="RoundedBorder5"
                size="xl"
                variant="OutlineRed900"
              >
                Start 14 Days Free Trial
              </Button>
              <Text className="font-normal ml-[2px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-white_A700_b2 tracking-ls1 w-[auto]">
                No credit card required
              </Text>
            </Column>
          </Stack>
        </Column>
        <List
          className="lg:gap-[60px] xl:gap-[68px] 2xl:gap-[77px] 3xl:gap-[92px] grid grid-cols-3 min-h-[auto] lg:mt-[64px] xl:mt-[73px] 2xl:mt-[82px] 3xl:mt-[99px] w-[66%]"
          orientation="horizontal"
        >
          <Column className="w-[100%]">
            <Img
              src="images/img_computer_36X31.svg"
              className="lg:h-[26px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] ml-[2px] w-[11%]"
              alt="computer"
            />
            <Text className="font-bold lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
              Multiple Modern Layouts
            </Text>
            <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[100%]">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page quickly.
            </Text>
          </Column>
          <Column className="w-[100%]">
            <Img
              src="images/img_arrowdown.svg"
              className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] ml-[1px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
              alt="arrowdown"
            />
            <Text className="font-bold lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
              Built with Bootstrap 4
            </Text>
            <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[100%]">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page quickly.
            </Text>
          </Column>
          <Column className="w-[100%]">
            <Img
              src="images/img_computer_36X36.svg"
              className="lg:h-[26px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] ml-[2px] lg:w-[25px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
              alt="computer One"
            />
            <Text className="font-bold lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
              Fully Responsive
            </Text>
            <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[100%]">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page quickly.
            </Text>
          </Column>
        </List>
        <Line className="bg-indigo_50 h-[1px] 3xl:mt-[109px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] w-[100%]" />
        <Stack className="3xl:h-[1039px] lg:h-[673px] xl:h-[770px] 2xl:h-[866px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
          <Row className="absolute 3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] justify-end left-[15%] top-[0] 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
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
          <Stack className="absolute bottom-[0] lg:h-[620px] xl:h-[709px] 2xl:h-[798px] 3xl:h-[957px] w-[100%]">
            <Column className="absolute bg-gray_50 justify-end lg:p-[161px] xl:p-[184px] 2xl:p-[208px] 3xl:p-[249px] w-[100%]">
              <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[47%]">
                Make beautiful landing pages easily.
              </Text>
              <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_600 tracking-ls1 w-[45%]">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </Text>
              <Row className="lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mr-[auto] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[65px] 3xl:mt-[78px] w-[47%]">
                <Button className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                  <Img
                    src="images/img_checkmark_30X30.svg"
                    className="flex items-center justify-center"
                    alt="checkmark"
                  />
                </Button>
                <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] mt-[3px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                  50+ HTML Elements
                </Text>
                <Button className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:ml-[37px] xl:ml-[43px] 2xl:ml-[48px] 3xl:ml-[58px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                  <Img
                    src="images/img_checkmark_30X30.svg"
                    className="flex items-center justify-center"
                    alt="checkmark One"
                  />
                </Button>
                <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                  Bootstrap 4 Framework
                </Text>
              </Row>
              <Row className="lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mr-[auto] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[42%]">
                <Button className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                  <Img
                    src="images/img_checkmark_30X30.svg"
                    className="flex items-center justify-center"
                    alt="checkmark Two"
                  />
                </Button>
                <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                  6 Month Support
                </Text>
                <Button className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:ml-[58px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                  <Img
                    src="images/img_checkmark_30X30.svg"
                    className="flex items-center justify-center"
                    alt="checkmark Three"
                  />
                </Button>
                <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                  Lifetime Updates
                </Text>
              </Row>
            </Column>
            <Img
              src="images/img_bg_612X596.png"
              className="absolute lg:h-[429px] xl:h-[490px] 2xl:h-[552px] 3xl:h-[662px] inset-y-[0] my-[auto] right-[0] rounded-radius10 shadow-bs4 w-[37%]"
              alt="BG"
            />
          </Stack>
        </Stack>
        <Row className="items-center justify-center 2xl:mt-[107px] 3xl:mt-[128px] lg:mt-[83px] xl:mt-[95px] xl:pr-[11px] 2xl:pr-[12px] 3xl:pr-[15px] lg:pr-[9px] w-[65%]">
          <Img
            src="images/img_bg_gray_600.svg"
            className="lg:h-[488px] xl:h-[558px] 2xl:h-[627px] 3xl:h-[753px] rounded-radius10 w-[37%]"
            alt="BG One"
          />
          <Column className="xl:ml-[104px] 2xl:ml-[117px] 3xl:ml-[140px] lg:ml-[91px] pb-[4px] w-[50%]">
            <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[91%]">
              Fits everything on all your devices.
            </Text>
            <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] ml-[3px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_600 tracking-ls1 w-[99%]">
              Create custom landing pages with Omega that converts more visitors
              than any website. With lots of unique blocks, you can easily build
              a page without coding.
            </Text>
            <Row className="lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:mt-[44px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[68px] w-[62%]">
              <Img
                src="images/img_arrowdown_39X39.svg"
                className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] mt-[1px] lg:w-[27px] xl:w-[31px] 2xl:w-[35px] 3xl:w-[42px]"
                alt="arrowdown One"
              />
              <Text className="font-bold lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                Faster Development UI Kits
              </Text>
            </Row>
            <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:ml-[51px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[79px] mt-[4px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[61%]">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page quickly.
            </Text>
            <Row className="ml-[4px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] w-[74%]">
              <Column className="mt-[1px] w-[18%]">
                <div className="bg-indigo_400 2xl:h-[10px] 3xl:h-[12px] lg:h-[8px] xl:h-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[2px] rounded-tr-[2px] w-[59%]"></div>
                <Row className="items-center mt-[1px] w-[59%]">
                  <div className="bg-bluegray_102 lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[29%]"></div>
                  <div className="bg-bluegray_102 lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] ml-[2px] w-[66%]"></div>
                </Row>
              </Column>
              <Column className="w-[82%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                  Pre-made Pages for Easy Setup
                </Text>
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[100%]">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page quickly.
                </Text>
              </Column>
            </Row>
          </Column>
        </Row>
        <Stack className="lg:h-[2165px] xl:h-[2476px] 2xl:h-[2785px] 3xl:h-[3342px] lg:mt-[101px] xl:mt-[116px] 2xl:mt-[130px] 3xl:mt-[156px] w-[100%]">
          <Column className="absolute bg-gray_50 items-center 3xl:p-[108px] lg:p-[70px] xl:p-[80px] 2xl:p-[90px] top-[0] w-[100%]">
            <Text className="font-bold lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
              Customers love us
            </Text>
            <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_600 tracking-ls1 w-[35%]">
              Create custom landing pages with Omega that converts more visitors
              than any website.
            </Text>
            <Stack className="lg:h-[273px] xl:h-[313px] 2xl:h-[352px] 3xl:h-[422px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] w-[70%]">
              <Row className="absolute bg-white_A700 inset-x-[3%] items-center justify-between 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 shadow-bs5 w-[93%]">
                <div className="bg-gray_600 lg:h-[259px] xl:h-[297px] 2xl:h-[334px] 3xl:h-[400px] rounded-radius10 w-[35%]"></div>
                <Column className="items-center lg:mr-[58px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] w-[45%]">
                  <Img
                    src="images/img_computer_20X28.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[7%]"
                    alt="computer Two"
                  />
                  <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_900 tracking-ls1 w-[100%]">
                    OMG! I cannot believe that I have got a brand new landing
                    page after getting Omega. It was super easy to edit and
                    publish.
                  </Text>
                  <Text className="font-bold lg:mt-[30px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                    Jonathan Taylor
                  </Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[auto]">
                    CEO at Creativex
                  </Text>
                </Column>
              </Row>
              <Button
                className="absolute flex lg:h-[46px] xl:h-[53px] 2xl:h-[59px] 3xl:h-[71px] inset-y-[0] items-center justify-center my-[auto] right-[0] lg:w-[45px] xl:w-[52px] 2xl:w-[58px] 3xl:w-[70px]"
                shape="icbRoundedBorder34"
                size="xlIcn"
                variant="icbFillIndigo400"
              >
                <Img
                  src="images/img_arrowright.svg"
                  className="flex items-center justify-center"
                  alt="arrowright"
                />
              </Button>
              <Button
                className="absolute flex lg:h-[46px] xl:h-[53px] 2xl:h-[59px] 3xl:h-[71px] inset-y-[0] items-center justify-center left-[0] my-[auto] rotate-[180deg] lg:w-[45px] xl:w-[52px] 2xl:w-[58px] 3xl:w-[70px]"
                shape="icbRoundedBorder34"
                size="xlIcn"
                variant="icbFillWhiteA700"
              >
                <Img
                  src="images/img_arrowright_indigo_400.svg"
                  className="flex items-center justify-center"
                  alt="arrowright One"
                />
              </Button>
            </Stack>
            <Row className="items-center justify-end lg:mb-[520px] xl:mb-[594px] 2xl:mb-[669px] 3xl:mb-[802px] xl:mt-[113px] 2xl:mt-[127px] 3xl:mt-[153px] lg:mt-[99px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[77%]">
              <Column className="my-[1px] w-[35%]">
                <Text className="font-bold lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-indigo_400 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                  1M+
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_600 tracking-ls1 w-[74%]">
                  Customers visit Omega every month to get their service done.
                </Text>
              </Column>
              <Column className="w-[35%]">
                <Text className="font-bold 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[83px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-indigo_400 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                  92%
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_600 tracking-ls1 w-[77%]">
                  Satisfaction rate comes from our awesome customers.
                </Text>
              </Column>
              <Column className="my-[1px] w-[28%]">
                <Text className="font-bold lg:ml-[45px] xl:ml-[52px] 2xl:ml-[58px] 3xl:ml-[70px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-indigo_400 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                  4.9/5.0
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_600 tracking-ls1 w-[100%]">
                  Average customer ratings we have got all over internet.
                </Text>
              </Column>
            </Row>
          </Column>
          <Column className="absolute bottom-[0] items-center w-[100%]">
            <Line className="bg-indigo_50 h-[1px] w-[100%]" />
            <Stack className="lg:h-[1316px] xl:h-[1506px] 2xl:h-[1694px] 3xl:h-[2032px] lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
              <Column className="absolute bg-gray_900 bottom-[0] items-center justify-end 2xl:p-[101px] 3xl:p-[122px] lg:p-[79px] xl:p-[90px] w-[100%]">
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[185px] xl:mt-[212px] 2xl:mt-[238px] 3xl:mt-[286px] w-[78%]"
                  orientation="vertical"
                >
                  <Row className="justify-evenly lg:mr-[21px] xl:mr-[24px] 2xl:mr-[27px] 3xl:mr-[32px] lg:my-[23px] xl:my-[26px] 2xl:my-[29px] 3xl:my-[35px] w-[97%]">
                    <Column className="w-[55%]">
                      <Row className="w-[68%]">
                        <Button
                          className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                          variant="icbFillIndigo400"
                        >
                          <Img
                            src="images/img_arrowright.svg"
                            className="flex items-center justify-center"
                            alt="arrowright Two"
                          />
                        </Button>
                        <Text className="font-bold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] mt-[1px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                          Can I use Omega for my clients?
                        </Text>
                      </Row>
                      <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[55px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[80%]">
                        Absolutely. The Envato Theme license allows you to build
                        a websites for personal use or for a client. User Omega
                        for your clients.
                      </Text>
                    </Column>
                    <Column className="w-[45%]">
                      <Row className="w-[60%]">
                        <Button
                          className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                          variant="icbFillIndigo400"
                        >
                          <Img
                            src="images/img_arrowright.svg"
                            className="flex items-center justify-center"
                            alt="arrowright One"
                          />
                        </Button>
                        <Text className="font-bold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] mt-[1px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                          Do I get free updates?
                        </Text>
                      </Row>
                      <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[55px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[89%]">
                        Yes. We update all of our themes regularly, plus are
                        constantly adding new components, pages, and features to
                        our themes. Purchase once and get lifetime updates.
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center justify-evenly lg:my-[23px] xl:my-[26px] 2xl:my-[29px] 3xl:my-[35px] w-[100%]">
                    <Column className="w-[54%]">
                      <Row className="w-[64%]">
                        <Button
                          className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center mt-[1px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                          variant="icbFillIndigo400"
                        >
                          <Img
                            src="images/img_arrowright.svg"
                            className="flex items-center justify-center"
                            alt="arrowright Three"
                          />
                        </Button>
                        <Text className="font-bold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                          Does it work with WordPress?
                        </Text>
                      </Row>
                      <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[55px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[78%]">
                        Create custom landing pages with Omega that converts
                        more visitors than any website. With lots of unique
                        blocks, you can easily build a page without any design
                        or custom coding.{" "}
                      </Text>
                    </Column>
                    <Column className="w-[46%]">
                      <Row className="w-[65%]">
                        <Button
                          className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                          variant="icbFillIndigo400"
                        >
                          <Img
                            src="images/img_arrowright.svg"
                            className="flex items-center justify-center"
                            alt="arrowright One One"
                          />
                        </Button>
                        <Text className="font-bold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] mt-[1px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                          Will you provide support?
                        </Text>
                      </Row>
                      <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[55px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[90%]">
                        With lots of unique blocks, you can easily build a page
                        without any design or custom coding. with Omega that
                        converts more visitors than any website.
                      </Text>
                    </Column>
                  </Row>
                </List>
                <Text className="font-bold lg:mt-[103px] xl:mt-[118px] 2xl:mt-[133px] 3xl:mt-[159px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                  Build Fast, Launch Faster
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_600 tracking-ls1 w-[36%]">
                  Create custom landing pages with Omega that converts more
                  visitors than any website.
                </Text>
                <Button
                  className="font-medium lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[18%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="OutlineRed900"
                >
                  Start 14 Days Free Trial
                </Button>
                <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-white_A700_b2 tracking-ls1 w-[auto]">
                  No credit card required
                </Text>
              </Column>
              <Column className="absolute inset-x-[0] mx-[auto] 3xl:pt-[11px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] top-[0] w-[69%]">
                <Text className="font-bold lg:ml-[257px] xl:ml-[294px] 2xl:ml-[331px] 3xl:ml-[397px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                  Pricing & Plans
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:ml-[217px] xl:ml-[248px] 2xl:ml-[280px] 3xl:ml-[336px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_600 tracking-ls1 w-[44%]">
                  Create custom landing pages with Omega that converts more
                  visitors than any website.
                </Text>
                <Row className="justify-end ml-[auto] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] w-[28%]">
                  <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 tracking-ls1 w-[auto]">
                    Monthly
                  </Text>
                  <Switch
                    value={false}
                    className="lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[23%]"
                  />
                  <Text className="font-normal lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 tracking-ls1 w-[auto]">
                    Yearly
                  </Text>
                  <Button
                    className="font-bold 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[27%]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillRed500"
                  >
                    Save 25%
                  </Button>
                </Row>
                <List
                  className="lg:gap-[20px] xl:gap-[23px] 2xl:gap-[26px] 3xl:gap-[31px] grid grid-cols-2 min-h-[auto] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] w-[100%]"
                  orientation="horizontal"
                >
                  <Stack className="lg:h-[412px] xl:h-[471px] 2xl:h-[530px] 3xl:h-[636px] w-[100%]">
                    <Column className="absolute bg-white_A700 h-[max-content] inset-[0] items-center justify-center m-[auto] lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius10 shadow-bs5 w-[100%]">
                      <Text className="font-normal lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-indigo_400 tracking-ls1 w-[auto]">
                        Starter
                      </Text>
                      <Text className="font-normal lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_900 tracking-ls1 w-[auto]">
                        <span className="text-gray_900 font-circularstd">
                          $
                        </span>
                        <span className="text-gray_900 font-circularstd lg:text-[56px] xl:text-[64px] 2xl:text-[72px] 3xl:text-[86px] tracking-ls1">
                          19
                        </span>
                        <span className="text-gray_900 font-circularstd">
                          /mo
                        </span>
                      </Text>
                      <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 tracking-ls1 w-[auto]">
                        Per user
                      </Text>
                      <Column className="lg:mb-[51px] xl:mb-[59px] 2xl:mb-[66px] 3xl:mb-[79px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[62%]">
                        <Row className="items-end w-[99%]">
                          <Button className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                            <Img
                              src="images/img_checkmark_30X30.svg"
                              className="flex items-center justify-center"
                              alt="checkmark Four"
                            />
                          </Button>
                          <Text className="font-normal mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                            5 responsive landing pages
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[87%]">
                          <Button className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                            <Img
                              src="images/img_checkmark_30X30.svg"
                              className="flex items-center justify-center"
                              alt="checkmark One"
                            />
                          </Button>
                          <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                            50+ HTML UI elements
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[73%]">
                          <Button className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                            <Img
                              src="images/img_checkmark_30X30.svg"
                              className="flex items-center justify-center"
                              alt="checkmark Two"
                            />
                          </Button>
                          <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                            Unlimited domains
                          </Text>
                        </Row>
                        <Row className="items-end lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                          <Button className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                            <Img
                              src="images/img_checkmark_30X30.svg"
                              className="flex items-center justify-center"
                              alt="checkmark Three"
                            />
                          </Button>
                          <Text className="font-normal mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                            6 months premium support
                          </Text>
                        </Row>
                        <Row className="items-end lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[67%]">
                          <Button className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                            <Img
                              src="images/img_checkmark_30X30.svg"
                              className="flex items-center justify-center"
                              alt="checkmark Four"
                            />
                          </Button>
                          <Text className="font-normal mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                            Lifetime updates
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                    <Button
                      className="absolute bottom-[0] font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[100%]"
                      shape="CustomBorderBL10"
                      size="xl"
                      variant="FillIndigo400"
                    >
                      Start 14 Days Free Trial
                    </Button>
                  </Stack>
                  <Stack className="lg:h-[412px] xl:h-[471px] 2xl:h-[530px] 3xl:h-[636px] w-[100%]">
                    <Column className="absolute bg-white_A700 h-[max-content] inset-[0] items-center justify-center m-[auto] lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius10 shadow-bs5 w-[100%]">
                      <Text className="font-normal lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-indigo_400 tracking-ls1 w-[auto]">
                        Business
                      </Text>
                      <Text className="font-normal lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_900 tracking-ls1 w-[auto]">
                        <span className="text-gray_900 font-circularstd">
                          $
                        </span>
                        <span className="text-gray_900 font-circularstd lg:text-[56px] xl:text-[64px] 2xl:text-[72px] 3xl:text-[86px] tracking-ls1">
                          49
                        </span>
                        <span className="text-gray_900 font-circularstd">
                          /mo
                        </span>
                      </Text>
                      <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 tracking-ls1 w-[auto]">
                        Per user
                      </Text>
                      <Column className="lg:mb-[51px] xl:mb-[59px] 2xl:mb-[66px] 3xl:mb-[79px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[62%]">
                        <Row className="items-end w-[99%]">
                          <Button className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                            <Img
                              src="images/img_checkmark_30X30.svg"
                              className="flex items-center justify-center"
                              alt="checkmark Five"
                            />
                          </Button>
                          <Text className="font-normal mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                            5 responsive landing pages
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[87%]">
                          <Button className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                            <Img
                              src="images/img_checkmark_30X30.svg"
                              className="flex items-center justify-center"
                              alt="checkmark One One"
                            />
                          </Button>
                          <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                            50+ HTML UI elements
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[73%]">
                          <Button className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                            <Img
                              src="images/img_checkmark_30X30.svg"
                              className="flex items-center justify-center"
                              alt="checkmark Two One"
                            />
                          </Button>
                          <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                            Unlimited domains
                          </Text>
                        </Row>
                        <Row className="items-end lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                          <Button className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                            <Img
                              src="images/img_checkmark_30X30.svg"
                              className="flex items-center justify-center"
                              alt="checkmark Three One"
                            />
                          </Button>
                          <Text className="font-normal mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                            6 months premium support
                          </Text>
                        </Row>
                        <Row className="items-end lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[67%]">
                          <Button className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                            <Img
                              src="images/img_checkmark_30X30.svg"
                              className="flex items-center justify-center"
                              alt="checkmark Four One"
                            />
                          </Button>
                          <Text className="font-normal mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                            Lifetime updates
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                    <Button
                      className="absolute bottom-[0] font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[100%]"
                      shape="CustomBorderBL10"
                      size="xl"
                      variant="FillIndigo400"
                    >
                      Start 14 Days Free Trial
                    </Button>
                  </Stack>
                </List>
              </Column>
            </Stack>
          </Column>
        </Stack>
        <footer className="3xl:mt-[117px] lg:mt-[76px] xl:mt-[87px] 2xl:mt-[98px] w-[66%]">
          <Row className="justify-evenly lg:mr-[41px] xl:mr-[47px] 2xl:mr-[53px] 3xl:mr-[63px] w-[94%]">
            <Column className="w-[29%]">
              <Text className="font-black ml-[1px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                Omega
              </Text>
              <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] ml-[1px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[63%]">
                With lots of unique blocks, you can easily build a page without
                coding.
              </Text>
              <Row className="items-center lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] w-[38%]">
                <Column className="bg-gray_600 lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius50 lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                  <Column
                    className="bg-cover bg-repeat lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] items-center lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                    style={{ backgroundImage: "url('images/img_object.png')" }}
                  >
                    <div className="bg-white_A700 lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"></div>
                  </Column>
                </Column>
                <Column className="bg-gray_600 lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius50 lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                  <Column
                    className="bg-cover bg-repeat lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] items-center lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                    style={{
                      backgroundImage: "url('images/img_object_16X16.png')",
                    }}
                  >
                    <div className="bg-white_A700 lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"></div>
                  </Column>
                </Column>
                <Column className="bg-gray_600 lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-end 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] xl:px-[4px] lg:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                  <Column
                    className="bg-cover bg-repeat lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] items-center my-[1px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                    style={{
                      backgroundImage: "url('images/img_object_1.png')",
                    }}
                  >
                    <div className="bg-white_A700 lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"></div>
                  </Column>
                </Column>
              </Row>
            </Column>
            <Column className="mt-[3px] w-[19%]">
              <Text className="font-bold lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_900 tracking-ls1 w-[auto]">
                About
              </Text>
              <Text className="font-normal lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_900 tracking-ls1 w-[55%]">
                Our mission
                <br />
                Our story
                <br />
                Team Members
              </Text>
            </Column>
            <Column className="mt-[3px] w-[19%]">
              <Text className="font-bold lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_900 tracking-ls1 w-[auto]">
                Learn
              </Text>
              <Text className="font-normal lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_900 tracking-ls1 w-[48%]">
                Tutorials
                <br />
                How it works
                <br />
                F.A.Q
              </Text>
            </Column>
            <Column className="mt-[2px] w-[19%]">
              <Text className="font-bold lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_900 tracking-ls1 w-[auto]">
                Stories
              </Text>
              <Text className="font-normal lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_900 tracking-ls1 w-[42%]">
                Blog
                <br />
                Tech stories
              </Text>
            </Column>
            <Column className="mt-[3px] w-[14%]">
              <Text className="font-bold lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_900 tracking-ls1 w-[auto]">
                Contact us
              </Text>
              <Text className="font-normal lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-indigo_400 tracking-ls1 w-[100%]">
                support@grayic.com
                <br />
                +133-394-3439-1435
              </Text>
            </Column>
          </Row>
        </footer>
      </Column>
    </>
  );
};

export default LandingFivePage;

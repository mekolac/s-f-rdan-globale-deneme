import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Button,
  List,
  Stack,
  Input,
  PagerIndicator,
} from "components";

const LandingTwoPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-circularstd mx-[auto] 2xl:pb-[103px] 3xl:pb-[124px] lg:pb-[80px] xl:pb-[92px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Column className="bg-bluegray_102 lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
            <Row className="lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[22%]">
              <Text className="font-black lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                Omega
              </Text>
              <Text className="font-normal lg:ml-[30px] xl:ml-[35px] 2xl:ml-[39px] 3xl:ml-[47px] mt-[4px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-red_500 tracking-ls1 w-[auto]">
                <span className="text-red_500 font-circularstd">Demos</span>
                <span className="text-gray_900 font-circularstd">
                  {" "}
                  Pages Support
                </span>
              </Text>
            </Row>
            <Row className="justify-end lg:mb-[113px] xl:mb-[129px] 2xl:mb-[145px] 3xl:mb-[175px] ml-[auto] 3xl:mr-[114px] lg:mr-[74px] xl:mr-[84px] 2xl:mr-[95px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[56px] w-[79%]">
              <Column className="lg:mb-[33px] xl:mb-[38px] 2xl:mb-[43px] 3xl:mb-[51px] lg:mt-[102px] xl:mt-[117px] 2xl:mt-[132px] 3xl:mt-[158px] w-[47%]">
                <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[91%]">
                  Bring more leads for your business fast.
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] ml-[3px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_600 tracking-ls1 w-[93%]">
                  Create custom landing pages with Omega that convert more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </Text>
                <Row className="bg-white_A700 items-center ml-[3px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] outline outline-[0.5px] outline-indigo_50 lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[94%]">
                  <Img
                    src="images/img_arrowdown_bluegray_103.svg"
                    className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] w-[4%]"
                    alt="arrowdown"
                  />
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 tracking-ls1 w-[auto]">
                    Email address
                  </Text>
                  <Button
                    className="font-medium lg:ml-[116px] xl:ml-[132px] 2xl:ml-[149px] 3xl:ml-[179px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[38%]"
                    shape="RoundedBorder5"
                    size="xl"
                    variant="OutlineRed9001_2"
                  >
                    Get Started
                  </Button>
                </Row>
              </Column>
              <Img
                src="images/img_1.svg"
                className="lg:h-[133px] xl:h-[153px] 2xl:h-[172px] 3xl:h-[206px] lg:w-[133px] xl:w-[152px] 2xl:w-[171px] 3xl:w-[205px]"
                alt="One"
              />
              <Column className="bg-indigo_400 lg:h-[147px] xl:h-[169px] 2xl:h-[190px] 3xl:h-[227px] items-center lg:ml-[172px] xl:ml-[196px] 2xl:ml-[221px] 3xl:ml-[265px] lg:mt-[259px] xl:mt-[296px] 2xl:mt-[333px] 3xl:mt-[399px] lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] rounded-radius50 shadow-bs lg:w-[147px] xl:w-[168px] 2xl:w-[189px] 3xl:w-[226px]">
                <Button
                  className="flex lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[51px]"
                  variant="icbFillIndigoA201"
                >
                  <Img
                    src="images/img_arrowup.svg"
                    className="flex items-center justify-center"
                    alt="arrowup"
                  />
                </Button>
                <Text className="font-bold xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[49px] xl:text-[56px] 2xl:text-[63px] 3xl:text-[75px] text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                  39%
                </Text>
                <Text className="font-bold xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 tracking-ls1 w-[auto]">
                  Conversion
                </Text>
              </Column>
            </Row>
          </Column>
          <Row className="bg-bluegray_800 items-center lg:p-[106px] xl:p-[121px] 2xl:p-[136px] 3xl:p-[164px] w-[100%]">
            <List
              className="gap-[0] min-h-[auto] 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[83px] w-[30%]"
              orientation="vertical"
            >
              <Row className="bg-white_A700 items-center justify-evenly xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] lg:p-[18px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius10 w-[100%]">
                <Button
                  className="flex lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center rounded-radius50 lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                  size="lgIcn"
                  variant="icbFillRed50018"
                >
                  <Img
                    src="images/img_grid.svg"
                    className="flex items-center justify-center"
                    alt="grid"
                  />
                </Button>
                <Column className="xl:my-[4px] lg:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[69%]">
                  <Text className="font-bold lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                    Multiple Layouts
                  </Text>
                  <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[100%]">
                    With lots of unique blocks, you can easily build a page
                    without coding.
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center justify-evenly xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] lg:p-[17px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius10 w-[100%]">
                <Button
                  className="flex lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center rounded-radius50 lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                  size="mdIcn"
                >
                  <Img
                    src="images/img_computer_69X69.svg"
                    className="flex items-center justify-center"
                    alt="computer"
                  />
                </Button>
                <Column className="lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[69%]">
                  <Text className="font-bold lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                    Fully Responsive
                  </Text>
                  <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[100%]">
                    With lots of unique blocks, you can easily build a page
                    without coding.
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius10 w-[100%]">
                <Button
                  className="flex lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center rounded-radius50 lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                  size="lgIcn"
                  variant="icbFillBluegray80019"
                >
                  <Img
                    src="images/img_car.svg"
                    className="flex items-center justify-center"
                    alt="car"
                  />
                </Button>
                <Column className="lg:ml-[18px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] my-[4px] w-[70%]">
                  <Text className="font-bold lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                    Great Support
                  </Text>
                  <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[100%]">
                    With lots of unique blocks, you can easily build a page
                    without coding.
                  </Text>
                </Column>
              </Row>
            </List>
            <Column className="lg:ml-[126px] xl:ml-[144px] 2xl:ml-[163px] 3xl:ml-[195px] w-[40%]">
              <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] ml-[1px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[89%]">
                Build a perfect landing page fast.
              </Text>
              <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700_b3 tracking-ls1 w-[100%]">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </Text>
              <Button
                className="font-medium lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[38%]"
                shape="RoundedBorder5"
                size="xl"
                variant="OutlineRed9001_2"
              >
                Learn more
              </Button>
            </Column>
          </Row>
        </Column>
        <Column className="items-end lg:pl-[172px] xl:pl-[197px] 2xl:pl-[222px] 3xl:pl-[266px] w-[100%]">
          <Row className="items-center justify-end w-[100%]">
            <Column className="w-[37%]">
              <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[100%]">
                50k+ users are <br />
                using landing page.
              </Text>
              <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_600 tracking-ls1 w-[97%]">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </Text>
              <Button
                className="font-medium lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[55px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[40%]"
                shape="RoundedBorder5"
                size="xl"
                variant="OutlineRed9001_2"
              >
                Get Started
              </Button>
            </Column>
            <Stack className="lg:h-[521px] xl:h-[596px] 2xl:h-[671px] 3xl:h-[804px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[62%]">
              <Img
                src="images/img_bg_744X753.png"
                className="absolute lg:h-[521px] xl:h-[596px] 2xl:h-[671px] 3xl:h-[804px] right-[0] w-[89%]"
                alt="BG"
              />
              <Img
                src="images/img_1.svg"
                className="absolute bottom-[12%] lg:h-[133px] xl:h-[153px] 2xl:h-[172px] 3xl:h-[206px] left-[0] lg:w-[133px] xl:w-[152px] 2xl:w-[171px] 3xl:w-[205px]"
                alt="One One"
              />
            </Stack>
          </Row>
        </Column>
        <Column className="items-center w-[100%]">
          <Column className="bg-gray_50 items-center 3xl:p-[105px] lg:p-[68px] xl:p-[78px] 2xl:p-[88px] w-[100%]">
            <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-center text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[29%]">
              It’s everything you’ll ever need
            </Text>
            <Column className="lg:mb-[16px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[79%]">
              <Row className="items-center justify-between w-[100%]">
                <Input
                  className="font-bold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                  wrapClassName="flex w-[32%]"
                  name="One Two"
                  placeholder="50+ Unique Design Blocks"
                  prefix={
                    <Img
                      src="images/img_volume.svg"
                      className="bg-red_500_18 lg:w-[15px] lg:h-[16px] lg:ml-[7px] lg:mr-[11px] xl:w-[17px] xl:h-[18px] xl:ml-[8px] xl:mr-[12px] 2xl:w-[19px] 2xl:h-[20px] 2xl:ml-[9px] 2xl:mr-[14px] 3xl:w-[23px] 3xl:h-[24px] 3xl:ml-[10px] 3xl:mr-[17px] rounded-radius50 my-[auto]"
                      alt="volume"
                    />
                  }
                ></Input>
                <Input
                  className="font-bold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                  wrapClassName="flex w-[32%]"
                  name="1copySeven"
                  placeholder="Multiple Layouts"
                  prefix={
                    <Img
                      src="images/img_grid_22X19.svg"
                      className="bg-indigo_400_19 lg:w-[13px] lg:ml-[6px] lg:mr-[12px] xl:w-[15px] xl:ml-[7px] xl:mr-[14px] 2xl:w-[17px] 2xl:ml-[8px] 2xl:mr-[16px] 3xl:w-[20px] 3xl:ml-[9px] 3xl:mr-[19px] rounded-radius275 my-[auto]"
                      alt="grid"
                    />
                  }
                ></Input>
                <Input
                  className="font-bold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                  wrapClassName="flex w-[32%]"
                  type="number"
                  name="1copyEight"
                  placeholder="Mobile First Design"
                  prefix={
                    <Img
                      src="images/img_bookmark_22X16.svg"
                      className="bg-amber_300_19 lg:w-[11px] lg:ml-[4px] lg:mr-[13px] xl:w-[12px] xl:ml-[5px] xl:mr-[15px] 2xl:w-[14px] 2xl:ml-[6px] 2xl:mr-[17px] 3xl:w-[17px] 3xl:ml-[7px] 3xl:mr-[20px] rounded-radius275 my-[auto]"
                      alt="bookmark"
                    />
                  }
                ></Input>
              </Row>
              <Row className="items-center 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[83px] lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] w-[66%]">
                <Input
                  className="font-bold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                  wrapClassName="flex w-[48%]"
                  name="1copyNine"
                  placeholder="Fully Responsive"
                  prefix={
                    <Img
                      src="images/img_computer_69X69.svg"
                      className="bg-indigo_400_19 lg:w-[16px] lg:ml-[7px] lg:mr-[11px] xl:w-[18px] xl:ml-[8px] xl:mr-[12px] 2xl:w-[20px] 2xl:ml-[9px] 2xl:mr-[14px] 3xl:w-[24px] 3xl:ml-[11px] 3xl:mr-[17px] rounded-radius275 my-[auto]"
                      alt="computer"
                    />
                  }
                ></Input>
                <Input
                  className="font-bold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                  wrapClassName="2xl:ml-[29px] 3xl:ml-[35px] flex lg:ml-[23px] w-[48%] xl:ml-[26px]"
                  name="1copyTen"
                  placeholder="Bootstrap 4 Framework"
                  prefix={
                    <Img
                      src="images/img_grid_21X21.svg"
                      className="bg-red_500_19 lg:w-[14px] lg:h-[15px] lg:ml-[7px] lg:mr-[11px] xl:w-[16px] xl:h-[17px] xl:ml-[8px] xl:mr-[13px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[9px] 2xl:mr-[15px] 3xl:w-[22px] 3xl:h-[23px] 3xl:ml-[10px] 3xl:mr-[18px] rounded-radius50 my-[auto]"
                      alt="grid"
                    />
                  }
                  variant="OutlineBluegray8004b"
                ></Input>
              </Row>
              <Row className="items-center justify-between lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                <Input
                  className="font-bold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                  wrapClassName="flex w-[31%]"
                  name="1copyEleven"
                  placeholder="Humanly Support"
                  prefix={
                    <Img
                      src="images/img_file_24X26.svg"
                      className="bg-light_green_600_19 lg:w-[18px] lg:ml-[8px] lg:mr-[9px] xl:w-[20px] xl:ml-[9px] xl:mr-[11px] 2xl:w-[23px] 2xl:ml-[10px] 2xl:mr-[12px] 3xl:w-[28px] 3xl:ml-[12px] 3xl:mr-[15px] rounded-radius275 my-[auto]"
                      alt="file"
                    />
                  }
                ></Input>
                <Input
                  className="font-bold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                  wrapClassName="flex w-[31%]"
                  name="1copyTwelve"
                  placeholder="Lifetime Updates"
                  prefix={
                    <Img
                      src="images/img_path_red_500.svg"
                      className="bg-red_500_19 lg:w-[18px] lg:ml-[8px] lg:mr-[9px] xl:w-[20px] xl:ml-[9px] xl:mr-[11px] 2xl:w-[23px] 2xl:ml-[10px] 2xl:mr-[12px] 3xl:w-[28px] 3xl:ml-[12px] 3xl:mr-[15px] rounded-radius275 my-[auto]"
                      alt="Path"
                    />
                  }
                ></Input>
                <Input
                  className="font-bold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                  wrapClassName="flex w-[31%]"
                  name="1copyThirteen"
                  placeholder="Rich Documentation"
                  prefix={
                    <Img
                      src="images/img_bookmark.svg"
                      className="bg-indigo_400_19 lg:w-[12px] lg:ml-[6px] lg:mr-[12px] xl:w-[14px] xl:ml-[7px] xl:mr-[14px] 2xl:w-[16px] 2xl:ml-[8px] 2xl:mr-[16px] 3xl:w-[19px] 3xl:ml-[9px] 3xl:mr-[19px] rounded-radius275 my-[auto]"
                      alt="bookmark"
                    />
                  }
                  size="lg"
                ></Input>
              </Row>
            </Column>
          </Column>
          <Row className="items-center justify-center xl:mt-[100px] 2xl:mt-[113px] 3xl:mt-[136px] lg:mt-[88px] w-[67%]">
            <Column className="w-[58%]">
              <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[83%]">
                Save tons of time on design & coding.
              </Text>
              <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] ml-[3px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_600 tracking-ls1 w-[83%]">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </Text>
              <Button
                className="font-medium ml-[3px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[33%]"
                shape="RoundedBorder5"
                size="xl"
                variant="OutlineRed9001_2"
              >
                Get Started
              </Button>
            </Column>
            <Img
              src="images/img_img2.svg"
              className="lg:h-[397px] xl:h-[454px] 2xl:h-[510px] 3xl:h-[612px] w-[42%]"
              alt="ImgTwo"
            />
          </Row>
          <Column className="bg-gray_50 items-center lg:mt-[101px] xl:mt-[116px] 2xl:mt-[130px] 3xl:mt-[156px] 3xl:p-[102px] lg:p-[66px] xl:p-[76px] 2xl:p-[85px] w-[100%]">
            <Text className="font-bold lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
              Customer reviews
            </Text>
            <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_600 tracking-ls1 w-[35%]">
              Create custom landing pages with Omega that converts more visitors
              than any website.
            </Text>
            <Row className="items-center justify-center lg:mt-[43px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[67%]">
              <Column className="bg-white_A700 outline outline-[0.5px] outline-indigo_50 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius10 w-[48%]">
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[100%]">
                  OMG! I cannot believe that I have got a brand new landing page
                  after getting Omega. It was super easy to edit and publish.
                </Text>
                <Row className="lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] ml-[2px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[50%]">
                  <div className="bg-gray_600 lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] mt-[2px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]"></div>
                  <Column className="mb-[1px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[9px] w-[73%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                      Jonathan Taylor
                    </Text>
                    <Text className="font-normal mt-[4px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[auto]">
                      CEO at Creativex
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] outline outline-[0.5px] outline-indigo_50 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius10 w-[48%]">
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[100%]">
                  OMG! I cannot believe that I have got a brand new landing page
                  after getting Omega. It was super easy to edit and publish.
                </Text>
                <Row className="lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] ml-[2px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[53%]">
                  <div className="bg-gray_600 lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] mt-[2px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]"></div>
                  <Column className="mb-[1px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[9px] w-[75%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                      Marie Stanley
                    </Text>
                    <Text className="font-normal lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[auto]">
                      Digital Marketer, Writer
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Row>
            <PagerIndicator
              className="h-[8px] lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] lg:mt-[37px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[max-content]"
              count={3}
              activeCss="inline-block cursor-pointer w-[45px] h-[8px] bg-indigo_400 rounded-radius4"
              activeIndex={1}
              inactiveCss="inline-block cursor-pointer w-[17px] h-[8px] bg-indigo_50 rounded-radius4"
              selectedWrapperCss="2xl:mx-[4px] 3xl:mx-[5px] inline-block lg:mx-[3px] xl:mx-[4px]"
              unselectedWrapperCss="2xl:mx-[4px] 3xl:mx-[5px] inline-block lg:mx-[3px] xl:mx-[4px]"
            />
          </Column>
          <Row className="bg-bluegray_800 xl:p-[108px] 2xl:p-[122px] 3xl:p-[146px] lg:p-[95px] w-[100%]">
            <Img
              src="images/img_img2.svg"
              className="lg:h-[397px] xl:h-[454px] 2xl:h-[510px] 3xl:h-[612px] 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] 2xl:ml-[98px] mt-[2px] w-[34%]"
              alt="ImgTwo One"
            />
            <Column className="lg:ml-[58px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[38%]">
              <Text className="font-bold lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                Get started now
              </Text>
              <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700_b2 tracking-ls1 w-[100%]">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </Text>
              <Row className="bg-white_A700 items-center lg:mt-[30px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] outline outline-[0.5px] outline-indigo_50 lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius10 w-[87%]">
                <Img
                  src="images/img_arrowdown_bluegray_103.svg"
                  className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] w-[5%]"
                  alt="arrowdown One"
                />
                <Text className="font-normal xl:ml-[104px] 2xl:ml-[117px] 3xl:ml-[140px] lg:ml-[91px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 tracking-ls1 w-[auto]">
                  Email address
                </Text>
              </Row>
              <Button
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[87%]"
                shape="RoundedBorder10"
                size="xl"
                variant="OutlineRed9001_2"
              >
                Get Started
              </Button>
            </Column>
          </Row>
          <footer className="2xl:mt-[104px] 3xl:mt-[125px] lg:mt-[81px] xl:mt-[92px] w-[66%]">
            <Row className="justify-evenly lg:mr-[33px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[51px] w-[95%]">
              <Column className="w-[28%]">
                <Text className="font-black ml-[1px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                  Omega
                </Text>
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] ml-[1px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[63%]">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </Text>
                <Row className="items-center lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] w-[38%]">
                  <Column className="bg-gray_600 lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius50 lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]">
                    <Column
                      className="bg-cover bg-repeat lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] items-center lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                      style={{
                        backgroundImage: "url('images/img_object.png')",
                      }}
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
              <Column className="mt-[3px] w-[15%]">
                <Text className="font-bold lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_900 tracking-ls1 w-[auto]">
                  Contact us
                </Text>
                <Text className="font-normal lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-indigo_400 tracking-ls1 w-[100%]">
                  support@uxtheme.net
                  <br />
                  +133-394-3439-1435
                </Text>
              </Column>
            </Row>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default LandingTwoPage;

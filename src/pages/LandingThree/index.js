import React from "react";

import {
  Column,
  Stack,
  Row,
  Text,
  Button,
  Img,
  Input,
  SelectBox,
  Grid,
  List,
  Line,
} from "components";

const LandingThreePage = () => {
  return (
    <>
      <Column className="bg-gray_900 font-circularstd mx-[auto] lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[100%]">
        <Stack className="lg:h-[1680px] xl:h-[1922px] 2xl:h-[2162px] 3xl:h-[2594px] w-[89%]">
          <Column className="absolute top-[0] w-[100%]">
            <header className="lg:ml-[171px] xl:ml-[196px] 2xl:ml-[220px] 3xl:ml-[264px] w-[78%]">
              <Row className="w-[100%]">
                <Text className="font-black 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                  Omega
                </Text>
                <Text className="font-normal lg:ml-[256px] xl:ml-[293px] 2xl:ml-[330px] 3xl:ml-[396px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-red_500 tracking-ls1 w-[auto]">
                  <span className="text-red_500 font-circularstd">Demos</span>
                  <span className="text-gray_900 font-circularstd"> </span>
                  <span className="text-white_A700 font-circularstd">
                    {" "}
                    Pages Support
                  </span>
                </Text>
                <Button
                  className="font-medium lg:ml-[202px] xl:ml-[231px] 2xl:ml-[260px] 3xl:ml-[312px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center tracking-ls1 w-[14%]"
                  shape="RoundedBorder5"
                  size="lg"
                  variant="OutlineRed9001_2"
                >
                  Get Beta Access
                </Button>
              </Row>
            </header>
            <Row className="justify-between lg:mt-[117px] xl:mt-[134px] 2xl:mt-[151px] 3xl:mt-[181px] w-[100%]">
              <Img
                src="images/img_ovalcopy5.png"
                className="lg:h-[239px] xl:h-[274px] 2xl:h-[308px] 3xl:h-[369px] lg:mt-[318px] xl:mt-[364px] 2xl:mt-[409px] 3xl:mt-[491px] rounded-radius1705 w-[8%]"
                alt="OvalCopyFive"
              />
              <Column className="items-center lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[38%]">
                <Text className="font-bold lg:leading-[58px] xl:leading-[67px] 2xl:leading-[75px] 3xl:leading-[90px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] 3xl:text-[86px] text-white_A700 lg:tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 xl:tracking-ls2 w-[97%]">
                  Build your next landing page in 5 minutes!
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700_b2 tracking-ls1 w-[98%]">
                  Create custom landing pages with Omega that convert more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </Text>
              </Column>
              <Stack className="lg:h-[371px] xl:h-[425px] 2xl:h-[478px] 3xl:h-[573px] lg:mb-[186px] xl:mb-[212px] 2xl:mb-[239px] 3xl:mb-[287px] w-[35%]">
                <Stack className="absolute lg:h-[371px] xl:h-[425px] 2xl:h-[478px] 3xl:h-[573px] w-[100%]">
                  <div className="absolute bg-indigo_400 lg:h-[342px] xl:h-[391px] 2xl:h-[440px] 3xl:h-[528px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] lg:w-[341px] xl:w-[390px] 2xl:w-[439px] 3xl:w-[527px]"></div>
                  <div className="2xl:p-[6px] 3xl:p-[7px] absolute bg-gradient1  lg:p-[4px] rounded-radius244 w-[97%] xl:p-[5px] ">
                    <div className="absolute bg-gray_900 bottom-[0] lg:h-[342px] xl:h-[391px] 2xl:h-[440px] 3xl:h-[528px] inset-x-[0] mx-[auto] outline rounded-radius50 lg:w-[341px] xl:w-[390px] 2xl:w-[439px] 3xl:w-[527px]"></div>
                  </div>
                </Stack>
                <Column className="absolute bg-white_A700 inset-x-[0] items-center mx-[auto] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius10 shadow-bs6 top-[0] w-[76%]">
                  <Stack className="lg:h-[56px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] w-[98%]">
                    <Column className="absolute bg-white_A700 bottom-[0] justify-end outline outline-[0.5px] outline-indigo_50 lg:p-[16px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius10 w-[100%]">
                      <Text className="font-normal ml-[1px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                        contact@email.com
                      </Text>
                    </Column>
                    <Text className="absolute bg-white_A700 font-normal left-[4%] 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] 2xl:pl-[9px] xl:pr-[4px] lg:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] py-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 top-[0] tracking-ls1 w-[122px]">
                      Email address
                    </Text>
                  </Stack>
                  <Input
                    className="font-normal p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_600 text-gray_600 tracking-ls1 w-[100%]"
                    wrapClassName="2xl:mt-[18px] 3xl:mt-[21px] lg:mt-[14px] w-[98%] xl:mt-[16px]"
                    type="text"
                    name="InputCopy"
                    placeholder="Company name"
                    size="md"
                  ></Input>
                  <SelectBox
                    className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 tracking-ls1 w-[98%]"
                    placeholderClassName="text-gray_600"
                    name="InputCopyTwo"
                    placeholder="Company size"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_600.svg"
                        className="lg:w-[10px] lg:h-[7px] lg:mr-[12px] xl:w-[12px] xl:h-[8px] xl:mr-[14px] 2xl:w-[13px] 2xl:h-[9px] 2xl:mr-[16px] 3xl:w-[16px] 3xl:h-[10px] 3xl:mr-[19px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <SelectBox
                    className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 tracking-ls1 w-[98%]"
                    placeholderClassName="text-gray_600"
                    name="InputCopyThree"
                    placeholder="Yearly budget"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_600.svg"
                        className="lg:w-[10px] lg:h-[7px] lg:mr-[12px] xl:w-[12px] xl:h-[8px] xl:mr-[14px] 2xl:w-[13px] 2xl:h-[9px] 2xl:mr-[16px] 3xl:w-[16px] 3xl:h-[10px] 3xl:mr-[19px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Button
                    className="font-medium lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[98%]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="OutlineRed9001_2"
                  >
                    Get Beta Access
                  </Button>
                </Column>
              </Stack>
            </Row>
          </Column>
          <Column className="absolute bottom-[0] items-center pb-[4px] right-[5%] w-[78%]">
            <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-center text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[45%]">
              Why Omega would be your best fit?
            </Text>
            <Text className="font-normal lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700_b2 tracking-ls1 w-[auto]">
              Watch this 1 min video to learn about Omega.
            </Text>
            <Column className="bg-gray_600 items-center lg:mt-[51px] xl:mt-[59px] 2xl:mt-[66px] 3xl:mt-[79px] lg:p-[194px] xl:p-[222px] 2xl:p-[250px] 3xl:p-[300px] rounded-radius10 shadow-bs7 w-[100%]">
              <Stack className="bg-indigo_400 xl:h-[100px] 2xl:h-[112px] 3xl:h-[134px] lg:h-[87px] lg:px-[35px] xl:px-[40px] 2xl:px-[45px] 3xl:px-[55px] rounded-radius50 2xl:w-[111px] 3xl:w-[133px] lg:w-[86px] xl:w-[99px]">
                <Img
                  src="images/img_path.svg"
                  className="absolute lg:h-[16px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] inset-[0] justify-center m-[auto] w-[16%]"
                  alt="Path"
                />
              </Stack>
            </Column>
            <Grid className="lg:gap-[102px] xl:gap-[117px] 2xl:gap-[131px] 3xl:gap-[158px] grid grid-cols-3 3xl:mt-[113px] lg:mt-[73px] xl:mt-[84px] 2xl:mt-[94px] w-[89%]">
              <Column className="items-center w-[100%]">
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
                <Text className="font-bold lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                  Fully Responsive
                </Text>
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center text-white_A700_b2 tracking-ls1 w-[100%]">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </Text>
              </Column>
              <Column className="items-center w-[100%]">
                <Button
                  className="flex lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center rounded-radius50 lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                  size="lgIcn"
                  variant="icbFillRed50019"
                >
                  <Img
                    src="images/img_grid.svg"
                    className="flex items-center justify-center"
                    alt="grid"
                  />
                </Button>
                <Text className="font-bold lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                  Multiple Layouts
                </Text>
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center text-white_A700_b2 tracking-ls1 w-[100%]">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </Text>
              </Column>
              <Column className="items-center w-[100%]">
                <Button
                  className="flex lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center rounded-radius50 lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                  size="lgIcn"
                  variant="icbFillAmber30019"
                >
                  <Img
                    src="images/img_signal.svg"
                    className="flex items-center justify-center lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px]"
                    alt="signal"
                  />
                </Button>
                <Text className="font-bold lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                  Faster Loading
                </Text>
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center text-white_A700_b2 tracking-ls1 w-[100%]">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </Text>
              </Column>
              <Column className="items-center w-[100%]">
                <Button
                  className="flex lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center rounded-radius50 lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                  size="lgIcn"
                  variant="icbFillRed50019"
                >
                  <Img
                    src="images/img_icon.svg"
                    className="flex items-center justify-center"
                    alt="Icon"
                  />
                </Button>
                <Text className="font-bold lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                  Super Support
                </Text>
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center text-white_A700_b2 tracking-ls1 w-[100%]">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </Text>
              </Column>
              <Column className="items-center w-[100%]">
                <Button
                  className="flex lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center rounded-radius50 lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                  size="lgIcn"
                  variant="icbFillAmber30019"
                >
                  <Img
                    src="images/img_bookmark_69X69.svg"
                    className="flex items-center justify-center"
                    alt="bookmark"
                  />
                </Button>
                <Text className="font-bold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                  Rich Documentation
                </Text>
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center text-white_A700_b2 tracking-ls1 w-[100%]">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </Text>
              </Column>
              <Column className="items-center w-[100%]">
                <Button
                  className="flex lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center rounded-radius50 lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                  size="mdIcn"
                >
                  <Img
                    src="images/img_path_indigo_400.svg"
                    className="flex items-center justify-center"
                    alt="Path One"
                  />
                </Button>
                <Text className="font-bold lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                  Lifetime Updates
                </Text>
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center text-white_A700_b2 tracking-ls1 w-[100%]">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </Text>
              </Column>
            </Grid>
          </Column>
        </Stack>
        <Column className="items-center lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] lg:mt-[159px] xl:mt-[182px] 2xl:mt-[205px] 3xl:mt-[246px] w-[100%]">
          <Row className="justify-center w-[69%]">
            <Stack className="lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[560px] w-[46%]">
              <Img
                src="images/img_ovalcopy3.svg"
                className="absolute bottom-[0] lg:h-[312px] xl:h-[357px] 2xl:h-[401px] 3xl:h-[481px] right-[0] lg:w-[311px] xl:w-[356px] 2xl:w-[400px] 3xl:w-[480px]"
                alt="OvalCopyThree"
              />
              <div className="absolute bg-indigo_400 lg:h-[177px] xl:h-[202px] 2xl:h-[227px] 3xl:h-[273px] left-[0] rounded-radius50 top-[0] lg:w-[176px] xl:w-[201px] 2xl:w-[226px] 3xl:w-[272px]"></div>
            </Stack>
            <Column className="3xl:ml-[112px] lg:ml-[72px] xl:ml-[83px] 2xl:ml-[93px] 2xl:mt-[111px] 3xl:mt-[133px] lg:mt-[86px] xl:mt-[99px] w-[45%]">
              <Button
                className="font-bold xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[29%]"
                shape="RoundedBorder5"
                size="md"
                variant="FillIndigo400"
              >
                New Feature Added!
              </Button>
              <Column className="lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
                <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[84%]">
                  Drag and drop every elements.
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700_b2 tracking-ls1 w-[100%]">
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </Text>
              </Column>
            </Column>
          </Row>
          <Column className="bg-gray_903 items-center lg:mt-[101px] xl:mt-[116px] 2xl:mt-[130px] 3xl:mt-[156px] 3xl:p-[116px] lg:p-[75px] xl:p-[86px] 2xl:p-[97px] w-[100%]">
            <Text className="font-bold lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
              Everything is easy
            </Text>
            <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-white_A700_b2 tracking-ls1 w-[44%]">
              Create custom landing pages with Omega that converts more visitors
              than any website. With lots of unique blocks, you can easily build
              a page without coding.
            </Text>
            <Row className="items-center justify-center lg:mb-[31px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] 3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] 2xl:mt-[92px] w-[80%]">
              <div className="bg-gray_600 lg:h-[361px] xl:h-[413px] 2xl:h-[464px] 3xl:h-[557px] rounded-radius10 shadow-bs7 w-[32%]"></div>
              <div className="bg-gray_600 lg:h-[361px] xl:h-[413px] 2xl:h-[464px] 3xl:h-[557px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] rounded-radius10 shadow-bs7 w-[66%]"></div>
            </Row>
          </Column>
          <Row className="items-center justify-center xl:mt-[101px] 2xl:mt-[114px] 3xl:mt-[137px] lg:mt-[88px] w-[68%]">
            <Column className="w-[59%]">
              <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[83%]">
                50k+ users are using this landing page.
              </Text>
              <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700_b2 tracking-ls1 w-[77%]">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </Text>
              <Button
                className="font-medium lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[55px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[31%]"
                shape="RoundedBorder5"
                size="xl"
                variant="OutlineRed9001_2"
              >
                Get Beta Access
              </Button>
            </Column>
            <Stack className="lg:h-[334px] xl:h-[382px] 2xl:h-[429px] 3xl:h-[515px] w-[41%]">
              <Img
                src="images/img_ovalcopy3.svg"
                className="absolute lg:h-[312px] xl:h-[357px] 2xl:h-[401px] 3xl:h-[481px] top-[0] lg:w-[311px] xl:w-[356px] 2xl:w-[400px] 3xl:w-[480px]"
                alt="One"
              />
              <div className="absolute bg-amber_300 bottom-[0] lg:h-[193px] xl:h-[221px] 2xl:h-[248px] 3xl:h-[298px] right-[2%] rounded-radius50 lg:w-[192px] xl:w-[220px] 2xl:w-[247px] 3xl:w-[297px]"></div>
            </Stack>
          </Row>
          <Text className="font-bold lg:mt-[168px] xl:mt-[192px] 2xl:mt-[216px] 3xl:mt-[259px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
            Frequently Asked Question
          </Text>
          <Text className="font-normal lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700_b2 tracking-ls1 w-[auto]">
            Create custom landing pages with Omega that converts.
          </Text>
          <Row className="justify-center lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[67%]">
            <Column className="w-[53%]">
              <Text className="font-black lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                What’s gonna be your question?
              </Text>
              <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[88%]">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without any design or custom coding. with
                Omega that converts more visitors than any website.
              </Text>
            </Column>
            <Column className="w-[47%]">
              <Text className="font-black lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                What’s gonna be your question?
              </Text>
              <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[100%]">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without any design or custom coding.
              </Text>
            </Column>
          </Row>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[67%]"
            orientation="vertical"
          >
            <Row className="items-end justify-evenly lg:my-[24px] xl:my-[28px] 2xl:my-[31px] 3xl:my-[38px] w-[100%]">
              <Column className="lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[53%]">
                <Text className="font-black lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                  What’s gonna be your question?
                </Text>
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[88%]">
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without any design or custom coding.
                </Text>
              </Column>
              <Column className="mb-[1px] w-[47%]">
                <Text className="font-black lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                  What’s gonna be your question?
                </Text>
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[100%]">
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without any design or custom coding. with
                  Omega that converts more visitors than any website.
                </Text>
              </Column>
            </Row>
            <Line className="self-center w-[100%] h-[1px] bg-gray_904" />
            <Row className="items-center justify-evenly lg:my-[24px] xl:my-[28px] 2xl:my-[31px] 3xl:my-[38px] w-[100%]">
              <Column className="w-[53%]">
                <Text className="font-black lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                  What’s gonna be your question?
                </Text>
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[88%]">
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without any design or custom coding.
                </Text>
              </Column>
              <Column className="w-[47%]">
                <Text className="font-black lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                  What’s gonna be your question?
                </Text>
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[100%]">
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without any design or custom coding.
                </Text>
              </Column>
            </Row>
          </List>
          <Text className="font-normal 3xl:mt-[113px] lg:mt-[73px] xl:mt-[84px] 2xl:mt-[94px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[auto]">
            <span className="text-white_A700_b2 font-circularstd">
              Didn’t find your answer?{" "}
            </span>
            <span className="text-red_500 font-circularstd">
              Contact us here
            </span>
          </Text>
          <Stack className="lg:h-[367px] xl:h-[420px] 2xl:h-[472px] 3xl:h-[567px] 3xl:mt-[112px] lg:mt-[72px] xl:mt-[83px] 2xl:mt-[93px] w-[100%]">
            <Stack className="absolute lg:h-[367px] xl:h-[420px] 2xl:h-[472px] 3xl:h-[567px] w-[100%]">
              <Column className="absolute bg-gray_903 justify-end lg:pr-[258px] xl:pr-[295px] 2xl:pr-[332px] 3xl:pr-[398px] lg:pt-[258px] xl:pt-[295px] 2xl:pt-[332px] 3xl:pt-[398px] top-[3%] w-[100%]">
                <Img
                  src="images/img_ovalcopy5_137X227.png"
                  className="xl:h-[110px] 2xl:h-[124px] 3xl:h-[149px] lg:h-[96px] rounded-radius1135 w-[18%]"
                  alt="OvalCopyFive One"
                />
              </Column>
              <div className="2xl:p-[6px] 3xl:p-[7px] absolute bg-gradient1  lg:p-[4px] rounded-radius253 w-[23%] xl:p-[5px] ">
                <Img
                  src="images/img_ovalcopy.png"
                  className="absolute lg:h-[355px] xl:h-[406px] 2xl:h-[456px] 3xl:h-[547px] inset-y-[0] my-[auto] outline right-[0] rounded-radius253"
                  alt="OvalCopy One"
                />
              </div>
            </Stack>
            <Row className="absolute bottom-[35%] inset-x-[0] justify-between mx-[auto] w-[69%]">
              <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[53%]">
                Save tons of time.
                <br />
                Get new landing page.
              </Text>
              <Button
                className="font-medium lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[18%]"
                shape="RoundedBorder5"
                size="xl"
                variant="OutlineRed9001_2"
              >
                Get Beta Access
              </Button>
            </Row>
          </Stack>
          <footer className="lg:mt-[30px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[69%]">
            <Row className="w-[100%]">
              <Text className="font-black lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                Omega
              </Text>
              <Text className="font-normal lg:ml-[208px] xl:ml-[238px] 2xl:ml-[268px] 3xl:ml-[322px] mt-[2px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[auto]">
                Support Privacy Policy Terms and Conditions
              </Text>
              <Text className="font-normal 2xl:ml-[107px] 3xl:ml-[128px] lg:ml-[83px] xl:ml-[95px] mt-[2px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[auto]">
                © 2020 UXTheme, All Rights Reserved
              </Text>
            </Row>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default LandingThreePage;

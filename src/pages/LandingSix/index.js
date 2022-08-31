import React from "react";

import {
  Column,
  Row,
  Text,
  Stack,
  Button,
  Img,
  Line,
  Input,
  List,
} from "components";

const LandingSixPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-circularstd mx-[auto] lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[100%]">
        <Column className="items-center lg:px-[11px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] w-[100%]">
          <header className="w-[99%]">
            <Row className="items-center w-[100%]">
              <Text className="font-black lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                Omega
              </Text>
              <Stack className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[400px] xl:ml-[457px] 2xl:ml-[515px] 3xl:ml-[618px] w-[15%]">
                <Text className="absolute bottom-[0] font-normal lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-indigo_400 tracking-ls1 w-[auto]">
                  <span className="text-indigo_400 font-circularstd">
                    Demos{" "}
                  </span>
                  <span className="text-gray_900 font-circularstd">
                    {" "}
                    Pages Support
                  </span>
                </Text>
                <Column
                  className="absolute bg-cover bg-repeat bottom-[25%] items-center left-[26%] w-[4%]"
                  style={{
                    backgroundImage: "url('images/img_object_5X9.png')",
                  }}
                >
                  <div className="bg-indigo_400 lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] w-[100%]"></div>
                </Column>
              </Stack>
              <Button
                className="font-medium lg:ml-[366px] xl:ml-[418px] 2xl:ml-[471px] 3xl:ml-[565px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center tracking-ls1 w-[9%]"
                shape="RoundedBorder5"
                size="lg"
                variant="OutlineRed900"
              >
                Get this book
              </Button>
            </Row>
          </header>
        </Column>
        <Row className="lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] xl:mt-[103px] 2xl:mt-[116px] 3xl:mt-[139px] lg:mt-[90px] lg:pr-[11px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] w-[81%]">
          <Column
            className="bg-cover bg-repeat items-center justify-end w-[48%]"
            style={{ backgroundImage: "url('images/img_object_609X616.png')" }}
          >
            <div className="bg-gray_600 lg:h-[427px] xl:h-[488px] 2xl:h-[549px] 3xl:h-[659px] w-[100%]"></div>
          </Column>
          <Column className="3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] 2xl:ml-[98px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[87px] w-[43%]">
            <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[100%]">
              Solve your daily life problems in 1 minute.
            </Text>
            <Row className="ml-[2px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] w-[61%]">
              <Button
                className="flex lg:h-[17px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] items-center justify-center rounded-radius50 lg:w-[16px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"
                variant="icbFillIndigo40063"
              >
                <Img
                  src="images/img_checkmark_30X30.svg"
                  className="flex items-center justify-center"
                  alt="checkmark"
                />
              </Button>
              <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                12 Chapter with detail illustrations
              </Text>
            </Row>
            <Row className="ml-[3px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[83%]">
              <Button
                className="flex lg:h-[17px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] items-center justify-center rounded-radius50 lg:w-[16px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"
                variant="icbFillIndigo40063"
              >
                <Img
                  src="images/img_checkmark_30X30.svg"
                  className="flex items-center justify-center"
                  alt="checkmark One"
                />
              </Button>
              <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                Learn from the expert with 24 years experience
              </Text>
            </Row>
            <Row className="ml-[3px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[77%]">
              <Button
                className="flex lg:h-[17px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] items-center justify-center mb-[1px] rounded-radius50 lg:w-[16px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"
                variant="icbFillIndigo40063"
              >
                <Img
                  src="images/img_checkmark_30X30.svg"
                  className="flex items-center justify-center"
                  alt="checkmark Two"
                />
              </Button>
              <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                Audio version is included with the purchase
              </Text>
            </Row>
            <Button
              className="font-medium ml-[3px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[59%]"
              shape="RoundedBorder5"
              size="xl"
              variant="OutlineRed900"
            >
              Get this book - Starts from $29
            </Button>
            <Text className="font-medium ml-[3px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 tracking-ls1 w-[auto]">
              <span className="text-gray_900 font-circularstd">
                Interested in a free chapter?
              </span>
              <span className="text-bluegray_800 font-circularstd"> </span>
              <span className="text-indigo_400 font-circularstd">
                Get it now
              </span>
            </Text>
          </Column>
        </Row>
        <Column className="items-center lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] lg:mt-[144px] xl:mt-[164px] 2xl:mt-[185px] 3xl:mt-[222px] w-[100%]">
          <Row className="justify-center w-[44%]">
            <div className="bg-gray_600 2xl:h-[100px] 3xl:h-[120px] lg:h-[78px] xl:h-[89px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] rounded-radius50 3xl:w-[119px] lg:w-[77px] xl:w-[88px] 2xl:w-[99px]"></div>
            <Column className="lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[80%]">
              <Text className="font-normal italic lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[100%]">
                “OMG! I cannot believe that I have got a brand new landing page
                after getting Omega. It was super easy to edit and publish.”
              </Text>
              <Text className="font-bold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                Jonathan Taylor
              </Text>
            </Column>
          </Row>
          <Column className="items-center lg:mt-[64px] xl:mt-[73px] 2xl:mt-[82px] 3xl:mt-[99px] w-[100%]">
            <Line className="bg-indigo_50 h-[1px] w-[100%]" />
            <Text className="font-bold lg:mt-[59px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
              Chapters we’ve covered
            </Text>
            <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_600 tracking-ls1 w-[31%]">
              Create custom landing pages with Omega that converts more visitors
              than any website.
            </Text>
            <Stack className="lg:h-[273px] xl:h-[313px] 2xl:h-[352px] 3xl:h-[422px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[73%]">
              <Row className="absolute bg-white_A700 inset-x-[3%] items-center lg:p-[61px] xl:p-[70px] 2xl:p-[79px] 3xl:p-[95px] rounded-radius10 shadow-bs8 w-[94%]">
                <Column className="bg-indigo_50 mb-[1px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] lg:p-[21px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[33px] rounded-radius8 w-[23%]">
                  <Text className="font-black lg:ml-[32px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] xl:text-[112px] 2xl:text-[126px] 3xl:text-[151px] lg:text-[98px] text-bluegray_800 2xl:tracking-ls3 xl:tracking-ls3 lg:tracking-ls3 3xl:tracking-ls4 w-[auto]">
                    1
                  </Text>
                </Column>
                <Column className="2xl:ml-[101px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] w-[55%]">
                  <Text className="font-normal lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-indigo_400 tracking-ls1 w-[auto]">
                    Chapter 01
                  </Text>
                  <Text className="font-bold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                    What is problem solving?
                  </Text>
                  <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[100%]">
                    Create custom landing pages with Omega that converts more
                    visitors than any website. With lots of unique blocks, you
                    can easily build a page without coding.
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
            <Row className="items-center justify-center 2xl:mt-[100px] 3xl:mt-[121px] lg:mt-[78px] xl:mt-[89px] w-[66%]">
              <Column className="items-center w-[36%]">
                <Img
                  src="images/img_computer_36X31.svg"
                  className="lg:h-[26px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] w-[8%]"
                  alt="computer"
                />
                <Text className="font-bold lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                  Solve Daily Problems
                </Text>
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center text-gray_600 tracking-ls1 w-[77%]">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page quickly.
                </Text>
              </Column>
              <Column className="items-center w-[36%]">
                <Img
                  src="images/img_arrowdown.svg"
                  className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                  alt="arrowdown"
                />
                <Column className="items-center lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[77%]">
                  <Text className="font-bold lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                    Key Notes on Each Chapter
                  </Text>
                  <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center text-gray_600 tracking-ls1 w-[100%]">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page quickly.
                  </Text>
                </Column>
              </Column>
              <Column className="items-center w-[28%]">
                <Img
                  src="images/img_computer_36X36.svg"
                  className="lg:h-[26px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[25px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                  alt="computer One"
                />
                <Text className="font-bold lg:mt-[32px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                  Audio Book Available
                </Text>
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center text-gray_600 tracking-ls1 w-[100%]">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page quickly.
                </Text>
              </Column>
            </Row>
            <Line className="bg-indigo_50 h-[1px] 3xl:mt-[109px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] w-[100%]" />
            <Stack className="xl:h-[1058px] 2xl:h-[1190px] 3xl:h-[1428px] lg:h-[925px] w-[100%]">
              <Column className="absolute bg-gray_101 bottom-[0] items-center 3xl:p-[110px] lg:p-[71px] xl:p-[81px] 2xl:p-[91px] w-[100%]">
                <Text className="font-bold lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                  Things you’ll learn
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_600 tracking-ls1 w-[35%]">
                  Create custom landing pages with Omega that converts more
                  visitors than any website.
                </Text>
                <Column className="items-center lg:mb-[181px] xl:mb-[207px] 2xl:mb-[233px] 3xl:mb-[279px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[80%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Row className="bg-white_A700 items-center outline outline-[0.5px] outline-indigo_50 lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius10 w-[32%]">
                      <Button
                        className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                        variant="icbFillIndigo400"
                      >
                        <Img
                          src="images/img_checkmark_1.svg"
                          className="flex items-center justify-center"
                          alt="checkmark Three"
                        />
                      </Button>
                      <Text className="font-medium leading-[normal] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] my-[3px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[71%]">
                        How to improve yourself with small tasks.
                      </Text>
                    </Row>
                    <Row className="bg-white_A700 items-center justify-center outline outline-[0.5px] outline-indigo_50 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius10 w-[32%]">
                      <Button
                        className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center ml-[1px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                        variant="icbFillIndigo400"
                      >
                        <Img
                          src="images/img_checkmark_1.svg"
                          className="flex items-center justify-center"
                          alt="checkmark Four"
                        />
                      </Button>
                      <Text className="font-medium leading-[normal] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mr-[36px] xl:mr-[41px] 2xl:mr-[46px] 3xl:mr-[56px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[68%]">
                        How to utilize your time while working hard.
                      </Text>
                    </Row>
                    <Input
                      className="font-medium p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                      wrapClassName="flex w-[32%]"
                      name="1copySeven"
                      placeholder="How to think creatively."
                      prefix={
                        <Img
                          src="images/img_checkmark_1.svg"
                          className="bg-indigo_400 lg:w-[9px] lg:ml-[15px] lg:mr-[5px] xl:w-[10px] xl:ml-[17px] xl:mr-[6px] 2xl:w-[11px] 2xl:ml-[19px] 2xl:mr-[7px] 3xl:w-[14px] 3xl:ml-[23px] 3xl:mr-[8px] rounded-radius15 my-[auto]"
                          alt="checkmark"
                        />
                      }
                      size="2xl"
                    ></Input>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                    <Row className="bg-white_A700 items-center outline outline-[0.5px] outline-indigo_50 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius10 w-[32%]">
                      <Button
                        className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center ml-[1px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                        variant="icbFillIndigo400"
                      >
                        <Img
                          src="images/img_checkmark_1.svg"
                          className="flex items-center justify-center"
                          alt="checkmark Five"
                        />
                      </Button>
                      <Text className="font-medium leading-[normal] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[70%]">
                        Solving your problems without hurting yourself.
                      </Text>
                    </Row>
                    <Input
                      className="font-medium p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                      wrapClassName="flex w-[32%]"
                      name="1copyNine"
                      placeholder="Making money smartly."
                      prefix={
                        <Img
                          src="images/img_checkmark_1.svg"
                          className="bg-indigo_400 lg:w-[9px] lg:ml-[15px] lg:mr-[5px] xl:w-[10px] xl:ml-[17px] xl:mr-[6px] 2xl:w-[11px] 2xl:ml-[19px] 2xl:mr-[7px] 3xl:w-[14px] 3xl:ml-[23px] 3xl:mr-[8px] rounded-radius15 my-[auto]"
                          alt="checkmark"
                        />
                      }
                      size="2xl"
                      variant="OutlineBluegray8004b"
                    ></Input>
                    <Row className="bg-white_A700 items-center outline outline-[0.5px] outline-indigo_50 lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius10 w-[32%]">
                      <Button
                        className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                        variant="icbFillIndigo400"
                      >
                        <Img
                          src="images/img_checkmark_1.svg"
                          className="flex items-center justify-center"
                          alt="checkmark Six"
                        />
                      </Button>
                      <Text className="font-medium leading-[normal] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] my-[3px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[74%]">
                        Developing new skills fast and furious!
                      </Text>
                    </Row>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                    <Input
                      className="font-medium p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                      wrapClassName="flex w-[32%]"
                      name="1copyThirteen"
                      placeholder="Understanding People 101."
                      prefix={
                        <Img
                          src="images/img_checkmark_1.svg"
                          className="bg-indigo_400 lg:w-[9px] lg:ml-[15px] lg:mr-[5px] xl:w-[10px] xl:ml-[17px] xl:mr-[6px] 2xl:w-[11px] 2xl:ml-[19px] 2xl:mr-[7px] 3xl:w-[14px] 3xl:ml-[23px] 3xl:mr-[8px] rounded-radius15 my-[auto]"
                          alt="checkmark"
                        />
                      }
                      size="2xl"
                    ></Input>
                    <Row className="bg-white_A700 items-center justify-center outline outline-[0.5px] outline-indigo_50 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 w-[32%]">
                      <Button
                        className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center ml-[2px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                        variant="icbFillIndigo400"
                      >
                        <Img
                          src="images/img_checkmark_1.svg"
                          className="flex items-center justify-center"
                          alt="checkmark Seven"
                        />
                      </Button>
                      <Text className="font-medium leading-[normal] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mr-[38px] xl:mr-[44px] 2xl:mr-[49px] 3xl:mr-[59px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[67%]">
                        10 secrects to solve any problem easily.
                      </Text>
                    </Row>
                    <Row className="bg-white_A700 items-center justify-center outline outline-[0.5px] outline-indigo_50 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 w-[32%]">
                      <Button
                        className="flex lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] items-center justify-center ml-[2px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                        variant="icbFillIndigo400"
                      >
                        <Img
                          src="images/img_checkmark_1.svg"
                          className="flex items-center justify-center"
                          alt="checkmark Eight"
                        />
                      </Button>
                      <Text className="font-medium leading-[normal] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mr-[24px] xl:mr-[28px] 2xl:mr-[31px] 3xl:mr-[37px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[73%]">
                        Creating valuable goal for next 5 years.
                      </Text>
                    </Row>
                  </Row>
                  <Row className="bg-bluegray_800 items-center 3xl:mt-[119px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 shadow-bs w-[100%]">
                    <Column
                      className="bg-cover bg-repeat items-center lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[25px] w-[13%]"
                      style={{
                        backgroundImage: "url('images/img_object_134X136.png')",
                      }}
                    >
                      <div className="bg-gray_50 xl:h-[108px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] w-[100%]"></div>
                    </Column>
                    <Column className="lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] w-[52%]">
                      <Text className="font-bold lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[auto]">
                        Get a free chapter of this book
                      </Text>
                      <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_b2 tracking-ls1 w-[62%]">
                        Create custom landing pages with Omega that converts
                        more visitors than any website.
                      </Text>
                    </Column>
                    <Button
                      className="font-medium lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[22%]"
                      shape="RoundedBorder5"
                      size="xl"
                      variant="OutlineRed900"
                    >
                      Get a free chapter
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="absolute bottom-[0] items-center justify-end lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[100%]">
                <Row className="items-center justify-center w-[65%]">
                  <Column className="mt-[1px] w-[35%]">
                    <Text className="font-bold lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[76px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-indigo_400 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                      50K+
                    </Text>
                    <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_600 tracking-ls1 w-[72%]">
                      People are already reading this book and improving!
                    </Text>
                  </Column>
                  <Column className="w-[35%]">
                    <Text className="font-bold lg:ml-[64px] xl:ml-[73px] 2xl:ml-[82px] 3xl:ml-[99px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-indigo_400 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                      96%
                    </Text>
                    <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_600 tracking-ls1 w-[77%]">
                      Satisfaction rate comes from our awesome customers.
                    </Text>
                  </Column>
                  <Column className="w-[29%]">
                    <Text className="font-bold lg:ml-[45px] xl:ml-[52px] 2xl:ml-[58px] 3xl:ml-[70px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-indigo_400 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                      4.9/5.0
                    </Text>
                    <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_600 tracking-ls1 w-[100%]">
                      Average customer ratings we have got from Amazon users.
                    </Text>
                  </Column>
                </Row>
                <Line className="bg-indigo_50 h-[1px] 2xl:mt-[101px] 3xl:mt-[122px] lg:mt-[79px] xl:mt-[90px] w-[100%]" />
              </Column>
            </Stack>
            <Text className="font-bold lg:mt-[57px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[88px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
              Reviews from readers
            </Text>
            <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_600 tracking-ls1 w-[31%]">
              Create custom landing pages with Omega that converts more visitors
              than any website.
            </Text>
            <List
              className="lg:gap-[21px] xl:gap-[24px] 2xl:gap-[27px] 3xl:gap-[33px] grid grid-cols-3 min-h-[auto] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[69%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 lg:p-[23px] xl:p-[27px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius10 shadow-bs9 w-[100%]">
                <Img
                  src="images/img_favourite31.svg"
                  className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] ml-[2px] mt-[4px] w-[34%]"
                  alt="favouriteThirtyOne"
                />
                <Text className="font-normal italic lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[99%]">
                  “You made it so simple. My new site is so much faster and
                  easier to work with than my old site. I just choose the page,
                  make the change and click save.”
                </Text>
                <Row className="xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] ml-[2px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] w-[67%]">
                  <div className="bg-gray_600 lg:h-[31px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] mt-[3px] rounded-radius50 lg:w-[30px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"></div>
                  <Column className="items-center lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[68%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                      Darika Samak
                    </Text>
                    <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[auto]">
                      From Amazon.com
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 lg:p-[24px] xl:p-[28px] 2xl:p-[31px] 3xl:p-[37px] rounded-radius10 shadow-bs9 w-[100%]">
                <Img
                  src="images/img_favourite31_16X96.svg"
                  className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] ml-[1px] mt-[3px] w-[34%]"
                  alt="favouriteThirtyOne One"
                />
                <Text className="font-normal italic lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[98%]">
                  “Simply the best. Better than all the rest. I’d recommend this
                  product to beginners and advanced users.”
                </Text>
                <Row className="mb-[4px] ml-[1px] lg:mt-[60px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[92px] w-[68%]">
                  <div className="bg-gray_600 lg:h-[31px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] mt-[3px] rounded-radius50 lg:w-[30px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"></div>
                  <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[68%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                      Elsie Curtis
                    </Text>
                    <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[auto]">
                      From Amazon.com
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] rounded-radius10 shadow-bs9 w-[100%]">
                <Img
                  src="images/img_favourite31.svg"
                  className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] mt-[2px] w-[35%]"
                  alt="favouriteThirtyOne Two"
                />
                <Text className="font-normal italic lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[90%]">
                  Must have book for students, who want to be Product Designer,
                  UX Designer, or Interaction Designer.
                </Text>
                <Row className="mb-[3px] lg:mt-[57px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[88px] w-[79%]">
                  <div className="bg-gray_600 lg:h-[31px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] mt-[2px] rounded-radius50 lg:w-[30px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[46px]"></div>
                  <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[73%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                      Trashae Hubbard
                    </Text>
                    <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[auto]">
                      From Amazon.com
                    </Text>
                  </Column>
                </Row>
              </Column>
            </List>
            <Text className="font-medium lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-indigo_400 tracking-ls1 underline w-[auto]">
              Check all 3,583 reviews on Amazon.com
            </Text>
            <Line className="bg-indigo_50 h-[1px] 3xl:mt-[114px] lg:mt-[74px] xl:mt-[84px] 2xl:mt-[95px] w-[100%]" />
            <Text className="font-bold lg:mt-[63px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[98px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
              About the author
            </Text>
            <Row className="items-center justify-center lg:mt-[64px] xl:mt-[73px] 2xl:mt-[82px] 3xl:mt-[99px] w-[57%]">
              <div className="bg-gray_600 lg:h-[190px] xl:h-[217px] 2xl:h-[245px] 3xl:h-[293px] rotate-[180deg] rounded-radius50 lg:w-[189px] xl:w-[216px] 2xl:w-[244px] 3xl:w-[292px]"></div>
              <Column className="lg:ml-[55px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] w-[61%]">
                <Text className="font-bold lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                  Joseph Williams
                </Text>
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[100%]">
                  <span className="text-gray_600 font-circularstd">
                    {`Hey! My name is Joseph Williams and I'm a product designer based in Berlin. Most recently I led the design of multiple products at WeWork and prior to that I worked with startups building their products and design culture.`}
                    <br />
                    <br />
                    Previous products I built for the design community are used
                    by tens of thousands of designers working at companies like
                    Google, Airbnb, Netflix and Boeing. Products I built or
                    designed are featured in Wired, TechCrunch, Forbes, Quartz,
                    Smashing Magazine, Awwwards and more.
                    <br />
                    <br />
                    Reach me on{" "}
                  </span>
                  <span className="text-gray_900 font-circularstd underline">
                    Twitter
                  </span>
                  <span className="text-gray_600 font-circularstd"> or </span>
                  <span className="text-gray_900 font-circularstd underline">
                    Email
                  </span>
                  <span className="text-gray_600 font-circularstd">.</span>
                </Text>
              </Column>
            </Row>
            <Column className="bg-bluegray_800 items-center 2xl:mt-[111px] 3xl:mt-[133px] lg:mt-[86px] xl:mt-[99px] 3xl:p-[116px] lg:p-[75px] xl:p-[86px] 2xl:p-[97px] w-[100%]">
              <Text className="font-bold lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                Pricing & Plans
              </Text>
              <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-white_A700_b2 tracking-ls1 w-[35%]">
                Create custom landing pages with Omega that converts more
                visitors than any website.
              </Text>
              <Column className="items-center lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] w-[80%]">
                <Row className="items-center justify-between w-[100%]">
                  <Column className="bg-white_A700 items-center outline outline-[0.5px] outline-indigo_50 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[32%]">
                    <Text className="font-normal lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-indigo_400 tracking-ls1 w-[auto]">
                      Limited
                    </Text>
                    <Text className="font-bold lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-bluegray_901 tracking-ls1 w-[auto]">
                      Free
                    </Text>
                    <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_900 tracking-ls1 w-[66%]">
                      Get a free chapter of our book right now.
                    </Text>
                    <Column className="items-center mb-[1px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] w-[100%]">
                      <Row className="bg-gray_50 items-center outline outline-[0.5px] outline-indigo_50 lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius10 w-[100%]">
                        <Img
                          src="images/img_arrowdown_bluegray_103.svg"
                          className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] w-[7%]"
                          alt="arrowdown One"
                        />
                        <Text className="font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[76px] my-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 tracking-ls1 w-[auto]">
                          Email address
                        </Text>
                      </Row>
                      <Button
                        className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder5"
                        size="xl"
                        variant="OutlineIndigo601"
                      >
                        Send free chapter
                      </Button>
                    </Column>
                  </Column>
                  <List
                    className="lg:gap-[21px] xl:gap-[24px] 2xl:gap-[27px] 3xl:gap-[32px] grid grid-cols-2 min-h-[auto] w-[66%]"
                    orientation="horizontal"
                  >
                    <Column className="bg-white_A700 items-center justify-end outline outline-[0.5px] outline-indigo_50 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[100%]">
                      <Text className="font-normal lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-indigo_400 tracking-ls1 w-[auto]">
                        Only eBook
                      </Text>
                      <Text className="font-bold lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-bluegray_901 tracking-ls1 w-[auto]">
                        $29
                      </Text>
                      <Text className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 tracking-ls1 w-[auto]">
                        One time purchase
                      </Text>
                      <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[39px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_900 tracking-ls1 w-[70%]">
                        Get the eBook version + Audio version of the book.
                      </Text>
                      <Button
                        className="font-medium mb-[1px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[87px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder5"
                        size="xl"
                        variant="OutlineRed900"
                      >
                        Buy from Amazon
                      </Button>
                    </Column>
                    <Column className="bg-white_A700 items-center justify-end outline outline-[0.5px] outline-indigo_50 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[100%]">
                      <Text className="font-normal lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-indigo_400 tracking-ls1 w-[auto]">
                        Everything
                      </Text>
                      <Text className="font-bold lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-bluegray_901 tracking-ls1 w-[auto]">
                        $49
                      </Text>
                      <Text className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 tracking-ls1 w-[auto]">
                        One time purchase
                      </Text>
                      <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[39px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_900 tracking-ls1 w-[76%]">
                        Hardcover + eBook version + Audio version of the book.
                      </Text>
                      <Button
                        className="font-medium mb-[1px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[87px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[100%]"
                        shape="RoundedBorder5"
                        size="xl"
                        variant="OutlineRed900"
                      >
                        Buy from Amazon
                      </Button>
                    </Column>
                  </List>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[86px] xl:mt-[98px] w-[96%]"
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
              </Column>
            </Column>
            <Row className="justify-center 3xl:mt-[113px] lg:mt-[73px] xl:mt-[84px] 2xl:mt-[94px] w-[69%]">
              <Column className="w-[80%]">
                <Text className="font-bold ml-[4px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                  Learn problem solving
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_600 tracking-ls1 w-[61%]">
                  Create custom landing pages with Omega that converts more
                  visitors than any website.
                </Text>
              </Column>
              <Button
                className="font-medium lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[20%]"
                shape="RoundedBorder5"
                size="xl"
                variant="OutlineRed900"
              >
                Get this book
              </Button>
            </Row>
            <Line className="bg-indigo_50 h-[1px] lg:mt-[64px] xl:mt-[73px] 2xl:mt-[82px] 3xl:mt-[99px] w-[100%]" />
            <footer className="lg:mt-[30px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] w-[69%]">
              <Row className="w-[100%]">
                <Text className="font-black lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                  Omega
                </Text>
                <Text className="font-normal lg:ml-[208px] xl:ml-[238px] 2xl:ml-[268px] 3xl:ml-[322px] mt-[2px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_900 tracking-ls1 w-[auto]">
                  Support Privacy Policy Terms and Conditions
                </Text>
                <Text className="font-normal 2xl:ml-[107px] 3xl:ml-[128px] lg:ml-[83px] xl:ml-[95px] mt-[2px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_900 tracking-ls1 w-[auto]">
                  © 2020 UXTheme, All Rights Reserved
                </Text>
              </Row>
            </footer>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default LandingSixPage;

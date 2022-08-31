import React from "react";

import { Column, Row, Text, Stack, Button, Img, List, Line } from "components";

const LandingSevenPage = () => {
  return (
    <>
      <Column className="bg-white_A701 font-circularstd mx-[auto] lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[100%]">
        <Column className="items-center lg:px-[11px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] w-[100%]">
          <header className="w-[99%]">
            <Row className="w-[100%]">
              <Text className="font-black 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                Omega
              </Text>
              <Stack className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] 3xl:ml-[1146px] lg:ml-[742px] xl:ml-[849px] 2xl:ml-[955px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[15%]">
                <Text className="absolute font-normal lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-red_500 tracking-ls1 w-[auto]">
                  <span className="text-red_500 font-circularstd">Demos</span>
                  <span className="text-indigo_400 font-circularstd"> </span>
                  <span className="text-red_500 font-circularstd"> </span>
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
                  <div className="bg-red_500 lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] w-[100%]"></div>
                </Column>
              </Stack>
              <Button
                className="font-medium lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center tracking-ls1 w-[9%]"
                shape="RoundedBorder5"
                size="lg"
                variant="OutlineRed9001_2"
              >
                Get this app
              </Button>
            </Row>
          </header>
        </Column>
        <Row className="items-center lg:ml-[171px] xl:ml-[196px] 2xl:ml-[220px] 3xl:ml-[264px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] lg:pr-[16px] xl:pr-[18px] 2xl:pr-[20px] 3xl:pr-[24px] w-[63%]">
          <Stack className="lg:h-[472px] xl:h-[540px] 2xl:h-[608px] 3xl:h-[729px] w-[33%]">
            <Img
              src="images/img_shadow.png"
              className="absolute bottom-[0] lg:h-[24px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] inset-x-[0] mx-[auto] w-[95%]"
              alt="Shadow"
            />
            <div className="absolute bg-gray_600 lg:h-[437px] xl:h-[500px] 2xl:h-[562px] 3xl:h-[675px] inset-[0] justify-center m-[auto] w-[88%]"></div>
            <Img
              src="images/img_iphonebody_656X329.png"
              className="absolute bottom-[3%] lg:h-[460px] xl:h-[526px] 2xl:h-[591px] 3xl:h-[709px] w-[100%]"
              alt="iPhoneBody"
            />
          </Stack>
          <Column className="lg:ml-[102px] xl:ml-[116px] 2xl:ml-[131px] 3xl:ml-[157px] w-[52%]">
            <Text className="font-bold lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
              Travel the world & meet new friends.
            </Text>
            <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[100%]">
              Create custom landing pages with Omega that convert more visitors
              than any website. With lots of unique blocks, you can easily build
              a page without coding.
            </Text>
            <Row className="bg-white_A700 items-center justify-end ml-[4px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] outline outline-[0.5px] outline-indigo_50 lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[93%]">
              <Img
                src="images/img_arrowdown_bluegray_103.svg"
                className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] w-[4%]"
                alt="arrowdown"
              />
              <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 tracking-ls1 w-[auto]">
                Email address
              </Text>
              <Button
                className="font-medium 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] 2xl:ml-[92px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[43%]"
                shape="RoundedBorder5"
                size="xl"
                variant="OutlineRed9001_2"
              >
                I want to join
              </Button>
            </Row>
          </Column>
        </Row>
        <Column className="items-center lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] 3xl:mt-[100px] lg:mt-[65px] xl:mt-[74px] 2xl:mt-[83px] w-[100%]">
          <Column className="w-[100%]">
            <Row className="bg-indigo_400 items-center 2xl:p-[103px] 3xl:p-[124px] lg:p-[80px] xl:p-[92px] w-[100%]">
              <Column className="mb-[3px] xl:ml-[104px] 2xl:ml-[117px] 3xl:ml-[140px] lg:ml-[91px] w-[42%]">
                <Img
                  src="images/img_rating.svg"
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[21%]"
                  alt="Rating"
                />
                <Text className="font-normal italic lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 tracking-ls1 w-[84%]">
                  “OMG! I cannot believe that I have got a brand new landing
                  page after getting Omega. It was super easy to edit and
                  publish. Everyone should try it!”
                </Text>
                <Text className="font-normal lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[auto]">
                  Jonathan Taylor
                </Text>
              </Column>
              <Column className="mb-[3px] w-[36%]">
                <Img
                  src="images/img_rating.svg"
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[24%]"
                  alt="Rating One"
                />
                <Text className="font-normal italic lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 tracking-ls1 w-[100%]">
                  “You made it so simple. My new site is so much faster and
                  easier to work with than my old site. I just choose the page,
                  make the change and click save.”
                </Text>
                <Text className="font-normal lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white_A700_b2 tracking-ls1 w-[auto]">
                  Lizzie Rodgers
                </Text>
              </Column>
            </Row>
            <Row className="justify-center lg:ml-[171px] xl:ml-[196px] 2xl:ml-[220px] 3xl:ml-[264px] 2xl:mt-[101px] 3xl:mt-[122px] lg:mt-[79px] xl:mt-[90px] pr-[1px] py-[1px] w-[68%]">
              <Column className="3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] pb-[4px] pr-[4px] w-[62%]">
                <Text className="font-bold lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                  Making trip is fun. Travel with friends.
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] ml-[3px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_600 tracking-ls1 w-[76%]">
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </Text>
                <List
                  className="gap-[0] min-h-[auto] ml-[3px] lg:mt-[39px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[57%]"
                  orientation="vertical"
                >
                  <Row className="justify-between lg:my-[14px] xl:my-[16px] 2xl:my-[19px] 3xl:my-[22px] w-[100%]">
                    <Text className="bg-indigo_400 flex font-bold items-center mt-[1px] lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] rounded-radius50 lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[49px]">
                      1
                    </Text>
                    <Column className="w-[81%]">
                      <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                        Find your trip partner
                      </Text>
                      <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[100%]">
                        With lots of unique blocks, you can easily build a page
                        without coding. Build your next landing page quickly.
                      </Text>
                    </Column>
                  </Row>
                  <Row className="justify-between lg:my-[14px] xl:my-[16px] 2xl:my-[19px] 3xl:my-[22px] w-[100%]">
                    <Text className="bg-indigo_400 flex font-bold items-center mt-[1px] lg:px-[11px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius50 lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 tracking-ls1 w-[49px]">
                      2
                    </Text>
                    <Column className="w-[81%]">
                      <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_900 tracking-ls1 w-[auto]">
                        Plan trip with easy steps
                      </Text>
                      <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 tracking-ls1 w-[100%]">
                        With lots of unique blocks, you can easily build a page
                        without coding. Build your next landing page quickly.
                      </Text>
                    </Column>
                  </Row>
                </List>
              </Column>
              <Stack className="lg:h-[494px] xl:h-[565px] 2xl:h-[635px] 3xl:h-[762px] mb-[1px] mr-[1px] px-[1px] rotate-[7deg] w-[38%]">
                <Img
                  src="images/img_bg_650X361.png"
                  className="absolute lg:h-[455px] xl:h-[521px] 2xl:h-[586px] 3xl:h-[703px] inset-[0] justify-center m-[auto] rounded-radius10 w-[89%]"
                  alt="BG"
                />
                <Stack className="absolute lg:h-[493px] xl:h-[563px] 2xl:h-[634px] 3xl:h-[760px] inset-[0] justify-center m-[auto] w-[99%]">
                  <Img
                    src="images/img_shadow_70X310.png"
                    className="absolute bottom-[0] lg:h-[49px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[76px] left-[1%] w-[77%]"
                    alt="Shadow One"
                  />
                  <div className="absolute bg-gray_600 lg:h-[458px] xl:h-[524px] 2xl:h-[590px] 3xl:h-[707px] inset-[0] justify-center m-[auto] w-[90%]"></div>
                  <Img
                    src="images/img_iphonebody_656X329.png"
                    className="absolute bottom-[2%] lg:h-[481px] xl:h-[551px] 2xl:h-[619px] 3xl:h-[743px] w-[100%]"
                    alt="iPhoneBody One"
                  />
                </Stack>
              </Stack>
            </Row>
            <Row className="justify-center lg:ml-[171px] xl:ml-[196px] 2xl:ml-[220px] 3xl:ml-[264px] lg:mt-[52px] xl:mt-[60px] 2xl:mt-[67px] 3xl:mt-[81px] w-[68%]">
              <Column className="items-center lg:mb-[32px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[50px] w-[20%]">
                <div className="bg-gray_600 lg:h-[217px] xl:h-[248px] 2xl:h-[279px] 3xl:h-[334px] rounded-radius8 w-[100%]"></div>
                <div className="bg-gray_600 lg:h-[129px] xl:h-[148px] 2xl:h-[166px] 3xl:h-[199px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] rounded-radius8 w-[100%]"></div>
              </Column>
              <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[30%]">
                <div className="bg-gray_600 lg:h-[129px] xl:h-[148px] 2xl:h-[166px] 3xl:h-[199px] rounded-radius8 w-[67%]"></div>
                <div className="bg-gray_600 lg:h-[217px] xl:h-[248px] 2xl:h-[279px] 3xl:h-[334px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] rounded-radius8 w-[67%]"></div>
              </Column>
              <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:mt-[120px] xl:mt-[137px] 2xl:mt-[154px] 3xl:mt-[185px] w-[47%]">
                <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[93%]">
                  See the world & spend less always.
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] ml-[3px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_600 tracking-ls1 w-[99%]">
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </Text>
              </Column>
            </Row>
            <Row className="items-center lg:ml-[171px] xl:ml-[196px] 2xl:ml-[220px] 3xl:ml-[264px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[98px] pb-[1px] pr-[1px] w-[65%]">
              <Column className="w-[61%]">
                <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[74%]">
                  Improving your travel experience.
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] ml-[3px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_600 tracking-ls1 w-[81%]">
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </Text>
                <Button
                  className="font-medium ml-[3px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[32%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="OutlineRed9001_2"
                >
                  Get this app
                </Button>
              </Column>
              <Stack className="lg:h-[488px] xl:h-[558px] 2xl:h-[627px] 3xl:h-[753px] rotate-[7deg] w-[39%]">
                <Img
                  src="images/img_shadow_70X310.png"
                  className="absolute bottom-[0] lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] right-[2%] w-[77%]"
                  alt="Shadow Two"
                />
                <div className="absolute bg-gray_600 lg:h-[458px] xl:h-[524px] 2xl:h-[590px] 3xl:h-[707px] inset-[0] justify-center m-[auto] w-[91%]"></div>
                <Img
                  src="images/img_iphonebody_680X399.png"
                  className="absolute bottom-[2%] lg:h-[476px] xl:h-[545px] 2xl:h-[613px] 3xl:h-[735px] w-[100%]"
                  alt="iPhoneBody Two"
                />
              </Stack>
            </Row>
            <Img
              src="images/img_video.svg"
              className="lg:h-[556px] xl:h-[635px] 2xl:h-[715px] 3xl:h-[857px] 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] w-[100%]"
              alt="Video"
            />
            <Text className="font-bold lg:ml-[408px] xl:ml-[467px] 2xl:ml-[525px] 3xl:ml-[631px] 3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] 2xl:mt-[92px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
              Get the app now
            </Text>
            <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:ml-[388px] xl:ml-[444px] 2xl:ml-[499px] 3xl:ml-[599px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_600 tracking-ls1 w-[31%]">
              Create custom landing pages with Omega that converts more visitors
              than any website.
            </Text>
            <Row className="items-center justify-center lg:ml-[407px] xl:ml-[465px] 2xl:ml-[524px] 3xl:ml-[628px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] w-[27%]">
              <Img
                src="images/img_appstore.png"
                className="lg:h-[47px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] w-[48%]"
                alt="AppStore"
              />
              <Img
                src="images/img_playstore.png"
                className="lg:h-[47px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[48%]"
                alt="PlayStore"
              />
            </Row>
            <Line className="bg-indigo_50 h-[1px] 2xl:mt-[106px] 3xl:mt-[127px] lg:mt-[82px] xl:mt-[94px] w-[100%]" />
            <Row className="lg:ml-[171px] xl:ml-[196px] 2xl:ml-[220px] 3xl:ml-[264px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[69%]">
              <Text className="font-black lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-gray_900 tracking-ls1 w-[auto]">
                Omega
              </Text>
              <Text className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] mt-[3px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_900 tracking-ls1 w-[auto]">
                © 2020 UXTheme, All Rights Reserved
              </Text>
              <Text className="font-normal lg:ml-[262px] xl:ml-[300px] 2xl:ml-[337px] 3xl:ml-[405px] mt-[2px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_900 tracking-ls1 w-[auto]">
                Support Privacy Policy Terms and Conditions
              </Text>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default LandingSevenPage;

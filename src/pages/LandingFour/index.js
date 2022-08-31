import React from "react";

import {
  Column,
  Row,
  Text,
  Stack,
  Button,
  Img,
  Input,
  PagerIndicator,
} from "components";

const LandingFourPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-circularstd mx-[auto] lg:pb-[25px] xl:pb-[29px] 2xl:pb-[33px] 3xl:pb-[39px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Column className="bg-indigo_400 lg:p-[18px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[28px] w-[100%]">
            <header className="lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mr-[3px] w-[99%]">
              <Row className="pr-[1px] w-[100%]">
                <Text className="hover:bg-amber_300 cursor-pointer font-black hover:font-medium hover:justify-center mt-[3px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] hover:text-black_900_c9 text-white_A700 tracking-ls1 w-[auto]">
                  Omega
                </Text>
                <Text className="hover:bg-amber_300 cursor-pointer hover:font-medium font-normal hover:justify-center lg:ml-[403px] xl:ml-[461px] 2xl:ml-[519px] 3xl:ml-[623px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] hover:text-black_900_c9 text-white_A700 tracking-ls1 w-[auto]">
                  <span className="text-white_A700 font-circularstd">
                    Demos{" "}
                  </span>
                  <span className="text-white_A700_b2 font-circularstd">
                    Pages Support
                  </span>
                </Text>
                <Text className="hover:bg-amber_300 cursor-pointer hover:font-medium font-normal hover:justify-center lg:ml-[412px] xl:ml-[471px] 2xl:ml-[530px] 3xl:ml-[636px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] hover:text-black_900_c9 text-white_A700 tracking-ls1 w-[auto]">
                  Cart
                </Text>
                <Text className="bg-amber_300 cursor-pointer flex hover:font-medium font-medium items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius50 lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_c9 tracking-ls1 w-[28px]">
                  3
                </Text>
              </Row>
            </header>
            <Row className="lg:mb-[131px] xl:mb-[150px] 2xl:mb-[169px] 3xl:mb-[203px] lg:ml-[137px] xl:ml-[156px] 2xl:ml-[176px] 3xl:ml-[211px] xl:mt-[108px] 2xl:mt-[122px] 3xl:mt-[146px] lg:mt-[95px] w-[67%]">
              <Stack className="lg:h-[371px] xl:h-[424px] 2xl:h-[477px] 3xl:h-[572px] lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[29px] w-[43%]">
                <div className="absolute backdrop-opacity-[0.5] bg-white_A700_65 blur-[135.91px] bottom-[0] lg:h-[313px] xl:h-[358px] 2xl:h-[402px] 3xl:h-[482px] rounded-radius50 lg:w-[312px] xl:w-[357px] 2xl:w-[401px] 3xl:w-[481px]"></div>
                <Column
                  className="absolute bg-cover bg-repeat bottom-[0] inset-x-[0] items-center justify-end mx-[auto] w-[88%]"
                  style={{
                    backgroundImage: "url('images/img_object_633X391.png')",
                  }}
                >
                  <div className="bg-gray_50 lg:h-[444px] xl:h-[507px] 2xl:h-[571px] 3xl:h-[685px] w-[100%]"></div>
                </Column>
              </Stack>
              <Column className="lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[50%]">
                <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[100%]">
                  Enjoy every single beat on headphone!
                </Text>
                <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700_b2 tracking-ls1 w-[100%]">
                  For iPhone, iPad, and Android users, be sure your product’s
                  firmware is up to date through the Bose connect app.
                </Text>
                <Column className="bg-indigo_A200 lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] lg:p-[11px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius10 w-[62%]">
                  <Row className="items-center xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[96%]">
                    <Text className="font-bold lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
                      $299
                    </Text>
                    <Button
                      className="font-bold 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center tracking-ls1 w-[48%]"
                      shape="RoundedBorder5"
                      size="md"
                      variant="FillLightgreen600"
                    >
                      Save 30% today
                    </Button>
                  </Row>
                  <Text className="font-medium mb-[3px] xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700_b2 tracking-ls1 w-[auto]">
                    <span className="text-white_A700_b2 font-circularstd">
                      Original price{" "}
                    </span>
                    <span className="text-white_A700_b2 font-circularstd">
                      $399
                    </span>
                  </Text>
                </Column>
                <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[60%]">
                  <Row className="bg-gray_50 items-center justify-center pb-[1px] pl-[1px] rounded-radius5 w-[29%]">
                    <Text className="font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-black_900_c9 tracking-ls1 w-[auto]">
                      1
                    </Text>
                    <Column className="items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] w-[30%]">
                      <Stack className="bg-indigo_50 lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[5px] w-[100%]">
                        <Img
                          src="images/img_plus.svg"
                          className="absolute bottom-[3%] 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] inset-x-[0] mx-[auto] 3xl:w-[10px] lg:w-[7px] xl:w-[8px] 2xl:w-[9px]"
                          alt="plus"
                        />
                      </Stack>
                      <Column className="bg-indigo_50 items-center mt-[1px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-bl-[0] rounded-br-[5px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                        <div className="bg-gray_902 2xl:h-[2px] xl:h-[2px] lg:h-[2px] 3xl:h-[3px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[91%]"></div>
                      </Column>
                    </Column>
                  </Row>
                  <Button
                    className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[64%]"
                    shape="RoundedBorder5"
                    size="xl"
                    variant="OutlineYellow700"
                  >
                    Add to cart
                  </Button>
                </Row>
              </Column>
            </Row>
          </Column>
        </Column>
        <Stack className="lg:h-[368px] xl:h-[421px] 2xl:h-[473px] 3xl:h-[568px] lg:ml-[172px] xl:ml-[197px] 2xl:ml-[222px] 3xl:ml-[266px] lg:mt-[103px] xl:mt-[118px] 2xl:mt-[133px] 3xl:mt-[159px] w-[32%]">
          <Column className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[99%]">
            <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[85%]">
              Get noise free sound everytime
            </Text>
            <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] ml-[3px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_600 tracking-ls1 w-[99%]">
              Create custom landing pages with Omega that converts more visitors
              than any website. With lots of unique blocks, you can easily build
              a page without coding.
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
          <Stack
            className="absolute bg-cover bg-repeat lg:h-[344px] xl:h-[394px] 2xl:h-[443px] 3xl:h-[531px] inset-y-[0] my-[auto] right-[0] w-[100%]"
            style={{ backgroundImage: "url('images/img_object_491X640.png')" }}
          >
            <Img
              src="images/img_bitmap.svg"
              className="absolute lg:h-[344px] xl:h-[394px] 2xl:h-[443px] 3xl:h-[531px] w-[100%]"
              alt="Bitmap One"
            />
          </Stack>
        </Stack>
        <Column className="items-center lg:mt-[113px] xl:mt-[129px] 2xl:mt-[145px] 3xl:mt-[175px] w-[100%]">
          <Column className="bg-bluegray_800 items-center 3xl:p-[117px] lg:p-[76px] xl:p-[87px] 2xl:p-[98px] w-[100%]">
            <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-center text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[29%]">
              It’s everything you’ll ever need
            </Text>
            <Column className="lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[80%]">
              <Row className="items-center justify-between w-[100%]">
                <Input
                  className="font-bold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                  wrapClassName="flex w-[32%]"
                  name="One One"
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
                      src="images/img_file.svg"
                      className="bg-indigo_400_19 lg:w-[11px] lg:ml-[4px] lg:mr-[13px] xl:w-[12px] xl:ml-[5px] xl:mr-[15px] 2xl:w-[14px] 2xl:ml-[6px] 2xl:mr-[17px] 3xl:w-[17px] 3xl:ml-[7px] 3xl:mr-[20px] rounded-radius275 my-[auto]"
                      alt="file"
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
                      src="images/img_file.svg"
                      className="bg-indigo_400_19 lg:w-[11px] lg:ml-[4px] lg:mr-[13px] xl:w-[12px] xl:ml-[5px] xl:mr-[15px] 2xl:w-[14px] 2xl:ml-[6px] 2xl:mr-[17px] 3xl:w-[17px] 3xl:ml-[7px] 3xl:mr-[20px] rounded-radius275 my-[auto]"
                      alt="file"
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
                      src="images/img_shape.svg"
                      className="bg-red_500_19 lg:w-[11px] lg:ml-[4px] lg:mr-[13px] xl:w-[12px] xl:ml-[5px] xl:mr-[15px] 2xl:w-[14px] 2xl:ml-[6px] 2xl:mr-[17px] 3xl:w-[17px] 3xl:ml-[7px] 3xl:mr-[20px] rounded-radius275 my-[auto]"
                      alt="Shape"
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
                      src="images/img_bookmark_1.svg"
                      className="bg-light_green_600_19 lg:w-[11px] lg:ml-[4px] lg:mr-[13px] xl:w-[12px] xl:ml-[5px] xl:mr-[15px] 2xl:w-[14px] 2xl:ml-[6px] 2xl:mr-[17px] 3xl:w-[17px] 3xl:ml-[7px] 3xl:mr-[20px] rounded-radius275 my-[auto]"
                      alt="bookmark"
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
                      src="images/img_shape.svg"
                      className="bg-red_500_19 lg:w-[11px] lg:ml-[4px] lg:mr-[13px] xl:w-[12px] xl:ml-[5px] xl:mr-[15px] 2xl:w-[14px] 2xl:ml-[6px] 2xl:mr-[17px] 3xl:w-[17px] 3xl:ml-[7px] 3xl:mr-[20px] rounded-radius275 my-[auto]"
                      alt="Shape"
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
                      src="images/img_file.svg"
                      className="bg-indigo_400_19 lg:w-[11px] lg:ml-[5px] lg:mr-[13px] xl:w-[12px] xl:ml-[6px] xl:mr-[15px] 2xl:w-[14px] 2xl:ml-[7px] 2xl:mr-[17px] 3xl:w-[17px] 3xl:ml-[8px] 3xl:mr-[20px] rounded-radius275 my-[auto]"
                      alt="file"
                    />
                  }
                  size="lg"
                ></Input>
              </Row>
            </Column>
          </Column>
          <Text className="font-bold 3xl:mt-[103px] lg:mt-[67px] xl:mt-[76px] 2xl:mt-[86px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
            Enjoy your music
          </Text>
          <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_600 tracking-ls1 w-[38%]">
            Create custom landing pages with Omega that converts more visitors
            than any website. With lots of unique blocks, you can easily build a
            page without coding.
          </Text>
          <Row className="items-center justify-center lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[69%]">
            <div className="bg-gray_600 lg:h-[361px] xl:h-[413px] 2xl:h-[464px] 3xl:h-[557px] rounded-radius10 shadow-bs w-[32%]"></div>
            <div className="bg-gray_600 lg:h-[361px] xl:h-[413px] 2xl:h-[464px] 3xl:h-[557px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] rounded-radius10 shadow-bs w-[66%]"></div>
          </Row>
          <Stack className="bg-indigo_400 lg:h-[553px] xl:h-[633px] 2xl:h-[712px] 3xl:h-[854px] xl:mt-[106px] 2xl:mt-[119px] 3xl:mt-[143px] lg:mt-[93px] lg:pl-[169px] xl:pl-[193px] 2xl:pl-[217px] 3xl:pl-[261px] w-[100%]">
            <Column
              className="absolute bg-cover bg-repeat items-center right-[0] w-[82%]"
              style={{
                backgroundImage: "url('images/img_object_790X1304.png')",
              }}
            >
              <div className="bg-gray_600 lg:h-[553px] xl:h-[633px] 2xl:h-[712px] 3xl:h-[854px] w-[100%]"></div>
            </Column>
            <Column className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] w-[31%]">
              <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[95%]">
                2k+ people are using this headset
              </Text>
              <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 tracking-ls1 w-[100%]">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </Text>
              <Button
                className="font-medium lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[55px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[41%]"
                shape="RoundedBorder5"
                size="xl"
                variant="OutlineYellow700"
              >
                Try it now
              </Button>
            </Column>
          </Stack>
          <Text className="font-bold 3xl:mt-[109px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[auto]">
            What users say
          </Text>
          <Text className="font-normal lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-gray_600 tracking-ls1 w-[31%]">
            Create custom landing pages with Omega that converts more visitors
            than any website.
          </Text>
          <Row className="items-center justify-center lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] w-[59%]">
            <Column className="bg-white_A700_b2 outline outline-[0.5px] outline-indigo_50 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius10 w-[48%]">
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
            <Column className="bg-white_A700_b2 lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] outline outline-[0.5px] outline-indigo_50 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius10 w-[48%]">
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
            className="h-[8px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[max-content]"
            count={3}
            activeCss="inline-block cursor-pointer w-[45px] h-[8px] bg-indigo_400 rounded-radius4"
            activeIndex={1}
            inactiveCss="inline-block cursor-pointer w-[17px] h-[8px] bg-indigo_50 rounded-radius4"
            selectedWrapperCss="2xl:mx-[4px] 3xl:mx-[5px] inline-block lg:mx-[3px] xl:mx-[4px]"
            unselectedWrapperCss="2xl:mx-[4px] 3xl:mx-[5px] inline-block lg:mx-[3px] xl:mx-[4px]"
          />
          <Row className="bg-indigo_400 items-center justify-between 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] 3xl:p-[109px] lg:p-[70px] xl:p-[80px] 2xl:p-[90px] w-[100%]">
            <Text className="font-bold lg:leading-[49px] xl:leading-[56px] 2xl:leading-[63px] 3xl:leading-[75px] lg:ml-[100px] xl:ml-[114px] 2xl:ml-[128px] 3xl:ml-[154px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-white_A700 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[42%]">
              Enjoy every beat.
              <br />
              Get a new headphone.
            </Text>
            <Button
              className="font-medium lg:mr-[100px] xl:mr-[115px] 2xl:mr-[129px] 3xl:mr-[155px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center tracking-ls1 w-[14%]"
              shape="RoundedBorder5"
              size="xl"
              variant="OutlineYellow700"
            >
              Buy now
            </Button>
          </Row>
          <footer className="lg:mt-[32px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[69%]">
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
    </>
  );
};

export default LandingFourPage;

import React from "react";
import ModalProvider from "react-modal";

import { Column } from "components";

const ResetPasswordImageModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[38%]"
        overlayClassName="fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-black_900_71 items-center justify-center mb-[1px] 3xl:p-[102px] lg:p-[66px] xl:p-[76px] 2xl:p-[85px] rounded-radius10 shadow-bs3 w-[100%]">
            <div className="bg-white_A700 lg:h-[52px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] 3xl:mt-[113px] lg:mt-[73px] xl:mt-[84px] 2xl:mt-[94px] outline outline-[0.5px] outline-indigo_50 rounded-radius10 w-[99%]"></div>
            <div className="bg-red_500 lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] outline outline-[0.5px] outline-red_900 rounded-radius10 w-[99%]"></div>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default ResetPasswordImageModal;

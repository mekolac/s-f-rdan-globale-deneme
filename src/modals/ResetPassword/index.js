import React from "react";
import ModalProvider from "react-modal";

import { Column } from "components";

const ResetPasswordModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[40%]"
        overlayClassName="fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-end mb-[1px] 3xl:p-[110px] lg:p-[71px] xl:p-[81px] 2xl:p-[91px] rounded-radius10 shadow-bs2 w-[100%]">
            <div className="bg-white_A700 lg:h-[52px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] 3xl:mt-[106px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[89px] outline outline-[0.5px] outline-indigo_50 rounded-radius10 w-[95%]"></div>
            <div className="bg-red_500 lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] outline outline-[0.5px] outline-red_900 rounded-radius10 w-[95%]"></div>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default ResetPasswordModal;

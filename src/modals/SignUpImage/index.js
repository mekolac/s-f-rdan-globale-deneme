import React from "react";
import ModalProvider from "react-modal";

import { Column, Stack, Img } from "components";

const SignUpImageModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[33%]"
        overlayClassName="fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Stack className="bg-black_900_71 lg:h-[469px] xl:h-[537px] 2xl:h-[604px] 3xl:h-[725px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:px-[38px] xl:px-[44px] 2xl:px-[49px] 3xl:px-[59px] rounded-radius10 shadow-bs3 w-[100%]">
            <Img
              src="images/img_content.svg"
              className="absolute bottom-[6%] lg:h-[265px] xl:h-[303px] 2xl:h-[341px] 3xl:h-[409px] inset-x-[0] mx-[auto] w-[79%]"
              alt="Content"
            />
          </Stack>
        </div>
      </ModalProvider>
    </>
  );
};

export default SignUpImageModal;

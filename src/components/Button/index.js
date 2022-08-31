import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  RoundedBorder10: "rounded-radius10",
  CustomBorderBL10:
    "rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0]",
  icbRoundedBorder15: "rounded-radius155",
  icbRoundedBorder34: "rounded-radius345",
  icbRoundedBorder27: "rounded-radius275",
  icbCircleBorder12: "rounded-radius12",
  icbCircleBorder24: "rounded-radius24",
};
const variants = {
  OutlineRed9001_2:
    "bg-red_500 outline outline-[0.5px] outline-red_900 text-white_A700",
  OutlineRed900:
    "bg-red_400 outline outline-[0.5px] outline-red_900 text-white_A700",
  OutlineIndigo50: "outline outline-[0.5px] outline-indigo_50 text-white_A700",
  FillLightgreen600: "bg-light_green_600 text-white_A700",
  OutlineYellow700:
    "bg-amber_300 outline outline-[0.5px] outline-yellow_700 text-black_900_c9",
  FillRed500: "bg-red_500 text-white_A700",
  FillIndigo400: "bg-indigo_400 text-white_A700",
  OutlineIndigo601:
    "bg-indigo_400 outline outline-[0.5px] outline-indigo_601 text-white_A700",
  icbFillIndigo400: "bg-indigo_400",
  icbFillAmber300: "bg-amber_300",
  icbFillRed50018: "bg-red_500_18",
  icbFillAmber30019: "bg-amber_300_19",
  icbFillIndigo40019: "bg-indigo_400_19",
  icbFillBluegray80019: "bg-bluegray_800_19",
  icbFillWhiteA700: "bg-white_A700",
  icbFillRed50019: "bg-red_500_19",
  icbFillIndigo40063: "bg-indigo_400_63",
  icbFillIndigoA201: "bg-indigo_A201",
};
const sizes = {
  sm: "lg:p-[5px] xl:p-[6px] 2xl:p-[7px] p-[8px]",
  md: "p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px]",
  lg: "xl:p-[11px] 2xl:p-[12px] p-[14px] 3xl:p-[15px] lg:p-[9px]",
  xl: "lg:p-[13px] xl:p-[15px] 2xl:p-[17px] p-[19px] 3xl:p-[20px]",
  smIcn: "lg:p-[5px] xl:p-[6px] 2xl:p-[7px] p-[8px]",
  mdIcn: "lg:p-[11px] xl:p-[13px] 2xl:p-[15px] p-[17px] 3xl:p-[18px]",
  lgIcn: "lg:p-[14px] xl:p-[16px] 2xl:p-[18px] p-[20px] 3xl:p-[21px]",
  xlIcn: "lg:p-[16px] xl:p-[18px] 2xl:p-[20px] p-[23px] 3xl:p-[24px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder5",
    "RoundedBorder10",
    "CustomBorderBL10",
    "icbRoundedBorder15",
    "icbRoundedBorder34",
    "icbRoundedBorder27",
    "icbCircleBorder12",
    "icbCircleBorder24",
  ]),
  variant: PropTypes.oneOf([
    "OutlineRed9001_2",
    "OutlineRed900",
    "OutlineIndigo50",
    "FillLightgreen600",
    "OutlineYellow700",
    "FillRed500",
    "FillIndigo400",
    "OutlineIndigo601",
    "icbFillIndigo400",
    "icbFillAmber300",
    "icbFillRed50018",
    "icbFillAmber30019",
    "icbFillIndigo40019",
    "icbFillBluegray80019",
    "icbFillWhiteA700",
    "icbFillRed50019",
    "icbFillIndigo40063",
    "icbFillIndigoA201",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
  ]),
};
Button.defaultProps = {
  className: "",
  shape: "icbRoundedBorder15",
  variant: "icbFillIndigo40019",
  size: "smIcn",
};

export { Button };

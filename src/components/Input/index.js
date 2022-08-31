import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineIndigo50: "bg-white_A700 outline outline-[0.5px] outline-indigo_50",
  OutlineGray90032: "bg-amber_300 shadow-bs1",
  FillWhiteA700: "bg-white_A700",
  OutlineBluegray8004b: "bg-white_A700 shadow-bs",
};
const shapes = { RoundedBorder8: "rounded-radius8" };
const sizes = {
  sm: "lg:p-[16px] xl:p-[18px] 2xl:p-[20px] p-[23px] 3xl:p-[24px]",
  md: "xl:p-[20px] lg:px-[17px] 2xl:px-[22px] px-[25px] 3xl:px-[27px] lg:py-[18px] 2xl:py-[23px] py-[26px] 3xl:py-[28px]",
  lg: "lg:px-[19px] xl:px-[22px] 2xl:px-[25px] px-[28px] 3xl:px-[30px] lg:py-[20px] xl:py-[23px] 2xl:py-[26px] py-[29px] 3xl:py-[31px]",
  xl: "lg:pb-[18px] xl:pb-[21px] 2xl:pb-[24px] pb-[27px] 3xl:pb-[29px] lg:pt-[21px] xl:pt-[24px] 2xl:pt-[27px] pt-[31px] 3xl:pt-[33px] lg:px-[18px] xl:px-[21px] 2xl:px-[24px] px-[27px] 3xl:px-[29px]",
  "2xl":
    "lg:pb-[21px] xl:pb-[24px] 2xl:pb-[27px] pb-[31px] 3xl:pb-[33px] lg:pt-[24px] xl:pt-[28px] 2xl:pt-[31px] pt-[35px] 3xl:pt-[37px] lg:px-[21px] xl:px-[24px] 2xl:px-[27px] px-[31px] 3xl:px-[33px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf([
    "OutlineIndigo50",
    "OutlineGray90032",
    "FillWhiteA700",
    "OutlineBluegray8004b",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder8",
  variant: "OutlineIndigo50",
  size: "xl",
};

export { Input };

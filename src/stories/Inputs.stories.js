import { Input } from "components";
export default {
  title: "application3/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "RoundedBorder8",
  variant: "OutlineIndigo50",
  size: "xl",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};

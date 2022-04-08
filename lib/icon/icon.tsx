import React from "react";
import "./importIcons";
import "./icon.scss";
import { classes } from "../helpers/utils";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}
const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  ...restProps
}) => {
  return (
    <svg className={classes("dui-icon", className)} {...restProps}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};

export default Icon;

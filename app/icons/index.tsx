import React from "react";

import ArrowLeft from "@/public/icons/arrow-left.svg";
import Printer from "@/public/icons/printer.svg";

const iconNames = {
  ArrowLeft,
  Printer,
};

type IconProps = {
  name: keyof typeof iconNames;
} & React.SVGProps<SVGSVGElement>;

const Icons: React.FC<IconProps> = ({ name, ...props }) => {
  const SvgIcon = iconNames[name];
  if (!SvgIcon) {
    return null;
  }
  return <SvgIcon className="w-auto" {...props} />;
};

export { Icons, iconNames };

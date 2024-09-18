import { Button } from "antd";
import { ButtonType } from "antd/es/button";
import { MouseEventHandler, PropsWithChildren } from "react";
import clsx from "clsx";
import classes from "./ColorButton.module.scss";

type Props = {
  type?: ButtonType;
  color?: "red" | "blue" | "green";
  value?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> ;
} & PropsWithChildren;

const ColorButton = ({
  children,
  color = "blue",
  type = "default",
  value,
  onClick,
}: Props) => (
  <Button
    value={value}
    className={clsx(classes[color])}
    type={type}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default ColorButton;

import { Button } from "antd";
import { ButtonType } from "antd/es/button";
import { MouseEventHandler, PropsWithChildren } from "react";
import clsx from "clsx";
import classes from "./ColorButton.module.scss";

type Props = {
  type?: ButtonType;
  color?: "red" | "blue" | "green";
  value?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & PropsWithChildren;

const ColorButton = ({
  children,
  color = "blue",
  type = "default",
  value,
  disabled = false,
  onClick,
}: Props) => (
  <Button
    value={value}
    className={clsx(classes[color])}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </Button>
);

export default ColorButton;

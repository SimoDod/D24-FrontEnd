import { Col } from "antd";
import { Form } from "antd";
import { PropsWithChildren } from "react";
import { Field } from "formik";

type Props = {
  label?: string;
  name: string;
  span?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
  };
  labelCol?: number;
  wrapperCol?: number;
  labelAlign?: "left" | "right";
} & PropsWithChildren;

const FormItemCol = ({
  children,
  span = { xs: 24, sm: 24, md: 12, lg: 12, xl: 6 },
  label,
  name,
  labelCol = 24,
  wrapperCol = 24,
  labelAlign = "left",
}: Props) => {
  return (
    <Col {...span}>
      <Form.Item
        label={label}
        labelCol={{ span: labelCol }}
        wrapperCol={{
          span: wrapperCol,
        }}
        labelAlign={labelAlign}
        name={name}
      >
        <Field name={name}>{() => children}</Field>
      </Form.Item>
    </Col>
  );
};

export default FormItemCol;



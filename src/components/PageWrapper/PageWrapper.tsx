import { Row, Col, Typography } from "antd";
import { PropsWithChildren } from "react";
import classes from "./PageWrapper.module.scss";
const { Title } = Typography;

type Props = {
  title?: string;
} & PropsWithChildren;

const PageWrapper = ({ title, children }: Props) => (
  <Row className={classes.page}>
    <Col className={classes.header} span={24}>
      <Title ellipsis level={2}>
        {title}
      </Title>
    </Col>
    <Col span={24}>{children}</Col>
  </Row>
);

export default PageWrapper;

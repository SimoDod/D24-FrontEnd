import { Row, Col, Typography, Button, Flex } from "antd";
import { PropsWithChildren } from "react";
import classes from "./PageWrapper.module.scss";
import { useAppSelector } from "../../store/store";
import { PoweroffOutlined } from "@ant-design/icons";
import useLogout from "../../hooks/useLogout";

const { Title } = Typography;

type Props = {
  title?: string;
} & PropsWithChildren;

const PageWrapper = ({ title, children }: Props) => {
  const logout = useLogout();
  const username = useAppSelector((state) => state.auth.user?.username);

  return (
    <Row className={classes.page}>
      <Col className={classes.header} span={24}>
        <Flex align="center" justify="space-between">
          <Title ellipsis level={2}>
            {title}
          </Title>

          <Button
            icon={<PoweroffOutlined />}
            iconPosition="end"
            type="text"
            onClick={logout}
          >
            {username && username + ", "}
          </Button>
        </Flex>
      </Col>
      <Col span={24}>{children}</Col>
    </Row>
  );
};

export default PageWrapper;

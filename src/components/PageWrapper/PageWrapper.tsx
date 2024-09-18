import { Row, Col, Layout, Typography, Button, Flex } from "antd";
import { PropsWithChildren } from "react";
import classes from "./PageWrapper.module.scss";
import { useAppSelector } from "../../store/store";
import { PoweroffOutlined } from "@ant-design/icons";
import useLogout from "../../hooks/useLogout";

const { Title } = Typography;
const { Header } = Layout;

type Props = {
  title?: string;
} & PropsWithChildren;

const PageWrapper = ({ title, children }: Props) => {
  const logout = useLogout();
  const username = useAppSelector((state) => state.auth.user?.username);

  return (
    <Row>
      <Col span={24}>
        <Header className={classes.header}>
          <Title ellipsis level={2}>
            {title}
          </Title>
          <Flex align="center">
            <Button
              icon={<PoweroffOutlined />}
              iconPosition="end"
              type="text"
              onClick={logout}
            >
              {username && username + ", "}
            </Button>
          </Flex>
        </Header>
      </Col>
      <Col span={24}>{children}</Col>
    </Row>
  );
};

export default PageWrapper;

import classes from "./AppLayout.module.scss";
import { Layout, Menu, Typography, Button } from "antd";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
const { Content, Footer } = Layout;
import useMenuItems from "./hooks/useMenuItems";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchUserThunk } from "../../store/thunks/auth/fetchUserThunk";
import { MenuOutlined } from "@ant-design/icons";
import { menuItemKey } from "./constants";

import FloatButtonGroup from "./FloatButton/FloatButtonGroup";
const { Header } = Layout;
const { Text } = Typography;

const AppLayout = () => {
  const userRole = useAppSelector((state) => state.auth.user?.role);
  const items = useMenuItems(userRole);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserThunk());
  }, [dispatch]);

  return (
    <>
      <FloatButtonGroup />
      <Layout>
        <Header className={classes.header}>
          <Text className={classes.headerLogo}>D24</Text>
          <Menu
            mode="horizontal"
            className={classes.menu}
            items={items}
            selectedKeys={[localStorage.getItem(menuItemKey) || ""]}
            overflowedIndicator={<Button icon={<MenuOutlined />} />}
          />
        </Header>
        <Content className={classes.content}>
          <Outlet />
        </Content>
        <Footer className={classes.footer}>
          <Text>D24 ©{new Date().getFullYear()} Created by Simeon Dodov</Text>
        </Footer>
      </Layout>
    </>
  );
};

export default AppLayout;

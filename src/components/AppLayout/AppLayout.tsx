import classes from "./AppLayout.module.scss";
import { Layout, Menu, Image } from "antd";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
const { Content, Footer } = Layout;
import siderLogo from "../../assets/images/asml-logo.svg";
import useMenuItems from "./hooks/useMenuItems";
import { useAppDispatch } from "../../store/store";
import { fetchUserThunk } from "../../store/thunks/fetchUserThunk";
import { MenuOutlined } from "@ant-design/icons";
import { menuItemKey } from "./constants";

const { Header } = Layout;

const App = () => {
  const items = useMenuItems();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserThunk());
  }, [dispatch]);

  return (
    <Layout>
      <Header className={classes.header}>
        <Image
          className={classes.headerImage}
          src={siderLogo}
          preview={false}
          alt="Sider Logo"
        />
        <Menu
          mode="horizontal"
          className={classes.menu}
          items={items}
          selectedKeys={[localStorage.getItem(menuItemKey) || ""]}
          overflowedIndicator={<MenuOutlined />}
        />
      </Header>
      <Content className={classes.content}>
        <Outlet />
      </Content>
      <Footer className={classes.footer}>
        D24 ©{new Date().getFullYear()} Created by Simeon Dodov.
      </Footer>
    </Layout>
  );
};

export default App;

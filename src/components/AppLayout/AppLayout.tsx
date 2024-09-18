import classes from "./AppLayout.module.scss";
import { Layout, Menu, Image } from "antd";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
const { Content, Footer, Sider } = Layout;
import siderLogo from "../../assets/images/asml-logo.svg";
import useMenuItems from "./hooks/useMenuItems";
import { useAppDispatch } from "../../store/store";
import { fetchUserThunk } from "../../store/thunks/fetchUserThunk";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const items = useMenuItems(collapsed);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserThunk());
  }, [dispatch]);

  return (
    <Layout hasSider>
      <Sider
        width={250}
        className={classes.sider}
        collapsible
        collapsedWidth={60}
        breakpoint="md"
        onCollapse={(isCollapsed) => setCollapsed(isCollapsed)}
      >
        <Image src={siderLogo} preview={false} alt="Sider Logo" />
        <Menu className={classes.menu} items={items} selectedKeys={[]} />
      </Sider>
      <Layout>
        <Content className={classes.content}>
          <Outlet />
        </Content>
        <Footer className={classes.footer}>
          D24 ©{new Date().getFullYear()} Created by Simeon Dodov.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;

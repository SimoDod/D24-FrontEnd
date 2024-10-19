import classes from "./AppLayout.module.scss";
import { Layout, Menu, Image, Typography, Switch, Select } from "antd";
import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
const { Content, Footer } = Layout;
import siderLogo from "../../assets/images/d24-logo.svg";
import useMenuItems from "./hooks/useMenuItems";
import { useAppDispatch } from "../../store/store";
import { fetchUserThunk } from "../../store/thunks/fetchUserThunk";
import { MenuOutlined, SunOutlined, MoonOutlined } from "@ant-design/icons";
import { menuItemKey } from "./constants";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { ThemeType } from "../../theme/types";
import i18n from "../../localization/i18n";
import { languages } from "../../localization/constants";
const { Header } = Layout;
const { Text } = Typography;
const { Option } = Select;

const App = () => {
  const items = useMenuItems();
  const dispatch = useAppDispatch();
  const { toggleTheme, themeType } = useContext(ThemeContext);

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
        <Switch
          checkedChildren={<SunOutlined />}
          unCheckedChildren={<MoonOutlined />}
          defaultChecked={themeType === ThemeType.DEFAULT}
          onChange={() => toggleTheme()}
        />
        <Text>D24 ©{new Date().getFullYear()} Created by Simeon Dodov.</Text>
        <Select
          onChange={(value) => i18n.changeLanguage(value)}
          defaultValue={languages[0].shortName}
        >
          {languages.map(({ shortName, nativeName }) => (
            <Option key={shortName} value={shortName}>{nativeName}</Option>
          ))}
        </Select>
      </Footer>
    </Layout>
  );
};

export default App;

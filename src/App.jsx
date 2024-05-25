import { Layout, Button, theme } from "antd";
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import ToggleThemeButton from "./components/ToggleThemeButton";

const { Sider, Header } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        className="sidebar"
        theme={darkTheme ? "dark" : "light"}
        collapsed={collapsed}
        collapsible
        trigger={null}
      >
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            className="toggle"
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          ></Button>
        </Header>
      </Layout>
    </Layout>
  );
}

export default App;

import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  PictureOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";

const MenuList = ({ darkTheme }) => {
  return (
    <Menu
      className="menu-bar"
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="users" icon={<UserOutlined />}>
        Users
      </Menu.Item>
      <Menu.Item key="albums" icon={<DatabaseOutlined />}>
        Albums
      </Menu.Item>
      <Menu.Item key="photos" icon={<PictureOutlined />}>
        Photos
      </Menu.Item>
    </Menu>
  );
};

MenuList.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};

export default MenuList;

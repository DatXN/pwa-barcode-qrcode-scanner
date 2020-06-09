import React from "react";
import { Typography, Space, Layout, Menu } from "antd";
import "./App.less";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import ScannerPrototype from "./components/scannerPrototype/scannerPrototype";
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <section style={{ textAlign: "center", margin: 16 }}>
            <Space align="start">
              <img
                style={{ width: 32, height: 32 }}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                alt="Ant Design"
              />
              <Title level={3} style={{ marginBottom: 0, color: "#fff" }}>
                DatXN
              </Title>
            </Space>
          </section>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              nav 4
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />

          <Content style={{ margin: "0px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <ScannerPrototype></ScannerPrototype>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Scanner Prototype ©2020 Created by DatXN
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import {
  Form,
  Select,
  Button,
  Typography,
  Space,
  Layout,
  Menu,
  Input,
} from "antd";
import "./App.less";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import CameraHandler from "./components/cameraHandler";
import { AppCodeContext } from "./app-code-context";

const { Option } = Select;
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { span: 20 },
};

const App = () => {
  const [code, setCodeData] = useState("");
  const setCode = (code) => {
    console.log(code);
    setCodeData(code);
  };
  const handleOnClick = (e) => {
    console.log(e);
  };
  return (
    <div>
      <AppCodeContext.Provider value={{ code, setCode }}>
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
                <CameraHandler />
                <div style={{ padding: 24, textAlign: "center" }}>
                  <Input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleOnClick}
                    style={{ marginTop: 10 }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Scanner Prototype ©2020 Created by DatXN
            </Footer>
          </Layout>
        </Layout>
      </AppCodeContext.Provider>
    </div>
  );
};

export default App;

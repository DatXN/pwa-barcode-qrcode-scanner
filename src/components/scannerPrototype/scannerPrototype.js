import React, { useState } from "react";
import { Tabs } from "antd";
import CameraHandler from "../cameraHandler/CameraHandler";
import DxQrReader from "../qrReader/qrReader";
import ScannerOutputPanel from "../scannerOutputPanel/scannerOutputPanel";

import { AppCodeContext } from "../../app-code-context";
import { BarcodeOutlined, QrcodeOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;

const ScannerPrototype = () => {
  const [activeTabKey, setActiveTabKey] = useState(1);
  const [code, setCodeData] = useState("");
  const [type, setTypeData] = useState("");
  const setCode = (value) => {
    setCodeData(value);
  };
  const setType = (value) => {
    setTypeData(value);
  };
  const handleOnClick = (e) => {
    console.log(e);
  };
  const onTabChange = (activeKey) => {
    console.log(activeKey);
    setActiveTabKey(+activeKey);
  };
  return (
    <AppCodeContext.Provider value={{ code, setCode, type, setType }}>
      <div className="card-container">
        <Tabs type="card" defaultActiveKey="1" onChange={onTabChange}>
          <TabPane
            tab={
              <span>
                <BarcodeOutlined />
                Barcode Scanner
              </span>
            }
            key="1"
          >
            {activeTabKey === 1 ? <CameraHandler /> : null}
          </TabPane>
          <TabPane
            tab={
              <span>
                <QrcodeOutlined />
                QR Scanner
              </span>
            }
            key="2"
          >
            {activeTabKey === 2 ? <DxQrReader /> : null}
          </TabPane>
        </Tabs>
        <ScannerOutputPanel
          outputCode={code}
          outputType={type}
          onSubmit={handleOnClick}
        ></ScannerOutputPanel>
      </div>
    </AppCodeContext.Provider>
  );
};
export default ScannerPrototype;

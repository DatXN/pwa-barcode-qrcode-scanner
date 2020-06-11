import React from "react";
import { Button } from "antd";
import QrReader from "react-qr-reader";
import { AppCodeContext } from "../../app-code-context";

const DxQrReader = (props) => {
  const appCodeContext = React.useContext(AppCodeContext);

  const state = {
    delay: 500,
    result: "No result",
    pause: false,
  };
  const previewStyle = {
    width: "100%",
  };

  const handleScan = (result) => {
    if (!state.pause && result) {
      appCodeContext.setCode(result);
      var d = new Date();
      var n = d.toString();
      appCodeContext.setType("QR_Code " + n);
      state.pause = true;
    }
    if (result) {
      console.log(result);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  const resetScanClick = () => {
    appCodeContext.setCode("");
    appCodeContext.setType("");
    state.pause = false;
  };

  return (
    <div>
      <QrReader
        delay={500}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <div style={{ textAlign: "center" }}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={resetScanClick}
          style={{ marginTop: 10 }}
          legacyMode="true"
        >
          Re-Scan
        </Button>
      </div>
    </div>
  );
};
export default DxQrReader;

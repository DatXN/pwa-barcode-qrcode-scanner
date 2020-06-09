import React from "react";
import { Button, Input } from "antd";

const ScannerOutputPanel = (props) => {
  return (
    <div style={{ padding: 24, textAlign: "center" }}>
      <Input prefix="Code:" value={props.outputCode} />
      <Input
        prefix="Type:"
        value={props.outputType}
        style={{ marginTop: 10 }}
      />
      <Button
        type="primary"
        htmlType="submit"
        onClick={props.onSubmit}
        style={{ marginTop: 10 }}
      >
        Submit
      </Button>
    </div>
  );
};
export default ScannerOutputPanel;

import React, { lazy, Suspense, useState, useEffect } from "react";

import dataHandler from "../dataHandler";

import { Button } from "antd";

import "./cameraHandler.css";

const Video = lazy(() => import("../Video"));

const CameraHandler = () => {
  const [isCameraSupported, setCameraSupported] = useState(false);
  const [isCameraEnabled, setCameraEnabled] = useState(
    dataHandler.isCameraPermissionGranted()
  );

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      setCameraSupported(true);
    }
    console.log("did mounted");
  }, []);

  const onCamEnabled = () => {
    dataHandler.cameraPermissionGranted();
    setCameraEnabled(true);
  };

  return (
    <>
      {isCameraSupported && isCameraEnabled ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Video />
        </Suspense>
      ) : (
        ""
      )}
      {isCameraSupported && !isCameraEnabled ? (
        <>
          <div className="cameraHandler__message">
            Enable your camera with the button below
            <br />
            <div className="cameraHandler__messageIcon"></div>
          </div>
          <Button type="primary" htmlType="submit" onClick={onCamEnabled}>
            Enable camera
          </Button>
        </>
      ) : (
        ""
      )}
      {!isCameraSupported ? (
        <div className="cameraHandler__unsopported">
          <div>
            <p>
              Your device does not support/enabled camera access or something
              went wrong{" "}
              <span role="img" aria-label="thinking-face">
                🤔
              </span>
            </p>
            <p>You can enter the barcode below</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CameraHandler;

import React, { useState, useEffect } from "react";
import Quagga from "quagga";
import VideoSkeleton from "./Video.skeleton";
import "./video.css";
import { AppCodeContext } from "../../app-code-context";

const Video = (props) => {
  const appCodeContext = React.useContext(AppCodeContext);

  const [videoInit, setVideoInit] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const onInitSuccess = () => {
    Quagga.start();
    setVideoInit(true);
  };

  const onDetected = (result) => {
    Quagga.offDetected(onDetected);
    appCodeContext.setCode(result.codeResult.code);
    console.log(result);
    Quagga.onDetected(onDetected);
  };

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector("#video"),
          },
          numOfWorkers: 4,
          locate: true,
          locator: {
            patchSize: "medium",
            halfSample: true,
          },
          decoder: {
            readers: [
              "ean_reader",
              "ean_8_reader",
              "upc_reader",
              "code_128_reader",
            ],
            debug: {
              drawBoundingBox: true,
              showFrequency: true,
              drawScanline: true,
              showPattern: true,
            },
          },
        },
        (err) => {
          if (err) {
            setVideoError(true);
            return;
          }
          onInitSuccess();
        }
      );
      Quagga.onDetected(onDetected);
      Quagga.onProcessed(function (result) {
        var drawingCtx = Quagga.canvas.ctx.overlay,
          drawingCanvas = Quagga.canvas.dom.overlay;

        if (result) {
          if (result.boxes) {
            console.log(drawingCtx);

            drawingCtx.clearRect(
              0,
              0,
              parseInt(drawingCanvas.getAttribute("width")),
              parseInt(drawingCanvas.getAttribute("height"))
            );
            result.boxes
              .filter(function (box) {
                return box !== result.box;
              })
              .forEach(function (box) {
                Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                  color: "green",
                  lineWidth: 2,
                });
              });
          }

          if (result.box) {
            Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
              color: "#00F",
              lineWidth: 2,
            });
          }

          if (result.codeResult && result.codeResult.code) {
            Quagga.ImageDebug.drawPath(
              result.line,
              { x: "x", y: "y" },
              drawingCtx,
              { color: "red", lineWidth: 3 }
            );
          }
        }
      });
    }
  }, []);

  return (
    <div>
      <div className="video__container">
        {videoError ? (
          <div className="skeleton__unsopported">
            <div>
              <p>
                Your device does not support camera access or something went
                wrong{" "}
                <span role="img" aria-label="thinking-face">
                  🤔
                </span>
              </p>
              <p>You can enter the barcode below</p>
            </div>
          </div>
        ) : (
          <div>
            <div className="video" id="video" />
            {videoInit ? "" : <VideoSkeleton />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;

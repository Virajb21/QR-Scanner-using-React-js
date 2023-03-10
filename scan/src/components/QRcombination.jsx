import React from "react";
import { useState } from "react";
import qrcode from "qrcode";
import QRscan from "./QRscan";
import QRcreate from "./QRcreate";
  const QRcombination = () => {
  const [text, setText] = useState("");
  const [imageQR, setImageQR] = useState();

  const generateQRCode = async () => {
    const response = await qrcode.toDataURL(text);
    setImageQR(response);
  };

  return (
    <div className="container">
      <h2 className="badges bg-danger text-white rounded">QR Code Scanner</h2>
      <div className="row">
        <div>
          <div className="col-sm-10 text-start">
            <h5>Write URL to Generate QR Code</h5>
            <input
              className="col-sm-6"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="col-sm-2 btn btn-primary btn-sm m-2"
              onClick={() => {
                generateQRCode();
              }}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <QRcreate imageQR={imageQR} />
        
        <QRscan />

      </div>
    </div>
  );
};

export default QRcombination;

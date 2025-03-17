import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  if (!imageUrl) {
    return null;
  }

  return (
    <div className="center ma">
      <div
        className="absolute mt2"
        style={{
          visibility: box?.topRow !== undefined ? "visible" : "hidden",
        }}
      >
        <img
          id="inputimage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            left: box.leftCol,
            right: box.rightCol,
            bottom: box.bottomRow,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;

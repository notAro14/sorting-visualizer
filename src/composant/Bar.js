import React from "react";

export default function Bar({ height, bgColor, width }) {
  return (
    <div
      className="bar"
      style={{
        width: `${width}px`,
        backgroundColor: bgColor,
        height: `${height}px`,
        margin: "0 1px",
        display: "inline-block",
      }}
    ></div>
  );
}

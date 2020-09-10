import React from "react";

export default function Bar({ height }) {
  return (
    <div
      style={{
        width: "10px",
        backgroundColor: "tomato",
        height: `${height}%`,
        margin: "0 0.05rem"
      }}
    ></div>
  );
}

import React from "react";
import "./box.css";

// we are using object destructuring on the porps here
const box = ({ size = "small", className, style, ...rest }) => {
  let defaultClass = `box ${size === "small" ? "box-small" : size === "medium" ? "box-medium" : size === "large" ? "box-large" : ""}`;

  return (
    <div
      className={`${defaultClass} ${className ? className : ""}`}
      style={{ ...style, fontStyle: "italic" }}
      {...rest}
    ></div>
  );
};

export default box;

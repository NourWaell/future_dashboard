import React from "react";

const Button = ({
  size,
  color,
  bgColor,
  text,
  borderRadius,
  customFunc,
  icon,
}) => {
  return (
    <button
      type="button"
      style={{ color, borderRadius, backgroundColor: bgColor }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={() => customFunc()}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;

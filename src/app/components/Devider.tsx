import React from "react";

const Divider = ({
  color = "gray-300",
  thickness = "1px",
  style = "solid",
  text = "",
}: {
  color?: string;
  thickness?: string;
  style?: any;
  text?: string;
}) => {
  return (
    <div className="flex items-center my-4">
      <div
        className={`flex-grow border-t border-${color}`}
        style={{
          borderTopWidth: thickness,
          borderTopStyle: style,
        }}
      ></div>
      {text && <span className="mx-4 text-gray-500 text-sm">{text}</span>}
      <div
        className={`flex-grow border-t border-${color}`}
        style={{
          borderTopWidth: thickness,
          borderTopStyle: style,
        }}
      ></div>
    </div>
  );
};

export default Divider;

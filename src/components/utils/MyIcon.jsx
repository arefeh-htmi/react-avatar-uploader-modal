import React from "react";
import "./icon.scss";
const MyIcon = ({ className, displayValue, onClick, style, ...props }) => {
  return (
    <>
      <i
        className={`icon ${className} fas `}
        style={style}
        onClick={onClick}
        {...props}
      >
        {displayValue} {/* if using material icons */}
      </i>
    </>
  );
};

export default MyIcon;

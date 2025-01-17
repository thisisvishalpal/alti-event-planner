import React, { useState } from "react";

export const LanguageToggler = ({ labelLeft, labelRight, onChange, value }) => {
  // const value = localStorage.getItem("language") || "english";
  const [isToggled, setIsToggled] = useState(
    value === "english" ? false : true
  );

  const handleToggle = () => {
    setIsToggled(!isToggled);
    onChange(!isToggled);
  };

  return (
    <div className="switch-container">
      <span className="label">{labelLeft}</span>
      <div
        className={`switch ${isToggled ? "toggled" : ""}`}
        onClick={handleToggle}
      >
        <div className="slider" />
      </div>
      <span className="label">{labelRight}</span>
    </div>
  );
};

import React, { useState } from "react";

export const ThemeToggler = ({ labelLeft, labelRight, onChange }) => {
  const value = localStorage.getItem("theme") || "light";
  const [isToggled, setIsToggled] = useState(value === "light" ? false : true);

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

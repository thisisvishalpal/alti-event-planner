import React, { useState } from "react";
import { useTheme } from "Theme";

export const ThemeToggler = () => {
  const { toggleTheme } = useTheme();
  const value = localStorage.getItem("theme") || "light";
  const [isToggled, setIsToggled] = useState(value === "light" ? false : true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme(!isToggled);
  };

  return (
    <>
      <p>Theme</p>
      <div className="switch-container">
        <span className="label">Light</span>
        <div
          className={`switch ${isToggled ? "toggled" : ""}`}
          onClick={handleToggle}
        >
          <div className="slider" />
        </div>
        <span className="label">Dark</span>
      </div>
    </>
  );
};

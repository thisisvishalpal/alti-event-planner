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
    <div className="card-mod mt-3">
      <div className="switch-container">
        <span>Light</span>
        <div
          className={`switch ${isToggled ? "toggled" : ""}`}
          onClick={handleToggle}
        >
          <div className="slider" />
        </div>
        <span>Dark</span>
      </div>
    </div>
  );
};

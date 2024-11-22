import React, { useState } from "react";
// import "./index.css"; // Optional: For styling the switch component

export const SwitchSelector = ({ labelLeft, labelRight, onChange }) => {
  const value = localStorage.getItem("theme") || "light";
  console.log(value);
  const [isToggled, setIsToggled] = useState(value === "light" ? false : true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    onChange(!isToggled); // Call the callback function when the switch is toggled
  };

  return (
    <div className="switch-container">
      {/* <span>Looking for</span> */}
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

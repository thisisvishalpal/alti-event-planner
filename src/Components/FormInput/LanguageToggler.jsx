import React, { useState } from "react";
import { useSelector } from "react-redux";

export const LanguageToggler = () => {
  const { data } = useSelector(({ userInfo }) => userInfo);
  console.log(data.language);
  // const value = localStorage.getItem("language") || "english";
  const [isToggled, setIsToggled] = useState(
    "english" === "english" ? false : true
  );

  const handleToggle = () => {
    setIsToggled(!isToggled);
    // onChange(!isToggled);
  };

  return (
    <div className="card-mod mt-3">
      <div className="switch-container">
        <span className="label">English</span>
        <div
          className={`switch ${isToggled ? "toggled" : ""}`}
          onClick={handleToggle}
        >
          <div className="slider" />
        </div>
        <span className="label">हिन्दी</span>
      </div>
    </div>
  );
};

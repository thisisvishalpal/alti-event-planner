import React, { useState } from "react";
import { Form } from "react-bootstrap";

import { useTheme } from "Theme";

export const ThemeToggler = () => {
  const { toggleTheme } = useTheme();
  const value = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(value === "light" ? "light" : "dark");

  const handleToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    toggleTheme();
  };

  return (
    <Form>
      <Form.Label>Change theme</Form.Label>
      <Form.Check
        name="themeToggle"
        type="switch"
        id="custom-switch-2"
        // label={`${language === "hi" ? "हिन्दी" : "English"}`}
        checked={theme === "dark"}
        onChange={handleToggle}
      />
    </Form>
  );
};

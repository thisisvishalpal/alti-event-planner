import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useTheme } from "Theme";

export const ThemeToggler = () => {
  const { toggleTheme } = useTheme();
  const { t } = useTranslation();
  const value = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(value === "light" ? "light" : "dark");

  const handleToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    toggleTheme();
  };

  return (
    <Form>
      <Form.Label>{t("generic.themeToggler")}</Form.Label>
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

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form } from "react-bootstrap";

export const LanguageToggler = ({ showHeading = false }) => {
  const { i18n } = useTranslation();
  const value = localStorage.getItem("language") || "en";
  const [language, setLanguage] = useState(value || "en");

  const handleToggle = (event) => {
    setLanguage(event.target.checked ? "hi" : "en");
    i18n.changeLanguage(event.target.checked ? "hi" : "en");
    localStorage.setItem("language", event.target.checked ? "hi" : "en");
  };
  return (
    <Form>
      {showHeading && <Form.Label>Change language</Form.Label>}
      <Form.Check
        name="languageToggle"
        type="switch"
        id="custom-switch"
        // label={`${language === "hi" ? "हिन्दी" : "English"}`}
        checked={language === "hi"}
        onChange={handleToggle}
      />
    </Form>
  );
};

// // LanguageContext.js
// import React, { createContext, useState, useContext } from "react";
// import translations from "./translations";

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState("en"); // Default language is English

//   const t = (key) => {
//     return translations[language][key] || key; // Fallback to the key if translation is missing
//   };

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage, t }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => useContext(LanguageContext);

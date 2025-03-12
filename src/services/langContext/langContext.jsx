import { createContext, useEffect, useState } from "react";

export const LangContext = createContext();

const initialLang = localStorage.getItem("lang") ?? "Es";

export const LangContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLang);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const handleChangeLang = () => {
    setLanguage((prev) => (prev === "Es" ? "En" : "Es"));
  };

  return (
    <LangContext.Provider value={{ language, handleChangeLang }}>
      {children}
    </LangContext.Provider>
  );
};

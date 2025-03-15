import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const initialValue = localStorage.getItem("theme") ?? "light";
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

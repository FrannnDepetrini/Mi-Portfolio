import { createContext, useState } from "react";

export const SectionContext = createContext();

export const SectionContextProvider = ({ children }) => {
  const [section, setSection] = useState("home");
  const [prInView, setPrInView] = useState(false);

  const handleInView = () => {
    setPrInView(true);
  };
  const handleSelectSection = (section) => {
    setSection(section);
  };

  return (
    <SectionContext.Provider
      value={{ section, handleSelectSection, handleInView, prInView }}
    >
      {children}
    </SectionContext.Provider>
  );
};

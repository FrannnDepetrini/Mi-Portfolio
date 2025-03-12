import { useContext } from "react";
import { LangContext } from "../../services/langContext/langContext";
import { dict_translations } from "./translation.dictionary";

const UseTranslation = () => {
  const { language } = useContext(LangContext);

  return (key) => {
    const translation = dict_translations[language].find(
      (t) => t.key === key
    ).value;

    return translation || key;
  };
};

export default UseTranslation;

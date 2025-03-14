import { useState } from "react";

export function useValidateInput(labelName, inputType = "genericText") {
  const [errors, setErrors] = useState({
    msg: `El campo ${labelName} no debe ser vacio`,
  });

  const validateInput = (text) => {
    let errorMsg;
    if (text == "") {
      errorMsg = `El campo ${labelName} no debe ser vacio`;
    } else {
      switch (inputType) {
        case "genericText": {
          if (text.length > 20) {
            errorMsg = "No mas de 20 caracteres";
          } else {
            errorMsg = "";
          }
          break;
        }
        case "email": {
          if (!text.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            errorMsg = "Email invalido";
          } else {
            errorMsg = "";
          }
          break;
        }
      }
    }
    setErrors({
      msg: errorMsg,
    });
  };
  return [validateInput, errors];
}

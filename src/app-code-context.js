import React from "react";

export const AppCodeContext = React.createContext({
  code: "",
  type: "",
  setCode: (data) => {},
  setType: (value) => {},
});

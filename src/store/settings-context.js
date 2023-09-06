import React from "react";

const SettingsContext = React.createContext({
  formValues: {
    numberOfVerbs: "",
    verbFormData: "",
    time: "",
  },
  getFormData: () => {},
});

export default SettingsContext;

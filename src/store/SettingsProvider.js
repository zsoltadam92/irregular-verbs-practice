import { useState } from "react";
import SettingsContext from "./settings-context";

const SettingsProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    numberOfVerbs: "",
    verbFormData: "",
    time: "",
  });

  const getFormData = (values) => {
    setFormValues((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  const [settingsDone, setSettingsDone] = useState(false);

  const settingsContext = {
    formValues,
    getFormData,
  };

  return (
    <SettingsContext.Provider value={settingsContext}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;

import { useMemo, useState } from "react";
import ColorModeContext from "./colorMode-context";

const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggleColorModeHandler = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const colorModeContext = {
    mode,
    toggleColorMode: toggleColorModeHandler,
  };

  return (
    <ColorModeContext.Provider value={colorModeContext}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;

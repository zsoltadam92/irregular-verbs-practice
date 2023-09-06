import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ColorModeProvider from "./store/colorModeProvider";
import SettingsProvider from "./store/SettingsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ColorModeProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </ColorModeProvider>
  </>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ColorModeProvider from "./store/colorModeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </>
);

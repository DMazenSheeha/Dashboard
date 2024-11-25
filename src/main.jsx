import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./style.scss";
import App from "./App";
import DarkModeContextProvider from "./context/darkModeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </StrictMode>
);

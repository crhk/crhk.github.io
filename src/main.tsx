import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "rsuite/dist/rsuite-no-reset.min.css";
import "rsuite/Accordion/styles/index.css";
import "./styles.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

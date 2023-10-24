import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./navbar.css";
import "./hero.css";
import "./skills.css";
import "./projects.css";
import "./contact.css";
import "./footer.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

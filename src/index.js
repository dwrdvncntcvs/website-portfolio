import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, HomeProvider, SkillsProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <HomeProvider>
      <SkillsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SkillsProvider>
    </HomeProvider>
  </AuthProvider>
);

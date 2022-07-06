import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  HomeProvider,
  ProjectsProvider,
  SkillsProvider,
} from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <HomeProvider>
      <SkillsProvider>
        <ProjectsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProjectsProvider>
      </SkillsProvider>
    </HomeProvider>
  </AuthProvider>
);

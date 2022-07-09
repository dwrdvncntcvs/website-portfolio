import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  ContactProvider,
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
          <ContactProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ContactProvider>
        </ProjectsProvider>
      </SkillsProvider>
    </HomeProvider>
  </AuthProvider>
);

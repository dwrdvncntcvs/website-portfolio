import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  AboutMeProvider,
  AuthProvider,
  ContactProvider,
  HomeProvider,
  PersonalProvider,
  ProjectsProvider,
  SkillsProvider,
} from "./context";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <HomeProvider>
      <SkillsProvider>
        <ProjectsProvider>
          <ContactProvider>
            <AboutMeProvider>
              <PersonalProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </PersonalProvider>
            </AboutMeProvider>
          </ContactProvider>
        </ProjectsProvider>
      </SkillsProvider>
    </HomeProvider>
  </AuthProvider>
);

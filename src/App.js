import "./App.scss";
import { Routes, Route } from "react-router-dom";
import {
  AboutMe,
  Certificates,
  Contact,
  Experiences,
  Home,
  PageNotFound,
  Personal,
  ProjectDetails,
  Projects,
  Skills,
} from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div className="a__main-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />}>
          <Route path=":id" element={<ProjectDetails />} />
        </Route>
        <Route path="/contact-me" element={<Contact />} />
        <Route path="/about-me/" element={<AboutMe />}>
          <Route path="" element={<Personal />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="experiences" element={<Experiences />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

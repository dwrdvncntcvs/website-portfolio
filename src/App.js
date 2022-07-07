import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home, ProjectDetails, Projects, Skills } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div className="a__main-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;

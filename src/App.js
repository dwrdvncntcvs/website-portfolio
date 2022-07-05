import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div className="a__main-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

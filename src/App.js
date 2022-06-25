import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home, SignIn } from "./pages";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { NavBar } from "./components";

function App() {
  return (
    <div className="a__main-container">
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />}></Route>

        <Route path="/admin/" element={<ProtectedRoutes />}>
          <Route path="" element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

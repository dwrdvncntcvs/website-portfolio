import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home, SignIn } from "./pages";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { NavBar } from "./components";
import { ACCESS_VAR } from "./utils/variables";

function App() {
  return (
    <div className="a__main-container">
      <NavBar />
      <Routes>
        <Route path="/sign-in" element={<SignIn />}></Route>

        <Route
          path="/"
          element={<ProtectedRoutes access={ACCESS_VAR.PUBLIC} />}
        >
          <Route path="" element={<Home />} />
        </Route>
        <Route
          path="/admin/"
          element={<ProtectedRoutes access={ACCESS_VAR.PRIVATE} />}
        >
          <Route path="" element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

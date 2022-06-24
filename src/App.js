import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home, SignIn } from "./pages";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>

      <Route path="/admin/" element={<ProtectedRoutes />}>
        <Route path="" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

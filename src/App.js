import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home, SignIn } from "./pages";

function App() {
  return <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/sign-in" element={<SignIn />}></Route>
  </Routes>;
}

export default App;

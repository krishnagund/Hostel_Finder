import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Login from "./scene/Auth/Login";
import Home from "./scene/Home/Home";
import LandingPage from "./scene/LandingPage/LandingPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const isAuth = Boolean(useSelector((state) => state.user));
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

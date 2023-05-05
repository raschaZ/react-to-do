import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/HomeScreen";
import Login from "./components/Login";
import Register from "./components/Register";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Auth />}>
              <Route path="" element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Navigate to="/login" />} />
=======
          <Route path="/" element={<Navigate to="/Login" />} />
>>>>>>> 1f92233708b39c16b63645e0019270189c0dc1da
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

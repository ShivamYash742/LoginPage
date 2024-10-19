import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import img from "../assets/side_img.png";

function SignUp() {
  return (
    <div className="auth-container">
      <div className="auth-right">
        <img
          src={img}
          alt="Sign Up Illustration"
          className="auth-illustration"
        />
      </div>
      <div className="auth-left">
        <h2>Sign Up</h2>
        <p>Create an account to start your journey</p>
        <form className="auth-form">
          <input type="text" placeholder="Full Name" className="input-field" />
          <input type="text" placeholder="Email" className="input-field" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
            required
          />
          <button className="auth-button">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

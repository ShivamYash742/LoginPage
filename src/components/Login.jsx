import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import img from "../assets/side_img.png";
import { FaInstagram, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-right">
        <img
          src={img}
          alt="Sign In Illustration"
          className="auth-illustration"
        />
      </div>
      <div className="auth-left">
        <h2>Welcome Back</h2>
        <p>Sign in to continue your progress</p>
        <form className="auth-form">
          <input
            type="text"
            placeholder="Email / Username"
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            required
          />
          <div className="auth-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="/" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button className="auth-button">Sign In</button>
        </form>
        <p>OR LOGIN WITH</p>
        <div className="social-icons">
          <FaInstagram className="icon instagram" />
          <FaFacebookF className="icon facebook" />
          <FaGoogle className="icon google" />
          <FaTwitter className="icon twitter" />
        </div>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="auth-link">
            Sign up first
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

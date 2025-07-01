import React from "react";
import "./css/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
        </div>
        <button>continue</button>
        <p className="loginsignup-login">
          {" "}
          already have an acccount? <span>login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>by continuing, i agree the terms of the use and privacy policy </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

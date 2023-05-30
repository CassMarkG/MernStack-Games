import React from "react";
import Avatar from "../components/Avatar.jsx";
import RegisterForm from "../components/RegisterForm.jsx";
import "../register.css";

function Register() {
  return (
    <div className="register">
      <Avatar />
      <h2>Register</h2>
      <h3>Please fill in all the spaces</h3>
      <RegisterForm />
    </div>
  );
}

export default Register;


import { React,useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register,reset } from "../features/auth/authSlice";
import {toast} from "react-toastify"
import Spinner from "../components/Spinner";
import Avatar from "../components/Avatar.jsx";
import LoginForm from "../components/LoginForm.jsx";
import "../login.css"

function Login(){
    return(
        <div class="login">
        <Avatar />
        <h2>Login</h2>
        <h3>Enter your credentials</h3>
        <LoginForm />
    </div>
    );
}

export default Login;
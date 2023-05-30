import { React,useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login, logout, register,reset } from "../features/auth/adminSlice.js";
import {toast} from "react-toastify"
import Spinner from "../components/Spinner";


function AdminLogin(){

    const [formData, setFormData] = useState({
        email:'',
        password:'',
    });

    const {email,password} = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {admin,isLoading,isError,isSuccess,message} = useSelector(
        (state) => state.admin
    )

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess || admin){
            navigate('/admindashboard')
        }
        dispatch(reset())
    }, [admin,isError,isSuccess,message,navigate,dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password,
        }
        dispatch(login(userData))
    }

    const onHit = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    if(isLoading){
        return <Spinner />
    }

    return(
        <form onSubmit={handleSubmit} class="login-form">
            <div class="textbox">
                <input 
                type="email" 
                placeholder="Username"
                name="email"
                value={email}
                onChange={onHit}
                />
                <span class="material-symbols-outlined">account_circle</span>
            </div>
            <div class="textbox">
                <input 
                type="password" 
                placeholder="Password"
                name="password"
                value={password}
                onChange={onHit}
                />
                <span class="material-symbols-outlined">lock</span>
            </div>
            
            <button type="submit">Login</button>
            {/* <a href="#">Forgot your password?</a> */}
            
            <div class="forgot">
                {/* <a href={onSignup}>Sign up</a> */}
                <Link to='/login'> Not an admin?</Link>
            </div>
        </form>
    )
}

export default AdminLogin;

import { React,useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login, register,reset } from "../features/auth/authSlice.js";
import {toast} from "react-toastify"
import Spinner from "./Spinner";


function RegisterForm(){
     //capture input
  //formData is initialstate and setFormData is obj used to update state
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    password: '',
    password: '',
    password2: '',
  });

  const {fname,lname,email,password,password2} = formData;
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user,isLoading,isError,isSuccess,message} = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if(isError){
      toast.error(message)
    }
    if(isSuccess || user){
      navigate('/login')
    }
    dispatch(reset())
  }, [user,isError,isSuccess,message,dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      fname,lname,email,password,password2
    }
    dispatch(register(userData))
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
    <form onSubmit={handleSubmit} className="register-form"> 
     <div class="textbox1">
                <div class="textbox">
                    <input 
                    type="text" 
                    placeholder="Firstname" 
                    name="fname"
                    value={fname}
                    onChange={onHit}
                    required/>
                    <span class="material-symbols-outlined">account_circle</span>
                </div>
                <div class="textbox">
                    <input 
                    type="text" 
                    placeholder="Lastname" 
                    name="lname"
                    value={lname}
                    onChange={onHit}
                    required/>
                    <span class="material-symbols-outlined">account_circle</span>
                </div>

            </div>
      <div className="textbox">
        <input 
        type="email"
        placeholder="Email" 
        required 
        name="email"
        value={email}
        onChange={onHit} 
        />
        <span className="material-symbols-outlined">mail</span>
      </div>
      <div className="textbox">
        <input
          // type="password"
          placeholder="Password"
          id="passw"
          //type="password"
          name="password"
          value={password}
          onChange={onHit}
          required
        />
        <span className="material-symbols-outlined">lock</span>
      </div>
      <div className="textbox">
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={onHit}
          required
        />
        <span className="material-symbols-outlined">lock</span>
        {/* <span class="material-symbols-outlined" id="eye">
          visibility_off
        </span> */}
      </div>
      <button type="submit" >Register</button>
      <div>
        <p className="forgot">
          Already have an account?
          {/* <a href="#"> Sign in</a> */}
          <Link to='/login'> Sign up</Link>
        </p>
      </div>
    </form>
  );
}

export default RegisterForm;

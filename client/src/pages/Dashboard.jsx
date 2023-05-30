import {React, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import DashSection from "../components/DashSection";
import Spinner from "../components/Spinner.jsx";
import {getGoals, reset} from "../features/streams/goalSlice.js";
import "../style.css"
import "../images/sackboy.png";

function Dashboard(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user} = useSelector((state) => state.auth)
    // const {goals,isLoading,isError,message} = useSelector(
    //     (state) => state.goals
    // )

    useEffect(() => {
        // if(isError){
        //     console.log(message)
        // }
        if(!user){
            navigate('/login')
        }
        // dispatch(getGoals())
        // return () => {
        //     dispatch(reset())
        // }
    }, [user,navigate])

    // if(isLoading){
    //     return <Spinner />
    // }

    return(
        <>
        <DashSection />
       
        
        </>
    );
}

export default Dashboard;
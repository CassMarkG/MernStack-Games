import {React, useEffect} from "react";
import {useNavigate,Link } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import "../images/sackboy.png";
import Card from "./Card.jsx";
import { logout,reset } from "../features/auth/authSlice.js";

function DashSection(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

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
        <main>
        <section class="glass">
            <nav>
                <ul>
                    <div class="avatar">
                            <img src="/images/avatar.png" alt="image"/>
                            <h1>Welcome {user && user.name}</h1>
                            {/* <h3>Fun olympics</h3> */}
                    </div>
                    <li>
                        <div class="nav-item">
                            <img src="./Nav-icons/home_FILL0_wght400_GRAD0_opsz48.png" alt="image"/>
                            <p>Home</p>
                         </div>
                    </li>
                    <li>
                        <div class="nav-item">
                            <img src="./Nav-icons/radio_button_checked_FILL0_wght400_GRAD0_opsz48.png" alt=""/>
                            <p>Games</p>
                         </div>
                    </li>
                    <li>
                        <div class="nav-item">
                            <img src="./Nav-icons/view_cozy_FILL0_wght400_GRAD0_opsz48.png" alt=""/>
                            <p>Fixtures</p>
                         </div>
                    </li>
                    <li>
                        <div class="nav-item">
                            <img src="./Nav-icons/settings_FILL0_wght400_GRAD0_opsz48.png" alt=""/>
                            <p>Settings</p>
                         </div>
                    </li>
                    <li>
                        <div class="nav-item">
                            <img src="./Nav-icons/outline_camera_black_24dp.png" alt=""/>
                            <p>Highlights</p>
                         </div>
                    </li>
                    <li>
                         <div class="nav-item">
                            <img src="./Nav-icons/outline_schedule_black_24dp.png" alt=""/>
                            <p>Coming Soon</p>
                         </div>
                    </li>
                    <li>
                        <div class="topbar">
                            <p></p>
                        </div>
                    </li>
                    <li>
                        <div class="nav-item" id="logout">
                            <img src="./Nav-icons/logout_FILL0_wght400_GRAD0_opsz48.png" alt=""/>
                            <p onClick={onLogout}>Logout</p>
                        </div>
                    </li>
                </ul>
                
            </nav>
            <div class="games">
                <ul>
                    <li class="statuslist">
                        {/* <!-- <img src="./Nav-icons/search_FILL0_wght0_GRAD0_opszNaN.png" alt=""> --> */}
                        <input type="text" placeholder="Search" />     
                    </li>
                    <li>
                        <div class="status">

                            <h1>Active Games</h1>
                        </div>
                    </li>
                </ul>
                <div class="cards">
                    <h3>Live</h3>
                    <ul class="carousel">
                        <li>
                        <Card />
                    </li>
                    <li>
                    <Card />
                    </li>
                    <li>
                        <Card />
                    </li>
                   </ul>
                   <div class="words">

                       <h3>Fixtures</h3>
                       {/* <!-- <h4>Filter</h4>
                       <img src="./Nav-icons/expand_circle_down_FILL0_wght0_GRAD0_opszNaN.png" alt=""> --> */}
                   </div>
                   <ul class="carousel">
                    <li>
                    <Card />
                    </li>
                    <li>
                    <Card />
                    </li>
                    <li>
                    <Card />
                    </li>
                   </ul>
                   <h3>Highlights</h3>
                   <ul class="carousel">
                    <li>
                    <Card />
                    </li>
                    <li>
                    <Card />
                    </li>
                    <li>
                    <Card />
                    </li>
                   </ul>
                </div>
            </div>
            <div class="rightNav">
                <div class="profile">
                    
                    <h2></h2>
                </div>
                <ul>
                    <li>
                       <div class="navitem2">
                                            
                        <h2></h2>
                       </div>
                    </li>
                    <li>
                        <div class="navitem2">
                                             
                         <p></p>
                        </div>
                    </li>
                    <li>
                        <div class="navitem2">
                                                
                         <p></p>
                        </div>
                    </li>
                    <li>
                        <div class="navitem3">
                           
                           </div>
                    </li>
                </ul>          
            </div>
        </section>
        </main>
    );
}

export default DashSection;
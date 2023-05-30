import {React, useEffect} from "react";
import {useNavigate,Link } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import "../images/sackboy.png";
import Card2 from "../components/Card2.jsx"
import { logout,reset,deleted } from "../features/auth/adminSlice.js";

function AdminSettings(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/adminlogin')
    }

    const onClose =() =>{
        dispatch(deleted());
    }

    const {admin} = useSelector((state) => state.admin)
    // const {goals,isLoading,isError,message} = useSelector(
    //     (state) => state.goals
    // )

    useEffect(() => {
        // if(isError){
        //     console.log(message)
        // }
        if(!admin){
            navigate('/adminlogin')
        }
        // dispatch(getGoals())
        // return () => {
        //     dispatch(reset())
        // }
    }, [admin,navigate])

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
                            <h3 style={{marginLeft: "250px", position: "relative", bottom: "110px", left: "400px"}}>
                                Welcome <h4 style={{textAlign: "center"}}>{admin && admin.name}</h4></h3>
                            {/* <h3>Fun olympics</h3> */}
                    </div>
                    <li>
                        <div class="nav-item">
                            <img src="./Nav-icons/home_FILL0_wght400_GRAD0_opsz48.png" alt="image"/>
                            <p>Home</p>
                            <Link to='/admindashboard'>Home</Link>
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
                        <Card2 />
                    </li>
                    <li>
                    <Card2 />
                    </li>
                    <li>
                        <Card2 />
                    </li>
                   </ul>
                   <div class="words">

                       <h3>Fixtures</h3>
                       {/* <!-- <h4>Filter</h4>
                       <img src="./Nav-icons/expand_circle_down_FILL0_wght0_GRAD0_opszNaN.png" alt=""> --> */}
                   </div>
                   <ul class="carousel">
                    <li>
                    <Card2 />
                    </li>
                    <li>
                    <Card2 />
                    </li>
                    <li>
                    <Card2 />
                    </li>
                   </ul>
                   <h3>Highlights</h3>
                   <ul class="carousel">
                    <li>
                    <Card2 />
                    </li>
                    <li>
                    <Card2 />
                    </li>
                    <li>
                    <Card2 />
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

export default AdminSettings;
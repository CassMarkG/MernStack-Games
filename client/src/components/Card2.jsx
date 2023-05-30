import React from "react";
import { useDispatch } from "react-redux";
import { deleted } from "../features/auth/adminSlice.js";

function Card2({users}){
    const dispatch = useDispatch();

    return(
        <div class="card">
        <div class="card-info">
        <div>{new Date(users.createdAt).toLocaleString('en-us')}</div>
            <h2>{users.text}</h2>
            <button onClick={() => dispatch(deleted(users))}>X</button>
            <div class="progress"></div>
        </div>
    </div>
    );
}

export default Card2;
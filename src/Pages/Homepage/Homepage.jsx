
import React from "react";
import { useState } from "react";
import './homepage.css'
import { useNavigate } from "react-router-dom";
import Quizpage from "../Quizpage/Quizpage";

const Homepage = () =>{

    let navigate = useNavigate()

    function submitHandler() {
        navigate("/Quizpage")
    }

    return(
        <div className="body">
            <button onClick={submitHandler} className="btn">Start</button>
        </div>
        
    )
}

export default Homepage
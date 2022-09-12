import React from "react";


export default function Voting(props){
    return(
        <div>
        <h1>
            Enter Your Age here
        </h1>
        <input type="number" placeholder="Enter your Age" id="age" min={0}  />
            <input type="button" value="Check" onClick={checkAge} />
            <p id="head">

            </p>
        </div>


    )
    function checkAge(){
        var age=document.getElementById("age").value;
        if(age>=18)
        {
            document.getElementById("head").innerHTML="<h1>You can Vote</h1>"
        }
        else
        {
            document.getElementById("head").innerHTML="<h1>You cannot Vote</h1>"
 
        }
        
    }
}
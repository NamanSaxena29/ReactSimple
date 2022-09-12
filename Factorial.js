import './App.css'
import React from "react";

export function Factorial(){
    return(
        <div>
            <h1 >Enter any no</h1>
            <input type="text" id="num" placeholder="Only Number"/><br/>
            <input type="submit" value="Factorial" id="sub1" onClick={calculate} />
            <h1 id="fact"></h1>
            <input type="submit" value="Table" id="sub1" onClick={Table} />
            <p id="table"></p>

        </div>
 )

 function calculate(){
    var num= document.getElementById("num").value;
    var result=1;
    for(var i=1;i<=num;i++)
    {
        result=result*i;
    }
            console.log(result)

    document.getElementById("fact").innerHTML="The Factorial of "+num+ " is "+ result;
}
}
  

function Table(){
    var num = document.getElementById("num").value;
    var str="";
    for (var i=1;i<=10;i++){
        str=str +"<p>"+num+ " x " +i+ " = "+num*i+ "<p/>"
    }
    document.getElementById("table").innerHTML= str
}
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Counter=()=>{

    const [count , setCount]=useState(0);

    useEffect(()=>{
        console.log("Count is updating");
    },[count]);
   
    return (
        <div>
            <p>Count component-{count}</p>
            <button className="button" onClick={()=>setCount(count +1 )}>Increment</button>
        </div>
    )
}
export default Counter;
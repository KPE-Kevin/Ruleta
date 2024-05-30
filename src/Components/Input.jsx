'use client'
import { useEffect, useState } from "react";

function Input({callback=()=>{}}) {
    const [value, setValue]=useState(1);
    useEffect(()=>{
        callback(value);
    },[value])

    const handleValue=(event)=>{
        const num = event.target.value
        if(num===''){
            setValue(1)
        }else{
            setValue(num);
        }
    }

    return ( <input type="number" value={value} onChange={handleValue} min={1} /> );
}

export default Input;
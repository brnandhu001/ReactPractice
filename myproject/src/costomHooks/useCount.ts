import { useState } from "react";


export const useCount=(initialCount=0)=>{
    const [count,setCount]=useState(initialCount)

const increment=()=>{
    setCount((pre)=>pre+1)
}
const decrement=()=>{
    setCount((pre)=>pre-1)
}
const reset=()=>{
    setCount(0)
}
    return{
        increment,
        decrement,
        reset,
        count,
}
}
import React from "react";
import { FiCornerDownRight } from "react-icons/fi";

const Button=()=>{
    return(
        <div className="min-w-40 px-4 py-2 bg-zinc-100 rounded-full text-black flex justify-between items-center">
            <span className="text-sm font-medium">Get Started</span>
            <FiCornerDownRight/>
        </div>
    )
}

export default Button;
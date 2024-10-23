import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion"

import arqitel from "../../assets/video/arqitel.webm"
import yir from "../../assets/video/yir.webm"
import yahoo from "../../assets/video/yahoo.webm"
import ttr  from "../../assets/video/ttr.webm"

const Products=()=>{
    const [pos,setPos]=useState(0);

    const mover=(val)=>{
        setPos(val*23);
    }
    
    var products=[
    {
        title:"Arqitel",
        description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
        live:true,
        case:false,
    },
    {
        title:"TTR",
        description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
        live:true,
        case:false,
    },
    {
        title:"YIR 2022",
        description:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
        live:true,
        case:true,
    },
    {
        title:"Yahoo!",
        description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
        live:true,
        case:true,
    }
]
    return(
        <div className="mt-32 relative">
            {products.map((val,index)=><Product key={index} index={index} mover={mover} val={val}/>)}
            <div className="absolute top-0 h-full w-full pointer-events-none">
                <motion.div 
                initial={{ y:pos, x:"-50%" }} 
                transition={{ease:[0.76, 0, 0.24, 1],duration:0.6}}
                animate={{y:pos+`rem`}}
                className="absolute h-[23rem] bg-white w-[32rem] left-[44%] -translate-x-[50%] overflow-hidden">
                    <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className="w-full h-full">
                        <video autoPlay muted loop>
                            <source src={arqitel} type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                    <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className="w-full h-full">
                        <video autoPlay muted loop>
                            <source src={ttr} type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                    <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className="w-full h-full">
                        <video autoPlay muted loop>
                            <source src={yir} type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                    <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className="w-full h-full">
                        <video autoPlay muted loop>
                            <source src={yahoo} type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Products
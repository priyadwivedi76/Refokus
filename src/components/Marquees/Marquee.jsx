import React from "react";
import { motion } from "framer-motion"


const Marquee=({imageUrl,direction})=>{
    return(
        <div className="flex w-full py-8 overflow-hidden">
            <motion.div initial={{x:direction==="left"?"0":"-100%"}} animate={{x:direction==="left"?"-100%":"0"}} transition={{ease:"linear",duration:15,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
                {imageUrl.map((item,index)=><img key={index} src={item} className="" />)}
            </motion.div>
            <motion.div initial={{x:direction==="left"?"0":"-100%"}} animate={{x:direction==="left"?"-100%":"0"}} transition={{ease:"linear",duration:15,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
                {imageUrl.map((item,index)=><img key={index} src={item} className="" />)}
            </motion.div>
        </div>
    )
}

export default Marquee;
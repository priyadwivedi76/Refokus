import React from "react";


const Marquee=({imageUrl})=>{
    return(
        <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
            {imageUrl.map((item,index)=><img key={index} src={item} className="w-[6vw] flex-shrink-0" />)}
            {imageUrl.map((item,index)=><img key={index} src={item} className="" />)}
        </div>
    )
}

export default Marquee;
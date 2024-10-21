import React from "react";
import Button from "./Button";

const Navbar=()=>{
    return(
        <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
            <div className="nleft flex items-center">
                <img src="https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/62dfc1419247bccdd5a2dd1b_Tools.svg" alt="" />
                <div className="links flex gap-10 ml-20">
                    {["Home","Work","Culture","","News"].map((elem,index)=>(
                        elem.length === 0 ? 
                            (<span className="w-[2px] h-7 bg-zinc-700"></span>)
                            :(
                                <a className="text-sm flex items-center gap-1" href="#">
                                    {index === 1 && (<span style={{boxShadow:"0px 0px 0.45em #00ff19"}} className="inline-block w-1 h-1 rounded-full bg-green-500"></span>)}
                                    {elem}
                                </a>)
                            )
                        )
                    }
                </div>
            </div>
            <Button/>
        </div>
    )
}

export default Navbar;
import React from 'react'
import { motion } from 'framer-motion';
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, hover="false" }) => {
    return (
        <motion.div whileHover={{backgroundColor:hover==="true" && "#7443ff",padding:"25px"}} className={`${width} bg-zinc-800 p-5 rounded-xl min-h-[30rem] flex flex-col justify-between`}>
            <div>
                <div className='w-full flex items-center justify-between'>
                    <h3>Up Next: News</h3>
                    <IoIosArrowRoundForward />
                </div>
                <h1 className='mt-5 font-medium text-3xl'>Insights and behind the scenes</h1>
            </div>
            <div className='down w-full'>
                {start && (
                    <>
                        <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a Project</h1>
                        <button className='px-5 mt-5 py-2 rounded-full border-[1px] border-zinc-200'>Contact Us</button>
                    </>
                )}
                {para && (
                    <p className='text-zinc-500 text-sm font-medium mt-5'>Explore what drives our team.</p>
                )}
            </div>
        </motion.div>
    );
}

export default Card;
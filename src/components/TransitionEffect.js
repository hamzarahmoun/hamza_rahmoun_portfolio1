import React from 'react'
import{motion} from "framer-motion"
export const TransitionEffect = () => {
  return (
    <>
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#1a00ff]'
    initial={{x:'100%',width:'100%'}}
    animate={{x:'0%',width:"0%"}}
    exit={{x:['0%','100%'],width:['0%','100%']}}
    transition={{duration:0.6,ease:'easeInOut'}}
    
    />
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light'
    initial={{x:'100%',width:'100%'}}
    animate={{x:'0%',width:"0%"}}
    transition={{delay:0.2,duration:0.4,ease:'easeInOut'}}
    
    />
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#00ccff]'
    initial={{x:'100%',width:'100%'}}
    animate={{x:'0%',width:"0%"}}
    transition={{delay:0.2,duration:0.6,ease:'easeInOut'}}
    
    />
    

    
    </>
  )
}

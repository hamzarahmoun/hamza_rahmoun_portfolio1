import React, { useRef } from 'react';
import {motion, useScroll } from 'framer-motion'
import { LiIcons } from './LiIcons';
const Details = ({ position, comapny, companyLink, time, adress, work }) => {
    const ref =useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
    md:w-[80%]
    '>
        <LiIcons reference={ref} />
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}
        >
            

            <h3 className='capitalize font-bold text-2xl sm:text-xl xl:text-lg'>{position}&nbsp;<a href={companyLink}
                target='_blank'
                className='text-primary capitalize dark:text-primaryDark'
            >@{comapny}</a></h3>
            <span className='capiatalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {adress}
            </span>
            <p className='font-medium w-full ms:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}
  export const Experience = () => {
    const ref= useRef(null)

    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["start center","center start"]



    })
    return (
        <div className='my-64'>

            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>
            <div ref={ref } className='w-[75%] mx-auto relative lg:w-[90%] md:w-full '>
                <motion.div 
                style={{scaleY:scrollYProgress}}
                className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]
                '/>
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position='Web Developer' comapny='Freelance'
                        comapnyLink='/'
                        time='May 2023-Present' adress='Remote'
                        work='As a freelance web developer, I operate independently, focusing on refining my skills and working on various web development projects.'

                    />
                    <Details
                        position='Content Writer' comapny='Medium'
                        comapnyLink='https://medium.com/@wickswhisperer'
                        time='Jan 2023-Present' adress='Remote'
                        work='I am a content writer on Medium, focusing on creating engaging and informative articles on various topics.'

                    />
                    <Details
                        position='Assistance technique' comapny='Vehicle Technical Inspection'
                        comapnyLink='/'
                        time='Mar 2023-Apr 2023' adress='On-site'
                        work='I served as a technical assistant in vehicle control, where my responsibilities included supporting the development and maintenance of control systems for vehicles.'

                    />
                    
                   
                </ul>
            </div>
        </div>
    )
}

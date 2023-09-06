import React, { useRef } from 'react';
import {motion, useScroll } from 'framer-motion'
import { LiIcons } from './LiIcons';
const Details = ({ type, time,place, info }) => {
    const ref =useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcons reference={ref} />
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}
        >
            

            <h3 className='capitalize font-bold text-2xl sm:text-xl xl:text-lg'>{type}</h3>
            <span className='capiatalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}
export const Education = () => {
    const ref= useRef(null)

    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["start center","center start"]



    })
    return (
        <div className='my-64'>

            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Education
            </h2>
            <div ref={ref } className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div 
                style={{scaleY:scrollYProgress}}
                className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]
                ' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        type='Technicien Spécialisé Infrastructure Digitale option Cloud Computing' time='2021-2023'
                         place='Specialized Institute Of Applied Technology NTIC'
                         info={
                           'This comprehensive program encompassed essential topics, including understanding cloud architecture, exploring both public and proprietary cloud environments, implementing cloud solutions using open-source technologies, administering cloud environments, ensuring security measures, governing cloud-based data, and establishing strategies for maintaining information systems in online environments'
                        }
                        

                    />
                     <Details
                        type="Bachelor's degree" time='2020-2021'
                        place='Nanjing International School'
                        info={
                        "I embarked on a journey to pursue a MBachelor's degree, eager to delve into the world of technology and programming. However, the unforeseen challenges posed by the COVID-19 pandemic, coupled with the significant time difference between China and Morocco, presented obstacles that made it difficult for me to continue my studies in this specialized field. Despite the setbacks, I remain passionate about technology and am exploring alternative ways to further my knowledge and contribute to the ever-evolving tech landscape."

                        }

                    />
                     <Details
                        type='Chinese language and literature' time='2019-2020'
                        place='Nanchang Foreign Language School'
                        info="I have been immersed in Mandarin language and culture through conversations with a native speaker, which has allowed me to gain insights into Chinese culture and history. I've also explored the art of Chinese calligraphy and developed basic translation abilities, enabling me to facilitate communication between Chinese and English."

                    />
                     <Details
                        type='Accounting' time='2018-2019'
                        place='Specialized Institute Of Applied Technology NTIC'
                        info='I have undertaken a comprehensive program covering various aspects of business and finance, including a global approach to business environments, fundamental concepts of general accounting, business calculations, financial analysis, personnel administration, and proficiency in management software encompassing accounting, payroll, and commerce. This diverse skill set equips me with a holistic understanding of business operations and financial management.'

                    />
                </ul>
            </div>
        </div>
    )
}

import { AnimatedText } from '@/components/AnimatedText';
import { Layout } from '@/components/Layout';
import Head from 'next/head'
import Link from 'next/link';
import {motion} from "framer-motion"
import { TransitionEffect } from '@/components/TransitionEffect'

import React from 'react';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
const FramerImage =motion(Image);

  

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
    
    // const boxStyle = {
    //     backgroundColor: 'black', // Background color for the black box
    //     boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Box shadow for the shadow effect
    //     borderRadius: '40px',
    //     paddingRight: '10px', // Additional padding on the right for spacing
    //     paddingBottom: '10px',
        
    // };

    return (
        <div 
        
        // style={boxStyle}
        className='overflow:hidden relative rounded-[1.5rem] border 
        border-solid border-dark border-b-8 border-r-8 border-l-0 border-t-0 w-[101%] bg-light  dark:bg-dark dark:border-light
        xs:border-b-6 xs:border-r-6 xs:w-full xs:rounded-[2rem] 

        '
        >
            <article className="w-full flex items-center justify-between overflow:hidden relative rounded-2xl rounded-br-3x border 
            border-solid border-dark bg-light shadow-2xl p-8 dark:bg-dark dark:border-light
            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 
             
            ">
            <Link href={link} target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2 dark:hover:underline'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm '>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center '>

                    <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
                    <Link href={link} target='_blank'
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                        dark:bg-light dark:text-dark
                        sm:px-4 sm:text-base
                        '
                    >Visit Project</Link>
                </div>

            </div>
            </article>
        </div>

    )

}

const Project = ({ title, type, img, link, github }) => {
    
    // const boxStyle = {
    //     backgroundColor: 'black', // Background color for the black box
    //     boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Box shadow for the shadow effect
    //     borderRadius: '30px',
    //     paddingRight: '10px', // Additional padding on the right for spacing
    //     paddingBottom: '10px',
        
    // };
    return (
    
        <div 
        className='overflow:hidden relative rounded-[1.5rem] border 
        border-solid border-dark border-b-8 border-r-8 border-l-0 border-t-0 bg-light dark:bg-dark dark:border-light
        xs:rounded-[2rem] 
        '
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5,ease:"easeInOut"}}}
        viewport={{once:true}}
        // style={boxStyle}
        >
         <article className='w-full flex flex-col items-center justify-center rounded-2xl border 
        border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
        xs:p-4
        
        '>
            

            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-1 w-full text-left text-3xl font-bold lg-text'>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between '>
                    <Link href={link} target='_blank'
                        className='text-lg font-semibold underline md:text-base'
                    >Visit</Link>

                    <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon /></Link>

                </div>

            </div>
        </article>
        </div>
        
        
       

    )
}
const projects = () => {

    return (

        <>
            <Head>
                <title>CodeBucks | Projects Page</title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect/>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text='Imagination Trumps Knowledge!'
                        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl '
                    />
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProjects
                                title="Crypto Screener Application"
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                                link="/"
                                type="Featured Project"
                                img={project1}
                                github="/"

                            />
                          


                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                            
                                title="Crypto Screener Application"
                                link="/"
                                type="Featured Project"
                                img={project1}
                                github="/"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Crypto Screener Application"
                                link="/"
                                type="Featured Project"
                                img={project1}
                                github="/"

                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProjects
                                title="Crypto Screener Application"
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                                link="/"
                                type="Featured Project"
                                img={project1}
                                github="/"

                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Crypto Screener Application"
                                link="/"
                                type="Featured Project"
                                img={project1}
                                github="/"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Crypto Screener Application"
                                link="/"
                                type="Featured Project"
                                img={project1}
                                github="/"

                            />
                        </div>

                    </div>



                </Layout>
            </main>
        </>
    )
}
export default projects;

import { AnimatedText } from '@/components/AnimatedText'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionValue } from "framer-motion"
import Link from 'next/link'
import articel1 from '../../public/images/articles/pagination component in reactjs.jpg'
import articel2 from '../../public/images/articles/create loading screen in react js.jpg'
import articel3 from '../../public/images/articles/create modal component in react using react portals.png'
import articel4 from '../../public/images/articles/create loading screen in react js.jpg'
import { TransitionEffect } from '@/components/TransitionEffect'


const FramerImage = motion(Image);
const MovingImg = ({ title, img, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const ingRef = useRef(null);

    function handleMouse(event){
        ingRef.current.style.display='inline-block';
        x.set(event.pageX)
        y.set(-10)
    }
    function handleMouseLeave(event){
        ingRef.current.style.display='none';
        x.set(0)
        y.set(0)

    }
    return (
        <Link href={link} target='_blank'

        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage 
            
            style={{x:x,y:y}}
            initial={{opacity:0}}
            whileInView={{opacity:1,transition:{duration:1}}}
            ref={ingRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'
            priority
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
            />

        </Link>
    )
}
const Article = ({ img, title, date, link }) => {
    return (
        <motion.li 
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5,ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0
        border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light 
        sm:flex-col
        '>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )

}

const FeaturedArticles = ({ img, title, summary, link, time }) => {
    // const boxStyle = {
    //     backgroundColor: 'black', // Background color for the black box
    //     boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Box shadow for the shadow effect
    //     borderRadius: '30px',
    //     paddingRight: '10px', // Additional padding on the right for spacing
    //     paddingBottom: '10px',

    // };
    return (
        <div 
        
        // style={boxStyle}
        className='overflow:hidden relative rounded-3xl border 
        border-solid border-dark border-b-8 border-r-8 border-l-0 border-t-0 bg-light dark:bg-dark dark:border-light
        sm:col-span-8
        '
        
        >

            <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light '>

                <Link href={link} target='_blank'
                    className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
                >
                    <FramerImage src={img} alt={title} className='w-full h-auto'
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}

                    />
                </Link>
                <Link href={link} target='_blank'>
                    <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
                </Link>
                <p className='text-sm mb-2'>{summary}</p>
                <span className='text-primary font-semibold dark:text-primaryDark xs:text-base'>{time}</span>


            </li>  </div>

    )

}

const articles = () => {
    return (
        <>
            <Head>
                <title>CodeBucks | Articales Page</title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect/>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Words Can Change The World " className='mb-16
                    lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
                    ' />
                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-col-1 md:gap-y-16 '>
                        <FeaturedArticles
                            img={articel1}
                            link="/"
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
                            time='9 min read'
                        />
                        <FeaturedArticles
                            img={articel2}
                            link="/"
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
                            time='9 min read'
                        />

                    </ul>
                    <h2 className='w-full font-bold text-4xl text-center my-16 mt-32'>
                        All Articles
                    </h2>
                    <ul>
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22,2023"
                            link="/"
                            img={articel3}

                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22,2023"
                            link="/"
                            img={articel3}

                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22,2023"
                            link="/"
                            img={articel4}

                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22,2023"
                            link="/"
                            img={articel3}

                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22,2023"
                            link="/"
                            img={articel3}

                        />





                    </ul>


                </Layout>
            </main>
        </>

    )
}
export default articles

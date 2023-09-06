import { AnimatedText } from '@/components/AnimatedText'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionValue } from "framer-motion"
import Link from 'next/link'
import articel1 from '../../public/images/articles/startup.png'
import articel2 from '../../public/images/articles/health.jpg'
import articel3 from '../../public/images/articles/ui.jpg'
import articel4 from '../../public/images/articles/passion.webp'
import articel5 from '../../public/images/articles/networking.webp'
import articel6 from '../../public/images/articles/negotiation.jpg'
import articel7 from '../../public/images/articles/cloud.jpg'


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
        sm:col-span-8 h-[100%]  
        '
        
        >

            <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light h-[100%] '>

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
                <span className='text-primary font-semibold dark:text-primaryDark xs:text-base '>{time}</span>


            </li>  </div>

    )

}

const articles = () => {

    return (
        < >
            <Head>
                <title>Rahmoun | Articales Page</title>
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
                            link="https://medium.com/@wickswhisperer/6-artificial-intelligence-startup-ideas-to-make-money-with-openai-7602f4d424a4"
                            title="6 Artificial Intelligence Startup Ideas To Make Money with OpenAI"
                            summary="
                            Are you intrigued by the world of AI startups and their potential for financial gain? 
                            In this article, Hamza Rahmoun presents six innovative AI startup concepts that could revolutionize 
                            industries and open doors to financial independence.
                            "
                            time='9 min read'
                        />
                        <FeaturedArticles
                            img={articel2}
                            link="https://medium.com/p/69e7ece7d0de"
                            title="11 Simple ways to lead a healthy lifestyle "
                            summary="Feeling burnt out and overwhelmed by the daily grind? 
                            It's time to reclaim control over your health and well-being with these 11 simple strategies. In this article, 
                            we'll guide you through practical steps to lead a healthier lifestyle"
                            time='2 min read'
                        />

                    </ul>
                    <h2 className='w-full font-bold text-4xl text-center my-16 mt-32'>
                        All Articles
                    </h2>
                    <ul>
                        <Article
                            title="11 Tips for negotiating your designer salary"
                            date="Jan 30,2023"
                            link="https://bootcamp.uxdesign.cc/11-tips-for-negotiating-your-designer-salary-3f719c8fc7c0?gi=ca80a5ca5834&source=user_profile---------3----------------------------"
                            img={articel6}

                        />
                        <Article
                            title="Everything You Need To Know About Cloud Computing"
                            date="Aug 29,2023"
                            link="https://medium.com/@wickswhisperer/everything-you-need-to-know-about-cloud-computing-6fce3e99a4f8"
                            img={articel7}

                        />
                        <Article
                            title="The Benefits of Networking for Personal Growth"
                            date="Feb 22,2023"
                            link="https://medium.com/practice-in-public/the-benefits-of-networking-for-personal-growth-a1a5aa803429"
                            img={articel5}

                        />
                        <Article
                            title="11 Tips to Maintain Passion for Programming"
                            date="Feb 5,2023"
                            link="https://medium.com/illuminations-mirror/11-tips-to-maintain-passion-for-programming-cfd9084955d9"
                            img={articel4}

                        />
                        <Article
                            title="7 UI design mistakes to avoid"
                            date="Feb 3,2023"
                            link="https://medium.com/design-bootcamp/7-ui-design-mistakes-to-avoid-46635ea8287a"
                            img={articel3}

                        />





                    </ul>


                </Layout>
            </main>
        </>

    )
}
export default articles

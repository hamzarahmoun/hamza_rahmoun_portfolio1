import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Lottie from 'lottie-web';

export const HireMe = ({body}) => {
  const container = useRef(null);
  useEffect(() => {
    // Check if the animation has already been loaded
    if (container.current && !container.current.animationLoaded) {
      Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../lotti/json1.json')
      });

      // Set a flag to indicate that the animation has been loaded
      container.current.animationLoaded = true;
    }
  }, []);
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:-right-1 md:left-auto md:-top-1 md:bottom-auto md:absolute '>
      <div className='w-48 h-48 relative md:w-24 '>
        {/* Spinning Circle */}
        {/* <CircularText className='fill-dark animate-spin-slow dark:fill-light ' /> */}
        <div
          className='container' ref={container}
        >

        </div>

        {/* "Hire Me" Link */}
        <Link 
        href={`mailto:${body?.contactEmail}`} 
        // href={`mailto:hamza.rahmoun456@gmail.com`} 

        className='absolute inset-0 flex items-center justify-center bg-transparent
        md:w-24 md:h-24 
        '>
          <div className='bg-dark text-light shadow-md border border-solid border-white w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark flex items-center justify-center
           dark:border-solid dark:border-dark dark:hover:border-dark hover:border-dark dark:hover:bg-dark dark:hover:text-white
           md:w-12 md:h-12 md:text-[10px] dark:bg-light dark:text-black dark:font-bold 
          '>
            Hire Me
          </div>
        </Link>
      </div>
    </div>
  );
};

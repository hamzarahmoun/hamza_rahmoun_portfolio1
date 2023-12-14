import React from 'react'
import { Layout } from './Layout'

export const Footer = () => {
  const phone = '0645468765'
  const message = 'Hello, I want to say hello!'; // Replace with your desired message

  // Create the WhatsApp URL
  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light
    sm:text-base
    '>

        <Layout className='py-8 flex items-center justify-between lg:flex-col '>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
                Build With <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
                by&nbsp;<div className='underline underline-offset-2'>Hamza</div>
            
            </div>
            <a href={whatsappURL} className='underline underline-offset-2' target="_blank" rel="noopener noreferrer">
            Say Hello on WhatsApp
              </a>
        </Layout>

    </footer>
  )
}
'use client'
import Button from '@/components/Button'
import React from 'react'
import solaTicket from '@/assets/solar_ticket.svg';
import rightArrow from '@/assets/rightArrow.svg';
import { motion } from 'framer-motion' 

const Hero = () => {
  return (

    <section id='hero' className='py-32 md:py-48 relative bg-cover bg-center bg-no-repeat h-screen overflow-x-clip' style={{backgroundImage:"url('/assets/tedImage1.jpg');"}}>
        
        <div className="absolute inset-0 bg-[#070707] bg-opacity-90"></div>
        <motion.div className='container relative z-10'>
            <p className='text-xs leading-5 md:text-sm text-center'>OVER 50+ STUDENT VOLUNTEERS AND ALUMNI BRINGING THIS DREAM TO LIFE </p>
            <motion.h2 
            initial={{
              opacity:0,
              y:6
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              duration:0.8,
              ease:'easeInOut'
            }}
            className='text-center text-5xl lg:text-7xl font-bold mt-6 leading-[55px]'>Redeemer&apos;s University Maiden TEDx Event: UNCHARTED</motion.h2>

            <motion.div 
               initial={{
                opacity:0,
                y:6
              }}
              animate={{
                opacity:1,
                y:0
              }}
              transition={{
                duration:0.8,
                ease:'easeInOut',
                delay:1
              }}
            className='flex items-center justify-center gap-4 md:gap-6 mt-12 lg:mt-16 flex-col md:flex-row'>
                <Button href='https://legacy.tix.africa/tedxrun' text='GET TICKETS' icon={solaTicket} bg />
                <Button href='' text='BECOME A SPONSOR' icon={rightArrow}  />
            </motion.div> 
        </motion.div>

     
    </section>

  )
}

export default Hero

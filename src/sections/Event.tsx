'use client'
import Image from 'next/image'
import React, {useRef}  from 'react'
import featureIcon1 from '@/assets/featureIcon1.svg'
import featureIcon2 from '@/assets/featureIcon2.svg'
import featureIcon3 from '@/assets/featureIcon3.svg'
import { motion, useInView } from 'framer-motion' 

const Event = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className='py-24 bg-event bg-cover relative'>
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        <div className='container relative z-10'>
          <div className='flex justify-center gap-16 flex-col md:flex-row'>
            <motion.div className=''>
              <motion.h2 
                 style={{
                  opacity:isInView ? 1 :0,
                  transitionDuration:'0.5s',
                  transitionTimingFunction:'ease-in',
                  transitionDelay:'1.3s'
                }}
              className='text-6xl font-bold '>Upcoming Events</motion.h2>


              <motion.p 
                style={{
                  opacity:isInView ? 1 :0,
                  y:isInView ? 10:0,
                  transitionDuration:'0.6s',
                  transitionTimingFunction:'ease-in',
                  transitionDelay:'1.6s'
                }}
              className='max-w-[500px] mt-8 leading-7'>The Theme for the upcoming <span className='text-[#FF2020] font-semibold text-xl'>TEDxRUN</span> 2025
              is <span className='font-bold  '>UNCHARTED</span>.  It is aimed at driving creativity and innovation in the minds of all attendees through insightful talks by industry leaders
               which promises to be an outstanding event for the year 2025. We are inviting top creators in 
              major fields such as content creation, music, tech, business and so on, Lots of knowledge to be shared, connections to be made and an outstanding interaction amongst registered 
              participants.
              </motion.p>
            </motion.div>

            <motion.div className='flex flex-col gap-10'>
                <motion.div
                  style={{
                    opacity:isInView ? 1 :0,
                    transitionDuration:'0.6s',
                    transitionTimingFunction:'ease-in',
                    transitionDelay:'1.9s'
                  }}
                >
                  <div className='flex items-center gap-2'>
                      <Image src={featureIcon1} alt='icon' className='bg-[#FF2020] text-white'/>
                      <h2>Tech</h2>
                  </div>
                  <p className='text-sm mt-2 max-w-[300px]'>At Tedx Run we would go in deep into the latest technolohical changes and advancements, the job opportunities in tech and how
                    job can be gotten at various fields in tech
                  </p>
                </motion.div>

              <motion.div
                 style={{
                  opacity:isInView ? 1 :0,
                  transitionDuration:'0.6s',
                  transitionTimingFunction:'ease-in',
                  transitionDelay:'2.2s'
                }}
              >
                <div className='flex items-center gap-2'>
                    <Image src={featureIcon2} alt='icon' className='bg-[#FF2020] text-white'/>
                    <h2>Career Talks</h2>
                </div>
                <p className='text-sm mt-2 max-w-[300px]'>Tedx Run main focal point would be on career talks, helping individuals navigate the modern, and digital job opportunites</p>
              </motion.div>

              <motion.div
                 style={{
                  opacity:isInView ? 1 :0,
                  transitionDuration:'0.6s',
                  transitionTimingFunction:'ease-in',
                  transitionDelay:'2.6s'
                }}
              >
                <div className='flex items-center gap-2'>
                    <Image src={featureIcon3} alt='icon' className='bg-[#FF2020] text-white'/>
                    <h2>Personal Devlopment</h2>
                </div>
                <p className='text-sm mt-2 max-w-[300px]'>Our second focal point would be on personal development, teaching individuals & participants the neccessity behind a better you and how import PropTypes from prop-types
                can help shape our world today </p>
              </motion.div>

            </motion.div>
          </div>
        </div>

        
    </section>
  )
}

export default Event

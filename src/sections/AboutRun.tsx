'use client'
import Image from 'next/image'
import React, {useRef} from 'react'
import runImg from '@/assets/runImg.svg'
import featureIcon1 from '@/assets/featureIcon1.svg'
import featureIcon2 from '@/assets/featureIcon2.svg'
import featureIcon3 from '@/assets/featureIcon3.svg'
import { motion, useInView } from 'framer-motion' 

const AboutRun = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className='py-24'>
      <div className='container'>
        <motion.div className='flex flex-col-reverse md:flex-row  gap-20'>
            
            <motion.div className='flex-1'>
                <motion.h2 
                    style={{
                        opacity:isInView ? 1 :0,
                        transitionDuration:'0.5s',
                        transitionTimingFunction:'ease-in',
                        transitionDelay:'1.3s'
                      }}
                className='text-3xl font-bold'>Tedx Run?</motion.h2>
                <motion.p 
                  style={{
                    opacity:isInView ? 1 :0,
                    y:isInView ? 10:0,
                    transitionDuration:'0.8s',
                    transitionTimingFunction:'ease-in',
                    transitionDelay:'1.8s'
                  }}
                className='mt-6 leading-7'> <span className='text-[#FF2020] font-semibold text-xl'>TEDxRUN</span> is an independently organized TED talk where curiosity meets community, and in this case the community
                being members of Redeemer&apos;s University. TEDxRUN is a unique first of it&apos;s kind gathering in Redeemer&apos;s University aimed
                at unleashing new ideas in territories yet to be explored with the potential to inform and inspire. We intend to bring together a group
                of experts speakers and doers across a wide range of field to share new ideas.
                </motion.p>
                
            </motion.div>

            <motion.div className='flex-1'>
                <motion.div
                 style={{
                    opacity:isInView ? 1 :0,
                    
                    transitionDuration:'0.5s',
                    transitionTimingFunction:'ease-in',
                    transitionDelay:'0.8s'
                  }}
                >
                <Image src={runImg} alt='image1' />
                </motion.div>
            </motion.div>

        </motion.div>

        <motion.h2 
        style={{
            opacity:isInView ? 1 :0,
            transitionDuration:'0.8s',
            transitionTimingFunction:'ease-in',
            transitionDelay:'2.5s'
          }}
        className='mt-8'>What <span className='text-[#FF2020] font-semibold text-xl'>TEDxRUN</span> offers</motion.h2>

        <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6'>
            <motion.div
              style={{
                opacity:isInView ? 1 :0,
                y:isInView ? -20:0,
                transitionDuration:'0.5s',
                transitionTimingFunction:'ease-in',
                transitionDelay:'2.9s'
              }}
            >
                <div className='flex items-center gap-2'>
                    <Image src={featureIcon1} alt='icon' className='bg-[#FF2020] text-white'/>
                    <h2>Inspiring Talks</h2>
                </div>
                <p className='text-sm mt-2 max-w-[300px]'>TedxRun talks showcasr innovative ideas, cutting edge research, and inspiring stories from experts in various fields.
                  Speakers share their passions, experiences and insights, sparking thought-provoking discussions and debates.
                </p>
            </motion.div>


            <motion.div
              style={{
                opacity:isInView ? 1 :0,
                y:isInView ? -20:0,
                transitionDuration:'0.8s',
                transitionTimingFunction:'ease-in',
                transitionDelay:'3.3s'
              }}
            >
                <div className='flex items-center gap-2'>
                    <Image src={featureIcon2} alt='icon' className='bg-[#FF2020] text-white' />
                    <h2>Immersive Experience</h2>
                </div>
                <p className='text-sm mt-2 max-w-[300px]'>TedxRun incorporates interactive breakout sessions, storytelling, visuals and performance, creating an immersive experience for everyone</p>
            </motion.div>

            <motion.div
              style={{
                opacity:isInView ? 1 :0,
                y:isInView ? -20:0,
                transitionDuration:'0.8s',
                transitionTimingFunction:'ease-in',
                transitionDelay:'3.7s'
              }}
            >
                <div className='flex items-center gap-2'>
                    <Image src={featureIcon3} alt='icon' className='bg-[#FF2020] text-white' />
                    <h2>Networking Opportunities</h2>
                </div>
                <p className='text-sm mt-2 max-w-[300px]'>TedxRun brings together curious, open-minded, and enthusiastic individuals from diverse backgrounds.
                  It serves as a platform to engage with speakers, ask questions and build connections.
                </p>
            </motion.div>


        </motion.div>
      </div>
    </section>
  )
}

export default AboutRun

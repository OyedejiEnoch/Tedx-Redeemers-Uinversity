'use client'
import React, { useState,useRef } from 'react'
import { twMerge } from 'tailwind-merge';
import { motion, useInView } from 'framer-motion'

const Faq = () => {

    const faqs = [
        {
            question: "What is TedxRUN",
            answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
        },
        {
            question: "Is attendance virtual or in-person?",
            answer: "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
        },
        {
            question: "How can I prepare for the TEDx talk?",
            answer: "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
        },
        {
            question: "How can my company get involved as a sponsor?",
            answer: "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
        },
        {
            question: "When is TEDxRUN happening?",
            answer: "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
        },
        {
            question: "Who can attend TEDxRUN?",
            answer: "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
        },
    ];

    const [selectedIndex, setSelectedIndex] =useState(0)

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className='py-24'>
      <div className='container'>
        <motion.div 
         style={{
            opacity:isInView ? 1 :0,
            transitionDuration:'0.8s',
            transitionTimingFunction:'ease-in',
            transitionDelay:'0.8s'
          }}
        className='flex justify-center'>
            <div className='inline-flex border border-[#FF2020] gap-2 text-[#FF2020] px-3 py-1 rounded-full uppercase items-center'>
                <span className='text-sm'>&#10038;</span>
                <span>FAQ</span>
            </div>
        </motion.div>

        <motion.h2
         style={{
            opacity:isInView ? 1 :0,
            transitionDuration:'0.8s',
            transitionTimingFunction:'ease-in',
            transitionDelay:'1s'
          }}
        className="text-5xl font-medium mt-6 text-center max-w-xl mx-auto">Questions? We&apos;ve got <span className="text-[#FF2020]">answers</span></motion.h2>

        <motion.div 
         style={{
            opacity:isInView ? 1 :0,
            transitionDuration:'0.8s',
            transitionTimingFunction:'ease-in',
            transitionDelay:'1.4s'
          }}
        className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
            {faqs.map((faq, faqIndex)=>(
                <div key={faq.question} className="bg-neutral-900 rounded-2xl border border-white/10 p-6 ">
                <div className="flex items-center justify-between cursor-pointer" onClick={()=>setSelectedIndex(faqIndex)}>
                    <h3 className="font-medium">{faq.question}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                    className={twMerge("feather feather-plus flex-shrink-0 text-[#FF2020] transition duration-300", selectedIndex === faqIndex && 'rotate-45')}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                </div>
            ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Faq

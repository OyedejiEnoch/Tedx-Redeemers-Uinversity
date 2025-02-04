// import { useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

const Quote = () => {
    const text1 ="While talks from that first gathering in 1984 were available only to those who paid to be in the room..."
    const text2 ="in 2024, TED shared 18,902 big ideas for free — available to everyone, everywhere."
    const text3 ="in 2025, TEDxRUN also plans to share a large number of big ideas, but to a limited attendance available to those who pay a small fee to be in the room."
    
  return (
    <section className='py-24 w-full bg-white'>
      <div className='container text-black'>
        <h2 className='text-center text-4xl md:text-6xl font-medium'>{text1}</h2>

        {/* <h2 className='text-center text-4xl md:text-6xl font-medium mt-24'>{text2}</h2> */}
        <h2 className='text-center text-4xl md:text-6xl font-medium mt-24'>{text3}</h2>
      </div>
    </section>
  )
}

export default Quote

import React from 'react'
import { Linkedin, TwitterIcon } from 'lucide-react'

const Footer = () => {
  return (
    <section className='py-24'>
      <div className='container'>
        <hr />
        <div className='w-full flex flex-col md:flex-row justify-between'>
            <h2 className='font-bold text-5xl mt-10'>TEDx</h2>


            <div>
                <p className='max-w-[300px] mt-10'>TED Members make our mission possible by supporting global access to inspiring ideas. Plus, 
                    they get to attend exclusive events. Help support a better future and a brighter you.</p>

                <div className='flex items-center mt-10 gap-4'>
                    <span className=''>
                    <Linkedin />
                    </span>
                    <span>
                        
                        <TwitterIcon />
                      
                    </span>
                </div>
            </div>
        </div>

        <p className='text-[12px] text-gray-400 text-center max-w-[500px] mx-auto mt-12'>This independent TEDx event is operated under licence from TED.
        All rights reserved. © 2025 TEDxRedeemers University.</p>
      </div>
    </section>
  )
}

export default Footer

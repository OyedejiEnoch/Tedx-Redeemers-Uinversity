import React from 'react'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'


type Prop ={
    text:string
    bg?:boolean
    icon:string
}
const Button = ({text, bg, icon}:Prop) => {
  return (
    <button className={twMerge('px-6 py-4 border border-[#FF2020] text-[#FF2020] flex items-center gap-2 rounded-full text-sm',  bg && 'bg-[#FF2020] text-white')}>
     {text} <span><Image src={icon} alt='icon' /></span>
    </button>
  )
}

export default Button

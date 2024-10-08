import React from 'react'
import {RiBootstrapLine, RiCss3Line,RiHtml5Line, RiJavascriptFill, RiNodejsLine, RiReactjsLine, RiTailwindCssLine, RiWordpressLine} from "react-icons/ri"
import { motion } from 'framer-motion'

const iconVariants =(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})
const Technologies = () => {
  return (
    <>
      <div className='pd-24'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} 
        transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}}   className='flex flex-wrap items-center justify-center gap-8'>
            <motion.div 
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
            className='p-5'>
                <RiHtml5Line className='text-7xl mb-3 text-red-500' />
                <span className='text-center  text-xl p-2'>HTML</span>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className='p-6'>
              <RiCss3Line className='text-7xl text-blue-500 mb-3' />
              <span className='text-center  text-xl p-2'>CSS</span>
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(5)}            
            className='p-6'>
              <RiJavascriptFill className=' mb-3 text-7xl text-yellow-400' />
              <span className='text-center text-xl '>JAVASCRPT</span>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className='p-6'>
                <RiReactjsLine className = "text-7xl mb-3 text-cyan-400" />
                <span className='text-center text-xl p-1'>REACT</span>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className='p-6'>
              <RiWordpressLine className='text-7xl mb-3'/>
              <span className='text-center  text-xl'>WordPress</span>
            </motion.div>
            <motion.div
             initial="initial"
             animate="animate"
             variants={iconVariants(3)}
            className='p-6'>
              <RiNodejsLine className='text-7xl mb-3 text-green-500'/>
              <span className='text-center  text-xl'>NodeJs</span>
            </motion.div>
            <motion.div
             initial="initial"
             animate="animate"
             variants={iconVariants(1.5)}
            className='p-6'>
              <RiBootstrapLine className='text-7xl mb-3 text-blue-700'/>
              <span className='text-center text-xl'>BootsTrap</span>
            </motion.div>
            <motion.div
             initial="initial"
             animate="animate"
             variants={iconVariants(1)}
            className='p-6'>
              <RiTailwindCssLine className='text-7xl  mb-3 text-cyan-600'/>
              <span className='text-center  text-xl'>TailwindCss</span>
            </motion.div>
        </motion.div>

      </div>
    </>
  )
}

export default Technologies

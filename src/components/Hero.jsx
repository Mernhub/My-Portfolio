import { HERO_CONTENT } from '../constants/index';
import React from 'react';
import ProfilePic from "../assets/Abdullah.png";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const Hero = () => {
  return (
    <div className='pb-4'>
      <div className='flex flex-wrap lg:flex-row-reverse items-center'>
        {/* Profile Picture Section */}
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0'>
          <motion.img
            src={ProfilePic}
            className='w-3/4 sm:w-1/2 lg:w-3/4 xl:w-2/3 h-auto object-cover'
            alt='M.ABDULLAH'
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </div>

        {/* Text and Content Section */}
        <motion.div
          initial='hidden'
          animate='visible'
          variants={containerVariants}
          className='w-full  lg:pt-14 lg:w-1/2'
        >
          <div className='flex flex-col items-center lg:items-start mt-10 px-4 sm:px-8'>
            <motion.h2
              variants={childVariants}
              className='pb-2 text-4xl sm:text-5xl lg:text-7xl xl:text-8xl tracking-tighter'
            >
              M. Abdullah
            </motion.h2>
            <motion.span
              variants={childVariants}
              className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tighter text-transparent'
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className='my-4 max-w-lg py-6 text-base sm:text-lg lg:text-xl leading-relaxed tracking-tighter text-center lg:text-left'
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target='_blank'
              rel='noopener noreferrer'
              download
              className='bg-purple-900 hover:bg-purple-700 rounded-full p-3 sm:p-4 text-xs sm:text-sm lg:text-base mb-10'
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

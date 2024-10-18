import React from 'react';
import {
  RiBootstrapLine,
  RiCss3Line,
  RiHtml5Line,
  RiJavascriptFill,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssLine,
  RiWordpressLine,
} from 'react-icons/ri';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div className='px-4 py-12 md:px-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-10 text-center text-4xl md:text-5xl'
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-center'
      >
        {[
          { icon: <RiHtml5Line />, label: 'HTML', color: 'text-red-500' },
          { icon: <RiCss3Line />, label: 'CSS', color: 'text-blue-500' },
          { icon: <RiJavascriptFill />, label: 'JavaScript', color: 'text-yellow-400' },
          { icon: <RiReactjsLine />, label: 'React', color: 'text-cyan-400' },
          { icon: <RiWordpressLine />, label: 'WordPress', color: 'text-white' },
          { icon: <RiNodejsLine />, label: 'NodeJs', color: 'text-green-500' },
          { icon: <RiBootstrapLine />, label: 'Bootstrap', color: 'text-blue-700' },
          { icon: <RiTailwindCssLine />, label: 'Tailwind CSS', color: 'text-cyan-600' },
        ].map((tech, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5 + index * 0.5)} // Stagger the animations
            className='flex flex-col items-center p-4'
          >
            <div className={`text-5xl md:text-7xl mb-2 ${tech.color}`}>
              {tech.icon}
            </div>
            <span className='text-center text-lg md:text-xl'>{tech.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;

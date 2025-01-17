import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="border-t border-stone-600 pb-12 text-white">
      <motion.h2
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y:-100 }}
      transition={{duration: 1}}
      className="my-20 text-center text-4xl">
        Services
      </motion.h2>
      <div className="container mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-16">
        {SERVICES.map((service, index) => (
          
          <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial = {{opacity: 0, x:-100}}
            className={`flex flex-col text-center items-center p-12 border border-gray-700 rounded-lg shadow-lg bg-transparent hover:shadow-purple-600 transition duration-200 ease-in-out ${
              index === 2 ? 'lg:col-span-2 lg:mx-auto' : ''
            }`}
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15, duration: 1 }}
          >
            <h2 className="mb-6 text-4xl font-semibold text-gray-100">
              {service.title}
            </h2>
            <p className="text-gray-400 text-lg flex-grow">
              {service.description}
            </p>
            <a
              href="https://www.fiverr.com/abdullah_wd"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-8 py-4 bg-purple-900 hover:bg-purple-700 text-white font-bold text-lg rounded-lg shadow-lg transition duration-300 ease-in-out"
            >
              Get Services
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;

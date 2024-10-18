import { PROJECTS } from '../constants/index';
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <>
      <div className='pb-4'>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className='my-20 text-center text-4xl'>
          Projects
        </motion.h2>
        <div>
          {PROJECTS.map((project, index) => {
            return (
              <div key={index} className='mb-10 flex flex-wrap justify-center'>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1.5 }}
                  className='items-center justify-center cursor-pointer'
                >
                  <motion.img
                    src={project.image}
                    width={800}
                    height={800}
                    alt={project.title}
                    className='mb-8 rounded'
                    whileHover={{ scale: 1.05 }} // Scale effect on hover
                    whileTap={{ scale: 0.95 }} // Scale down on tap/click
                    transition={{ duration: 0.3 }}
                    style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }} // Default shadow
                  />
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1.5 }}
                  className='text-center'
                >
                  <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                  <p className='mb-4 text-center text-stone-400'>{project.description}</p>

                  {/* Wrap technologies in a flex container */}
                  <div className='flex flex-wrap justify-center mb-4'>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        className='mr-2 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'
                        key={techIndex}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Add button except for the third project */}
                  {index !== 2 && project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <button
                        className='mt-4 block w-full max-w-xs mx-auto rounded bg-purple-900 hover:bg-purple-700 px-4 py-2 text-white transition duration-300 ease-in-out'
                      >
                        View Code
                      </button>
                    </a>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;

import { PROJECTS } from '../constants/index'
import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <>
      <div className='pb-4'>
        <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y:-100 }}
        transition={{duration: 1}}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div>
             {PROJECTS.map((project, index)=>{
               return( <><div key={index} className='mb-10 flex flex-wrap justify-center'>
                    <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial = {{opacity: 0, x:-100}}
                    transition={{duration:1.5}}
                    className='items-center justify-center'>
                        <img src={project.image} 
                        width={800}
                         height={800}
                         alt={project.title}
                         className='mb-8 rounded'/>
                    </motion.div>
                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity: 0, x:100}}
                    transition={{duration: 1.5}}
                    className='text-center'>
                        <h3 className='mb-2 font-semibold text-2xl'>
                            {project.title}
                        </h3>
                        <p className='mb-4 text-center text-stone-400'>
                            {project.description}
                        </p>
                        {project.technologies.map((tech,index)=>(
                            <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300' key={index}>
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
                </>)
             })}
        </div>
      </div>
    </>
  )
}

export default Projects

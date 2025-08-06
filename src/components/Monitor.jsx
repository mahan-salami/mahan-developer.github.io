import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRightLong } from "react-icons/fa6";
import Moni from '../assets/monitor-card.webp';

const Monitor = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const imageHover = {
    y: -10,
    transition: { type: "spring", stiffness: 300 }
  };

  const linkHover = {
    x: 5,
    transition: { type: "spring", stiffness: 400 }
  };

  return (
    <motion.section 
      className='max-w-7xl mx-auto px-4 py-16 md:py-24'
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
        {/* Text Content (Left) */}
        <motion.div 
          className='md:w-1/2 w-full'
          variants={item}
        >
          <div className='mt-6'>
            <motion.p 
              className='text-orange-400 font-semibold'
              whileHover={{ x: 3 }}
            >
              schedule
            </motion.p>
            <motion.h2 
              className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'
              variants={item}
            >
              streamline your business <br /> 
              with smart scheduling solutions
            </motion.h2>
            <motion.p 
              className='text-gray-400 mb-8'
              variants={item}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dignissimos, libero, minima quis nihil veniam voluptatum beatae explicabo voluptatibus sapiente, consectetur soluta! Repellat culpa quas expedita cum debitis id labore!
            </motion.p>
            <motion.a 
              href="#" 
              className='text-blue-600 font-semibold flex items-center gap-2'
              whileHover={linkHover}
            >
              See More <motion.span><FaArrowRightLong className='w-5 h-5'/></motion.span>
            </motion.a>
          </div>
        </motion.div>

        {/* Image (Right) */}
        <motion.div 
          className='md:w-1/2 w-full ml-25  '
          variants={item}
        >
          <motion.img 
            src={Moni} 
            alt="Business Monitor" 
            className=' md:w-3/5 w-full'
            style={{ width: '90%', height: 'auto' }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={imageHover}
            transition={{ type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Monitor;
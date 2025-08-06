import React from 'react';
import { motion } from 'framer-motion';
import mahan from '../assets/Group 6.png';

const Hero = () => {
  // Unified animation configuration
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: 80, rotate: -3 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.03,
      rotate: [0, 1.5, -1.5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'mirror'
      }
    }
  };

  const buttonArrow = {
    hover: {
      x: [0, 5, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity
      }
    }
  };

  return (
    <section id="home" className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-20 md:pt-32 pb-6 px-4 lg:px-8'>
      {/* Left content */}
      <motion.div 
        className='w-full md:w-1/2 space-y-8 order-2 md:order-1'
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item} className='flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full hover:bg-gray-100 w-fit transition-colors cursor-pointer'>
          {/* Badge content here */}
        </motion.div>

        <motion.h1 variants={item} className='font-sans font-light text-4xl lg:text-6xl align-middle mb-2 flex items-center'>
          <span className='ml-3'>
            Hi, I'm <motion.span 
              className='text-blue-600/100 font-medium'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Mahan Salami
            </motion.span>
            <br />
            <span className='flex items-center'>
              <span>Front-End Developer&lt;/&gt;</span>
            </span>
            <motion.span 
              className='mr-4.5 text-5xl'
              animate={{ 
                scale: [1, 1.1, 1],
                transition: { 
                  duration: 2,
                  repeat: Infinity 
                } 
              }}
            >
              💻
            </motion.span>
          </span>
        </motion.h1>
        
        <motion.p variants={item} className='text-gray-600 text-base md:text-base max-w-base pt-2.5'>
          Make Your website with creative designer from our team and enjoy it
        </motion.p>
        
        <motion.div variants={item} className='flex gap-3 max-w-md'>
          <motion.input 
            type="text" 
            placeholder='input your email' 
            className='flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all'
            whileFocus={{ 
              scale: 1.02,
              boxShadow: "0 0 0 2px rgba(37, 99, 235, 0.2)"
            }}
          />
          <motion.button 
            className='bg-blue-600 ml-2 rounded-xl px-8 py-4 text-white hover:bg-blue-700 font-medium transition-all'
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(37, 99, 235, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              variants={buttonArrow}
              whileHover="hover"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
   
      {/* Right content - Image */}
      <div className='w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0 md:pl-10 lg:pl-22'>
        <div className='flex justify-center md:justify-end mr-8 -mt-10 md:-mt-16 md:-ml-60'>
          <motion.img 
            src={mahan} 
            alt="Mahan Salami" 
            className=' relative z-10 max-w-full h-auto '
            variants={imageAnimation}
            initial="hidden"
            animate="visible"

            style={{
              transformOrigin: 'center',
              transformStyle: 'preserve-3d'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
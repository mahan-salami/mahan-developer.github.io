import React from 'react'
import { motion } from 'framer-motion'

const PurposeSection = () => {
  const features = [
    {
      icon: "🟣",
      title: "Built for impact",
      description: "We identify and nurture a truly diverse team of designers, developers and marketers"
    },
    {
      icon: "🔴",
      title: "In sync with you",
      description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      className='w-full bg-gray-200 py-16 px-4 sm:px-6 md:px-8' 
      id='about'
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <motion.div className='md:col-span-1' variants={item}>
            <p className='text-xl text-purple-600 font-medium mb-2'>About Us</p>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Consult with our team to design your website.</h2>
          </motion.div>
          
          <div className='md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8'>
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className='flex space-x-4'
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className='w-12 h-12 flex items-center justify-start rounded-lg'
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {feature.icon}
                </motion.div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                  <p className='text-gray-600'>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default PurposeSection
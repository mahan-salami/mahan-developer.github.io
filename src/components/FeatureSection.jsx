import React from 'react';
import { motion } from 'framer-motion';

const FeatureSection = () => {
  const features = [
    {
      icon: "🔍", 
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like"
    },
    {
      icon: "⚙️",
      title: "Work out the details", 
      description: "Communication protocols apart from engagement models"
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing"
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const iconHover = {
    scale: 1.1,
    rotate: 10,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };

  const heading = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className='max-w-7xl mx-auto px-4 py-16 overflow-hidden'>
      {/* Animated heading text */}
      <motion.div 
        className='text-center mb-12'
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={heading}
      >
        <h2 className='text-3xl font-bold mb-4'>How can we help your business ?</h2>
        <motion.p 
          className='text-gray-600'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          when you resell bensik, you build trust and increase
        </motion.p>
      </motion.div>

      {/* Animated feature boxes */}
      <motion.div 
        className='grid grid-cols-1 md:grid-cols-3 gap-8'
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {features.map((feature, index) => (
          <motion.div 
            className='flex flex-col items-center p-6'
            key={index}
            variants={item}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className='w-24 h-24 rounded-full mb-6 flex items-center justify-center cursor-pointer'
              style={{ 
                backgroundColor: index === 0 ? "#F1eFFd" : index === 1 ? "#FEE7e7" : "#FFF3E4"
              }}
              whileHover={iconHover}
            >
              <div className='text-3xl'>{feature.icon}</div>
            </motion.div>

            <motion.h3 
              className='text-2xl font-medium mb-3 text-center'
              whileHover={{ color: "#4f46e5" }}
            >
              {feature.title}
            </motion.h3>
            <motion.p 
              className='text-gray-500 text-center'
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default FeatureSection;
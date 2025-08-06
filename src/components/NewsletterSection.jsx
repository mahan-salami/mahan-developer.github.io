import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

const NewsletterSection = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  const buttonHover = {
    scale: 1.02,
    backgroundColor: "#16a34a", // darker green
    transition: { type: "spring", stiffness: 400 }
  }

  const buttonTap = {
    scale: 0.98
  }

  const inputFocus = {
    boxShadow: "0 0 0 2px #22c55e", // green-500
    transition: { duration: 0.2 }
  }

  return (
    <motion.section 
      id="newsletter" 
      className="w-full px-4 sm:px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
    >
      <motion.div 
        className="bg-blue-600 rounded-lg mx-auto max-w-7xl overflow-hidden"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative px-5 py-10 md:px-12 md:py-14">
          {/* Animated Background Gradient */}
          <motion.div 
            className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 rounded-lg clip-path-slant hidden md:block"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
          />
          
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-6">
            {/* Left Content */}
            <motion.div 
              className="text-white max-w-lg text-center md:text-left"
              variants={item}
            >
              <motion.h2 
                className="text-lg sm:text-xl md:text-3xl font-medium mb-2"
                whileHover={{ x: 3 }}
              >
                Subscribe newsletter
              </motion.h2>
              <motion.p 
                className="text-blue-100 text-xs"
                whileHover={{ x: 3 }}
              >
                Best cooks and best delivery guys all at your service
              </motion.p>
            </motion.div>

            {/* Email Form */}
            <motion.div 
              className="w-full md:w-auto"
              variants={item}
            >
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <motion.input
                  type="email"
                  placeholder="Your email"
                  className="w-full sm:w-auto md:w-60 px-3 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none bg-white text-sm"
                  whileFocus={inputFocus}
                />
                <motion.button 
                  className="w-full sm:w-auto cursor-pointer bg-green-500 text-white px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md flex items-center justify-center sm:justify-start gap-1 text-sm"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                >
                  <span>Discover</span>
                  <motion.span
                    animate={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <HiArrowRight className="w-4 h-4" />
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style>
        {`
          .clip-path-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </motion.section>
  )
}

export default NewsletterSection
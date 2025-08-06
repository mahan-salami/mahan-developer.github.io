import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Price = () => {
    const [productcount, setProductCount] = useState(1);
    
    // Calculate product prices based on count
    const starterprice = Math.round(4000 * (productcount / 50))
    const businessrprice = Math.round(7500 * (productcount / 50))

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    const cardHover = {
        y: -20,
        scale: 1.03,
        transition: { type: "spring", stiffness: 300 }
    }

    const buttonHover = {
        backgroundColor: "#000",
        transition: { duration: 0.3 }
    }

    const buttonTap = {
        scale: 0.95
    }

    return (
        <motion.section 
            className='py-20 px-4'
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
        >
            <div className='max-w-6xl mx-auto'>
                {/* Title with animation */}
                <motion.h2 
                    className='text-3xl md:text-4xl font-bold text-center mb-16'
                    variants={item}
                >
                    Pricing
                </motion.h2>
            
                {/* Pricing cards grid - two columns on md+ screens, one column on mobile */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {/* Starter plan card */}
                    <motion.div 
                        className='bg-blue-300 p-8 rounded-lg shadow-lg'
                        variants={item}
                        whileHover={cardHover}
                    >
                        <h3 className='text-xl text-white mb-4'>Starter</h3>
                        <motion.p 
                            className='text-3xl font-bold mb-6'
                            key={`starter-${starterprice}`} // Force re-animation when price changes
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring" }}
                        >
                            ${starterprice}/mon
                        </motion.p>
                    </motion.div>

                    {/* Business plan card */}
                    <motion.div 
                        className='bg-blue-300 p-8 rounded-lg shadow-lg'
                        variants={item}
                        whileHover={cardHover}
                    >
                        <h3 className='text-xl text-white mb-4'>Business</h3>
                        <motion.p 
                            className='text-3xl font-bold mb-6'
                            key={`business-${businessrprice}`} // Force re-animation when price changes
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring" }}
                        >
                            ${businessrprice}/mon
                        </motion.p>
                    </motion.div>
                </div>

                {/* Centered content container */}
                <div className='max-w-xl mx-auto'>
                    {/* Product count display */}
                    <motion.p 
                        className='text-center text-gray-600 mt-5'
                        variants={item}
                    >
                        {productcount} Product{productcount !== 1 ? 's' : ''}
                    </motion.p>

                    {/* Slider container */}
                    <motion.div 
                        className='relative px-4'
                        variants={item}
                    >
                        <div className='flex items-center gap-2'>
                            <span className='text-xs sm:text-sm text-gray-600'>1</span>
                            <input 
                                type="range" 
                                className='flex-1 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-4'
                                min="1" 
                                max="50" 
                                value={productcount} 
                                onChange={(e) => setProductCount(parseInt(e.target.value))}
                            />
                            <span className='text-xs sm:text-sm text-gray-600'>50</span>
                        </div>

                        {/* Call to action section */}
                        <motion.div 
                            className='text-center mt-10'
                            variants={item}
                        >
                            <p className='text-gray-600'>Ready to get started</p>
                            <motion.button 
                                className='bg-blue-600 py-3 px-4 rounded-lg text-white mt-5 cursor-pointer'
                                whileHover={buttonHover}
                                whileTap={buttonTap}
                            >
                                Get Started
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default Price
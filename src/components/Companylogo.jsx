import React from 'react';
import { motion } from 'framer-motion';
import aparatLogo from '../assets/aparat-logo.png';
import foodImage1 from '../assets/3-fotor-bg-remover-202507259528.png';
import foodImage2 from '../assets/Tak-Makaron-fotor-bg-remover-2025072594536.png';
import foodImage3 from '../assets/unnamed0-fotor-bg-remover-2025072594721.png';
import socialSecurityLogo from '../assets/دانلود-رایگان-لوگو-آرم-سازمان-تامین-اجتماعی.png';
import englishLogo from '../assets/logo-en.png';
import kaleh from '../assets/kaleh_logo.png';

const Companylogo = () => {
    const logos = [aparatLogo, foodImage1, foodImage2, foodImage3, socialSecurityLogo, englishLogo, kaleh];
    
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const logoHover = {
        scale: 1.05,
        filter: 'grayscale(0%)',
        opacity: 1,
        transition: { duration: 0.3 }
    };

    return (
        <motion.div 
            className='w-full overflow-hidden container mx-auto py-20 gap-8 lg:px-8 flex sm:flex-row flex-col sm:items-center items-start relative'
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
        >
            {/* Text section */}
            <motion.div 
                className='w-[300px] shrink-0 px-6 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-20 sm:text-xl font-semibold text-left relative'
                variants={item}
            >
                Proud Partner <br /> Hubspot and segment
            </motion.div>
    
            {/* Logos container */}
            <div className='flex-1 overflow-hidden relative'>
                <motion.div 
                    className='flex animate-marquee whitespace-nowrap'
                    animate={{
                        x: ['0%', '-100%'],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                >
                    {logos.map((logo, index) => (
                        <motion.img 
                            key={index} 
                            src={logo} 
                            alt="partner logo" 
                            className='mx-6 h-20 w-36 object-contain grayscale opacity-70'
                            whileHover={logoHover}
                            variants={item}
                        />
                    ))}

                    {/* Duplicate logos for seamless looping */}
                    {logos.map((logo, index) => (
                        <motion.img 
                            key={`duplicate-${index}`} 
                            src={logo} 
                            alt="partner logo" 
                            className='mx-6 h-20 w-36 object-contain grayscale opacity-70'
                            whileHover={logoHover}
                            variants={item}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Companylogo;
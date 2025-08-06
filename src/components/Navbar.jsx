import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import Lo from '../assets/mahan web.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');
    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About Us" },
        { href: "#work", label: "My works" },
        { href: "#services", label: "Our Services" },
        { href: "#Contact", label: "Contact Me" },
    ];

    const handleLinkClick = (href) => {
        setActiveLink(href);
        setIsMenuOpen(false);
        
        // اسکرول به بخش مورد نظر
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // انیمیشن‌های موبایل منو
    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            }
        },
        exit: { opacity: 0, y: -20 }
    };

    const mobileLinkVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    return (
        <nav className='fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm'>
            <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
                {/* logo */}
                <motion.div 
                    className='flex items-center gap-1 cursor-pointer ml-5'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                 <img src={Lo} alt="" className='w-10 h-10 md:w-12 md:h-12'/>
                </motion.div>
                
                {/* desktop navitems and button */}
                <div className='hidden md:flex items-center gap-10 '>
                    {navLinks.map((link, index) => (
                        <motion.a 
                            key={link.href}
                            href={link.href} 
                            onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(link.href);
                            }}
                            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all transition-colors ${
                                activeLink === link.href 
                                    ? "text-blue-600 after:w-full" 
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.3 }}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </div>
                 
                 {/* btn */}
                 <motion.button 
                    className='hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-500'
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                 >
                    <a href="#contact">Sign in</a>
                 </motion.button>
                
                {/* mobile menu button - hidden on desktop */}
                <motion.button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='md:hidden'
                    whileTap={{ scale: 0.9 }}
                >
                    {isMenuOpen ? <HiX className='size-6' /> : <HiMenu className='size-6' />}
                </motion.button>

                {/* mobile menu - hidden on desktop */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            className='md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 py-4 shadow-md'
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={mobileMenuVariants}
                        >
                            <div className='container mx-auto px-4 space-y-4'>
                                {navLinks.map((link) => (
                                    <motion.a
                                        className={`block text-sm font-medium py-2 ${
                                            activeLink === link.href 
                                                ? "text-blue-600" 
                                                : "text-gray-600 hover:text-gray-900"
                                        }`}
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick(link.href);
                                        }}
                                        variants={mobileLinkVariants}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                                <motion.button 
                                    className='w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-500'
                                    onClick={() => setIsMenuOpen(false)}
                                    variants={mobileLinkVariants}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <a href="#contact">Click me</a>
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.header
            className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="px-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="flex shrink-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link to="/" className="flex items-center">
                            <img className="h-12 w-auto" src="./images/logoplanett.png" alt="Logo" />
                            <p className="sr-only">PLANETT</p>
                        </Link>
                    </motion.div>
                    <motion.div
                        className="hidden md:flex md:items-center md:justify-center md:gap-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link to="/" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">Accueil</Link>
                        <Link to="/home" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">Découvrir</Link>
                    </motion.div>
                    <motion.div
                        className="flex items-center justify-end gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link to="/contact"
                            className="inline-flex items-center justify-center rounded-xl bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            style={{ backgroundColor: '#3173AD' }}
                        >
                            Contact
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.header>
    );
};

export default Navbar;

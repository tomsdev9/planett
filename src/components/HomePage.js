// HomePage.js
import React from 'react';
import KeenSliderSection from './KeenSliderSection';
import { motion } from 'framer-motion'; // Import de Framer Motion
import IntroSection from './IntroSection'; // Import du nouveau composant
import ServicesTable from './ServicesTable'; // Import du nouveau composant
import ServicesSection from './ServicesSection'; // Import du nouveau composant


const HomePage = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="flex flex-col items-center justify-center mt-8">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                </motion.div>
            </div>
            <IntroSection />
            <ServicesSection />
            <ServicesTable />
            <KeenSliderSection />
        </div>
    );
};

export default HomePage;

import React from 'react';
import { motion } from 'framer-motion';

const LogosSection = () => {
    const logos = [
        { src: '/images/origagroup.png', alt: 'Logo 2' },
        { src: '/images/depistagecancers.png', alt: 'Logo 3' },
        { src: '/images/coutume.png', alt: 'Logo 4' },
        { src: '/images/grandbazar.png', alt: 'Logo 5' },
    ];

    const handleClick = (e) => {
        e.target.animate([
            { transform: 'scale(1.0)' },
            { transform: 'scale(1.1)' },
            { transform: 'scale(1.0)' }
        ], {
            duration: 300,
            easing: 'ease-in-out'
        });
    };

    return (
        <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h3 className="font-semibold text-sm text-gray-600 text-center">
                    Voici quelques références des clients qui nous font confiance :
                </h3>
                <div className="mt-6">
                    <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                        {logos.map((logo, index) => (
                            <motion.li
                                key={index}
                                className="transition-transform duration-300 hover:scale-110"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleClick}
                            >
                                <img src={logo.src} alt={logo.alt} className="w-36 my-auto" />
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LogosSection;

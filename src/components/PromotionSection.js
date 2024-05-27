import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PromotionSection = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mt-12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <motion.div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            alt=""
                            src="./images/planetteco.png"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </motion.div>
                    <div className="lg:py-24">
                        <motion.h2
                            className="text-3xl font-bold sm:text-4xl"
                            style={{ color: '#9FC151' }}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Planett’, écologiquement propre
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-gray-600"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            Le mot « nettoyage » évoque des images peu glamour.
                            Chez Planett’, nous avons décidé de secouer les idées préconçues et de modifier radicalement l’approche
                            traditionnelle au nettoyage ; nous sommes convaincus que l’entretien de vos locaux participe à l’image et à
                            l’identité de votre marque. Nous nous attachons donc à respecter vos valeurs, qui sont aussi les nôtres :
                            Excellence, rigueur, innovation.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <Link
                                to="/home"
                                className="mt-8 inline-block rounded px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
                                style={{ backgroundColor: '#3173AD' }}
                            >
                                En savoir plus
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromotionSection;

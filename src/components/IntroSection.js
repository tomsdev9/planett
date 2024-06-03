import React from 'react';
import { motion } from 'framer-motion';

const IntroSection = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-3xl font-bold sm:text-4xl text-[#9FC151]">
                        Qui sommes-nous ?
                    </h2>
                </motion.div>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <motion.div
                        className="relative h-64 overflow-hidden sm:h-80 lg:h-full"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <img
                            alt="Logo Planett"
                            src="./images/logoplanett.png"
                            className="absolute inset-0 h-full w-full object-contain"
                        />
                    </motion.div>

                    <motion.div
                        className="lg:py-16"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <article className="space-y-4 text-gray-600">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.9 }}
                            >
                                Planett’, c’est une entreprise qui a choisi une approche moderne et innovante du nettoyage, mettant en
                                avant <span style={{ color: '#3173AD' }}>l’écologie</span>.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }}
                            >
                                Le <span style={{ color: '#3173AD' }}>nettoyage</span> selon PLANETT' c'est comprendre que chaque détail a un sens. Que chaque action a sa
                                finalité. Plus qu’un prestataire c’est le collaborateur qui vous <span style={{ color: '#3173AD' }}>accompagnera</span> tout au long d’un partenariat
                                d'échange et de services afin d'avancer ensemble.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.5 }}
                            >
                                PLANETT' c'est un recrutement qui a compris que la discrétion est primordiale. C’est la valorisation
                                individuelle de chaque membre de ses équipes pour <span style={{ color: '#3173AD' }}>l’évolution</span> de tous. Il est acquis qu'une équipe qui
                                n'est pas formée est une équipe qui cesse d’évoluer. Voilà pourquoi nous prévoyons des plans de
                                formation pour nos jeunes salariés, mais aussi des actions d’évolution pour les plus anciens.
                            </motion.p>
                        </article>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;

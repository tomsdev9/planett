import React from 'react';
import { motion } from 'framer-motion'; // Import de framer-motion

const ContactForm = () => {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <main className="relative w-full h-screen overflow-hidden">
            <div className="absolute inset-0">
                <img src="./images/formcontact2.png" className="w-full h-full object-cover" alt="Contact Us" />
            </div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg max-w-lg mx-auto text-gray-600">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Besoin d'un devis ?
                        </h3>
                    </motion.div>
                    <motion.form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5 mt-6"
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        <motion.div variants={variants}>
                            <label className="font-medium">
                                Nom et Prénom
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-white bg-opacity-90 outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </motion.div>
                        <motion.div variants={variants}>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-white bg-opacity-90 outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </motion.div>
                        <motion.div variants={variants}>
                            <label className="font-medium">
                                Numéro de téléphone
                            </label>
                            <input
                                type="tel"
                                placeholder="06 00 00 00 00"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-white bg-opacity-90 outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </motion.div>
                        <motion.div variants={variants}>
                            <label className="font-medium">
                                Message
                            </label>
                            <textarea
                                required
                                className="w-full mt-2 h-36 px-3 py-2 text-gray-500 bg-white bg-opacity-90 resize-none outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            ></textarea>
                        </motion.div>
                        <motion.button
                            variants={variants}
                            className="w-full px-4 py-2 text-white font-medium  active:bg-gray-900 rounded-lg duration-150"
                            style={{ backgroundColor: '#3173AD' }}
                        >
                            Envoyer
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </main>
    );
};

export default ContactForm;

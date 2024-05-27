import React, { useEffect } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import { motion } from 'framer-motion'; // Import de Framer Motion

const KeenSliderSection = () => {
    useEffect(() => {
        const keenSlider = new KeenSlider(
            '#keen-slider',
            {
                loop: true,
                slides: {
                    origin: 'center',
                    perView: 1.25,
                    spacing: 16,
                },
                breakpoints: {
                    '(min-width: 1024px)': {
                        slides: {
                            origin: 'auto',
                            perView: 1.5,
                            spacing: 32,
                        },
                    },
                },
            },
            []
        );

        const keenSliderPrevious = document.getElementById('keen-slider-previous');
        const keenSliderNext = document.getElementById('keen-slider-next');
        const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');
        const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');

        keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
        keenSliderNext.addEventListener('click', () => keenSlider.next());
        keenSliderPreviousDesktop.addEventListener('click', () => keenSlider.prev());
        keenSliderNextDesktop.addEventListener('click', () => keenSlider.next());

        return () => {
            keenSlider.destroy();
        };
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-50"
        >
            <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Ce que l'on dit de nous..
                        </h2>

                        <p className="mt-4 text-gray-700">
                            Découvrez ce que nos clients pensent de nous. Nous nous efforçons de fournir un service exceptionnel et de dépasser les attentes. Voici quelques témoignages de ceux qui ont fait confiance à Planett'.
                        </p>

                        <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                            <button
                                aria-label="Previous slide"
                                id="keen-slider-previous-desktop"
                                className="rounded-full border border-blue-600 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 rtl:rotate-180"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 19.5L8.25 12l7.5-7.5"
                                    />
                                </svg>
                            </button>

                            <button
                                aria-label="Next slide"
                                id="keen-slider-next-desktop"
                                className="rounded-full border border-blue-600 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                            >
                                <svg
                                    className="size-5 rtl:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 5l7 7-7 7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="-mx-6 lg:col-span-2 lg:mx-0">
                        <div id="keen-slider" className="keen-slider">
                            {/* Avis 1 */}
                            <div className="keen-slider__slide">
                                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                                    <div>
                                        <div className="flex gap-0.5 text-blue-600">
                                            {[...Array(5)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>
                                            ))}
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-2xl font-bold sm:text-3xl" style={{ color: '#9FC151' }}>Genial</p>
                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                Une équipe sélectionnée et toujours à l’écoute. Résultat une prestation à 100%
                                            </p>
                                        </div>
                                    </div>
                                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                        &mdash; Virginie K.
                                    </footer>
                                </blockquote>
                            </div>

                            {/* Avis 2 */}
                            <div className="keen-slider__slide">
                                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                                    <div>
                                        <div className="flex gap-0.5 text-blue-600">
                                            {[...Array(5)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>
                                            ))}
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-2xl font-bold sm:text-3xl" style={{ color: '#9FC151' }}>Excellent Service</p>
                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                Méticuleux, consciencieux. Je suis maniaque…ils sont pires que moi
                                            </p>
                                        </div>
                                    </div>
                                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                        &mdash; Geneviève L.
                                    </footer>
                                </blockquote>
                            </div>

                            {/* Avis 3 */}
                            <div className="keen-slider__slide">
                                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                                    <div>
                                        <div className="flex gap-0.5 text-blue-600">
                                            {[...Array(5)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>
                                            ))}
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-2xl font-bold sm:text-3xl" style={{ color: '#9FC151' }}>Parfait</p>
                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                Prestation haut de gamme pour une clientèle haut de gamme.
                                                Une équipe Planett’ en haut de la gamme
                                            </p>
                                        </div>
                                    </div>
                                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                        &mdash; Jean-Pierre R.
                                    </footer>
                                </blockquote>
                            </div>

                            {/* Avis 4 */}
                            <div className="keen-slider__slide">
                                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                                    <div>
                                        <div className="flex gap-0.5 text-blue-600">
                                            {[...Array(5)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>
                                            ))}
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-2xl font-bold sm:text-3xl" style={{ color: '#9FC151' }}>Service Exceptionenel</p>
                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                « Nous ne pensions pas retrouver un espace aussi propre au travail
                                            </p>
                                        </div>
                                    </div>
                                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                        &mdash; Eglantine C.
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center gap-4 lg:hidden">
                    <button
                        aria-label="Previous slide"
                        id="keen-slider-previous"
                        className="rounded-full border border-blue-600 p-4 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                        <svg
                            className="size-5 -rotate-180 transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </button>

                    <button
                        aria-label="Next slide"
                        id="keen-slider-next"
                        className="rounded-full border border-blue-600 p-4 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.section>
    );
};

export default KeenSliderSection;

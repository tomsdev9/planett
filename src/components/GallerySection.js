import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import './Gallery.css';

const GallerySection = () => {
    const images = [
        { src: '/images/photo1.jpg', title: 'Nettoyage Haute Pression', text: 'Nettoyage haute pression efficace pour les surfaces extérieures.' },
        { src: '/images/photo2.jpg', title: 'Nettoyage Haute Pression', text: 'Nettoyage haute pression efficace pour les surfaces extérieures.' },
        { src: '/images/photo3.jpg', title: 'Sols Polis', text: 'Sols brillants qui reflètent la propreté.' },
        { src: '/images/photo4.jpg', title: 'Couloirs Propres', text: 'Couloirs immaculés assurant un environnement accueillant.' },
        { src: '/images/photo5.jpg', title: 'Zone de Réception Brillante', text: 'Zones de réception bien entretenues pour une excellente première impression.' },
        { src: '/images/photo6.jpg', title: 'Nettoyage de Toiture', text: 'Nettoyage professionnel des toitures pour une apparence impeccable.' },
        { src: '/images/photo7.jpg', title: 'Brillance de la Salle d\'Exposition', text: 'Sols de salle d\'exposition impeccables qui mettent en valeur l\'excellence.' },
        { src: '/images/photo8.jpg', title: 'Nettoyage Industriel', text: 'Services de nettoyage industriel intensif.' }
    ];

    useEffect(() => {
        new Swiper('.carousel-3D-swiper', {
            loop: true,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 30,
                stretch: 10,
                depth: 300,
                modifier: 1,
                slideShadows: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }, []);

    return (
        <section className="my-10">
            <section className="carousel-3D-swiper-section">
                <div className="carousel-3D-swiper">
                    <div className="swiper-wrapper" style={{ maxWidth: '1200px' }}>
                        {images.map((image, index) => (
                            <div className="swiper-slide" key={index}>
                                <div className="image-wrapper aspect-portrait">
                                    <img className="aspect-portrait" src={image.src} alt={image.title} />
                                </div>
                                <div className="details">
                                    <h3>{image.title}</h3>
                                    <span>{image.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination" style={{ bottom: '-50px' }}></div>
                </div>
            </section>
        </section>
    );
};

export default GallerySection;

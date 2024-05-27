import React from 'react';
import LogosSection from './LogosSection'; // Assurez-vous que le chemin est correct
import PromotionSection from './PromotionSection'; // Import du nouveau composant
import GallerySection from './GallerySection'; // Import du nouveau composant de la galerie

const LandingPage = () => {
    return (
        <div>
            <PromotionSection />
            <div className="relative z-10 text-black">
                <div className="flex flex-col items-center justify-center h-full">
                    <LogosSection />
                    <GallerySection /> {/* Ajout du composant GallerySection ici */}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

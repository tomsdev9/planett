import React from 'react';

const ServicesTable = () => {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-4 py-5 border-b border-gray-200 bg-gray-50">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Les services chez Planett’
                    </h1>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        {[
                            'Traitement par injection extraction des sièges de bureaux',
                            'Traitement des moquettes par injection extraction',
                            'Shampooinage moquette en rotowash',
                            'Lessivage des murs peints',
                            'Prestation de nettoyage supplémentaire',
                            'Nettoyage supplémentaire de la vitrerie',
                            'Relamping',
                            'Destruction de documents confidentiels'
                        ].map((title, index) => (
                            <div
                                key={title}
                                className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                    } px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6`}
                            >
                                <dt className="text-sm font-medium text-gray-900">
                                    {title}
                                </dt>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default ServicesTable;

import React from 'react';

const ServicesSection = () => {
    return (
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">Nos Valeurs</h2>
                    <p className="mt-4 text-gray-300">
                        Découvrez les valeurs qui nous animent et nous motivent à fournir un service de nettoyage écologique et efficace.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                        </svg>
                        <h2 className="mt-4 text-xl font-bold text-white">Engagement Écologique</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            <span style={{ color: '#22C55E' }}>L’écologie</span> est une conviction ancrée dans nos valeurs ; elle est le lien évident entre un <span style={{ color: '#22C55E' }}>nettoyage</span> efficace
                            et une prestation tournée vers le futur. Nous avons choisi d’éliminer tous les produits nocifs pour le confort
                            de nos agents et le <span style={{ color: '#22C55E' }}>bien-être</span> de vos collaborateurs.
                        </p>
                    </div>

                    <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <h2 className="mt-4 text-xl font-bold text-white">Produits Écologiques</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            Nous utilisons des produits à vocation <span style={{ color: '#22C55E' }}>100% écologique</span> et nos salariés sont spécialement formés pour répondre
                            à notre engagement en faveur du <span style={{ color: '#22C55E' }}>développement durable</span> sur le long terme : utilisation de l’eau ajustée, tri
                            sélectif, utilisation de produits adaptés… Pour une transparence totale, nous mettons à disposition de nos
                            clients, sur simple demande, toutes les fiches produits.
                        </p>
                    </div>

                    <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>
                        <h2 className="mt-4 text-xl font-bold text-white">Communication et Réactivité</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            La communication est une <span style={{ color: '#22C55E' }}>valeur</span> profonde pour Planett’. Des contrôles qualités mensuels, des passages assidus
                            du responsable de site, des reportings fréquents mais aussi les propositions d’amélioration ne peuvent être que
                            le fruit d’un échange <span style={{ color: '#22C55E' }}>efficace</span> et <span style={{ color: '#22C55E' }}>régulier</span>. Toutes les demandes clients sont traitées en temps réel. Convaincu que
                            le succès naît de la réactivité et s’épanouit dans la proactivité.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

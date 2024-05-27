import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
                <div className="p-4" style={{ backgroundColor: '#3173AD' }}>
                    <h2 className="text-white text-lg font-semibold">{title}</h2>
                </div>
                <div className="p-4">
                    {children}
                </div>
                <div className="p-4 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-white rounded"
                        style={{ backgroundColor: '#3173AD' }}
                    >
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

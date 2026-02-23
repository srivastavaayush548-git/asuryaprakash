import React from 'react';

const Media = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-orange-200 via-yellow-200 to-orange-100 text-stone-800 font-sans selection:bg-red-100 pt-24">
            {/* --- Hero Section --- */}
            <div className="bg-white border-b border-stone-200">
                <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
                    <div className="max-w-3xl">
                        <div className="inline-block px-3 py-1 bg-red-50 text-red-800 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                            Media Presence
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-tight mb-6">
                            Media <br />
                            <span className="text-stone-500 italic">Interactions & Coverage</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed border-l-4 border-red-700 pl-6">
                            A comprehensive look at digital, print, and televised presence, sharing insights on the evolving landscape of Indian politics.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-20">
                <p className="text-center text-stone-500 italic">Media content coming soon...</p>
            </div>
        </div>
    );
};

export default Media;
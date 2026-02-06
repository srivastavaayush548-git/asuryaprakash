import React from 'react';
import pbImg2 from '../../assets/Images/awards/Padmabhushan/WhatsApp Image 2026-02-02 at 3.10.41 PM (1).jpeg';
import pbImg3 from '../../assets/Images/awards/Padmabhushan/WhatsApp Image 2026-02-02 at 3.10.41 PM.jpeg';

const Padmabhushan = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-200 via-yellow-200 to-orange-100 text-stone-800 font-sans selection:bg-red-100 pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="inline-block px-3 py-1 bg-red-50 text-red-800 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
          National Honour
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight mb-6">
          Padma Bhushan (2025)
        </h1>
        <div className="border-l-4 border-red-700 pl-6 mb-10">
          <p className="text-xl text-stone-600 leading-relaxed">
            India’s third-highest civilian award for contribution to literature and education.
          </p>
        </div>
        
        {/* Video Section */}
        <div className="w-full bg-white/80 rounded-2xl p-2 md:p-4 backdrop-blur-sm shadow-lg mb-12">
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg aspect-video bg-stone-900">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/sN9A_43-4_0"
              title="A. Surya Prakash Honoured with Padma Bhushan"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <p className="text-center text-sm text-stone-600 mt-4 font-medium">
            Video: A. Surya Prakash Honoured with Padma Bhushan
          </p>
        </div>

        {/* Image Gallery */}
        <div>
           <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 border-b border-stone-300 pb-2 inline-block">Event Highlights</h2>
           <div className="grid md:grid-cols-3 gap-6">
              {[pbImg2, pbImg3].map((img, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white p-2">
                  <img 
                    src={img} 
                    alt={`Padma Bhushan Ceremony Highlight ${index + 1}`} 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default Padmabhushan;

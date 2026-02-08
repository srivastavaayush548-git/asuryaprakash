import React, { useState } from 'react';
import { X } from 'lucide-react';

const ImageGallery = ({ images, title, customGridCols }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const gridClass = customGridCols || "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {title && (
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">{title}</h2>
        </div>
      )}
      
      {images.length > 0 ? (
        <div className={`grid gap-8 ${gridClass}`}>
          {images.map((img, index) => (
            <div 
              key={img.id || index}
              className="flex flex-col group h-full"
            >
              <div className="bg-white rounded-xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div 
                  className="cursor-pointer overflow-hidden aspect-4/3 bg-stone-200/50 relative flex items-center justify-center p-2"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt || title}
                    className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out shadow-sm"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white bg-black/50 px-3 py-1 rounded-full text-xs backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform font-medium">
                      View Full Image
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-center text-center">
                  <h3 className="text-lg font-serif font-bold text-stone-800 group-hover:text-red-700 transition-colors leading-snug">
                    {img.title || img.alt}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center text-stone-500 bg-stone-50 rounded-lg border border-dashed border-stone-300">
          <p>No images in this collection yet.</p>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt} 
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} 
          />
          {selectedImage.alt && (
            <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none px-4">
              <p className="inline-block bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-md text-sm">
                {selectedImage.alt}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

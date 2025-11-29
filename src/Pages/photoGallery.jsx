import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { photoGalleryContent, photoGalleryImages } from '../Data/photoGallery';
import GalleryImage from '../Components/GalleryImage';

const PhotoGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = useCallback((index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? photoGalleryImages.length - 1 : prev - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === photoGalleryImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, goToPrevious, goToNext]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const currentImage = photoGalleryImages[currentImageIndex] || photoGalleryImages[0];

  return (
    <div className="min-h-screen pt-12 md:pt-14 relative">
      {/* Background */}
      <div
        className="fixed inset-0 top-12 md:top-14 -z-10 bg-[#1A3550]"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8">
          {photoGalleryContent.title}
        </h1>

        {/* Introductory Text */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-white text-base md:text-lg leading-relaxed text-center">
            {photoGalleryContent.introText}
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {photoGalleryImages.map((image, index) => (
            <GalleryImage
              key={image.id}
              image={image}
              index={index}
              onImageClick={openLightbox}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-200 z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 md:left-8 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-200 z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 md:right-8 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-200 z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML =
                  '<div class="text-white text-lg">Image Not Available</div>';
              }}
            />

            {/* Caption */}
            {currentImage.caption && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-lg px-6 py-3 max-w-4xl">
                <p className="text-white text-sm md:text-base text-center">
                  {currentImage.caption}
                </p>
              </div>
            )}

            {/* Image Counter */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-sm">
                {currentImageIndex + 1} / {photoGalleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;


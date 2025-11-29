import React, { useState, useEffect } from 'react';
import { homeImages } from '../Data/home';

const HomeLayout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (homeImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % homeImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col pt-12">
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 relative">
          <div className="relative w-full h-full overflow-hidden">

            {/* Image Sliding Transition */}
            <div className="w-full h-full absolute inset-0 overflow-hidden" style={{ position: 'relative' }}>
              {homeImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`object-cover absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out`}
                  style={{
                    opacity: index === currentIndex ? 1 : 0,
                    zIndex: index === currentIndex ? 2 : 1,
                    transitionProperty: 'opacity',
                  }}
                  draggable={false}
                />
              ))}
            </div>

            {/* Pixel Grid - Static, no transitions */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0.35) 0px,
                    transparent 1px,
                    transparent 2px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    rgba(0, 0, 0, 0.35) 0px,
                    transparent 1px,
                    transparent 2px
                  )
                `,
                backgroundSize: '3px 3px',
                imageRendering: 'pixelated'
              }}
            />

            {/* Crosshatch - Static, no transitions */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    45deg,
                    rgba(255, 255, 255, 0.12) 0px,
                    transparent 1px,
                    transparent 2px
                  ),
                  repeating-linear-gradient(
                    -45deg,
                    rgba(0, 0, 0, 0.12) 0px,
                    transparent 1px,
                    transparent 2px
                  )
                `,
                backgroundSize: '4px 4px',
                imageRendering: 'pixelated'
              }}
            />

            {/* Dot Matrix - Static, no transitions */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                backgroundImage: `
                  radial-gradient(circle, rgba(255, 255, 255, 0.2) 0.5px, transparent 0.5px)
                `,
                backgroundSize: '3px 3px',
                imageRendering: 'pixelated'
              }}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;

import React from 'react';
import { myLifeContent, myLifeImages } from '../Data/myLife';
import backgroundImage from '../assets/my-life-bg.jpg';

const MyLife = () => {
  return (
    <div
      className="min-h-screen pt-12 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div
        className="absolute inset-0 top-12 bg-transparent"
      />

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Column - Text and Small Images */}
          <div className="space-y-6">
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
              {myLifeContent.title}
            </h1>

            {/* Date of Birth */}
            <p className="text-lg text-gray-700">
              {myLifeContent.dateOfBirth}
            </p>

            {/* Paragraphs - Scrollable Container */}
            <div
              className="space-y-4 text-gray-700 leading-relaxed pr-2 custom-scrollbar"
              style={{
                height: '230px',
                maxHeight: '250px',
                overflowY: 'auto',
                overflowX: 'hidden',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {myLifeContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Three Small Images */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {myLifeImages.smallImages.map((imageSrc, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] border-2 border-white rounded overflow-hidden shadow-lg"
                >
                  <img
                    src={imageSrc}
                    alt={`Life moment ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-xs">Image</div>';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Main Portrait */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative aspect-[3/4] overflow-hidden ">
                <img
                  src={myLifeImages.mainPortrait}
                  alt="Portrait"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gray-400 flex items-center justify-center text-gray-600">Portrait Image</div>';
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyLife;


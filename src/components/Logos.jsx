import React, { memo } from 'react';
import ajio from '../Images/ajio.jpeg'; // Replace with actual image paths
import amazon from '../Images/amazon.png';
import apple from '../Images/apple.png';
import at from '../Images/at.png';
import levis from '../Images/levis.png';
import myntra from '../Images/myntra.png';
import nike from '../Images/nike.jpeg';
import puma from '../Images/puma.png';
import samsung from '../Images/samsung.jpeg';
import shein from '../Images/shein.png';

const Logos = () => {
  // Logos data array
  const topLogos = [ajio, amazon, apple, at, levis];
  const bottomLogos = [myntra, nike, puma, samsung, shein];

  return (
    <div className="bg-slate-400 py-12">
      <div className="container mx-auto">
        {/* Top Logos */}
        <div className="overflow-hidden">
          <div className="flex bg-slate-400 text-white justify-between items-center animate-left-right space-x-8">
            {topLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Logo ${idx + 1}`}
                className="w-24 h-24 mix-blend-multiply object-contain"
                loading="lazy"  // Lazy load images
                width="96" // Specify width and height
                height="96"
              />
            ))}
          </div>
        </div>

        {/* Bottom Logos */}
        <div className="overflow-hidden mt-8">
          <div className="flex bg-slate-400 justify-between items-center animate-right-left space-x-8">
            {bottomLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Logo ${idx + 6}`}
                className="w-24 h-24 mix-blend-multiply object-contain"
                loading="lazy"  // Lazy load images
                width="96"  // Specify width and height
                height="96"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Memoizing the Logos component for optimization
export default memo(Logos);

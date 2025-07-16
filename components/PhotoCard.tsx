import React from 'react';

interface PhotoCardProps {
  src: string;
  alt: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ src, alt }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg break-inside-avoid">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        loading="lazy"
      />
    </div>
  );
};

export default PhotoCard;

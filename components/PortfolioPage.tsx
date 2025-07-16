import React from 'react';
import PhotoCard from './PhotoCard';

interface PortfolioPageProps {
  onNavigateToContact: () => void;
}

const portfolioImages = [
  { id: 1, src: 'https://picsum.photos/id/1015/600/800', alt: 'Wedding couple by a lake' },
  { id: 2, src: 'https://picsum.photos/id/1027/800/600', alt: 'Bride smiling' },
  { id: 3, src: 'https://picsum.photos/id/1043/600/800', alt: 'Wedding details with rings' },
  { id: 4, src: 'https://picsum.photos/id/106/800/600', alt: 'Couple walking on a beach' },
  { id: 5, src: 'https://picsum.photos/id/129/600/800', alt: 'Groom looking at bride' },
  { id: 6, src: 'https://picsum.photos/id/219/800/600', alt: 'First dance at wedding reception' },
  { id: 7, src: 'https://picsum.photos/id/327/800/600', alt: 'Bride holding a bouquet' },
  { id: 8, src: 'https://picsum.photos/id/355/600/800', alt: 'Candid moment between couple' },
  { id: 9, src: 'https://picsum.photos/id/431/800/600', alt: 'Wedding ceremony' },
  { id: 10, src: 'https://picsum.photos/id/435/600/800', alt: 'Couple portrait in nature' },
  { id: 11, src: 'https://picsum.photos/id/449/800/600', alt: 'Laughing bride and groom' },
  { id: 12, src: 'https://picsum.photos/id/575/600/800', alt: 'Wedding cake' },
];

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigateToContact }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/id/219/1600/900')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-serif drop-shadow-lg">Capturing Your Forever</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-200 drop-shadow-md">Timeless, authentic, and heartfelt wedding photography that tells the story of your love.</p>
          <button 
            onClick={onNavigateToContact}
            className="mt-8 bg-amber-500 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Your Date
          </button>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-slate-900">Our Portfolio</h2>
            <p className="mt-4 text-lg text-slate-600">A collection of moments we've had the honor of preserving.</p>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {portfolioImages.map(image => (
              <PhotoCard key={image.id} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;

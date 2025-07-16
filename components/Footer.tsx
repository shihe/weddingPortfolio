import React from 'react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-slate-500">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors">
            <InstagramIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors">
            <FacebookIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors">
            <TwitterIcon className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Ethereal Vows Photography. All Rights Reserved.</p>
        <p className="text-xs mt-2">Crafting timeless memories with love and light.</p>
      </div>
    </footer>
  );
};

export default Footer;

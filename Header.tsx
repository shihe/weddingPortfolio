import React from 'react';
import { Page } from '../types';
import { CameraIcon } from './IconComponents';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const navLinkClasses = (page: Page) => 
    `cursor-pointer py-2 px-3 rounded-md text-sm font-medium transition-colors duration-300 ${
      currentPage === page 
        ? 'bg-amber-100 text-amber-800' 
        : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
    }`;

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('portfolio')}
          >
            <CameraIcon className="h-8 w-8 text-amber-600" />
            <span className="text-xl font-semibold font-serif text-slate-800">Ethereal Vows</span>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <button onClick={() => onNavigate('portfolio')} className={navLinkClasses('portfolio')}>
                Portfolio
              </button>
              <button onClick={() => onNavigate('contact')} className={navLinkClasses('contact')}>
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

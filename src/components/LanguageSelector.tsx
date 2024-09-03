import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import switchLanguage from "/assets/illustrations/switch_language.png";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    closeMenu();
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      setMenuOpen(true);
    }
  };

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 300);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex" ref={menuRef}>
      <button onClick={toggleMenu} className="ml-2 sm:ml-4 lg:ml-8">
        <img
          src={switchLanguage}
          className="w-3 sm:w-5 xl:w-8 h-auto transition-transform duration-200 ease-in-out transform hover:scale-110"
          alt="Switch language"
        />
      </button>

      {menuOpen && (
        <div
          className={`absolute z-50 right-0 top-10 mt-2 w-40 bg-primary-accent border border-secondary-text rounded-lg shadow-lg transition-opacity duration-300 ease-out transform ${
            closing ? 'animate-fade-out-up' : 'animate-fade-in-down'
          }`}
        >
          <button
            className={`font-bold block px-4 py-2 w-full text-left transform transition-colors duration-300 ease-in-out hover:bg-primary hover:rounded-t-lg ${
              i18n.language === 'en' ? 'text-secondary-text' : 'text-primary-text'
            }`}
            onClick={() => changeLanguage('en')}
          >
            English
          </button>
          <button
            className={`font-bold block px-4 py-2 w-full text-left transform transition-colors duration-300 ease-in-out hover:bg-primary hover:rounded-b-lg ${
              i18n.language === 'fr' ? 'text-secondary-text' : 'text-primary-text'
            }`}
            onClick={() => changeLanguage('fr')}
          >
            Français
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

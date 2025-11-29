import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Twitter } from 'lucide-react';
import { homeMenu, homeSocialLinks, homeFooterLinks } from '../Data/home';

const MenuBar = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Freeze scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [isOpen]);

  // ESC close
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent closing when clicking inside panel
  const stopClick = (e) => e.stopPropagation();

  // Get route path for menu items
  const getRoutePath = (menuItem) => {
    const routes = {
      'Home': '/',
      'My Life': '/my-life',
      'My Journey': '/my-journey',
      'Photo Gallery': '/photo-gallery',
      'My Opinion': '/my-opinion',
      'Events': '/events',
      'Reach Me': '/reach-me'
    };
    return routes[menuItem] || '#';
  };

  // Check if menu item is active
  const isActive = (menuItem) => {
    const path = getRoutePath(menuItem);
    return location.pathname === path;
  };

  // Handle overlay click to close menu
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Smooth fade overlay - covers entire screen below header */}
      <div
        className={`fixed inset-0 top-12 md:top-14 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={handleOverlayClick}
        onKeyDown={(e) => e.key === 'Enter' && onClose()}
        role="button"
        tabIndex={isOpen ? 0 : -1}
        aria-label="Close menu"
      />

      {/* Smooth slide menu */}
      <aside
        className={`
        fixed top-12 md:top-14 left-0 bottom-0 w-64 md:w-72 bg-black border-r border-zinc-800 z-50
        transition-transform duration-300 ease-in-out will-change-transform
        flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        onClick={stopClick}
      >

        {/* Menu Items */}
        <nav className="pt-4 flex-1 flex flex-col items-center justify-start">
          <ul className="w-full space-y-0 text-2xl tracking-wide font-bold flex flex-col items-center">
            {homeMenu.map((item, idx) => {
              const active = isActive(item);
              return (
                <li key={idx} className="w-full flex flex-col items-center">
                  <Link
                    to={getRoutePath(item)}
                    className={`
                      block w-full py-4 cursor-pointer select-none text-center
                      transition-all duration-200 ease-in-out
                      ${active
                        ? 'font-semibold text-[#00bff9]'
                        : 'text-white hover:text-[#00bff9]'
                      }
                    `}
                    onClick={onClose}
                    onKeyDown={(e) => (e.key === 'Enter' ? onClose() : null)}
                    tabIndex={0}
                  >
                    {item.toUpperCase()}
                  </Link>
                  {idx < homeMenu.length - 1 && (
                    <div className="w-full h-px bg-zinc-800 opacity-50" />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer & Social */}
        <div className="px-8 pb-8 text-lg text-zinc-400 space-y-4 mt-auto">
          {/* Social Media Icons - Icons only, no text */}
          <div className="flex space-x-4 justify-center">
            {homeSocialLinks.map((s) => {
              const getIcon = () => {
                if (s.id === 'facebook' || s.label.toLowerCase().includes('facebook')) {
                  return <Facebook className="w-5 h-5 text-white hover:text-[#00bff9] transition-colors" />;
                }
                if (s.id === 'twitter' || s.label.toLowerCase().includes('twitter')) {
                  return <Twitter className="w-5 h-5 text-white hover:text-[#00bff9] transition-colors" />;
                }
                return null;
              };

              return (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                  aria-label={s.label}
                >
                  {getIcon()}
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-1">
            <p>© 2025. All Rights Reserved</p>
            <p className="text-[11px] text-zinc-500">www.rajatsharma.in</p>
          </div>

          {/* Footer Links - Plain text, no icons */}
          <div className="flex flex-wrap gap-3 pt-2 justify-center">
            {homeFooterLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.href}
                onClick={onClose}
                className="hover:text-white text-[15px] text-zinc-400 transition-colors underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </aside>
    </>
  );
};

export default MenuBar;

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

import LogoBlack from '../../assets/Brand/Logo_Black-removebg-preview.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinksLeft = [
    { name: 'Cómo Funciona', href: '#how-it-works' },
    { name: 'Precios', href: '#pricing' },
  ];

  const navLinksRight = [
    { name: 'Casos de Éxito', href: '#success' },
    { name: 'Acerca de Attrio', href: '#about' },
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="header-inner">
          {/* Left Navigation */}
          <nav className="header-nav header-nav-left">
            {navLinksLeft.map((link, i) => (
              <a key={i} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Center Logo */}
          <Link to="/" className="header-logo">
            <img 
              src={LogoBlack} 
              alt="Attrio" 
              className="logo-img"
            />
          </Link>

          {/* Right Navigation + Actions */}
          <div className="header-right">
            <nav className="header-nav header-nav-right">
              {navLinksRight.map((link, i) => (
                <a key={i} href={link.href} className="nav-link">
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="header-actions">
              <Link to="/login" className="nav-link login-link">
                Iniciar sesión
              </Link>
              <Link to="/signup" className="header-btn">
                Comenzar gratis
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <nav className="mobile-nav">
            {[...navLinksLeft, ...navLinksRight].map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="mobile-actions">
            <Link 
              to="/login" 
              className="mobile-login"
              onClick={() => setMobileMenuOpen(false)}
            >
              Iniciar sesión
            </Link>
            <Link 
              to="/signup" 
              className="mobile-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              Comenzar gratis
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
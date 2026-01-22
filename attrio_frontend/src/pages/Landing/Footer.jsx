import { Link } from 'react-router-dom';
import './Footer.css';

import LogoBlack from '../../assets/Brand/Logo_Black-removebg-preview.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    producto: [
      { name: 'Cómo Funciona', href: '/como-funciona', isRoute: true },
      { name: 'Precios', href: '/pricing', isRoute: true },
      { name: 'Seguridad', href: '#seguridad', isRoute: false },
      { name: 'Integraciones', href: '#integraciones', isRoute: false },
    ],
    empresa: [
      { name: 'Acerca de Attrio', href: '/about', isRoute: true },
      { name: 'Blog', href: '#blog', isRoute: false },
      { name: 'Casos de Éxito', href: '#casos', isRoute: false },
      { name: 'Contacto', href: '#contacto', isRoute: false },
    ],
    legal: [
      { name: 'Términos de Servicio', href: '#terminos', isRoute: false },
      { name: 'Política de Privacidad', href: '#privacidad', isRoute: false },
      { name: 'Política de Cookies', href: '#cookies', isRoute: false },
    ],
  };

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/attrio',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/attrio',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/attrio',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@attrio',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
  ];

  const renderLink = (link, index) => {
    if (link.isRoute) {
      return (
        <Link key={index} to={link.href} className="footer-link">
          {link.name}
        </Link>
      );
    }
    return (
      <a key={index} href={link.href} className="footer-link">
        {link.name}
      </a>
    );
  };

  return (
    <footer className="footer">
      {/* Background decoration */}
      <div className="footer-bg" />

      <div className="footer-container">
        {/* Top Section - CTA Banner */}
        <div className="footer-cta">
          <div className="footer-cta-content">
            <h3>¿Listo para crecer en Instagram?</h3>
            <p>Únete a miles de creadores que ya automatizan su crecimiento</p>
          </div>
          <Link to="/signup" className="footer-cta-btn">
            <span>Comenzar gratis</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={LogoBlack} alt="Attrio" />
            </Link>
            <p className="footer-tagline">
              Automatiza tu crecimiento en Instagram con inteligencia artificial. 
              Seguidores reales, resultados reales.
            </p>
            
            {/* Social Links */}
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links-grid">
            <div className="footer-links-col">
              <h4>Producto</h4>
              {footerLinks.producto.map((link, i) => renderLink(link, i))}
            </div>

            <div className="footer-links-col">
              <h4>Empresa</h4>
              {footerLinks.empresa.map((link, i) => renderLink(link, i))}
            </div>

            <div className="footer-links-col">
              <h4>Legal</h4>
              {footerLinks.legal.map((link, i) => renderLink(link, i))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="footer-stats">
          <div className="footer-stat">
            <span className="stat-value">50K+</span>
            <span className="stat-label">Usuarios activos</span>
          </div>
          <div className="footer-stat-divider" />
          <div className="footer-stat">
            <span className="stat-value">10M+</span>
            <span className="stat-label">Seguidores generados</span>
          </div>
          <div className="footer-stat-divider" />
          <div className="footer-stat">
            <span className="stat-value">99.9%</span>
            <span className="stat-label">Uptime garantizado</span>
          </div>
          <div className="footer-stat-divider" />
          <div className="footer-stat">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Soporte en español</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Attrio. Todos los derechos reservados.
          </p>
          <p className="footer-disclaimer">
            Attrio no está afiliado con Instagram ni Meta. Instagram es una marca registrada de Meta Platforms, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
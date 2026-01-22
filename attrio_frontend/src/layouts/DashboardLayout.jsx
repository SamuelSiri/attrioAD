import { useState } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import './DashboardLayout.css';

import LogoIcon from '../assets/Brand/Icon_Black-removebg-preview.png';
import LogoFull from '../assets/Brand/Logo_Black-removebg-preview.png';

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});

  // Mock user data - replace with real auth later
  const user = {
    name: 'Samuel',
    username: '@samuelgym',
    email: 'samuel@attrio.com',
    avatar: null,
    plan: 'Growth',
    isConnected: true,
  };

  const toggleSubmenu = (menuName) => {
    if (sidebarCollapsed) {
      setSidebarCollapsed(false);
      setTimeout(() => {
        setExpandedMenus(prev => ({ ...prev, [menuName]: true }));
      }, 300);
    } else {
      setExpandedMenus(prev => ({ ...prev, [menuName]: !prev[menuName] }));
    }
  };

  const navigation = [
    {
      name: 'Inicio',
      href: '/dashboard',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      name: 'Campañas',
      href: '/dashboard/campaigns',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      badge: '3',
    },
    {
      name: 'Audiencia',
      href: '/dashboard/audience',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      name: 'Competidores',
      href: '/dashboard/competitors',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="22" y1="12" x2="18" y2="12" />
          <line x1="6" y1="12" x2="2" y2="12" />
          <line x1="12" y1="6" x2="12" y2="2" />
          <line x1="12" y1="22" x2="12" y2="18" />
        </svg>
      ),
    },
    {
      name: 'Mensajes',
      href: '/dashboard/messages',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      badge: 'Nuevo',
    },
    {
      name: 'Analytics',
      href: '/dashboard/analytics',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      name: 'Reportes',
      href: '/dashboard/reports',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
          <circle cx="15" cy="15" r="2" />
          <path d="M15 13v-1" />
          <path d="M15 19v-1" />
          <path d="M13 15h-1" />
          <path d="M18 15h-1" />
        </svg>
      ),
    },
    {
      name: 'Exportar a Meta',
      href: '/dashboard/export-meta',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
        </svg>
      ),
    },
  ];

  const bottomNavigation = [
    {
      name: 'Mi Perfil',
      href: '/dashboard/profile',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      name: 'Configuración',
      href: '/dashboard/settings',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      name: 'Mi Plan',
      href: '/dashboard/plan',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="4" width="22" height="16" rx="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
    },
    {
      name: 'Centro de Ayuda',
      href: '/dashboard/help',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
    },
  ];

  const isActive = (href) => {
    if (href === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(href);
  };

  const isSubmenuActive = (submenu) => {
    return submenu?.some(item => location.pathname.startsWith(item.href));
  };

  const handleLogout = () => {
    console.log('Logout');
    navigate('/login');
  };

  const renderNavItem = (item, index) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isExpanded = expandedMenus[item.name];
    const submenuActive = isSubmenuActive(item.submenu);

    if (hasSubmenu) {
      return (
        <li key={index} className={`nav-item-wrapper ${isExpanded ? 'expanded' : ''}`}>
          <button
            className={`nav-item ${submenuActive ? 'active' : ''}`}
            onClick={() => toggleSubmenu(item.name)}
            title={sidebarCollapsed ? item.name : undefined}
          >
            <span className="nav-icon">{item.icon}</span>
            {!sidebarCollapsed && (
              <>
                <span className="nav-label">{item.name}</span>
                {item.badge && (
                  <span className="nav-badge">{item.badge}</span>
                )}
                <svg 
                  className={`nav-chevron ${isExpanded ? 'rotated' : ''}`}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </>
            )}
          </button>
          {!sidebarCollapsed && isExpanded && (
            <ul className="submenu">
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    to={subItem.href}
                    className={`submenu-item ${isActive(subItem.href) ? 'active' : ''} ${subItem.highlight ? 'highlight' : ''}`}
                  >
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    }

    return (
      <li key={index}>
        <Link
          to={item.href}
          className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
          title={sidebarCollapsed ? item.name : undefined}
        >
          <span className="nav-icon">{item.icon}</span>
          {!sidebarCollapsed && (
            <>
              <span className="nav-label">{item.name}</span>
              {item.badge && (
                <span className="nav-badge">{item.badge}</span>
              )}
              {item.status && (
                <span className={`nav-status ${item.status}`}></span>
              )}
            </>
          )}
        </Link>
      </li>
    );
  };

  return (
    <div className={`dashboard-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-inner">
          {/* Logo */}
          <div className="sidebar-header">
            <Link to="/dashboard" className="sidebar-logo">
              {sidebarCollapsed ? (
                <img src={LogoIcon} alt="Attrio" className="logo-icon" />
              ) : (
                <img src={LogoFull} alt="Attrio" className="logo-full" />
              )}
            </Link>
            {!sidebarCollapsed && (
              <button 
                className="sidebar-toggle"
                onClick={() => setSidebarCollapsed(true)}
                aria-label="Collapse sidebar"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}
          </div>

          {/* Expand button when collapsed */}
          {sidebarCollapsed && (
            <button 
              className="sidebar-expand"
              onClick={() => setSidebarCollapsed(false)}
              aria-label="Expand sidebar"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}

          {/* Main Navigation */}
          <nav className="sidebar-nav">
            <ul className="nav-list">
              {navigation.map((item, index) => renderNavItem(item, index))}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="sidebar-bottom">
            <div className="nav-divider"></div>
            
            {/* Bottom Navigation */}
            <ul className="nav-list">
              {bottomNavigation.map((item, index) => renderNavItem(item, index))}
            </ul>

            {/* User Menu Button */}
            <div className="sidebar-user">
              <button 
                className="user-button"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <div className="user-avatar">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} />
                  ) : (
                    <span>{user.name.charAt(0)}</span>
                  )}
                </div>
                {!sidebarCollapsed && (
                  <>
                    <div className="user-info">
                      <strong>{user.name}</strong>
                      <span>{user.plan}</span>
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="user-chevron">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </>
                )}
              </button>

              {/* User Dropdown - Only logout and basic info */}
              {userMenuOpen && (
                <div className="user-dropdown">
                  <div className="dropdown-header">
                    <strong>{user.name}</strong>
                    <span>{user.email}</span>
                  </div>
                  <div className="dropdown-divider" />
                  <button className="dropdown-item dropdown-logout" onClick={handleLogout}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <Outlet />
      </main>

      {/* Click outside to close user menu */}
      {userMenuOpen && (
        <div 
          className="user-dropdown-overlay" 
          onClick={() => setUserMenuOpen(false)} 
        />
      )}
    </div>
  );
};

export default DashboardLayout;
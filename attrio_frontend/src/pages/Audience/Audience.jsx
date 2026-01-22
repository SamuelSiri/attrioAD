import { useState } from 'react';
import './Audience.css';

const Audience = () => {
  const [activeTab, setActiveTab] = useState('extracted');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'extracted', label: 'Extraídos', count: 4523, description: 'Sin seguir aún' },
    { id: 'followed', label: 'Seguidos', count: 892, description: 'Ya los seguiste' },
    { id: 'followers', label: 'Seguidores', count: 1247, description: 'Te siguen' },
    { id: 'followbacks', label: 'Followbacks', count: 687, description: 'Siguieron de vuelta' },
    { id: 'unfollowed', label: 'No siguen', count: 205, description: 'No te siguieron' },
  ];

  const filters = {
    hasPhoto: { label: 'Tiene foto de perfil', active: true },
    hasBio: { label: 'Tiene bio completa', active: false },
    isPublic: { label: 'Cuenta pública', active: true },
    isBusiness: { label: 'Cuenta de negocio', active: false },
    minFollowers: { label: 'Mínimo seguidores', value: 200 },
    maxFollowers: { label: 'Máximo seguidores', value: 5000 },
    minPosts: { label: 'Mínimo posts', value: 10 },
    bioContains: { label: 'Bio contiene', value: '' },
    bioNotContains: { label: 'Bio no contiene', value: '' },
    activeRecently: { label: 'Activo últimos 7 días', active: true },
    language: { label: 'Idioma de bio', value: 'español' },
  };

  const users = [
    {
      id: 1,
      username: '@mariafitness_rd',
      fullName: 'María García',
      avatar: null,
      bio: 'Fitness coach | Mamá de 2 | Santo Domingo | Transformando vidas',
      followers: 2341,
      following: 892,
      posts: 156,
      isPrivate: false,
      hasPhoto: true,
      lastActive: '2h',
      score: 92,
      source: '@gymshark_rd',
      extractedAt: '2024-01-20',
      status: 'extracted',
    },
    {
      id: 2,
      username: '@carlos_emprendedor',
      fullName: 'Carlos Méndez',
      avatar: null,
      bio: 'CEO @techstartup | Emprendedor | Padre | Inversionista',
      followers: 4521,
      following: 1203,
      posts: 89,
      isPrivate: false,
      hasPhoto: true,
      lastActive: '5h',
      score: 88,
      source: '@empikiRD',
      extractedAt: '2024-01-19',
      status: 'extracted',
    },
    {
      id: 3,
      username: '@laura.lifestyle',
      fullName: 'Laura Rodríguez',
      avatar: null,
      bio: 'Lifestyle | Moda | Viajes | RD',
      followers: 1876,
      following: 743,
      posts: 234,
      isPrivate: false,
      hasPhoto: true,
      lastActive: '1d',
      score: 85,
      source: '@maaborns',
      extractedAt: '2024-01-20',
      status: 'extracted',
    },
    {
      id: 4,
      username: '@juanfitpro',
      fullName: 'Juan Pérez',
      avatar: null,
      bio: 'Personal Trainer | CrossFit L2 | Nutrición deportiva',
      followers: 3245,
      following: 567,
      posts: 312,
      isPrivate: false,
      hasPhoto: true,
      lastActive: '3h',
      score: 94,
      source: '@crossfitsd',
      extractedAt: '2024-01-18',
      status: 'followed',
      followedAt: '2024-01-19',
    },
    {
      id: 5,
      username: '@negociosrd',
      fullName: 'Negocios RD',
      avatar: null,
      bio: 'Comunidad de emprendedores | Tips de negocios | Networking',
      followers: 8923,
      following: 234,
      posts: 567,
      isPrivate: false,
      hasPhoto: true,
      lastActive: '30m',
      score: 78,
      source: '@empikiRD',
      extractedAt: '2024-01-17',
      status: 'followback',
      followedAt: '2024-01-18',
      followedBackAt: '2024-01-19',
    },
    {
      id: 6,
      username: '@sofia_wellness',
      fullName: 'Sofía Martínez',
      avatar: null,
      bio: 'Wellness Coach | Yoga | Meditación | Vida consciente',
      followers: 1523,
      following: 876,
      posts: 198,
      isPrivate: false,
      hasPhoto: true,
      lastActive: '6h',
      score: 81,
      source: '@gymshark_rd',
      extractedAt: '2024-01-16',
      status: 'unfollowed',
      followedAt: '2024-01-17',
      unfollowedAt: '2024-01-21',
    },
  ];

  const getScoreColor = (score) => {
    if (score >= 85) return 'excellent';
    if (score >= 70) return 'good';
    if (score >= 50) return 'average';
    return 'low';
  };

  const getScoreLabel = (score) => {
    if (score >= 85) return 'Excelente';
    if (score >= 70) return 'Bueno';
    if (score >= 50) return 'Regular';
    return 'Bajo';
  };

  const toggleSelectUser = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const selectAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map(u => u.id));
    }
  };

  const filteredUsers = users.filter(u => {
    if (activeTab === 'extracted') return u.status === 'extracted';
    if (activeTab === 'followed') return u.status === 'followed' || u.status === 'followback' || u.status === 'unfollowed';
    if (activeTab === 'followers') return u.status === 'followback';
    if (activeTab === 'followbacks') return u.status === 'followback';
    if (activeTab === 'unfollowed') return u.status === 'unfollowed';
    return true;
  });

  return (
    <div className="audience-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-text">
          <h1>Audiencia</h1>
          <p>Gestiona y analiza tu base de prospectos y seguidores</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary" onClick={() => setShowFilters(!showFilters)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            Filtros
            {showFilters && <span className="filter-active-dot"></span>}
          </button>
          <button className="btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Exportar
          </button>
          <button className="btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            Extraer Nuevos
          </button>
        </div>
      </header>

      {/* Summary Stats */}
      <div className="summary-bar">
        <div className="summary-item">
          <div className="summary-icon extracted">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-num">4,523</span>
            <span className="summary-label">Total extraídos</span>
          </div>
        </div>
        <div className="summary-item">
          <div className="summary-icon followed">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="20" y1="8" x2="20" y2="14" />
              <line x1="23" y1="11" x2="17" y2="11" />
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-num">892</span>
            <span className="summary-label">Seguidos</span>
          </div>
        </div>
        <div className="summary-item">
          <div className="summary-icon followers">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-num">1,247</span>
            <span className="summary-label">Seguidores</span>
          </div>
        </div>
        <div className="summary-item highlight">
          <div className="summary-icon rate">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-num">77%</span>
            <span className="summary-label">Tasa followback</span>
          </div>
        </div>
        <div className="summary-item">
          <div className="summary-icon score">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-num">84</span>
            <span className="summary-label">Score promedio</span>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="filters-panel">
          <div className="filters-header">
            <h3>Filtros de audiencia</h3>
            <button className="btn-text" onClick={() => setShowFilters(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="filters-grid">
            <div className="filter-group">
              <h4>Perfil</h4>
              <label className="filter-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                Tiene foto de perfil
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Tiene bio completa
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                Cuenta pública
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Cuenta de negocio
              </label>
            </div>
            <div className="filter-group">
              <h4>Seguidores</h4>
              <div className="filter-range">
                <div className="range-input">
                  <label>Mínimo</label>
                  <input type="number" defaultValue="200" />
                </div>
                <span className="range-separator">-</span>
                <div className="range-input">
                  <label>Máximo</label>
                  <input type="number" defaultValue="5000" />
                </div>
              </div>
            </div>
            <div className="filter-group">
              <h4>Actividad</h4>
              <div className="filter-range">
                <div className="range-input full">
                  <label>Mínimo posts</label>
                  <input type="number" defaultValue="10" />
                </div>
              </div>
              <label className="filter-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                Activo últimos 7 días
              </label>
            </div>
            <div className="filter-group">
              <h4>Bio</h4>
              <div className="filter-input">
                <label>Contiene palabras</label>
                <input type="text" placeholder="fitness, gym, mamá..." />
              </div>
              <div className="filter-input">
                <label>No contiene</label>
                <input type="text" placeholder="influencer, spam..." />
              </div>
            </div>
            <div className="filter-group">
              <h4>Idioma</h4>
              <select className="filter-select">
                <option value="">Todos</option>
                <option value="es" selected>Español</option>
                <option value="en">Inglés</option>
              </select>
            </div>
            <div className="filter-group">
              <h4>Score de calidad</h4>
              <div className="filter-range">
                <div className="range-input">
                  <label>Mínimo</label>
                  <input type="number" defaultValue="60" />
                </div>
                <span className="range-separator">-</span>
                <div className="range-input">
                  <label>Máximo</label>
                  <input type="number" defaultValue="100" />
                </div>
              </div>
            </div>
          </div>
          <div className="filters-footer">
            <button className="btn-text">Limpiar filtros</button>
            <div className="filters-actions">
              <button className="btn-secondary">Guardar filtro</button>
              <button className="btn-primary">Aplicar filtros</button>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <nav className="tabs-nav">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="tab-content">
              <span className="tab-label">{tab.label}</span>
              <span className="tab-desc">{tab.description}</span>
            </div>
            <span className="tab-count">{tab.count.toLocaleString()}</span>
          </button>
        ))}
      </nav>

      {/* Toolbar */}
      <div className="table-toolbar">
        <div className="toolbar-left">
          <label className="select-all">
            <input 
              type="checkbox" 
              checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
              onChange={selectAll}
            />
            <span className="checkmark"></span>
            {selectedUsers.length > 0 ? `${selectedUsers.length} seleccionados` : 'Seleccionar todos'}
          </label>
          {selectedUsers.length > 0 && (
            <div className="bulk-actions">
              <button className="btn-bulk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
                Seguir
              </button>
              <button className="btn-bulk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Exportar
              </button>
              <button className="btn-bulk danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
                Eliminar
              </button>
            </div>
          )}
        </div>
        <div className="toolbar-right">
          <div className="search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input 
              type="text" 
              placeholder="Buscar usuario..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select className="sort-select">
            <option value="score">Mayor score</option>
            <option value="followers">Más seguidores</option>
            <option value="recent">Más reciente</option>
            <option value="active">Más activo</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="users-table">
        <div className="table-header">
          <div className="th-checkbox"></div>
          <div className="th-user">Usuario</div>
          <div className="th-stats">Seguidores</div>
          <div className="th-stats">Siguiendo</div>
          <div className="th-stats">Posts</div>
          <div className="th-score">Score</div>
          <div className="th-source">Fuente</div>
          <div className="th-activity">Actividad</div>
          <div className="th-actions">Acciones</div>
        </div>

        <div className="table-body">
          {filteredUsers.map(user => (
            <div key={user.id} className={`table-row ${selectedUsers.includes(user.id) ? 'selected' : ''}`}>
              <div className="td-checkbox">
                <label className="row-checkbox">
                  <input 
                    type="checkbox" 
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => toggleSelectUser(user.id)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="td-user">
                <div className="user-avatar">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.username} />
                  ) : (
                    <span>{user.username.charAt(1).toUpperCase()}</span>
                  )}
                  {user.hasPhoto && <span className="verified-dot"></span>}
                </div>
                <div className="user-info">
                  <span className="user-username">{user.username}</span>
                  <span className="user-name">{user.fullName}</span>
                  <span className="user-bio">{user.bio}</span>
                </div>
              </div>
              <div className="td-stats">
                <span className="stat-main">{user.followers.toLocaleString()}</span>
              </div>
              <div className="td-stats">
                <span className="stat-main">{user.following.toLocaleString()}</span>
                <span className="stat-ratio" title="Ratio seguidos/seguidores">
                  {(user.following / user.followers).toFixed(1)}x
                </span>
              </div>
              <div className="td-stats">
                <span className="stat-main">{user.posts}</span>
              </div>
              <div className="td-score">
                <div className={`score-badge ${getScoreColor(user.score)}`}>
                  <span className="score-num">{user.score}</span>
                  <span className="score-label">{getScoreLabel(user.score)}</span>
                </div>
              </div>
              <div className="td-source">
                <span className="source-tag">{user.source}</span>
              </div>
              <div className="td-activity">
                <span className="activity-time">{user.lastActive}</span>
              </div>
              <div className="td-actions">
                <button className="action-btn" title="Ver perfil">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
                <button className="action-btn" title="Seguir">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="23" y1="11" x2="17" y2="11" />
                  </svg>
                </button>
                <button className="action-btn" title="Agregar a campaña">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <div className="pagination-info">
          Mostrando {filteredUsers.length} de {tabs.find(t => t.id === activeTab)?.count.toLocaleString()} usuarios
        </div>
        <div className="pagination-controls">
          <button className="page-btn" disabled>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <span className="page-dots">...</span>
          <button className="page-btn">45</button>
          <button className="page-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Audience;
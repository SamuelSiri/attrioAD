import { useState } from 'react';
import './Competitors.css';

const Competitors = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCompetitor, setSelectedCompetitor] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const competitors = [
    {
      id: 1,
      username: '@gymshark_rd',
      fullName: 'GymShark República Dominicana',
      avatar: null,
      bio: 'Ropa deportiva premium | Envíos a todo RD | Fitness lifestyle',
      followers: 45200,
      following: 892,
      posts: 567,
      engagementRate: 4.2,
      avgLikes: 1890,
      avgComments: 87,
      growthWeek: 234,
      growthMonth: 1245,
      extracted: 2341,
      lastExtraction: '2024-01-20',
      addedAt: '2024-01-05',
      status: 'active',
      category: 'Fitness',
      topHashtags: ['#fitness', '#gymrd', '#workout', '#fitlife', '#gimnasio'],
      postFrequency: '1.2/día',
      bestPostTime: '7:00 PM',
      contentMix: { photos: 35, videos: 25, reels: 30, carousels: 10 },
    },
    {
      id: 2,
      username: '@maaborns',
      fullName: 'Maaborns Baby Store',
      avatar: null,
      bio: 'Todo para tu bebé | Ropa, accesorios y más | Santo Domingo',
      followers: 23400,
      following: 456,
      posts: 892,
      engagementRate: 5.8,
      avgLikes: 1356,
      avgComments: 124,
      growthWeek: 189,
      growthMonth: 876,
      extracted: 1876,
      lastExtraction: '2024-01-19',
      addedAt: '2024-01-08',
      status: 'active',
      category: 'Bebés',
      topHashtags: ['#bebé', '#mamá', '#babyshower', '#reciennacido', '#maternidad'],
      postFrequency: '2.1/día',
      bestPostTime: '12:00 PM',
      contentMix: { photos: 45, videos: 15, reels: 25, carousels: 15 },
    },
    {
      id: 3,
      username: '@empikiRD',
      fullName: 'Empiki Emprendedores',
      avatar: null,
      bio: 'Comunidad de emprendedores RD | Tips de negocios | Networking eventos',
      followers: 34200,
      following: 1203,
      posts: 1234,
      engagementRate: 3.9,
      avgLikes: 1334,
      avgComments: 98,
      growthWeek: 156,
      growthMonth: 723,
      extracted: 987,
      lastExtraction: '2024-01-18',
      addedAt: '2024-01-10',
      status: 'active',
      category: 'Negocios',
      topHashtags: ['#emprendedor', '#negociosrd', '#startup', '#exito', '#motivacion'],
      postFrequency: '0.8/día',
      bestPostTime: '9:00 AM',
      contentMix: { photos: 30, videos: 20, reels: 40, carousels: 10 },
    },
    {
      id: 4,
      username: '@crossfitsd',
      fullName: 'CrossFit Santo Domingo',
      avatar: null,
      bio: 'Box de CrossFit #1 en SD | Clases todos los niveles | Comunidad fitness',
      followers: 15200,
      following: 567,
      posts: 456,
      engagementRate: 6.1,
      avgLikes: 927,
      avgComments: 156,
      growthWeek: 98,
      growthMonth: 445,
      extracted: 654,
      lastExtraction: '2024-01-17',
      addedAt: '2024-01-12',
      status: 'active',
      category: 'Fitness',
      topHashtags: ['#crossfit', '#wod', '#fitfam', '#training', '#crossfitrd'],
      postFrequency: '1.5/día',
      bestPostTime: '6:00 AM',
      contentMix: { photos: 20, videos: 35, reels: 40, carousels: 5 },
    },
    {
      id: 5,
      username: '@modard_boutique',
      fullName: 'Moda RD Boutique',
      avatar: null,
      bio: 'Moda femenina | Tendencias 2024 | Envíos nacionales',
      followers: 8700,
      following: 234,
      posts: 678,
      engagementRate: 4.5,
      avgLikes: 391,
      avgComments: 45,
      growthWeek: 67,
      growthMonth: 312,
      extracted: 0,
      lastExtraction: null,
      addedAt: '2024-01-15',
      status: 'pending',
      category: 'Moda',
      topHashtags: ['#modard', '#fashion', '#tendencias', '#outfit', '#style'],
      postFrequency: '1.8/día',
      bestPostTime: '8:00 PM',
      contentMix: { photos: 50, videos: 10, reels: 30, carousels: 10 },
    },
  ];

  const categories = ['Todos', 'Fitness', 'Bebés', 'Negocios', 'Moda'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredCompetitors = activeCategory === 'Todos' 
    ? competitors 
    : competitors.filter(c => c.category === activeCategory);

  const totalExtracted = competitors.reduce((acc, c) => acc + c.extracted, 0);
  const avgEngagement = (competitors.reduce((acc, c) => acc + c.engagementRate, 0) / competitors.length).toFixed(1);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const CompetitorCard = ({ competitor }) => (
    <div className={`competitor-card status-${competitor.status}`}>
      {/* Header */}
      <div className="card-header">
        <div className="competitor-identity">
          <div className="competitor-avatar">
            {competitor.avatar ? (
              <img src={competitor.avatar} alt={competitor.username} />
            ) : (
              <span>{competitor.username.charAt(1).toUpperCase()}</span>
            )}
          </div>
          <div className="competitor-info">
            <span className="competitor-username">{competitor.username}</span>
            <span className="competitor-name">{competitor.fullName}</span>
          </div>
        </div>
        <div className="card-actions-menu">
          <span className={`category-tag ${competitor.category.toLowerCase()}`}>
            {competitor.category}
          </span>
          <button className="btn-menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bio */}
      <p className="competitor-bio">{competitor.bio}</p>

      {/* Main Stats */}
      <div className="stats-grid">
        <div className="stat-box">
          <span className="stat-value">{formatNumber(competitor.followers)}</span>
          <span className="stat-label">Seguidores</span>
        </div>
        <div className="stat-box">
          <span className="stat-value">{competitor.posts}</span>
          <span className="stat-label">Posts</span>
        </div>
        <div className="stat-box highlight">
          <span className="stat-value">{competitor.engagementRate}%</span>
          <span className="stat-label">Engagement</span>
        </div>
        <div className="stat-box">
          <span className="stat-value">{formatNumber(competitor.avgLikes)}</span>
          <span className="stat-label">Likes prom.</span>
        </div>
      </div>

      {/* Growth */}
      <div className="growth-section">
        <h4 className="section-label">Crecimiento</h4>
        <div className="growth-stats">
          <div className="growth-item">
            <span className="growth-period">7 días</span>
            <span className={`growth-value ${competitor.growthWeek >= 0 ? 'positive' : 'negative'}`}>
              {competitor.growthWeek >= 0 ? '+' : ''}{formatNumber(competitor.growthWeek)}
            </span>
          </div>
          <div className="growth-item">
            <span className="growth-period">30 días</span>
            <span className={`growth-value ${competitor.growthMonth >= 0 ? 'positive' : 'negative'}`}>
              {competitor.growthMonth >= 0 ? '+' : ''}{formatNumber(competitor.growthMonth)}
            </span>
          </div>
        </div>
      </div>

      {/* Content Analysis */}
      <div className="content-section">
        <h4 className="section-label">Contenido</h4>
        <div className="content-stats">
          <div className="content-item">
            <span className="content-label">Frecuencia</span>
            <span className="content-value">{competitor.postFrequency}</span>
          </div>
          <div className="content-item">
            <span className="content-label">Mejor hora</span>
            <span className="content-value">{competitor.bestPostTime}</span>
          </div>
        </div>
        <div className="content-mix">
          <div className="mix-bar">
            <div className="mix-segment photos" style={{ width: `${competitor.contentMix.photos}%` }} title={`Fotos: ${competitor.contentMix.photos}%`}></div>
            <div className="mix-segment videos" style={{ width: `${competitor.contentMix.videos}%` }} title={`Videos: ${competitor.contentMix.videos}%`}></div>
            <div className="mix-segment reels" style={{ width: `${competitor.contentMix.reels}%` }} title={`Reels: ${competitor.contentMix.reels}%`}></div>
            <div className="mix-segment carousels" style={{ width: `${competitor.contentMix.carousels}%` }} title={`Carruseles: ${competitor.contentMix.carousels}%`}></div>
          </div>
          <div className="mix-legend">
            <span><i className="dot photos"></i>Fotos</span>
            <span><i className="dot videos"></i>Videos</span>
            <span><i className="dot reels"></i>Reels</span>
            <span><i className="dot carousels"></i>Carruseles</span>
          </div>
        </div>
      </div>

      {/* Top Hashtags */}
      <div className="hashtags-section">
        <h4 className="section-label">Hashtags frecuentes</h4>
        <div className="hashtags-list">
          {competitor.topHashtags.slice(0, 5).map((tag, i) => (
            <span key={i} className="hashtag">{tag}</span>
          ))}
        </div>
      </div>

      {/* Extraction Status */}
      <div className="extraction-section">
        <div className="extraction-info">
          <div className="extraction-stat">
            <span className="extraction-value">{formatNumber(competitor.extracted)}</span>
            <span className="extraction-label">Extraídos</span>
          </div>
          {competitor.lastExtraction && (
            <span className="extraction-date">
              Última: {competitor.lastExtraction}
            </span>
          )}
        </div>
        <div className="extraction-actions">
          {competitor.status === 'pending' ? (
            <button className="btn-extract primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Extraer seguidores
            </button>
          ) : (
            <button className="btn-extract">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
              Actualizar
            </button>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div className="card-footer">
        <span className="added-date">Agregado: {competitor.addedAt}</span>
        <div className="footer-actions">
          <button className="btn-icon" title="Ver análisis">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </button>
          <button className="btn-icon" title="Ver en Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </button>
          <button className="btn-icon danger" title="Eliminar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  const AddCompetitorModal = () => {
    const [username, setUsername] = useState('');
    const [searching, setSearching] = useState(false);
    const [result, setResult] = useState(null);

    const handleSearch = () => {
      if (!username) return;
      setSearching(true);
      // Simulate search
      setTimeout(() => {
        setResult({
          username: username.startsWith('@') ? username : `@${username}`,
          fullName: 'Cuenta de ejemplo',
          followers: 12500,
          posts: 234,
          isPrivate: false,
          avatar: null,
        });
        setSearching(false);
      }, 1000);
    };

    return (
      <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Agregar Competidor</h2>
            <button className="modal-close" onClick={() => setShowAddModal(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="modal-body">
            <div className="search-competitor">
              <label>Usuario de Instagram</label>
              <div className="search-input-group">
                <span className="input-prefix">@</span>
                <input
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={e => setUsername(e.target.value.replace('@', ''))}
                  onKeyPress={e => e.key === 'Enter' && handleSearch()}
                />
                <button 
                  className="btn-search"
                  onClick={handleSearch}
                  disabled={!username || searching}
                >
                  {searching ? (
                    <span className="spinner"></span>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                  )}
                </button>
              </div>
              <span className="input-hint">Ingresa el nombre de usuario sin @</span>
            </div>

            {result && (
              <div className="search-result">
                <div className="result-card">
                  <div className="result-avatar">
                    {result.avatar ? (
                      <img src={result.avatar} alt={result.username} />
                    ) : (
                      <span>{result.username.charAt(1).toUpperCase()}</span>
                    )}
                  </div>
                  <div className="result-info">
                    <span className="result-username">{result.username}</span>
                    <span className="result-name">{result.fullName}</span>
                    <div className="result-stats">
                      <span>{formatNumber(result.followers)} seguidores</span>
                      <span>{result.posts} posts</span>
                      {result.isPrivate && <span className="private-badge">Privada</span>}
                    </div>
                  </div>
                  <div className="result-status">
                    {result.isPrivate ? (
                      <span className="status-warning">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                          <line x1="12" y1="9" x2="12" y2="13" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                        Cuenta privada
                      </span>
                    ) : (
                      <span className="status-ok">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Disponible
                      </span>
                    )}
                  </div>
                </div>

                <div className="category-select">
                  <label>Categoría</label>
                  <div className="category-options">
                    {['Fitness', 'Bebés', 'Negocios', 'Moda', 'Otro'].map(cat => (
                      <button key={cat} className="category-option">
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="modal-footer">
            <button className="btn-secondary" onClick={() => setShowAddModal(false)}>
              Cancelar
            </button>
            <button 
              className="btn-primary"
              disabled={!result || result.isPrivate}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Agregar Competidor
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="competitors-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-text">
          <h1>Competidores</h1>
          <p>Analiza y extrae audiencias de tu competencia</p>
        </div>
        <div className="header-actions">
          <div className="view-toggle">
            <button 
              className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>
            <button 
              className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </button>
          </div>
          <button className="btn-primary" onClick={() => setShowAddModal(true)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Agregar Competidor
          </button>
        </div>
      </header>

      {/* Summary Stats */}
      <div className="summary-bar">
        <div className="summary-item">
          <div className="summary-icon competitors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="22" y1="12" x2="18" y2="12" />
              <line x1="6" y1="12" x2="2" y2="12" />
              <line x1="12" y1="6" x2="12" y2="2" />
              <line x1="12" y1="22" x2="12" y2="18" />
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-num">{competitors.length}</span>
            <span className="summary-label">Competidores</span>
          </div>
        </div>
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
            <span className="summary-num">{formatNumber(totalExtracted)}</span>
            <span className="summary-label">Total extraídos</span>
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
            <span className="summary-num">{formatNumber(competitors.reduce((a, c) => a + c.followers, 0))}</span>
            <span className="summary-label">Seguidores totales</span>
          </div>
        </div>
        <div className="summary-item highlight">
          <div className="summary-icon engagement">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-num">{avgEngagement}%</span>
            <span className="summary-label">Eng. promedio</span>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
            {cat !== 'Todos' && (
              <span className="category-count">
                {competitors.filter(c => c.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Competitors Grid */}
      <div className={`competitors-grid ${viewMode}`}>
        {filteredCompetitors.map(competitor => (
          <CompetitorCard key={competitor.id} competitor={competitor} />
        ))}

        {/* Add Card */}
        <div className="add-competitor-card" onClick={() => setShowAddModal(true)}>
          <div className="add-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
          <span className="add-text">Agregar competidor</span>
          <span className="add-hint">Analiza sus seguidores y contenido</span>
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && <AddCompetitorModal />}
    </div>
  );
};

export default Competitors;
import { useState } from 'react';
import './Campaigns.css';

const Campaigns = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const campaigns = {
    active: [
      {
        id: 1,
        name: 'Madres Santo Domingo',
        status: 'active',
        sources: [
          { username: '@maaborns', followers: '23.4K' },
          { username: '@bebemundo_rd', followers: '45.1K' },
        ],
        filters: ['Tiene foto', 'Bio español', '200-5K seguidores', 'Min 10 posts', 'Pública'],
        actions: { follow: true, like: true, story: false, likesPerFollow: 2 },
        speed: 'seguro',
        speedDetails: '40-60/día',
        progress: 67,
        stats: { follows: 234, followbacks: 89, rate: 38, likes: 512, stories: 0, queue: 1847, todayTotal: 70 },
        schedule: { days: ['L', 'M', 'X', 'J', 'V'], hours: '08:00 - 22:00' },
        goal: 500,
        lastActivity: 'Hace 12 min',
        health: 'healthy',
        estimatedCompletion: '5 días',
      },
      {
        id: 2,
        name: 'Fitness Enthusiasts',
        status: 'active',
        sources: [
          { username: '@gymshark_rd', followers: '12.4K' },
          { username: '@fitlife_do', followers: '8.7K' },
          { username: '@crossfitsd', followers: '15.2K' },
        ],
        filters: ['Bio: gym/fitness', 'Min 20 posts', '500-10K seg', 'Activo 7d'],
        actions: { follow: true, like: true, story: true, likesPerFollow: 3 },
        speed: 'normal',
        speedDetails: '60-80/día',
        progress: 23,
        stats: { follows: 156, followbacks: 52, rate: 33, likes: 289, stories: 87, queue: 3421, todayTotal: 52 },
        schedule: { days: ['L', 'M', 'X', 'J', 'V', 'S'], hours: '06:00 - 21:00' },
        goal: 1000,
        lastActivity: 'Hace 8 min',
        health: 'healthy',
        estimatedCompletion: '12 días',
      },
    ],
    paused: [
      {
        id: 3,
        name: 'Emprendedores RD',
        status: 'paused',
        sources: [{ username: '@empikiRD', followers: '34.2K' }],
        filters: ['Bio: negocio/emprendedor', 'Cuenta business'],
        actions: { follow: true, like: false, story: false, likesPerFollow: 0 },
        speed: 'seguro',
        speedDetails: '40-60/día',
        progress: 45,
        stats: { follows: 89, followbacks: 34, rate: 38, likes: 0, stories: 0, queue: 892, todayTotal: 0 },
        schedule: { days: ['L', 'M', 'X', 'J', 'V'], hours: '09:00 - 18:00' },
        goal: 200,
        lastActivity: '19 Ene, 11:45',
        health: 'paused',
        pausedReason: 'Pausada manualmente',
      },
    ],
    completed: [
      {
        id: 4,
        name: 'Campaña Navidad 2023',
        status: 'completed',
        sources: [
          { username: '@tiendaregalosrd', followers: '18.9K' },
          { username: '@navidad_rd', followers: '22.1K' },
        ],
        filters: ['100-3K seguidores', 'Pública'],
        actions: { follow: true, like: true, story: false, likesPerFollow: 2 },
        speed: 'normal',
        speedDetails: '60-80/día',
        progress: 100,
        stats: { follows: 500, followbacks: 187, rate: 37, likes: 1250, stories: 0, queue: 0, todayTotal: 0 },
        schedule: { days: ['L', 'M', 'X', 'J', 'V', 'S', 'D'], hours: '08:00 - 22:00' },
        goal: 500,
        lastActivity: '24 Dic, 21:15',
        health: 'completed',
        duration: '24 días',
      },
    ],
  };

  const tabs = [
    { id: 'active', label: 'Activas', count: campaigns.active.length },
    { id: 'paused', label: 'Pausadas', count: campaigns.paused.length },
    { id: 'completed', label: 'Completadas', count: campaigns.completed.length },
  ];

  const CampaignCard = ({ campaign }) => (
    <div className={`campaign-card status-${campaign.status}`}>
      {/* Header */}
      <div className="card-header">
        <div className="header-left">
          <h3>{campaign.name}</h3>
          <div className="header-badges">
            <span className={`badge-status ${campaign.status}`}>
              {campaign.status === 'active' && 'Activa'}
              {campaign.status === 'paused' && 'Pausada'}
              {campaign.status === 'completed' && 'Completada'}
            </span>
            <span className={`badge-health ${campaign.health}`}>
              {campaign.health === 'healthy' && 'Saludable'}
              {campaign.health === 'paused' && 'En pausa'}
              {campaign.health === 'completed' && 'Finalizada'}
            </span>
          </div>
        </div>
        {campaign.status === 'active' && (
          <div className="live-badge">
            <span className="live-dot"></span>
            {campaign.stats.todayTotal} hoy
          </div>
        )}
      </div>

      {/* Progress */}
      <div className="card-progress">
        <div className="progress-info">
          <span className="progress-label">Progreso</span>
          <span className="progress-value">{campaign.stats.follows} / {campaign.goal}</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${campaign.progress}%` }}></div>
        </div>
        <div className="progress-meta">
          <span className="progress-percent">{campaign.progress}%</span>
          {campaign.estimatedCompletion && (
            <span className="progress-eta">Estimado: {campaign.estimatedCompletion}</span>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="card-stats">
        <div className="stat">
          <span className="stat-value">{campaign.stats.follows}</span>
          <span className="stat-name">Follows</span>
        </div>
        <div className="stat">
          <span className="stat-value">{campaign.stats.followbacks}</span>
          <span className="stat-name">Followbacks</span>
        </div>
        <div className="stat primary">
          <span className="stat-value">{campaign.stats.rate}%</span>
          <span className="stat-name">Conversión</span>
        </div>
        <div className="stat">
          <span className="stat-value">{campaign.stats.likes}</span>
          <span className="stat-name">Likes</span>
        </div>
        {campaign.actions.story && (
          <div className="stat">
            <span className="stat-value">{campaign.stats.stories}</span>
            <span className="stat-name">Stories</span>
          </div>
        )}
        <div className="stat">
          <span className="stat-value">{campaign.stats.queue.toLocaleString()}</span>
          <span className="stat-name">En cola</span>
        </div>
      </div>

      {/* Sources */}
      <div className="card-section">
        <h4 className="section-label">Fuentes</h4>
        <div className="sources-row">
          {campaign.sources.map((s, i) => (
            <div key={i} className="source-chip">
              <span className="source-user">{s.username}</span>
              <span className="source-count">{s.followers}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="card-section">
        <h4 className="section-label">Filtros activos</h4>
        <div className="filters-row">
          {campaign.filters.map((f, i) => (
            <span key={i} className="filter-chip">{f}</span>
          ))}
        </div>
      </div>

      {/* Actions & Config */}
      <div className="card-config">
        <div className="config-group">
          <h4 className="section-label">Acciones</h4>
          <div className="actions-row">
            <span className={`action-chip ${campaign.actions.follow ? 'on' : 'off'}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="23" y1="11" x2="17" y2="11" />
              </svg>
              Follow
            </span>
            <span className={`action-chip ${campaign.actions.like ? 'on' : 'off'}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Like {campaign.actions.likesPerFollow > 0 && `x${campaign.actions.likesPerFollow}`}
            </span>
            <span className={`action-chip ${campaign.actions.story ? 'on' : 'off'}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Story
            </span>
          </div>
        </div>
        <div className="config-group">
          <h4 className="section-label">Velocidad</h4>
          <div className={`speed-chip speed-${campaign.speed}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            {campaign.speed.charAt(0).toUpperCase() + campaign.speed.slice(1)}
            <span className="speed-rate">{campaign.speedDetails}</span>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="card-section">
        <h4 className="section-label">Horario</h4>
        <div className="schedule-row">
          <div className="schedule-days">
            {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((d) => (
              <span key={d} className={`day ${campaign.schedule.days.includes(d) ? 'active' : ''}`}>{d}</span>
            ))}
          </div>
          <div className="schedule-time">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {campaign.schedule.hours}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="card-footer">
        <span className="last-update">Última actividad: {campaign.lastActivity}</span>
        {campaign.pausedReason && <span className="pause-reason">{campaign.pausedReason}</span>}
        {campaign.duration && <span className="duration">Duración: {campaign.duration}</span>}
      </div>

      {/* Actions */}
      <div className="card-buttons">
        {campaign.status === 'active' && (
          <>
            <button className="btn-card btn-pause">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
              Pausar
            </button>
            <button className="btn-card btn-edit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Editar
            </button>
            <button className="btn-card btn-stats">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
              Stats
            </button>
          </>
        )}
        {campaign.status === 'paused' && (
          <>
            <button className="btn-card btn-resume">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Reanudar
            </button>
            <button className="btn-card btn-edit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Editar
            </button>
            <button className="btn-card btn-delete">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
              Eliminar
            </button>
          </>
        )}
        {campaign.status === 'completed' && (
          <>
            <button className="btn-card btn-duplicate">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Duplicar
            </button>
            <button className="btn-card btn-export">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Exportar
            </button>
            <button className="btn-card btn-stats">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
              Reporte
            </button>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="campaigns-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-text">
          <h1>Campañas</h1>
          <p>Gestiona tus campañas de crecimiento automatizado</p>
        </div>
        <button className="btn-primary-new" onClick={() => setShowCreateModal(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Nueva Campaña
        </button>
      </header>

      {/* Summary Stats */}
      <div className="summary-bar">
        <div className="summary-item">
          <span className="summary-num">{campaigns.active.length}</span>
          <span className="summary-label">Activas</span>
        </div>
        <div className="summary-item">
          <span className="summary-num">
            {campaigns.active.reduce((a, c) => a + c.stats.todayTotal, 0)}
          </span>
          <span className="summary-label">Acciones hoy</span>
        </div>
        <div className="summary-item">
          <span className="summary-num">
            {campaigns.active.reduce((a, c) => a + c.stats.follows, 0) +
             campaigns.paused.reduce((a, c) => a + c.stats.follows, 0) +
             campaigns.completed.reduce((a, c) => a + c.stats.follows, 0)}
          </span>
          <span className="summary-label">Total follows</span>
        </div>
        <div className="summary-item highlight">
          <span className="summary-num">36%</span>
          <span className="summary-label">Tasa promedio</span>
        </div>
      </div>

      {/* Tabs */}
      <nav className="tabs-nav">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn-s ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className={`tab-dot ${tab.id}`}></span>
            {tab.label}
            <span className="tab-count">{tab.count}</span>
          </button>
        ))}
      </nav>

      {/* Grid */}
      <div className="campaigns-grid">
        {campaigns[activeTab].length > 0 ? (
          campaigns[activeTab].map(c => <CampaignCard key={c.id} campaign={c} />)
        ) : (
          <div className="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <h3>No hay campañas {tabs.find(t => t.id === activeTab)?.label.toLowerCase()}</h3>
            <p>Crea una campaña para comenzar a crecer tu audiencia</p>
            {activeTab === 'active' && (
              <button className="btn-primary-new" onClick={() => setShowCreateModal(true)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Crear Campaña
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Campaigns;
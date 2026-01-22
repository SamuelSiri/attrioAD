import { useState } from 'react';
import './Meta.css';

const Meta = () => {
  const [activeTab, setActiveTab] = useState('audiences');
  const [showExportModal, setShowExportModal] = useState(false);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [selectedAudiences, setSelectedAudiences] = useState([]);

  // Mock data
  const metaAccount = {
    connected: true,
    name: 'Attrio Marketing',
    id: '1234567890',
    adAccounts: [
      { id: 'act_111222333', name: 'Attrio - Principal', currency: 'USD', status: 'active' },
      { id: 'act_444555666', name: 'Attrio - Pruebas', currency: 'USD', status: 'active' },
    ],
    selectedAccount: 'act_111222333',
    lastSync: '2024-01-21 14:30',
  };

  const audiences = [
    {
      id: 1,
      name: 'Seguidores Gym - Alta Conversión',
      source: 'Fitness Enthusiasts',
      type: 'followbacks',
      size: 892,
      quality: 94,
      exported: false,
      createdAt: '2024-01-20',
      filters: ['Followback confirmado', 'Engagement > 3%', 'Activo 7d'],
    },
    {
      id: 2,
      name: 'Madres SD - Interesadas',
      source: 'Madres Santo Domingo',
      type: 'engaged',
      size: 1247,
      quality: 87,
      exported: true,
      exportedAt: '2024-01-19',
      metaAudienceId: 'ca_789012',
      createdAt: '2024-01-18',
      filters: ['Liked posts', 'Visitó perfil', 'Bio en español'],
    },
    {
      id: 3,
      name: 'Emprendedores - Leads Calientes',
      source: 'Emprendedores RD',
      type: 'followbacks',
      size: 456,
      quality: 91,
      exported: true,
      exportedAt: '2024-01-17',
      metaAudienceId: 'ca_345678',
      createdAt: '2024-01-15',
      filters: ['Followback < 24h', 'Cuenta business'],
    },
    {
      id: 4,
      name: 'Lookalike Base - Top Followers',
      source: 'Múltiples campañas',
      type: 'lookalike_source',
      size: 2341,
      quality: 96,
      exported: true,
      exportedAt: '2024-01-21',
      metaAudienceId: 'ca_901234',
      createdAt: '2024-01-10',
      filters: ['Engagement > 5%', 'Followback', 'Compró o DM'],
    },
  ];

  const exportHistory = [
    {
      id: 1,
      audienceName: 'Madres SD - Interesadas',
      size: 1247,
      exportedAt: '2024-01-19 16:45',
      status: 'synced',
      metaAudienceId: 'ca_789012',
      adAccount: 'Attrio - Principal',
      matchRate: 67,
    },
    {
      id: 2,
      audienceName: 'Emprendedores - Leads Calientes',
      size: 456,
      exportedAt: '2024-01-17 11:20',
      status: 'synced',
      metaAudienceId: 'ca_345678',
      adAccount: 'Attrio - Principal',
      matchRate: 72,
    },
    {
      id: 3,
      audienceName: 'Lookalike Base - Top Followers',
      size: 2341,
      exportedAt: '2024-01-21 09:15',
      status: 'processing',
      metaAudienceId: 'ca_901234',
      adAccount: 'Attrio - Principal',
      matchRate: null,
    },
    {
      id: 4,
      audienceName: 'Test Audience',
      size: 150,
      exportedAt: '2024-01-15 14:00',
      status: 'failed',
      error: 'Audiencia muy pequeña (min 100 matches)',
      adAccount: 'Attrio - Pruebas',
      matchRate: 45,
    },
  ];

  const metaAudiences = [
    {
      id: 'ca_789012',
      name: 'Madres SD - Interesadas',
      size: 835,
      sourceSize: 1247,
      matchRate: 67,
      status: 'ready',
      type: 'custom',
      createdAt: '2024-01-19',
      campaigns: 2,
    },
    {
      id: 'ca_345678',
      name: 'Emprendedores - Leads Calientes',
      size: 328,
      sourceSize: 456,
      matchRate: 72,
      status: 'ready',
      type: 'custom',
      createdAt: '2024-01-17',
      campaigns: 1,
    },
    {
      id: 'ca_901234',
      name: 'Lookalike Base - Top Followers',
      size: null,
      sourceSize: 2341,
      matchRate: null,
      status: 'processing',
      type: 'custom',
      createdAt: '2024-01-21',
      campaigns: 0,
    },
    {
      id: 'la_001',
      name: 'Lookalike 1% - Top Followers',
      size: 180000,
      sourceSize: null,
      matchRate: null,
      status: 'ready',
      type: 'lookalike',
      basedOn: 'Lookalike Base - Top Followers',
      percentage: 1,
      country: 'DO',
      createdAt: '2024-01-21',
      campaigns: 0,
    },
  ];

  const toggleAudienceSelection = (id) => {
    setSelectedAudiences(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const getQualityColor = (quality) => {
    if (quality >= 90) return 'excellent';
    if (quality >= 75) return 'good';
    if (quality >= 60) return 'average';
    return 'low';
  };

  const ExportModal = () => {
    const [step, setStep] = useState(1);
    const [exportConfig, setExportConfig] = useState({
      adAccount: metaAccount.selectedAccount,
      audienceName: '',
      createLookalike: false,
      lookalikePercent: 1,
      lookalikeCountry: 'DO',
    });

    const selectedData = audiences.filter(a => selectedAudiences.includes(a.id));
    const totalSize = selectedData.reduce((acc, a) => acc + a.size, 0);

    return (
      <div className="modal-overlay" onClick={() => setShowExportModal(false)}>
        <div className="modal-content modal-export" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <div className="modal-header-icon meta">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </div>
            <div>
              <h2>Exportar a Meta Ads</h2>
              <p>Crea audiencias personalizadas para tus campañas</p>
            </div>
            <button className="modal-close" onClick={() => setShowExportModal(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="modal-steps">
            {[
              { num: 1, label: 'Revisar' },
              { num: 2, label: 'Configurar' },
              { num: 3, label: 'Confirmar' },
            ].map((s) => (
              <div 
                key={s.num} 
                className={`step ${step === s.num ? 'active' : ''} ${step > s.num ? 'completed' : ''}`}
              >
                <span className="step-number">
                  {step > s.num ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : s.num}
                </span>
                <span className="step-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="modal-body">
            {step === 1 && (
              <div className="export-step">
                <h3>Audiencias seleccionadas</h3>
                <p className="step-description">Revisa las audiencias que vas a exportar a Meta Ads</p>
                
                <div className="selected-audiences-list">
                  {selectedData.map(audience => (
                    <div key={audience.id} className="selected-audience-item">
                      <div className="audience-info">
                        <strong>{audience.name}</strong>
                        <span className="audience-meta">
                          {audience.size.toLocaleString()} usuarios | Calidad: {audience.quality}%
                        </span>
                      </div>
                      <div className="audience-filters">
                        {audience.filters.slice(0, 2).map((f, i) => (
                          <span key={i} className="filter-tag">{f}</span>
                        ))}
                        {audience.filters.length > 2 && (
                          <span className="filter-tag more">+{audience.filters.length - 2}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="export-summary-box">
                  <div className="summary-row">
                    <span>Total de usuarios</span>
                    <strong>{totalSize.toLocaleString()}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Match estimado (65-75%)</span>
                    <strong>{Math.round(totalSize * 0.70).toLocaleString()} usuarios</strong>
                  </div>
                  <div className="summary-note">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    Meta hace match con emails y datos de usuarios de Instagram para encontrar perfiles de Facebook/Instagram Ads
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="export-step">
                <h3>Configuración de exportación</h3>
                <p className="step-description">Define cómo quieres crear la audiencia en Meta</p>

                <div className="form-group">
                  <label>Cuenta publicitaria</label>
                  <select 
                    className="form-select"
                    value={exportConfig.adAccount}
                    onChange={e => setExportConfig({...exportConfig, adAccount: e.target.value})}
                  >
                    {metaAccount.adAccounts.map(acc => (
                      <option key={acc.id} value={acc.id}>{acc.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Nombre de la audiencia en Meta</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Ej: Attrio - Madres SD Interesadas"
                    value={exportConfig.audienceName}
                    onChange={e => setExportConfig({...exportConfig, audienceName: e.target.value})}
                  />
                  <span className="form-hint">Este nombre aparecerá en tu Administrador de Anuncios</span>
                </div>

                <div className="form-divider"></div>

                <div className="form-group">
                  <div className="toggle-option">
                    <div className="toggle-info">
                      <strong>Crear audiencia Lookalike</strong>
                      <span>Meta encontrará usuarios similares a tu audiencia exportada</span>
                    </div>
                    <button 
                      className={`toggle-btn ${exportConfig.createLookalike ? 'on' : ''}`}
                      onClick={() => setExportConfig({...exportConfig, createLookalike: !exportConfig.createLookalike})}
                    >
                      <span className="toggle-slider"></span>
                    </button>
                  </div>
                </div>

                {exportConfig.createLookalike && (
                  <div className="lookalike-config">
                    <div className="form-row">
                      <div className="form-group">
                        <label>País objetivo</label>
                        <select 
                          className="form-select"
                          value={exportConfig.lookalikeCountry}
                          onChange={e => setExportConfig({...exportConfig, lookalikeCountry: e.target.value})}
                        >
                          <option value="DO">República Dominicana</option>
                          <option value="US">Estados Unidos</option>
                          <option value="ES">España</option>
                          <option value="MX">México</option>
                          <option value="CO">Colombia</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Porcentaje de similitud</label>
                        <select 
                          className="form-select"
                          value={exportConfig.lookalikePercent}
                          onChange={e => setExportConfig({...exportConfig, lookalikePercent: parseInt(e.target.value)})}
                        >
                          <option value={1}>1% - Más similar</option>
                          <option value={2}>2%</option>
                          <option value={3}>3%</option>
                          <option value={5}>5%</option>
                          <option value={10}>10% - Mayor alcance</option>
                        </select>
                      </div>
                    </div>
                    <div className="lookalike-estimate">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <span>
                        Alcance estimado: <strong>150,000 - 200,000</strong> usuarios similares en {exportConfig.lookalikeCountry}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="export-step">
                <h3>Confirmar exportación</h3>
                <p className="step-description">Revisa los detalles antes de exportar</p>

                <div className="confirmation-card">
                  <div className="confirm-section">
                    <h4>Audiencia personalizada</h4>
                    <div className="confirm-grid">
                      <div className="confirm-item">
                        <span className="confirm-label">Nombre</span>
                        <span className="confirm-value">{exportConfig.audienceName || 'Sin nombre'}</span>
                      </div>
                      <div className="confirm-item">
                        <span className="confirm-label">Cuenta</span>
                        <span className="confirm-value">
                          {metaAccount.adAccounts.find(a => a.id === exportConfig.adAccount)?.name}
                        </span>
                      </div>
                      <div className="confirm-item">
                        <span className="confirm-label">Usuarios</span>
                        <span className="confirm-value">{totalSize.toLocaleString()}</span>
                      </div>
                      <div className="confirm-item">
                        <span className="confirm-label">Match estimado</span>
                        <span className="confirm-value highlight">{Math.round(totalSize * 0.70).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {exportConfig.createLookalike && (
                    <div className="confirm-section">
                      <h4>Audiencia Lookalike</h4>
                      <div className="confirm-grid">
                        <div className="confirm-item">
                          <span className="confirm-label">País</span>
                          <span className="confirm-value">{exportConfig.lookalikeCountry}</span>
                        </div>
                        <div className="confirm-item">
                          <span className="confirm-label">Similitud</span>
                          <span className="confirm-value">{exportConfig.lookalikePercent}%</span>
                        </div>
                        <div className="confirm-item full">
                          <span className="confirm-label">Alcance estimado</span>
                          <span className="confirm-value highlight">150,000 - 200,000 usuarios</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="confirm-notice">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <div>
                      <strong>Datos protegidos</strong>
                      <p>Los datos se envían encriptados. Meta solo puede hacer match, no ver la información.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="modal-footer">
            {step > 1 && (
              <button className="btn-secondary" onClick={() => setStep(step - 1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Anterior
              </button>
            )}
            <div className="footer-spacer"></div>
            {step < 3 ? (
              <button 
                className="btn-primary" 
                onClick={() => setStep(step + 1)}
                disabled={step === 2 && !exportConfig.audienceName}
              >
                Siguiente
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            ) : (
              <button className="btn-primary btn-meta">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                Exportar a Meta Ads
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="meta-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-text">
          <h1>Exportar a Meta Ads</h1>
          <p>Crea audiencias personalizadas y lookalikes para tus campañas de Facebook e Instagram</p>
        </div>
        <button 
          className="btn-primary-meta"
          onClick={() => setShowExportModal(true)}
          disabled={selectedAudiences.length === 0}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          Exportar Seleccionadas ({selectedAudiences.length})
        </button>
      </header>

      {/* Meta Connection Status */}
      <div className="meta-connection">
        {metaAccount.connected ? (
          <div className="connection-card connected">
            <div className="connection-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </div>
            <div className="connection-info">
              <div className="connection-status">
                <span className="status-dot"></span>
                Conectado
              </div>
              <strong>{metaAccount.name}</strong>
              <span className="connection-meta">ID: {metaAccount.id} | Última sincronización: {metaAccount.lastSync}</span>
            </div>
            <div className="connection-account">
              <label>Cuenta publicitaria activa</label>
              <select className="account-select">
                {metaAccount.adAccounts.map(acc => (
                  <option key={acc.id} value={acc.id}>{acc.name}</option>
                ))}
              </select>
            </div>
            <div className="connection-actions">
              <button className="btn-icon" title="Sincronizar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 4 23 10 17 10" />
                  <polyline points="1 20 1 14 7 14" />
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                </svg>
              </button>
              <button className="btn-icon" title="Configuración">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="connection-card disconnected">
            <div className="connection-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </div>
            <div className="connection-info">
              <strong>Conecta tu cuenta de Meta</strong>
              <span>Vincula tu cuenta para exportar audiencias a Meta Ads</span>
            </div>
            <button className="btn-connect" onClick={() => setShowConnectModal(true)}>
              Conectar Meta Business
            </button>
          </div>
        )}
      </div>

      {/* Tabs */}
      <nav className="tabs-nav">
        <button
          className={`tab-btn ${activeTab === 'audiences' ? 'active' : ''}`}
          onClick={() => setActiveTab('audiences')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          Audiencias Disponibles
          <span className="tab-count">{audiences.filter(a => !a.exported).length}</span>
        </button>
        <button
          className={`tab-btn ${activeTab === 'meta' ? 'active' : ''}`}
          onClick={() => setActiveTab('meta')}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="meta-icon">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          Audiencias en Meta
          <span className="tab-count">{metaAudiences.length}</span>
        </button>
        <button
          className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Historial
          <span className="tab-count">{exportHistory.length}</span>
        </button>
      </nav>

      {/* Content */}
      <div className="meta-content">
        {activeTab === 'audiences' && (
          <div className="audiences-section">
            {selectedAudiences.length > 0 && (
              <div className="selection-bar">
                <span>{selectedAudiences.length} audiencia(s) seleccionada(s)</span>
                <div className="selection-actions">
                  <button className="btn-text" onClick={() => setSelectedAudiences([])}>
                    Deseleccionar todo
                  </button>
                  <button 
                    className="btn-primary-small"
                    onClick={() => setShowExportModal(true)}
                  >
                    Exportar seleccionadas
                  </button>
                </div>
              </div>
            )}

            <div className="audiences-grid">
              {audiences.map(audience => (
                <div 
                  key={audience.id} 
                  className={`audience-card ${selectedAudiences.includes(audience.id) ? 'selected' : ''} ${audience.exported ? 'exported' : ''}`}
                  onClick={() => !audience.exported && toggleAudienceSelection(audience.id)}
                >
                  <div className="audience-select">
                    {!audience.exported && (
                      <div className={`checkbox ${selectedAudiences.includes(audience.id) ? 'checked' : ''}`}>
                        {selectedAudiences.includes(audience.id) && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
                    )}
                    {audience.exported && (
                      <div className="exported-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="audience-header">
                    <h3>{audience.name}</h3>
                    <span className={`type-badge ${audience.type}`}>
                      {audience.type === 'followbacks' && 'Followbacks'}
                      {audience.type === 'engaged' && 'Engaged'}
                      {audience.type === 'lookalike_source' && 'Lookalike Source'}
                    </span>
                  </div>

                  <div className="audience-source">
                    <span className="source-label">Fuente:</span>
                    <span className="source-value">{audience.source}</span>
                  </div>

                  <div className="audience-stats">
                    <div className="stat-box">
                      <span className="stat-num">{audience.size.toLocaleString()}</span>
                      <span className="stat-label">Usuarios</span>
                    </div>
                    <div className={`stat-box quality ${getQualityColor(audience.quality)}`}>
                      <span className="stat-num">{audience.quality}%</span>
                      <span className="stat-label">Calidad</span>
                    </div>
                  </div>

                  <div className="audience-filters">
                    {audience.filters.map((filter, i) => (
                      <span key={i} className="filter-chip">{filter}</span>
                    ))}
                  </div>

                  {audience.exported && (
                    <div className="exported-info">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="meta-icon-small">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                      Exportado el {audience.exportedAt}
                    </div>
                  )}

                  <div className="audience-footer">
                    <span className="created-date">Creado: {audience.createdAt}</span>
                    {!audience.exported && (
                      <button 
                        className="btn-export-single"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedAudiences([audience.id]);
                          setShowExportModal(true);
                        }}
                      >
                        Exportar
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'meta' && (
          <div className="meta-audiences-section">
            <div className="meta-audiences-grid">
              {metaAudiences.map(audience => (
                <div key={audience.id} className={`meta-audience-card ${audience.type}`}>
                  <div className="meta-audience-header">
                    <div className="meta-audience-icon">
                      {audience.type === 'custom' ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      )}
                    </div>
                    <div className="meta-audience-info">
                      <h3>{audience.name}</h3>
                      <span className={`meta-type-badge ${audience.type}`}>
                        {audience.type === 'custom' ? 'Audiencia Personalizada' : `Lookalike ${audience.percentage}%`}
                      </span>
                    </div>
                    <span className={`meta-status ${audience.status}`}>
                      {audience.status === 'ready' && 'Lista'}
                      {audience.status === 'processing' && 'Procesando'}
                      {audience.status === 'error' && 'Error'}
                    </span>
                  </div>

                  <div className="meta-audience-stats">
                    <div className="meta-stat">
                      <span className="meta-stat-value">
                        {audience.size ? audience.size.toLocaleString() : '---'}
                      </span>
                      <span className="meta-stat-label">
                        {audience.type === 'custom' ? 'Matches' : 'Alcance'}
                      </span>
                    </div>
                    {audience.type === 'custom' && (
                      <>
                        <div className="meta-stat">
                          <span className="meta-stat-value">{audience.sourceSize?.toLocaleString() || '---'}</span>
                          <span className="meta-stat-label">Enviados</span>
                        </div>
                        <div className="meta-stat highlight">
                          <span className="meta-stat-value">{audience.matchRate ? `${audience.matchRate}%` : '---'}</span>
                          <span className="meta-stat-label">Match Rate</span>
                        </div>
                      </>
                    )}
                    {audience.type === 'lookalike' && (
                      <div className="meta-stat">
                        <span className="meta-stat-value">{audience.country}</span>
                        <span className="meta-stat-label">País</span>
                      </div>
                    )}
                    <div className="meta-stat">
                      <span className="meta-stat-value">{audience.campaigns}</span>
                      <span className="meta-stat-label">Campañas</span>
                    </div>
                  </div>

                  {audience.type === 'lookalike' && (
                    <div className="lookalike-source">
                      <span className="source-label">Basado en:</span>
                      <span className="source-name">{audience.basedOn}</span>
                    </div>
                  )}

                  <div className="meta-audience-footer">
                    <span className="meta-date">ID: {audience.id} | Creado: {audience.createdAt}</span>
                    <div className="meta-actions">
                      <button className="btn-meta-action" title="Ver en Meta">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </button>
                      {audience.type === 'custom' && audience.status === 'ready' && (
                        <button className="btn-meta-action" title="Crear Lookalike">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="history-section">
            <table className="history-table">
              <thead>
                <tr>
                  <th>Audiencia</th>
                  <th>Usuarios</th>
                  <th>Cuenta</th>
                  <th>Match Rate</th>
                  <th>Estado</th>
                  <th>Fecha</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {exportHistory.map(record => (
                  <tr key={record.id}>
                    <td>
                      <div className="history-audience">
                        <strong>{record.audienceName}</strong>
                        {record.metaAudienceId && (
                          <span className="audience-id">{record.metaAudienceId}</span>
                        )}
                      </div>
                    </td>
                    <td>{record.size.toLocaleString()}</td>
                    <td>{record.adAccount}</td>
                    <td>
                      {record.matchRate ? (
                        <span className={`match-rate ${record.matchRate >= 60 ? 'good' : 'low'}`}>
                          {record.matchRate}%
                        </span>
                      ) : (
                        <span className="match-rate pending">---</span>
                      )}
                    </td>
                    <td>
                      <span className={`history-status ${record.status}`}>
                        {record.status === 'synced' && 'Sincronizado'}
                        {record.status === 'processing' && 'Procesando'}
                        {record.status === 'failed' && 'Fallido'}
                      </span>
                    </td>
                    <td className="history-date">{record.exportedAt}</td>
                    <td>
                      <button className="btn-icon-small" title="Ver detalles">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Export Modal */}
      {showExportModal && <ExportModal />}
    </div>
  );
};

export default Meta;
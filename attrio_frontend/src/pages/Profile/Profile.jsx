import { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
  const [showDisconnectModal, setShowDisconnectModal] = useState(false);

  // Mock user data
  const [user, setUser] = useState({
    name: 'Carlos Rodríguez',
    email: 'carlos@attrio.io',
    phone: '+1 809 555 1234',
    avatar: null,
    createdAt: '2023-11-15',
    timezone: 'America/Santo_Domingo',
    language: 'es',
    notifications: {
      email: {
        campaigns: true,
        weekly: true,
        warnings: true,
        marketing: false,
      },
      push: {
        campaigns: true,
        warnings: true,
      },
    },
  });

  const [instagram, setInstagram] = useState({
    connected: true,
    username: '@attrio.growth',
    fullName: 'Attrio Growth',
    profilePic: null,
    followers: 2847,
    following: 892,
    posts: 47,
    isPrivate: false,
    isBusiness: true,
    connectedAt: '2024-01-10',
    lastSync: '2024-01-21 14:45',
    status: 'healthy',
    sessionValid: true,
  });

  const [plan, setPlan] = useState({
    name: 'Pro',
    price: 49,
    currency: 'USD',
    interval: 'month',
    status: 'active',
    currentPeriodEnd: '2024-02-15',
    features: {
      campaigns: { used: 3, limit: 10 },
      monthlyActions: { used: 4521, limit: 15000 },
      competitors: { used: 8, limit: 25 },
      exports: { used: 2, limit: 10 },
    },
    paymentMethod: {
      type: 'card',
      brand: 'visa',
      last4: '4242',
      expMonth: 12,
      expYear: 2025,
    },
  });

  const activityLog = [
    { id: 1, action: 'Campaña creada', detail: 'Fitness Enthusiasts', date: '2024-01-21 10:30', type: 'campaign' },
    { id: 2, action: 'Exportación a Meta', detail: '1,247 usuarios exportados', date: '2024-01-19 16:45', type: 'export' },
    { id: 3, action: 'Campaña pausada', detail: 'Emprendedores RD', date: '2024-01-19 11:45', type: 'campaign' },
    { id: 4, action: 'Competidor añadido', detail: '@gymshark_rd', date: '2024-01-18 09:20', type: 'competitor' },
    { id: 5, action: 'Inicio de sesión', detail: 'Chrome en Windows', date: '2024-01-18 08:15', type: 'security' },
    { id: 6, action: 'Plan actualizado', detail: 'Starter → Pro', date: '2024-01-15 14:00', type: 'billing' },
    { id: 7, action: 'Cuenta Instagram conectada', detail: '@attrio.growth', date: '2024-01-10 11:30', type: 'instagram' },
  ];

  const sessions = [
    { id: 1, device: 'Chrome en Windows', location: 'Santo Domingo, DO', ip: '192.168.1.xxx', lastActive: 'Ahora', current: true },
    { id: 2, device: 'Safari en iPhone', location: 'Santo Domingo, DO', ip: '192.168.1.xxx', lastActive: 'Hace 2 horas', current: false },
    { id: 3, device: 'Firefox en MacOS', location: 'Santiago, DO', ip: '10.0.0.xxx', lastActive: 'Hace 3 días', current: false },
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'campaign':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        );
      case 'export':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        );
      case 'competitor':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
      case 'security':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case 'billing':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
        );
      case 'instagram':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
    }
  };

  const ChangePasswordModal = () => {
    const [form, setForm] = useState({ current: '', new: '', confirm: '' });
    
    return (
      <div className="modal-overlay" onClick={() => setShowChangePasswordModal(false)}>
        <div className="modal-content modal-small" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Cambiar Contraseña</h2>
            <button className="modal-close" onClick={() => setShowChangePasswordModal(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Contraseña actual</label>
              <input
                type="password"
                className="form-input"
                value={form.current}
                onChange={e => setForm({...form, current: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Nueva contraseña</label>
              <input
                type="password"
                className="form-input"
                value={form.new}
                onChange={e => setForm({...form, new: e.target.value})}
              />
              <span className="form-hint">Mínimo 8 caracteres, una mayúscula y un número</span>
            </div>
            <div className="form-group">
              <label>Confirmar nueva contraseña</label>
              <input
                type="password"
                className="form-input"
                value={form.confirm}
                onChange={e => setForm({...form, confirm: e.target.value})}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn-secondary" onClick={() => setShowChangePasswordModal(false)}>
              Cancelar
            </button>
            <button className="btn-primary" disabled={!form.current || !form.new || form.new !== form.confirm}>
              Cambiar Contraseña
            </button>
          </div>
        </div>
      </div>
    );
  };

  const DeleteAccountModal = () => {
    const [confirmText, setConfirmText] = useState('');
    
    return (
      <div className="modal-overlay" onClick={() => setShowDeleteAccountModal(false)}>
        <div className="modal-content modal-small" onClick={e => e.stopPropagation()}>
          <div className="modal-header danger">
            <div className="modal-icon danger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <div>
              <h2>Eliminar Cuenta</h2>
              <p>Esta acción es irreversible</p>
            </div>
            <button className="modal-close" onClick={() => setShowDeleteAccountModal(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <div className="danger-notice">
              <p>Al eliminar tu cuenta:</p>
              <ul>
                <li>Se cancelarán todas las campañas activas</li>
                <li>Se eliminarán todos los datos de audiencias</li>
                <li>Se desconectará tu cuenta de Instagram</li>
                <li>Perderás acceso a las exportaciones de Meta</li>
                <li>No podrás recuperar ningún dato</li>
              </ul>
            </div>
            <div className="form-group">
              <label>Escribe "ELIMINAR" para confirmar</label>
              <input
                type="text"
                className="form-input"
                value={confirmText}
                onChange={e => setConfirmText(e.target.value)}
                placeholder="ELIMINAR"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn-secondary" onClick={() => setShowDeleteAccountModal(false)}>
              Cancelar
            </button>
            <button className="btn-danger" disabled={confirmText !== 'ELIMINAR'}>
              Eliminar Cuenta Permanentemente
            </button>
          </div>
        </div>
      </div>
    );
  };

  const DisconnectInstagramModal = () => (
    <div className="modal-overlay" onClick={() => setShowDisconnectModal(false)}>
      <div className="modal-content modal-small" onClick={e => e.stopPropagation()}>
        <div className="modal-header warning">
          <div className="modal-icon warning">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
          <div>
            <h2>Desconectar Instagram</h2>
            <p>@{instagram.username}</p>
          </div>
          <button className="modal-close" onClick={() => setShowDisconnectModal(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <div className="warning-notice">
            <p>Al desconectar tu cuenta de Instagram:</p>
            <ul>
              <li>Todas las campañas activas serán pausadas</li>
              <li>No podrás ejecutar nuevas acciones</li>
              <li>Los datos de audiencias se mantendrán</li>
              <li>Podrás reconectar en cualquier momento</li>
            </ul>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary" onClick={() => setShowDisconnectModal(false)}>
            Cancelar
          </button>
          <button className="btn-warning">
            Desconectar Instagram
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="profile-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-text">
          <h1>Mi Perfil</h1>
          <p>Administra tu cuenta y preferencias</p>
        </div>
      </header>

      {/* Profile Summary Card */}
      <div className="profile-summary">
        <div className="profile-avatar">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} />
          ) : (
            <span>{user.name.split(' ').map(n => n[0]).join('')}</span>
          )}
          <button className="avatar-edit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </button>
        </div>
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <div className="profile-badges">
            <span className={`plan-badge ${plan.name.toLowerCase()}`}>{plan.name}</span>
            <span className="member-since">Miembro desde {new Date(user.createdAt).toLocaleDateString('es-DO', { month: 'long', year: 'numeric' })}</span>
          </div>
        </div>
        <div className="profile-quick-stats">
          <div className="quick-stat">
            <span className="quick-stat-value">{plan.features.campaigns.used}</span>
            <span className="quick-stat-label">Campañas</span>
          </div>
          <div className="quick-stat">
            <span className="quick-stat-value">{plan.features.monthlyActions.used.toLocaleString()}</span>
            <span className="quick-stat-label">Acciones este mes</span>
          </div>
          <div className="quick-stat">
            <span className="quick-stat-value">{instagram.followers.toLocaleString()}</span>
            <span className="quick-stat-label">Seguidores IG</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <nav className="tabs-nav">
        <button
          className={`tab-btn ${activeTab === 'account' ? 'active' : ''}`}
          onClick={() => setActiveTab('account')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Cuenta
        </button>
        <button
          className={`tab-btn ${activeTab === 'instagram' ? 'active' : ''}`}
          onClick={() => setActiveTab('instagram')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          Instagram
        </button>
        <button
          className={`tab-btn ${activeTab === 'notifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('notifications')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          Notificaciones
        </button>
        <button
          className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
          onClick={() => setActiveTab('security')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Seguridad
        </button>
        <button
          className={`tab-btn ${activeTab === 'activity' ? 'active' : ''}`}
          onClick={() => setActiveTab('activity')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Actividad
        </button>
      </nav>

      {/* Content */}
      <div className="profile-content">
        {activeTab === 'account' && (
          <div className="tab-content">
            <div className="content-section">
              <h3>Información Personal</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Nombre completo</label>
                  <input
                    type="text"
                    className="form-input"
                    value={user.name}
                    onChange={e => setUser({...user, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Correo electrónico</label>
                  <input
                    type="email"
                    className="form-input"
                    value={user.email}
                    onChange={e => setUser({...user, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Teléfono</label>
                  <input
                    type="tel"
                    className="form-input"
                    value={user.phone}
                    onChange={e => setUser({...user, phone: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Zona horaria</label>
                  <select
                    className="form-select"
                    value={user.timezone}
                    onChange={e => setUser({...user, timezone: e.target.value})}
                  >
                    <option value="America/Santo_Domingo">Santo Domingo (GMT-4)</option>
                    <option value="America/New_York">New York (GMT-5)</option>
                    <option value="America/Los_Angeles">Los Angeles (GMT-8)</option>
                    <option value="Europe/Madrid">Madrid (GMT+1)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Idioma</label>
                  <select
                    className="form-select"
                    value={user.language}
                    onChange={e => setUser({...user, language: e.target.value})}
                  >
                    <option value="es">Español</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>
              <div className="section-actions">
                <button className="btn-primary">Guardar Cambios</button>
              </div>
            </div>

            <div className="content-section danger-zone">
              <h3>Zona de Peligro</h3>
              <div className="danger-actions">
                <div className="danger-action">
                  <div className="danger-info">
                    <strong>Cambiar contraseña</strong>
                    <span>Actualiza tu contraseña de acceso</span>
                  </div>
                  <button className="btn-outline" onClick={() => setShowChangePasswordModal(true)}>
                    Cambiar
                  </button>
                </div>
                <div className="danger-action">
                  <div className="danger-info">
                    <strong>Eliminar cuenta</strong>
                    <span>Elimina permanentemente tu cuenta y todos tus datos</span>
                  </div>
                  <button className="btn-danger-outline" onClick={() => setShowDeleteAccountModal(true)}>
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'instagram' && (
          <div className="tab-content">
            {instagram.connected ? (
              <>
                <div className="instagram-card">
                  <div className="ig-header">
                    <div className="ig-avatar">
                      {instagram.profilePic ? (
                        <img src={instagram.profilePic} alt={instagram.username} />
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      )}
                    </div>
                    <div className="ig-info">
                      <div className="ig-username">
                        <h3>{instagram.username}</h3>
                        <span className={`ig-status ${instagram.status}`}>
                          <span className="status-dot"></span>
                          {instagram.status === 'healthy' && 'Conectado'}
                          {instagram.status === 'warning' && 'Advertencia'}
                          {instagram.status === 'error' && 'Error'}
                        </span>
                      </div>
                      <p>{instagram.fullName}</p>
                      <div className="ig-badges">
                        {instagram.isBusiness && <span className="ig-badge business">Cuenta Business</span>}
                        {!instagram.isPrivate && <span className="ig-badge public">Pública</span>}
                      </div>
                    </div>
                    <div className="ig-actions">
                      <button className="btn-icon" title="Sincronizar">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="23 4 23 10 17 10" />
                          <polyline points="1 20 1 14 7 14" />
                          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="ig-stats">
                    <div className="ig-stat">
                      <span className="ig-stat-value">{instagram.followers.toLocaleString()}</span>
                      <span className="ig-stat-label">Seguidores</span>
                    </div>
                    <div className="ig-stat">
                      <span className="ig-stat-value">{instagram.following.toLocaleString()}</span>
                      <span className="ig-stat-label">Siguiendo</span>
                    </div>
                    <div className="ig-stat">
                      <span className="ig-stat-value">{instagram.posts}</span>
                      <span className="ig-stat-label">Posts</span>
                    </div>
                  </div>

                  <div className="ig-details">
                    <div className="ig-detail">
                      <span className="detail-label">Conectado desde</span>
                      <span className="detail-value">{instagram.connectedAt}</span>
                    </div>
                    <div className="ig-detail">
                      <span className="detail-label">Última sincronización</span>
                      <span className="detail-value">{instagram.lastSync}</span>
                    </div>
                    <div className="ig-detail">
                      <span className="detail-label">Estado de sesión</span>
                      <span className={`detail-value ${instagram.sessionValid ? 'valid' : 'invalid'}`}>
                        {instagram.sessionValid ? 'Válida' : 'Expirada'}
                      </span>
                    </div>
                  </div>

                  <div className="ig-footer">
                    <button className="btn-danger-outline" onClick={() => setShowDisconnectModal(true)}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                        <line x1="12" y1="2" x2="12" y2="12" />
                      </svg>
                      Desconectar Instagram
                    </button>
                  </div>
                </div>

                <div className="content-section">
                  <h3>Configuración de Automatización</h3>
                  <div className="config-list">
                    <div className="config-item">
                      <div className="config-info">
                        <strong>Límite diario de acciones</strong>
                        <span>Máximo de acciones que Attrio realizará por día</span>
                      </div>
                      <select className="form-select small">
                        <option value="50">50 acciones</option>
                        <option value="100">100 acciones</option>
                        <option value="150" selected>150 acciones</option>
                        <option value="200">200 acciones</option>
                      </select>
                    </div>
                    <div className="config-item">
                      <div className="config-info">
                        <strong>Pausar en advertencias</strong>
                        <span>Pausar automáticamente si Instagram muestra advertencias</span>
                      </div>
                      <button className="toggle-btn on">
                        <span className="toggle-slider"></span>
                      </button>
                    </div>
                    <div className="config-item">
                      <div className="config-info">
                        <strong>Modo seguro</strong>
                        <span>Reducir velocidad automáticamente si se detecta actividad sospechosa</span>
                      </div>
                      <button className="toggle-btn on">
                        <span className="toggle-slider"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="instagram-connect">
                <div className="connect-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <h3>Conecta tu cuenta de Instagram</h3>
                <p>Vincula tu cuenta para comenzar a automatizar tu crecimiento</p>
                <button className="btn-instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Conectar Instagram
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="tab-content">
            <div className="content-section">
              <h3>Notificaciones por Email</h3>
              <div className="notification-list">
                <div className="notification-item">
                  <div className="notification-info">
                    <strong>Actualizaciones de campañas</strong>
                    <span>Recibe alertas cuando una campaña se complete o pause</span>
                  </div>
                  <button 
                    className={`toggle-btn ${user.notifications.email.campaigns ? 'on' : ''}`}
                    onClick={() => setUser({
                      ...user,
                      notifications: {
                        ...user.notifications,
                        email: {...user.notifications.email, campaigns: !user.notifications.email.campaigns}
                      }
                    })}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
                <div className="notification-item">
                  <div className="notification-info">
                    <strong>Resumen semanal</strong>
                    <span>Estadísticas y resumen de actividad cada semana</span>
                  </div>
                  <button 
                    className={`toggle-btn ${user.notifications.email.weekly ? 'on' : ''}`}
                    onClick={() => setUser({
                      ...user,
                      notifications: {
                        ...user.notifications,
                        email: {...user.notifications.email, weekly: !user.notifications.email.weekly}
                      }
                    })}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
                <div className="notification-item">
                  <div className="notification-info">
                    <strong>Advertencias de seguridad</strong>
                    <span>Alertas si detectamos problemas con tu cuenta</span>
                  </div>
                  <button 
                    className={`toggle-btn ${user.notifications.email.warnings ? 'on' : ''}`}
                    onClick={() => setUser({
                      ...user,
                      notifications: {
                        ...user.notifications,
                        email: {...user.notifications.email, warnings: !user.notifications.email.warnings}
                      }
                    })}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
                <div className="notification-item">
                  <div className="notification-info">
                    <strong>Noticias y actualizaciones</strong>
                    <span>Nuevas funciones y ofertas de Attrio</span>
                  </div>
                  <button 
                    className={`toggle-btn ${user.notifications.email.marketing ? 'on' : ''}`}
                    onClick={() => setUser({
                      ...user,
                      notifications: {
                        ...user.notifications,
                        email: {...user.notifications.email, marketing: !user.notifications.email.marketing}
                      }
                    })}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h3>Notificaciones Push</h3>
              <div className="notification-list">
                <div className="notification-item">
                  <div className="notification-info">
                    <strong>Alertas de campañas</strong>
                    <span>Notificaciones instantáneas sobre tus campañas</span>
                  </div>
                  <button 
                    className={`toggle-btn ${user.notifications.push.campaigns ? 'on' : ''}`}
                    onClick={() => setUser({
                      ...user,
                      notifications: {
                        ...user.notifications,
                        push: {...user.notifications.push, campaigns: !user.notifications.push.campaigns}
                      }
                    })}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
                <div className="notification-item">
                  <div className="notification-info">
                    <strong>Advertencias urgentes</strong>
                    <span>Alertas críticas que requieren atención inmediata</span>
                  </div>
                  <button 
                    className={`toggle-btn ${user.notifications.push.warnings ? 'on' : ''}`}
                    onClick={() => setUser({
                      ...user,
                      notifications: {
                        ...user.notifications,
                        push: {...user.notifications.push, warnings: !user.notifications.push.warnings}
                      }
                    })}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="tab-content">
            <div className="content-section">
              <h3>Sesiones Activas</h3>
              <div className="sessions-list">
                {sessions.map(session => (
                  <div key={session.id} className={`session-item ${session.current ? 'current' : ''}`}>
                    <div className="session-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {session.device.includes('iPhone') || session.device.includes('Android') ? (
                          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                        ) : (
                          <>
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                          </>
                        )}
                      </svg>
                    </div>
                    <div className="session-info">
                      <strong>
                        {session.device}
                        {session.current && <span className="current-badge">Esta sesión</span>}
                      </strong>
                      <span>{session.location} · {session.ip}</span>
                      <span className="session-time">{session.lastActive}</span>
                    </div>
                    {!session.current && (
                      <button className="btn-text-danger">Cerrar sesión</button>
                    )}
                  </div>
                ))}
              </div>
              <div className="section-actions">
                <button className="btn-outline-danger">
                  Cerrar todas las otras sesiones
                </button>
              </div>
            </div>

            <div className="content-section">
              <h3>Autenticación de dos factores</h3>
              <div className="two-factor-card">
                <div className="two-factor-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div className="two-factor-info">
                  <strong>Protege tu cuenta</strong>
                  <p>Añade una capa extra de seguridad requiriendo un código además de tu contraseña</p>
                </div>
                <button className="btn-primary">Activar 2FA</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="tab-content">
            <div className="content-section">
              <h3>Registro de Actividad</h3>
              <div className="activity-list">
                {activityLog.map(item => (
                  <div key={item.id} className={`activity-item type-${item.type}`}>
                    <div className="activity-icon">
                      {getActivityIcon(item.type)}
                    </div>
                    <div className="activity-info">
                      <strong>{item.action}</strong>
                      <span>{item.detail}</span>
                    </div>
                    <span className="activity-date">{item.date}</span>
                  </div>
                ))}
              </div>
              <div className="section-actions center">
                <button className="btn-outline">Cargar más</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {showChangePasswordModal && <ChangePasswordModal />}
      {showDeleteAccountModal && <DeleteAccountModal />}
      {showDisconnectModal && <DisconnectInstagramModal />}
    </div>
  );
};

export default Profile;
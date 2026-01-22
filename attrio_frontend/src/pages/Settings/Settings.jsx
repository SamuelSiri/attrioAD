import { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    // General
    language: 'es',
    timezone: 'America/Santo_Domingo',
    darkMode: false,
    
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    campaignAlerts: true,
    weeklyReports: true,
    warningAlerts: true,
    
    // Speed & Limits
    defaultSpeed: 'seguro',
    dailyFollowLimit: 50,
    dailyLikeLimit: 100,
    dailyStoryLimit: 30,
    pauseOnWarning: true,
    
    // Schedule
    defaultStartHour: '08:00',
    defaultEndHour: '22:00',
    activeDays: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
    respectUserTimezone: true,
    
    // Instagram Account
    instagramConnected: true,
    instagramUsername: '@samuelgym',
    autoReconnect: true,
    
    // Privacy & Security
    twoFactorEnabled: false,
    sessionTimeout: 30,
    activityLog: true,
  });

  const [activeSection, setActiveSection] = useState('general');
  const [hasChanges, setHasChanges] = useState(false);

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const toggleDay = (day) => {
    setSettings(prev => ({
      ...prev,
      activeDays: prev.activeDays.includes(day)
        ? prev.activeDays.filter(d => d !== day)
        : [...prev.activeDays, day]
    }));
    setHasChanges(true);
  };

  const handleSave = () => {
    console.log('Saving settings:', settings);
    setHasChanges(false);
    // TODO: API call to save settings
  };

  const sections = [
    { id: 'general', label: 'General', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    )},
    { id: 'notifications', label: 'Notificaciones', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    )},
    { id: 'speed', label: 'Velocidad y Límites', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    )},
    { id: 'schedule', label: 'Horarios', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )},
    { id: 'instagram', label: 'Cuenta Instagram', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1.5" fill="currentColor" />
      </svg>
    )},
    { id: 'security', label: 'Privacidad y Seguridad', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )},
  ];

  const speedOptions = [
    { id: 'ultra-seguro', label: 'Ultra Seguro', description: '20-30 follows/día', risk: 'Muy bajo' },
    { id: 'seguro', label: 'Seguro', description: '40-60 follows/día', risk: 'Bajo', recommended: true },
    { id: 'normal', label: 'Normal', description: '60-80 follows/día', risk: 'Medio' },
    { id: 'agresivo', label: 'Agresivo', description: '80-100 follows/día', risk: 'Alto' },
  ];

  return (
    <div className="settings-page">
      {/* Header */}
      <header className="settings-header">
        <div className="header-text">
          <h1>Configuración</h1>
          <p>Personaliza tu experiencia en Attrio</p>
        </div>
        {hasChanges && (
          <button className="btn-save" onClick={handleSave}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
            Guardar Cambios
          </button>
        )}
      </header>

      <div className="settings-layout">
        {/* Sidebar Navigation */}
        <nav className="settings-nav">
          {sections.map(section => (
            <button
              key={section.id}
              className={`settings-nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="nav-icon">{section.icon}</span>
              <span className="nav-label">{section.label}</span>
            </button>
          ))}
        </nav>

        {/* Content */}
        <div className="settings-content">
          {/* General */}
          {activeSection === 'general' && (
            <section className="settings-section">
              <div className="section-header">
                <h2>General</h2>
                <p>Configuración básica de la aplicación</p>
              </div>

              <div className="settings-group">
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Idioma</h4>
                    <p>Selecciona el idioma de la interfaz</p>
                  </div>
                  <select 
                    className="setting-select"
                    value={settings.language}
                    onChange={(e) => updateSetting('language', e.target.value)}
                  >
                    <option value="es">Español</option>
                    <option value="en">English</option>
                  </select>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Zona horaria</h4>
                    <p>Usado para programar campañas</p>
                  </div>
                  <select 
                    className="setting-select"
                    value={settings.timezone}
                    onChange={(e) => updateSetting('timezone', e.target.value)}
                  >
                    <option value="America/Santo_Domingo">Santo Domingo (GMT-4)</option>
                    <option value="America/New_York">New York (GMT-5)</option>
                    <option value="America/Los_Angeles">Los Angeles (GMT-8)</option>
                    <option value="Europe/Madrid">Madrid (GMT+1)</option>
                  </select>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Modo oscuro</h4>
                    <p>Cambia la apariencia de la interfaz</p>
                  </div>
                  <button 
                    className={`toggle-switch ${settings.darkMode ? 'on' : ''}`}
                    onClick={() => updateSetting('darkMode', !settings.darkMode)}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Notifications */}
          {activeSection === 'notifications' && (
            <section className="settings-section">
              <div className="section-header">
                <h2>Notificaciones</h2>
                <p>Controla cómo y cuándo recibes alertas</p>
              </div>

              <div className="settings-group">
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Notificaciones por email</h4>
                    <p>Recibe actualizaciones importantes por correo</p>
                  </div>
                  <button 
                    className={`toggle-switch ${settings.emailNotifications ? 'on' : ''}`}
                    onClick={() => updateSetting('emailNotifications', !settings.emailNotifications)}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Notificaciones push</h4>
                    <p>Alertas en tiempo real en tu navegador</p>
                  </div>
                  <button 
                    className={`toggle-switch ${settings.pushNotifications ? 'on' : ''}`}
                    onClick={() => updateSetting('pushNotifications', !settings.pushNotifications)}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Alertas de campañas</h4>
                    <p>Cuando una campaña se completa o pausa</p>
                  </div>
                  <button 
                    className={`toggle-switch ${settings.campaignAlerts ? 'on' : ''}`}
                    onClick={() => updateSetting('campaignAlerts', !settings.campaignAlerts)}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Reportes semanales</h4>
                    <p>Resumen semanal de tu crecimiento</p>
                  </div>
                  <button 
                    className={`toggle-switch ${settings.weeklyReports ? 'on' : ''}`}
                    onClick={() => updateSetting('weeklyReports', !settings.weeklyReports)}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Alertas de advertencia</h4>
                    <p>Cuando Instagram muestra señales de riesgo</p>
                  </div>
                  <button 
                    className={`toggle-switch ${settings.warningAlerts ? 'on' : ''}`}
                    onClick={() => updateSetting('warningAlerts', !settings.warningAlerts)}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Speed & Limits */}
          {activeSection === 'speed' && (
            <section className="settings-section">
              <div className="section-header">
                <h2>Velocidad y Límites</h2>
                <p>Configura los límites de acciones diarias</p>
              </div>

              <div className="settings-group">
                <div className="setting-item vertical">
                  <div className="setting-info">
                    <h4>Velocidad por defecto</h4>
                    <p>Aplica a todas las nuevas campañas</p>
                  </div>
                  <div className="speed-options">
                    {speedOptions.map(option => (
                      <div
                        key={option.id}
                        className={`speed-option ${settings.defaultSpeed === option.id ? 'selected' : ''}`}
                        onClick={() => updateSetting('defaultSpeed', option.id)}
                      >
                        {option.recommended && <span className="recommended-tag">Recomendado</span>}
                        <div className="speed-option-header">
                          <div className={`radio ${settings.defaultSpeed === option.id ? 'checked' : ''}`}></div>
                          <strong>{option.label}</strong>
                        </div>
                        <div className="speed-option-details">
                          <span>{option.description}</span>
                          <span className={`risk-badge risk-${option.id}`}>Riesgo: {option.risk}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="settings-group">
                <h3 className="group-title">Límites diarios</h3>
                
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Límite de follows</h4>
                    <p>Máximo de follows por día</p>
                  </div>
                  <div className="setting-input-group">
                    <input
                      type="number"
                      className="setting-input"
                      value={settings.dailyFollowLimit}
                      onChange={(e) => updateSetting('dailyFollowLimit', parseInt(e.target.value) || 0)}
                      min="10"
                      max="150"
                    />
                    <span className="input-suffix">/ día</span>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Límite de likes</h4>
                    <p>Máximo de likes por día</p>
                  </div>
                  <div className="setting-input-group">
                    <input
                      type="number"
                      className="setting-input"
                      value={settings.dailyLikeLimit}
                      onChange={(e) => updateSetting('dailyLikeLimit', parseInt(e.target.value) || 0)}
                      min="20"
                      max="300"
                    />
                    <span className="input-suffix">/ día</span>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Límite de stories</h4>
                    <p>Máximo de stories vistas por día</p>
                  </div>
                  <div className="setting-input-group">
                    <input
                      type="number"
                      className="setting-input"
                      value={settings.dailyStoryLimit}
                      onChange={(e) => updateSetting('dailyStoryLimit', parseInt(e.target.value) || 0)}
                      min="10"
                      max="100"
                    />
                    <span className="input-suffix">/ día</span>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Pausar en advertencia</h4>
                    <p>Pausar automáticamente si Instagram muestra advertencias</p>
                  </div>
                  <button 
                    className={`toggle-switch ${settings.pauseOnWarning ? 'on' : ''}`}
                    onClick={() => updateSetting('pauseOnWarning', !settings.pauseOnWarning)}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Schedule */}
          {activeSection === 'schedule' && (
            <section className="settings-section">
              <div className="section-header">
                <h2>Horarios</h2>
                <p>Define los horarios por defecto para nuevas campañas</p>
              </div>

              <div className="settings-group">
                <div className="setting-item vertical">
                  <div className="setting-info">
                    <h4>Días activos por defecto</h4>
                    <p>Selecciona los días en que las campañas estarán activas</p>
                  </div>
                  <div className="days-selector">
                    {[
                      { short: 'L', full: 'Lun' },
                      { short: 'M', full: 'Mar' },
                      { short: 'X', full: 'Mié' },
                      { short: 'J', full: 'Jue' },
                      { short: 'V', full: 'Vie' },
                      { short: 'S', full: 'Sáb' },
                      { short: 'D', full: 'Dom' },
                    ].map((day) => (
                      <button
                        key={day.full}
                        className={`day-btn ${settings.activeDays.includes(day.full) ? 'selected' : ''}`}
                        onClick={() => toggleDay(day.full)}
                      >
                        <span className="day-short">{day.short}</span>
                        <span className="day-full">{day.full}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Hora de inicio</h4>
                    <p>Hora en que comienzan las acciones</p>
                  </div>
                  <input
                    type="time"
                    className="setting-input time"
                    value={settings.defaultStartHour}
                    onChange={(e) => updateSetting('defaultStartHour', e.target.value)}
                  />
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Hora de fin</h4>
                    <p>Hora en que terminan las acciones</p>
                  </div>
                  <input
                    type="time"
                    className="setting-input time"
                    value={settings.defaultEndHour}
                    onChange={(e) => updateSetting('defaultEndHour', e.target.value)}
                  />
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Respetar zona horaria del usuario</h4>
                    <p>Ajustar horarios según la zona horaria de cada usuario</p>
                  </div>
                  <button 
                    className={`toggle-switch ${settings.respectUserTimezone ? 'on' : ''}`}
                    onClick={() => updateSetting('respectUserTimezone', !settings.respectUserTimezone)}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Instagram */}
          {activeSection === 'instagram' && (
            <section className="settings-section">
              <div className="section-header">
                <h2>Cuenta Instagram</h2>
                <p>Gestiona tu conexión con Instagram</p>
              </div>

              <div className="settings-group">
                <div className="instagram-status-card">
                  <div className="status-icon connected">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className="status-info">
                    <h4>Cuenta conectada</h4>
                    <p>{settings.instagramUsername}</p>
                  </div>
                  <button className="btn-disconnect">
                    Desconectar
                  </button>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Auto-reconectar</h4>
                    <p>Intentar reconectar automáticamente si se pierde la conexión</p>
                  </div>
                  <button 
                    className={`toggle-switch ${settings.autoReconnect ? 'on' : ''}`}
                    onClick={() => updateSetting('autoReconnect', !settings.autoReconnect)}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
              </div>

              <div className="settings-group">
                <h3 className="group-title">Información de la cuenta</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Usuario</span>
                    <span className="info-value">{settings.instagramUsername}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Estado</span>
                    <span className="info-value status-connected">Conectado</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Última sincronización</span>
                    <span className="info-value">Hace 5 minutos</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Sesión activa desde</span>
                    <span className="info-value">15 Ene, 2024</span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Security */}
          {activeSection === 'security' && (
            <section className="settings-section">
              <div className="section-header">
                <h2>Privacidad y Seguridad</h2>
                <p>Protege tu cuenta y datos</p>
              </div>

              <div className="settings-group">
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Autenticación de dos factores</h4>
                    <p>Añade una capa extra de seguridad a tu cuenta</p>
                  </div>
                  <button 
                    className={`toggle-switch ${settings.twoFactorEnabled ? 'on' : ''}`}
                    onClick={() => updateSetting('twoFactorEnabled', !settings.twoFactorEnabled)}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Tiempo de sesión</h4>
                    <p>Cerrar sesión automáticamente después de inactividad</p>
                  </div>
                  <select 
                    className="setting-select"
                    value={settings.sessionTimeout}
                    onChange={(e) => updateSetting('sessionTimeout', parseInt(e.target.value))}
                  >
                    <option value={15}>15 minutos</option>
                    <option value={30}>30 minutos</option>
                    <option value={60}>1 hora</option>
                    <option value={120}>2 horas</option>
                    <option value={0}>Nunca</option>
                  </select>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Registro de actividad</h4>
                    <p>Guardar historial de acciones realizadas</p>
                  </div>
                  <button 
                    className={`toggle-switch ${settings.activityLog ? 'on' : ''}`}
                    onClick={() => updateSetting('activityLog', !settings.activityLog)}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
              </div>

              <div className="settings-group">
                <h3 className="group-title">Acciones de cuenta</h3>
                <div className="danger-zone">
                  <div className="danger-item">
                    <div className="danger-info">
                      <h4>Exportar mis datos</h4>
                      <p>Descarga una copia de todos tus datos</p>
                    </div>
                    <button className="btn-secondary">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Exportar
                    </button>
                  </div>
                  <div className="danger-item">
                    <div className="danger-info">
                      <h4>Eliminar cuenta</h4>
                      <p>Elimina permanentemente tu cuenta y todos los datos</p>
                    </div>
                    <button className="btn-danger">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
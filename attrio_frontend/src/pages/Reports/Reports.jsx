import { useState } from 'react';
import './Reports.css';

const Reports = () => {
  const [activeTab, setActiveTab] = useState('generated');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedReports, setSelectedReports] = useState([]);

  const tabs = [
    { id: 'generated', label: 'Generados', count: 12 },
    { id: 'scheduled', label: 'Programados', count: 3 },
    { id: 'templates', label: 'Plantillas', count: 5 },
  ];

  const reportTypes = [
    {
      id: 'weekly',
      name: 'Reporte Semanal',
      description: 'Resumen de actividad de los últimos 7 días',
      icon: 'calendar',
      metrics: ['Follows', 'Followbacks', 'Tasa conversión', 'Crecimiento'],
    },
    {
      id: 'monthly',
      name: 'Reporte Mensual',
      description: 'Análisis completo del mes con tendencias',
      icon: 'trending',
      metrics: ['Todos los datos', 'Gráficos', 'Comparativas', 'Predicciones'],
    },
    {
      id: 'campaign',
      name: 'Reporte de Campaña',
      description: 'Resultados detallados de una campaña específica',
      icon: 'zap',
      metrics: ['Rendimiento', 'Audiencia alcanzada', 'ROI', 'Fuentes'],
    },
    {
      id: 'audience',
      name: 'Export de Audiencia',
      description: 'Lista de usuarios con todos sus datos',
      icon: 'users',
      metrics: ['Usernames', 'Emails', 'Seguidores', 'Score'],
    },
    {
      id: 'competitors',
      name: 'Análisis de Competencia',
      description: 'Comparativa detallada con competidores',
      icon: 'target',
      metrics: ['Crecimiento', 'Engagement', 'Contenido', 'Hashtags'],
    },
    {
      id: 'custom',
      name: 'Reporte Personalizado',
      description: 'Selecciona las métricas que necesitas',
      icon: 'settings',
      metrics: ['Configurable'],
    },
  ];

  const generatedReports = [
    {
      id: 1,
      name: 'Reporte Semanal - Ene 15-21',
      type: 'weekly',
      format: 'pdf',
      size: '2.4 MB',
      createdAt: '2024-01-21 09:00',
      status: 'ready',
      campaigns: ['Madres Santo Domingo', 'Fitness Enthusiasts'],
      metrics: {
        follows: 342,
        followbacks: 128,
        rate: '37%',
        growth: '+12%',
      },
    },
    {
      id: 2,
      name: 'Export Audiencia - Followbacks',
      type: 'audience',
      format: 'csv',
      size: '856 KB',
      createdAt: '2024-01-20 15:30',
      status: 'ready',
      records: 687,
      metrics: {
        users: 687,
        withEmail: 234,
        avgScore: 82,
      },
    },
    {
      id: 3,
      name: 'Campaña Navidad 2023 - Final',
      type: 'campaign',
      format: 'pdf',
      size: '3.1 MB',
      createdAt: '2024-01-15 11:20',
      status: 'ready',
      campaign: 'Campaña Navidad 2023',
      metrics: {
        follows: 500,
        followbacks: 187,
        rate: '37%',
        duration: '24 días',
      },
    },
    {
      id: 4,
      name: 'Reporte Mensual - Diciembre 2023',
      type: 'monthly',
      format: 'pdf',
      size: '4.8 MB',
      createdAt: '2024-01-02 08:00',
      status: 'ready',
      metrics: {
        follows: 1250,
        followbacks: 462,
        rate: '37%',
        growth: '+28%',
      },
    },
    {
      id: 5,
      name: 'Análisis Competencia Q4',
      type: 'competitors',
      format: 'xlsx',
      size: '1.2 MB',
      createdAt: '2024-01-10 14:00',
      status: 'ready',
      competitors: 5,
      metrics: {
        avgGrowth: '+15%',
        topCompetitor: '@gymshark_rd',
        insights: 12,
      },
    },
    {
      id: 6,
      name: 'Export Meta Ads - Enero',
      type: 'audience',
      format: 'csv',
      size: '1.1 MB',
      createdAt: '2024-01-18 10:15',
      status: 'ready',
      records: 1247,
      metrics: {
        users: 1247,
        withEmail: 423,
        avgScore: 78,
      },
    },
  ];

  const scheduledReports = [
    {
      id: 101,
      name: 'Reporte Semanal Automático',
      type: 'weekly',
      format: 'pdf',
      frequency: 'Cada lunes a las 9:00',
      nextRun: '2024-01-29 09:00',
      recipients: ['samuel@attrio.com'],
      status: 'active',
    },
    {
      id: 102,
      name: 'Reporte Mensual',
      type: 'monthly',
      format: 'pdf',
      frequency: 'Día 1 de cada mes',
      nextRun: '2024-02-01 08:00',
      recipients: ['samuel@attrio.com', 'equipo@attrio.com'],
      status: 'active',
    },
    {
      id: 103,
      name: 'Export Semanal Followbacks',
      type: 'audience',
      format: 'csv',
      frequency: 'Cada viernes a las 18:00',
      nextRun: '2024-01-26 18:00',
      recipients: ['samuel@attrio.com'],
      status: 'paused',
    },
  ];

  const templates = [
    {
      id: 201,
      name: 'Reporte para Clientes',
      description: 'Formato profesional con logo personalizado',
      type: 'custom',
      format: 'pdf',
      sections: ['Resumen ejecutivo', 'Métricas clave', 'Gráficos', 'Recomendaciones'],
      lastUsed: '2024-01-15',
      usageCount: 8,
    },
    {
      id: 202,
      name: 'Export Meta Ads',
      description: 'Formato optimizado para Custom Audiences',
      type: 'audience',
      format: 'csv',
      fields: ['username', 'email', 'phone', 'followers'],
      lastUsed: '2024-01-18',
      usageCount: 12,
    },
    {
      id: 203,
      name: 'Análisis Rápido',
      description: 'Solo métricas esenciales en una página',
      type: 'weekly',
      format: 'pdf',
      sections: ['KPIs', 'Top 5 fuentes', 'Próximos pasos'],
      lastUsed: '2024-01-20',
      usageCount: 5,
    },
  ];

  const getTypeIcon = (type) => {
    const icons = {
      weekly: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      monthly: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      campaign: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      audience: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      competitors: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      custom: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    };
    return icons[type] || icons.custom;
  };

  const getFormatBadge = (format) => {
    const formats = {
      pdf: { label: 'PDF', class: 'format-pdf' },
      csv: { label: 'CSV', class: 'format-csv' },
      xlsx: { label: 'Excel', class: 'format-xlsx' },
    };
    return formats[format] || formats.pdf;
  };

  const toggleSelectReport = (reportId) => {
    setSelectedReports(prev =>
      prev.includes(reportId)
        ? prev.filter(id => id !== reportId)
        : [...prev, reportId]
    );
  };

  const CreateReportModal = () => {
    const [step, setStep] = useState(1);
    const [selectedType, setSelectedType] = useState(null);
    const [config, setConfig] = useState({
      name: '',
      format: 'pdf',
      dateRange: 'last7days',
      campaigns: [],
      includeGraphs: true,
      includePredictions: false,
      schedule: false,
      frequency: 'weekly',
      recipients: '',
    });

    return (
      <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
        <div className="modal-content modal-large" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Generar Nuevo Reporte</h2>
            <button className="modal-close" onClick={() => setShowCreateModal(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="modal-steps">
            {[
              { num: 1, label: 'Tipo' },
              { num: 2, label: 'Configuración' },
              { num: 3, label: 'Programar' },
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
              <div className="form-step">
                <div className="form-header">
                  <label>Selecciona el tipo de reporte</label>
                  <p className="form-description">
                    Cada tipo incluye diferentes métricas y formatos optimizados.
                  </p>
                </div>

                <div className="report-types-grid">
                  {reportTypes.map((type) => (
                    <div
                      key={type.id}
                      className={`report-type-card ${selectedType === type.id ? 'selected' : ''}`}
                      onClick={() => setSelectedType(type.id)}
                    >
                      <div className="type-icon">
                        {getTypeIcon(type.id)}
                      </div>
                      <div className="type-content">
                        <h4>{type.name}</h4>
                        <p>{type.description}</p>
                        <div className="type-metrics">
                          {type.metrics.map((m, i) => (
                            <span key={i} className="metric-tag">{m}</span>
                          ))}
                        </div>
                      </div>
                      {selectedType === type.id && (
                        <div className="type-check">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <div className="form-header">
                  <label>Configuración del reporte</label>
                  <p className="form-description">
                    Personaliza el contenido y formato de tu reporte.
                  </p>
                </div>

                <div className="config-grid">
                  <div className="form-group">
                    <label>Nombre del reporte</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Ej: Reporte Semanal - Enero"
                      value={config.name}
                      onChange={(e) => setConfig({ ...config, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Formato de salida</label>
                    <div className="format-options">
                      {['pdf', 'csv', 'xlsx'].map((format) => (
                        <button
                          key={format}
                          className={`format-btn ${config.format === format ? 'selected' : ''}`}
                          onClick={() => setConfig({ ...config, format })}
                        >
                          <span className={`format-icon ${format}`}>{format.toUpperCase()}</span>
                          {format === 'pdf' && 'Documento'}
                          {format === 'csv' && 'Datos'}
                          {format === 'xlsx' && 'Excel'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Período de datos</label>
                    <select
                      className="form-select"
                      value={config.dateRange}
                      onChange={(e) => setConfig({ ...config, dateRange: e.target.value })}
                    >
                      <option value="last7days">Últimos 7 días</option>
                      <option value="last30days">Últimos 30 días</option>
                      <option value="lastMonth">Mes anterior</option>
                      <option value="last3months">Últimos 3 meses</option>
                      <option value="custom">Personalizado</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Campañas a incluir</label>
                    <select className="form-select">
                      <option value="all">Todas las campañas</option>
                      <option value="active">Solo activas</option>
                      <option value="select">Seleccionar específicas</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label>Opciones adicionales</label>
                    <div className="checkbox-group">
                      <label className="checkbox-item">
                        <input
                          type="checkbox"
                          checked={config.includeGraphs}
                          onChange={(e) => setConfig({ ...config, includeGraphs: e.target.checked })}
                        />
                        <span className="checkmark"></span>
                        Incluir gráficos y visualizaciones
                      </label>
                      <label className="checkbox-item">
                        <input
                          type="checkbox"
                          checked={config.includePredictions}
                          onChange={(e) => setConfig({ ...config, includePredictions: e.target.checked })}
                        />
                        <span className="checkmark"></span>
                        Incluir predicciones y recomendaciones
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <div className="form-header">
                  <label>Programación y entrega</label>
                  <p className="form-description">
                    Genera ahora o programa para generación automática.
                  </p>
                </div>

                <div className="schedule-options">
                  <div
                    className={`schedule-option ${!config.schedule ? 'selected' : ''}`}
                    onClick={() => setConfig({ ...config, schedule: false })}
                  >
                    <div className="option-radio">
                      <div className={`radio ${!config.schedule ? 'checked' : ''}`}></div>
                    </div>
                    <div className="option-content">
                      <h4>Generar ahora</h4>
                      <p>El reporte se generará inmediatamente y estará disponible para descargar.</p>
                    </div>
                  </div>

                  <div
                    className={`schedule-option ${config.schedule ? 'selected' : ''}`}
                    onClick={() => setConfig({ ...config, schedule: true })}
                  >
                    <div className="option-radio">
                      <div className={`radio ${config.schedule ? 'checked' : ''}`}></div>
                    </div>
                    <div className="option-content">
                      <h4>Programar generación</h4>
                      <p>El reporte se generará automáticamente según la frecuencia seleccionada.</p>
                    </div>
                  </div>
                </div>

                {config.schedule && (
                  <div className="schedule-config">
                    <div className="form-group">
                      <label>Frecuencia</label>
                      <select
                        className="form-select"
                        value={config.frequency}
                        onChange={(e) => setConfig({ ...config, frequency: e.target.value })}
                      >
                        <option value="daily">Diario</option>
                        <option value="weekly">Semanal (Lunes)</option>
                        <option value="biweekly">Quincenal</option>
                        <option value="monthly">Mensual (Día 1)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Enviar por email a</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="email@ejemplo.com, otro@ejemplo.com"
                        value={config.recipients}
                        onChange={(e) => setConfig({ ...config, recipients: e.target.value })}
                      />
                      <span className="form-hint">Separa múltiples emails con comas</span>
                    </div>
                  </div>
                )}

                <div className="report-preview">
                  <h4>Resumen del reporte</h4>
                  <div className="preview-grid">
                    <div className="preview-item">
                      <span className="preview-label">Tipo</span>
                      <span className="preview-value">{reportTypes.find(t => t.id === selectedType)?.name || 'No seleccionado'}</span>
                    </div>
                    <div className="preview-item">
                      <span className="preview-label">Nombre</span>
                      <span className="preview-value">{config.name || 'Sin nombre'}</span>
                    </div>
                    <div className="preview-item">
                      <span className="preview-label">Formato</span>
                      <span className="preview-value">{config.format.toUpperCase()}</span>
                    </div>
                    <div className="preview-item">
                      <span className="preview-label">Período</span>
                      <span className="preview-value">
                        {config.dateRange === 'last7days' && 'Últimos 7 días'}
                        {config.dateRange === 'last30days' && 'Últimos 30 días'}
                        {config.dateRange === 'lastMonth' && 'Mes anterior'}
                        {config.dateRange === 'last3months' && 'Últimos 3 meses'}
                      </span>
                    </div>
                    <div className="preview-item">
                      <span className="preview-label">Generación</span>
                      <span className="preview-value">{config.schedule ? 'Programada' : 'Inmediata'}</span>
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
                disabled={step === 1 && !selectedType}
              >
                Siguiente
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            ) : (
              <button className="btn-primary btn-generate">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="18" x2="12" y2="12" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
                {config.schedule ? 'Programar Reporte' : 'Generar Reporte'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="reports-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-text">
          <h1>Reportes</h1>
          <p>Genera, programa y exporta reportes de tu actividad</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Historial
          </button>
          <button className="btn-primary" onClick={() => setShowCreateModal(true)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
            Nuevo Reporte
          </button>
        </div>
      </header>

      {/* Quick Stats */}
      <div className="quick-stats">
        <div className="stat-card">
          <div className="stat-icon blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-num">12</span>
            <span className="stat-label">Reportes generados</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-num">3</span>
            <span className="stat-label">Programados</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon purple">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-num">28</span>
            <span className="stat-label">Descargas totales</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon orange">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-num">Lun 9:00</span>
            <span className="stat-label">Próximo reporte</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <nav className="tabs-nav">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            <span className="tab-count">{tab.count}</span>
          </button>
        ))}
      </nav>

      {/* Content */}
      <div className="reports-content">
        {activeTab === 'generated' && (
          <div className="reports-list">
            {generatedReports.map((report) => {
              const format = getFormatBadge(report.format);
              return (
                <div key={report.id} className="report-card">
                  <div className="report-icon">
                    {getTypeIcon(report.type)}
                  </div>
                  <div className="report-info">
                    <h4>{report.name}</h4>
                    <div className="report-meta">
                      <span className={`format-badge ${format.class}`}>{format.label}</span>
                      <span className="meta-dot"></span>
                      <span>{report.size}</span>
                      <span className="meta-dot"></span>
                      <span>{report.createdAt}</span>
                    </div>
                    {report.metrics && (
                      <div className="report-metrics">
                        {report.type === 'weekly' || report.type === 'monthly' || report.type === 'campaign' ? (
                          <>
                            <span className="metric">{report.metrics.follows} follows</span>
                            <span className="metric">{report.metrics.followbacks} followbacks</span>
                            <span className="metric highlight">{report.metrics.rate} tasa</span>
                          </>
                        ) : report.type === 'audience' ? (
                          <>
                            <span className="metric">{report.metrics.users} usuarios</span>
                            <span className="metric">{report.metrics.withEmail} con email</span>
                            <span className="metric">Score: {report.metrics.avgScore}</span>
                          </>
                        ) : (
                          <>
                            <span className="metric">{report.metrics.avgGrowth} crecimiento</span>
                            <span className="metric">{report.metrics.insights} insights</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="report-actions">
                    <button className="btn-action primary">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Descargar
                    </button>
                    <button className="btn-action">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                    <button className="btn-action">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                      </svg>
                    </button>
                    <button className="btn-action danger">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'scheduled' && (
          <div className="reports-list">
            {scheduledReports.map((report) => {
              const format = getFormatBadge(report.format);
              return (
                <div key={report.id} className={`report-card ${report.status === 'paused' ? 'paused' : ''}`}>
                  <div className="report-icon">
                    {getTypeIcon(report.type)}
                  </div>
                  <div className="report-info">
                    <div className="report-title-row">
                      <h4>{report.name}</h4>
                      <span className={`status-badge ${report.status}`}>
                        {report.status === 'active' ? 'Activo' : 'Pausado'}
                      </span>
                    </div>
                    <div className="report-meta">
                      <span className={`format-badge ${format.class}`}>{format.label}</span>
                      <span className="meta-dot"></span>
                      <span>{report.frequency}</span>
                    </div>
                    <div className="report-schedule-info">
                      <div className="schedule-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        Próximo: {report.nextRun}
                      </div>
                      <div className="schedule-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        {report.recipients.join(', ')}
                      </div>
                    </div>
                  </div>
                  <div className="report-actions">
                    {report.status === 'active' ? (
                      <button className="btn-action warning">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                        Pausar
                      </button>
                    ) : (
                      <button className="btn-action success">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        Activar
                      </button>
                    )}
                    <button className="btn-action">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                    <button className="btn-action danger">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="templates-grid">
            {templates.map((template) => {
              const format = getFormatBadge(template.format);
              return (
                <div key={template.id} className="template-card">
                  <div className="template-header">
                    <div className="template-icon">
                      {getTypeIcon(template.type)}
                    </div>
                    <span className={`format-badge ${format.class}`}>{format.label}</span>
                  </div>
                  <div className="template-content">
                    <h4>{template.name}</h4>
                    <p>{template.description}</p>
                    <div className="template-sections">
                      {(template.sections || template.fields || []).slice(0, 3).map((item, i) => (
                        <span key={i} className="section-tag">{item}</span>
                      ))}
                      {(template.sections || template.fields || []).length > 3 && (
                        <span className="section-tag more">+{(template.sections || template.fields).length - 3}</span>
                      )}
                    </div>
                  </div>
                  <div className="template-footer">
                    <span className="template-usage">Usado {template.usageCount} veces</span>
                    <button className="btn-use">Usar plantilla</button>
                  </div>
                </div>
              );
            })}

            <div className="template-card add-new">
              <div className="add-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <h4>Crear plantilla</h4>
              <p>Guarda configuraciones para reutilizar</p>
            </div>
          </div>
        )}
      </div>

      {/* Create Modal */}
      {showCreateModal && <CreateReportModal />}
    </div>
  );
};

export default Reports;
import { useState } from 'react';
import './Help.css';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactForm, setContactForm] = useState({
    subject: '',
    category: 'general',
    message: '',
  });

  const categories = [
    { id: 'all', name: 'Todos', icon: null },
    { id: 'getting-started', name: 'Primeros pasos', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    )},
    { id: 'campaigns', name: 'Campañas', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    )},
    { id: 'audience', name: 'Audiencia', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )},
    { id: 'billing', name: 'Facturación', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    )},
    { id: 'security', name: 'Seguridad', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )},
  ];

  const quickLinks = [
    {
      title: 'Crear tu primera campaña',
      description: 'Guía paso a paso para configurar tu primera campaña de crecimiento',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      color: 'green',
      href: '#',
    },
    {
      title: 'Conectar cuenta de Instagram',
      description: 'Aprende a vincular tu cuenta de forma segura',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="18" cy="6" r="1.5" fill="currentColor" />
        </svg>
      ),
      color: 'purple',
      href: '#',
    },
    {
      title: 'Configurar filtros de audiencia',
      description: 'Optimiza tus campañas con filtros inteligentes',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      ),
      color: 'blue',
      href: '#',
    },
    {
      title: 'Entender tus analytics',
      description: 'Interpreta las métricas y mejora tus resultados',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      color: 'orange',
      href: '#',
    },
  ];

  const videoTutorials = [
    {
      title: 'Introducción a Attrio',
      duration: '5:32',
      thumbnail: null,
      views: '2.4K',
    },
    {
      title: 'Cómo crear campañas efectivas',
      duration: '8:15',
      thumbnail: null,
      views: '1.8K',
    },
    {
      title: 'Filtros avanzados explicados',
      duration: '6:48',
      thumbnail: null,
      views: '1.2K',
    },
    {
      title: 'Maximiza tu tasa de followback',
      duration: '7:22',
      thumbnail: null,
      views: '3.1K',
    },
  ];

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: '¿Cómo empiezo a usar Attrio?',
      answer: 'Para comenzar, primero conecta tu cuenta de Instagram desde la sección de Configuración. Luego, añade algunos competidores cuyos seguidores quieras analizar. Finalmente, crea tu primera campaña seleccionando las fuentes de audiencia y configurando tus filtros preferidos.',
    },
    {
      id: 2,
      category: 'campaigns',
      question: '¿Cuántas campañas puedo tener activas?',
      answer: 'El número de campañas activas depende de tu plan. El plan Starter permite 2 campañas, Growth permite 5, y Pro ofrece campañas ilimitadas. Puedes pausar campañas en cualquier momento sin perder su configuración.',
    },
    {
      id: 3,
      category: 'security',
      question: '¿Es seguro usar Attrio con mi cuenta de Instagram?',
      answer: 'Sí, Attrio está diseñado con la seguridad como prioridad. Utilizamos velocidades de acción que imitan el comportamiento humano, respetamos los límites de Instagram, y pausamos automáticamente las campañas si detectamos cualquier advertencia. Tu cuenta nunca se conecta directamente a la API de Instagram.',
    },
    {
      id: 4,
      category: 'campaigns',
      question: '¿Qué velocidad de campaña debo elegir?',
      answer: 'Recomendamos comenzar con "Seguro" (40-60 follows/día) para cuentas nuevas o que nunca han usado automatización. Una vez que tu cuenta tenga un historial estable por 2-3 semanas, puedes considerar aumentar a "Normal". La velocidad "Agresivo" solo se recomienda para cuentas establecidas con alto engagement.',
    },
    {
      id: 5,
      category: 'audience',
      question: '¿Cómo funcionan los filtros de audiencia?',
      answer: 'Los filtros te permiten segmentar la audiencia extraída de tus competidores. Por ejemplo, puedes filtrar por usuarios que tengan foto de perfil, bio en español, un rango específico de seguidores, o que hayan publicado recientemente. Mientras más filtros actives, mayor será la calidad de tu audiencia pero menor la cantidad.',
    },
    {
      id: 6,
      category: 'billing',
      question: '¿Puedo cambiar de plan en cualquier momento?',
      answer: 'Sí, puedes upgradear o downgradear tu plan cuando quieras. Al upgradear, tendrás acceso inmediato a las nuevas funciones y se te cobrará la diferencia prorrateada. Al downgradear, el cambio se aplicará en tu próximo ciclo de facturación.',
    },
    {
      id: 7,
      category: 'billing',
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos todas las tarjetas de crédito y débito principales (Visa, Mastercard, American Express), así como PayPal. Los pagos se procesan de forma segura a través de Stripe.',
    },
    {
      id: 8,
      category: 'security',
      question: '¿Qué pasa si Instagram me muestra una advertencia?',
      answer: 'Attrio detecta automáticamente las advertencias de Instagram y pausará todas tus campañas inmediatamente. Te notificaremos por email y te daremos recomendaciones sobre cómo proceder. Generalmente, recomendamos esperar 24-48 horas antes de reanudar con una velocidad más conservadora.',
    },
    {
      id: 9,
      category: 'campaigns',
      question: '¿Qué es la tasa de followback y cómo la mejoro?',
      answer: 'La tasa de followback es el porcentaje de usuarios que te siguen de vuelta después de que los sigues. Una tasa saludable está entre 25-40%. Para mejorarla: 1) Usa filtros más estrictos, 2) Activa auto-likes para interactuar antes de seguir, 3) Asegúrate de que tu perfil esté optimizado con buena bio y contenido reciente.',
    },
    {
      id: 10,
      category: 'getting-started',
      question: '¿Cómo añado competidores para extraer su audiencia?',
      answer: 'Ve a la sección "Competidores" y haz clic en "Añadir competidor". Ingresa el username de la cuenta (sin @) y Attrio comenzará a extraer sus seguidores. Este proceso puede tomar desde minutos hasta horas dependiendo del tamaño de la cuenta. Una vez extraídos, los seguidores estarán disponibles como fuente para tus campañas.',
    },
  ];

  const systemStatus = {
    status: 'operational',
    lastUpdated: 'Hace 5 minutos',
    services: [
      { name: 'Campañas', status: 'operational' },
      { name: 'Extracción de audiencia', status: 'operational' },
      { name: 'Analytics', status: 'operational' },
      { name: 'API', status: 'operational' },
    ],
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setShowContactModal(false);
    setContactForm({ subject: '', category: 'general', message: '' });
  };

  return (
    <div className="help-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-text">
          <h1>Centro de Ayuda</h1>
          <p>Encuentra respuestas, tutoriales y soporte</p>
        </div>
        <button className="btn-contact" onClick={() => setShowContactModal(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Contactar soporte
        </button>
      </header>

      {/* Search */}
      <div className="search-section">
        <div className="search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Buscar en el centro de ayuda..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="search-clear" onClick={() => setSearchQuery('')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Quick Links */}
      <section className="quick-links-section">
        <h2>Guías populares</h2>
        <div className="quick-links-grid">
          {quickLinks.map((link, index) => (
            <a key={index} href={link.href} className={`quick-link-card color-${link.color}`}>
              <div className="quick-link-icon">{link.icon}</div>
              <div className="quick-link-content">
                <h3>{link.title}</h3>
                <p>{link.description}</p>
              </div>
              <svg className="quick-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="videos-section">
        <div className="section-header">
          <h2>Video tutoriales</h2>
          <a href="#" className="view-all">
            Ver todos
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
        <div className="videos-grid">
          {videoTutorials.map((video, index) => (
            <div key={index} className="video-card">
              <div className="video-thumbnail">
                <div className="play-button">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <span className="video-duration">{video.duration}</span>
              </div>
              <div className="video-info">
                <h4>{video.title}</h4>
                <span className="video-views">{video.views} visualizaciones</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Preguntas frecuentes</h2>
        
        {/* Category Filter */}
        <div className="faq-categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`faq-item ${expandedFaq === faq.id ? 'expanded' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  <span>{faq.question}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                {expandedFaq === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="no-results">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <h3>No se encontraron resultados</h3>
              <p>Intenta con otros términos de búsqueda o categoría</p>
            </div>
          )}
        </div>
      </section>

      {/* System Status */}
      <section className="status-section">
        <div className="status-card">
          <div className="status-header">
            <div className="status-indicator">
              <span className={`status-dot ${systemStatus.status}`}></span>
              <h3>
                {systemStatus.status === 'operational' && 'Todos los sistemas operativos'}
                {systemStatus.status === 'degraded' && 'Rendimiento degradado'}
                {systemStatus.status === 'outage' && 'Interrupción del servicio'}
              </h3>
            </div>
            <span className="status-updated">Actualizado {systemStatus.lastUpdated}</span>
          </div>
          <div className="status-services">
            {systemStatus.services.map((service, index) => (
              <div key={index} className="service-item">
                <span className="service-name">{service.name}</span>
                <span className={`service-status ${service.status}`}>
                  {service.status === 'operational' && 'Operativo'}
                  {service.status === 'degraded' && 'Degradado'}
                  {service.status === 'outage' && 'Caído'}
                </span>
              </div>
            ))}
          </div>
          <a href="#" className="status-link">
            Ver historial de incidentes
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="contact-section">
        <div className="contact-card">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div className="contact-content">
            <h3>¿No encuentras lo que buscas?</h3>
            <p>Nuestro equipo de soporte está disponible para ayudarte con cualquier pregunta</p>
          </div>
          <button className="btn-contact-large" onClick={() => setShowContactModal(true)}>
            Contactar soporte
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowContactModal(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <h2>Contactar soporte</h2>
            <p>Completa el formulario y te responderemos en menos de 24 horas</p>

            <form onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label>Categoría</label>
                <select
                  value={contactForm.category}
                  onChange={(e) => setContactForm({ ...contactForm, category: e.target.value })}
                >
                  <option value="general">Pregunta general</option>
                  <option value="technical">Problema técnico</option>
                  <option value="billing">Facturación</option>
                  <option value="feature">Solicitud de función</option>
                  <option value="bug">Reportar bug</option>
                </select>
              </div>

              <div className="form-group">
                <label>Asunto</label>
                <input
                  type="text"
                  placeholder="Resumen breve de tu consulta"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Mensaje</label>
                <textarea
                  placeholder="Describe tu pregunta o problema en detalle..."
                  rows="5"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                />
              </div>

              <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowContactModal(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Help;
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';

import EntryLoading from '../../assets/Brand/Entry_Loading.gif';
import LogoBlack from '../../assets/Brand/Logo_Black-removebg-preview.png';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [liveFollowers, setLiveFollowers] = useState(12458);
  const [notifications, setNotifications] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showContent) {
      const interval = setInterval(() => {
        setLiveFollowers(prev => prev + Math.floor(Math.random() * 3) + 1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showContent]);

  useEffect(() => {
    if (showContent) {
      const notificationData = [
        { type: 'follow', user: 'maria_fitness', time: 'ahora' },
        { type: 'lead', user: 'carlos_rest', time: '2s' },
        { type: 'follow', user: 'dental_clinic', time: '5s' },
        { type: 'conversion', user: 'jorge_mkt', time: '8s' },
        { type: 'follow', user: 'beauty_spa', time: '12s' },
      ];
      let index = 0;
      const interval = setInterval(() => {
        setNotifications(prev => {
          const newNotif = { ...notificationData[index % notificationData.length], id: Date.now() };
          return [newNotif, ...prev].slice(0, 4);
        });
        index++;
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [showContent]);

  useEffect(() => {
    if (showContent) {
      const interval = setInterval(() => {
        setActiveTestimonial(prev => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [showContent]);

  const testimonials = [
    { name: "Carlos M.", role: "Restaurante La Esquina", text: "3,000 seguidores reales en 2 meses. Ahora tenemos lista de espera los fines de semana.", avatar: "C" },
    { name: "María R.", role: "Clínica Dental Smile", text: "Cada semana llegan pacientes nuevos que nos encontraron en Instagram. ROI increíble.", avatar: "M" },
    { name: "Jorge L.", role: "MediaLab Agency", text: "Manejamos 15 cuentas con Attrio. Nuestros clientes están felices con los resultados.", avatar: "J" },
    { name: "Ana S.", role: "Boutique Elegance", text: "Las ventas por Instagram aumentaron 340% en el primer trimestre. Impresionante.", avatar: "A" },
    { name: "Roberto P.", role: "Gimnasio FitLife", text: "Pasamos de 2,000 a 15,000 seguidores en 4 meses. Todos clientes potenciales.", avatar: "R" },
  ];

  const caseStudies = [
    { industry: "Restaurantes", before: "1,200", after: "8,400", growth: "+600%", time: "3 meses", color: "pink" },
    { industry: "Clínicas", before: "800", after: "5,200", growth: "+550%", time: "4 meses", color: "cyan" },
    { industry: "Retail", before: "2,100", after: "12,800", growth: "+509%", time: "3 meses", color: "orange" },
    { industry: "Servicios", before: "500", after: "4,100", growth: "+720%", time: "5 meses", color: "green" },
  ];

  const features = [
    { icon: "search", title: "Extracción Masiva", desc: "Miles de perfiles en minutos", color: "purple" },
    { icon: "filter", title: "Filtros Avanzados", desc: "Segmenta tu audiencia ideal", color: "blue" },
    { icon: "zap", title: "Automatización 24/7", desc: "Trabaja mientras duermes", color: "yellow" },
    { icon: "shield", title: "100% Seguro", desc: "Comportamiento humano", color: "green" },
    { icon: "download", title: "Exportar Datos", desc: "Compatible con Meta Ads", color: "orange" },
    { icon: "chart", title: "Analytics", desc: "Métricas en tiempo real", color: "pink" },
  ];

  const faqs = [
    { q: "¿Es seguro para mi cuenta de Instagram?", a: "Absolutamente. Attrio simula comportamiento humano con velocidades seguras. Usamos proxies rotativos y delays inteligentes. Tu cuenta nunca está en riesgo." },
    { q: "¿Cuánto tiempo toma ver resultados?", a: "La mayoría de usuarios ven crecimiento en la primera semana. Resultados significativos (500+ seguidores nuevos) típicamente en 2-4 semanas." },
    { q: "¿Puedo cancelar en cualquier momento?", a: "Sí. Sin contratos, sin compromisos, sin preguntas. Cancela con un click desde tu dashboard cuando quieras." },
    { q: "¿Qué pasa si no veo resultados?", a: "Ofrecemos garantía de 30 días. Si no estás satisfecho con los resultados, te devolvemos el 100% de tu dinero." },
    { q: "¿Necesito dar mi contraseña de Instagram?", a: "Sí, pero está encriptada con AES-256 (el mismo estándar que usan los bancos). Nunca la vemos ni almacenamos en texto plano." },
    { q: "¿Funciona con cuentas de negocio?", a: "Sí. Funciona con cuentas personales, de creador y de negocio. De hecho, las cuentas de negocio obtienen mejores resultados." },
  ];

  const metrics = [
    { value: "10K+", label: "Leads extraídos este mes" },
    { value: "34%", label: "Tasa de conversión promedio" },
    { value: "500+", label: "Negocios activos" },
    { value: "24/7", label: "Automatización continua" },
    { value: "2min", label: "Tiempo de setup" },
    { value: "0", label: "Cuentas suspendidas" },
  ];

  const comparisons = [
    { feature: "Extracción de seguidores", attrio: true, others: false },
    { feature: "Filtros avanzados", attrio: true, others: false },
    { feature: "Automatización 24/7", attrio: true, others: true },
    { feature: "Comportamiento humano", attrio: true, others: false },
    { feature: "Exportar a Meta Ads", attrio: true, others: false },
    { feature: "Soporte en español", attrio: true, others: false },
    { feature: "Garantía de 30 días", attrio: true, others: false },
  ];

  return (
    <div className="landing-container">
      <AnimatePresence>
        {isLoading && (
          <motion.div className="entry-screen" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <img src={EntryLoading} alt="Loading" className="entry-gif" />
          </motion.div>
        )}
      </AnimatePresence>

      {showContent && (
        <div className="landing-content">
          
          {/* ==================== HERO ==================== */}
          <section className="hero">
            <div className="hero-notifications">
              <AnimatePresence>
                {notifications.map((notif, i) => (
                  <motion.div
                    key={notif.id}
                    className={`notif-card notif-${notif.type}`}
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    animate={{ opacity: 1 - (i * 0.2), x: 0, scale: 1 - (i * 0.05) }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="notif-icon">
                      {notif.type === 'follow' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>}
                      {notif.type === 'lead' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
                      {notif.type === 'conversion' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
                    </div>
                    <div className="notif-content">
                      <span className="notif-user">@{notif.user}</span>
                      <span className="notif-action">
                        {notif.type === 'follow' && 'Nuevo seguidor'}
                        {notif.type === 'lead' && 'Lead calificado'}
                        {notif.type === 'conversion' && 'Conversión'}
                      </span>
                    </div>
                    <span className="notif-time">{notif.time}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="hero-content">
              <motion.div className="hero-badge" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="badge-live"></span>
                <span className="badge-count">{liveFollowers.toLocaleString()}</span>
                leads generados hoy
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                Los seguidores de
                <br />
                <span className="title-accent">tu competencia</span>
                <br />
                pueden ser tus clientes.
              </motion.h1>

              <motion.p className="hero-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                Extrae, filtra y convierte automáticamente.
              </motion.p>

              <motion.div className="hero-cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <button className="btn-primary">
                  Comenzar Gratis
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button className="btn-secondary">Ver Demo</button>
              </motion.div>

              <motion.div className="hero-trust" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <div className="trust-avatars">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="trust-avatar" style={{ zIndex: 5 - i }}></div>
                  ))}
                </div>
                <div className="trust-text">
                  <strong>+500 negocios</strong>
                  <span>ya están creciendo</span>
                </div>
              </motion.div>
            </div>

            <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
              <div className="dashboard-card">
                <div className="dash-header">
                  <div className="dash-dots"><span></span><span></span><span></span></div>
                  <img src={LogoBlack} alt="Attrio" className="dash-logo" />
                </div>
                <div className="dash-body">
                  <div className="dash-stat-row">
                    <div className="dash-stat">
                      <span className="ds-value">{liveFollowers.toLocaleString()}</span>
                      <span className="ds-label">Seguidores totales</span>
                      <span className="ds-trend up">+847 esta semana</span>
                    </div>
                    <div className="dash-stat accent">
                      <span className="ds-value">34%</span>
                      <span className="ds-label">Tasa de conversión</span>
                      <span className="ds-trend up">+5.2%</span>
                    </div>
                  </div>
                  <div className="dash-graph">
                    <div className="graph-header">
                      <span>Crecimiento semanal</span>
                      <span className="graph-badge">En vivo</span>
                    </div>
                    <svg viewBox="0 0 300 80" className="graph-svg">
                      <motion.path d="M 0 70 Q 30 65 50 55 T 100 45 T 150 35 T 200 25 T 250 15 T 300 5" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.8 }} />
                    </svg>
                  </div>
                  <div className="dash-activity">
                    <span className="activity-label">Actividad reciente</span>
                    <div className="activity-bars">
                      {[65, 80, 45, 90, 70, 85, 55].map((h, i) => (
                        <motion.div key={i} className="activity-bar" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1 + (i * 0.1) }} style={{ height: `${h}%` }}></motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ==================== METRICS BAR ==================== */}
          <section className="metrics-bar">
            {metrics.map((m, i) => (
              <motion.div key={i} className="metric-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
              </motion.div>
            ))}
          </section>

          {/* ==================== PROBLEM/SOLUTION ==================== */}
          <section className="problem-section">
            <div className="problem-grid">
              <motion.div className="problem-card" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="problem-tag">El Problema</span>
                <h3>Crecer en Instagram es difícil</h3>
                <ul className="problem-list">
                  <li>Publicar contenido no es suficiente</li>
                  <li>Los hashtags ya no funcionan</li>
                  <li>Comprar seguidores = bots inútiles</li>
                  <li>Agencias cobran miles sin resultados</li>
                </ul>
              </motion.div>
              <motion.div className="solution-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="solution-tag">La Solución</span>
                <h3>Attrio cambia el juego</h3>
                <ul className="solution-list">
                  <li>Encuentra clientes que ya siguen a tu competencia</li>
                  <li>Filtra solo prospectos de calidad</li>
                  <li>Automatiza el crecimiento 24/7</li>
                  <li>Paga una fracción del costo</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* ==================== FEATURES GRID ==================== */}
          <section className="features-section">
            <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="section-tag">Características</span>
              <h2>Todo lo que necesitas para crecer</h2>
            </motion.div>
            <div className="features-grid">
              {features.map((f, i) => (
                <motion.div key={i} className={`feature-card feature-${f.color}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8, scale: 1.02 }}>
                  <div className="feature-icon">
                    {f.icon === 'search' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>}
                    {f.icon === 'filter' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>}
                    {f.icon === 'zap' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>}
                    {f.icon === 'shield' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                    {f.icon === 'download' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>}
                    {f.icon === 'chart' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>}
                  </div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ==================== BENTO SHOWCASE ==================== */}
          <section className="bento-section">
            <div className="bento-grid">
              <motion.div className="bento-card bento-xl bento-dark" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.01 }}>
                <div className="bento-content">
                  <span className="bento-tag">Extracción Inteligente</span>
                  <h2>Accede a miles de prospectos en minutos</h2>
                  <p>Ingresa cualquier cuenta de Instagram y extrae todos sus seguidores. Filtra por ubicación, actividad, intereses.</p>
                </div>
                <div className="bento-visual-extract">
                  <div className="extract-source">
                    <div className="source-avatar"></div>
                    <div className="source-info">
                      <span>@competidor</span>
                      <small>24.5K seguidores</small>
                    </div>
                  </div>
                  <div className="extract-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                  <div className="extract-results">
                    {[...Array(9)].map((_, i) => (
                      <motion.div key={i} className="result-avatar" animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, delay: i * 0.15, repeat: Infinity }}></motion.div>
                    ))}
                    <span className="result-count">+2,847</span>
                  </div>
                </div>
              </motion.div>

              <motion.div className="bento-card bento-md bento-green" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} whileHover={{ scale: 1.02 }}>
                <span className="bento-tag">Resultados Reales</span>
                <div className="stat-display">
                  <motion.span className="stat-big" animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2, repeat: Infinity }}>34%</motion.span>
                  <span className="stat-label">tasa de follow-back</span>
                </div>
                <div className="stat-comparison">vs 2-5% promedio del mercado</div>
              </motion.div>

              <motion.div className="bento-card bento-md bento-purple" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} whileHover={{ scale: 1.02 }}>
                <span className="bento-tag">Automatización</span>
                <h3>Activo 24/7</h3>
                <p>Tú duermes, tu cuenta crece.</p>
                <div className="auto-visual">
                  <div className="auto-ring r1"></div>
                  <div className="auto-ring r2"></div>
                  <div className="auto-ring r3"></div>
                  <motion.div className="auto-center" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>ON</motion.div>
                </div>
              </motion.div>

              <motion.div className="bento-card bento-sm bento-orange" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ scale: 1.02 }}>
                <span className="bento-tag">Filtros</span>
                <div className="filter-chips">
                  {['Activos', 'Con bio', '500+ seg.', 'Públicos'].map((f, i) => (
                    <motion.span key={i} className="chip" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, delay: i * 0.2, repeat: Infinity }}>{f}</motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div className="bento-card bento-sm bento-cyan" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }} whileHover={{ scale: 1.02 }}>
                <span className="bento-tag">Seguro</span>
                <motion.div className="shield-icon" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                </motion.div>
              </motion.div>

              <motion.div className="bento-card bento-sm bento-yellow" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} whileHover={{ scale: 1.02 }}>
                <span className="bento-tag">Exportar</span>
                <motion.div className="export-icon" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </motion.div>
                <span className="export-text">Meta Ads</span>
              </motion.div>

              <motion.div className="bento-card bento-sm bento-pink" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }} whileHover={{ scale: 1.02 }}>
                <span className="bento-tag">Analytics</span>
                <div className="mini-stats">
                  <div className="mini-stat">
                    <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>+23%</motion.span>
                    <small>Growth</small>
                  </div>
                  <div className="mini-stat">
                    <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, delay: 0.3, repeat: Infinity }}>4.2%</motion.span>
                    <small>Engage</small>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ==================== HOW IT WORKS ==================== */}
          <section className="process-section">
            <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="section-tag">Proceso</span>
              <h2>Comienza en 3 simples pasos</h2>
            </motion.div>
            <div className="process-flow">
              <motion.div className="process-step" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="step-number">1</div>
                <h4>Conecta tu cuenta</h4>
                <p>Setup seguro en menos de 2 minutos</p>
              </motion.div>
              <div className="process-line"><motion.div className="line-fill" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}></motion.div></div>
              <motion.div className="process-step" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="step-number">2</div>
                <h4>Selecciona competidores</h4>
                <p>Extraemos sus seguidores automáticamente</p>
              </motion.div>
              <div className="process-line"><motion.div className="line-fill" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}></motion.div></div>
              <motion.div className="process-step" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <div className="step-number">3</div>
                <h4>Mira crecer tu cuenta</h4>
                <p>Attrio trabaja 24/7 por ti</p>
              </motion.div>
            </div>
          </section>

          {/* ==================== CASE STUDIES ==================== */}
          <section className="cases-section">
            <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="section-tag">Resultados</span>
              <h2>Casos de éxito por industria</h2>
            </motion.div>
            <div className="cases-grid">
              {caseStudies.map((study, i) => (
                <motion.div key={i} className={`case-card case-${study.color}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }}>
                  <span className="case-industry">{study.industry}</span>
                  <div className="case-metrics">
                    <div className="case-before"><small>Antes</small><span>{study.before}</span></div>
                    <div className="case-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                    <div className="case-after"><small>Después</small><span>{study.after}</span></div>
                  </div>
                  <div className="case-growth">
                    <span className="growth-value">{study.growth}</span>
                    <span className="growth-time">en {study.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ==================== COMPARISON TABLE ==================== */}
          <section className="comparison-section">
            <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="section-tag">Comparación</span>
              <h2>Attrio vs. Otras herramientas</h2>
            </motion.div>
            <motion.div className="comparison-table" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="table-header">
                <span>Característica</span>
                <span className="attrio-col">Attrio</span>
                <span>Otros</span>
              </div>
              {comparisons.map((c, i) => (
                <div key={i} className="table-row">
                  <span>{c.feature}</span>
                  <span className="attrio-col">{c.attrio ? <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> : <svg viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>}</span>
                  <span>{c.others ? <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> : <svg viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>}</span>
                </div>
              ))}
            </motion.div>
          </section>

          {/* ==================== TESTIMONIALS ==================== */}
          <section className="testimonials-section">
            <motion.div className="section-header light" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="section-tag">Testimonios</span>
              <h2>Historias de éxito reales</h2>
            </motion.div>
            <div className="testimonials-grid">
              {testimonials.map((t, i) => (
                <motion.div key={i} className={`testimonial-card ${i === activeTestimonial ? 'active' : ''}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}>
                  <div className="testimonial-header">
                    <div className="t-avatar">{t.avatar}</div>
                    <div className="t-info">
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                  <p>"{t.text}"</p>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} viewBox="0 0 24 24" fill="#EAB308" stroke="#EAB308" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ==================== FAQ ==================== */}
          <section className="faq-section">
            <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="section-tag">FAQ</span>
              <h2>Preguntas frecuentes</h2>
            </motion.div>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <motion.div key={i} className={`faq-item ${activeFaq === i ? 'open' : ''}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <span>{faq.q}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points={activeFaq === i ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}/></svg>
                  </div>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ==================== GUARANTEE ==================== */}
          <section className="guarantee-section">
            <motion.div className="guarantee-card" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div className="guarantee-badge">Garantía 100%</div>
              <h3>30 días de garantía de satisfacción</h3>
              <p>Si no ves resultados en los primeros 30 días, te devolvemos tu dinero completo. Sin preguntas, sin complicaciones.</p>
              <div className="guarantee-points">
                <div className="g-point"><svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg><span>Sin contratos a largo plazo</span></div>
                <div className="g-point"><svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg><span>Cancela cuando quieras</span></div>
                <div className="g-point"><svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg><span>Soporte 24/7 en español</span></div>
                <div className="g-point"><svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg><span>Reembolso sin preguntas</span></div>
              </div>
            </motion.div>
          </section>

          {/* ==================== FINAL CTA ==================== */}
          <section className="final-cta">
            <motion.div className="cta-content" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <motion.h2 animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 3, repeat: Infinity }}>¿Listo para crecer?</motion.h2>
              <p>Únete a más de 500 negocios que ya están creciendo con Attrio</p>
              <div className="cta-buttons">
                <button className="btn-cta">
                  Comenzar Gratis
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button className="btn-cta-secondary">Agendar Demo</button>
              </div>
              <div className="cta-features">
                <span>7 días gratis</span>
                <span>Sin tarjeta de crédito</span>
                <span>Setup en 2 minutos</span>
              </div>
            </motion.div>
          </section>

        </div>
      )}
    </div>
  );
};

export default Home;
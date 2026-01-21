import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';
import Header from './Header';

import EntryLoading from '../../assets/Brand/Entry_Loading.gif';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [liveCount, setLiveCount] = useState(12847);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Entry loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showContent) return;
    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [showContent]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  const features = [
    {
      num: '01',
      title: 'Extracción masiva',
      desc: 'Miles de perfiles en minutos. Seguidores de cualquier cuenta, filtrados por ubicación e intereses.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
      )
    },
    {
      num: '02',
      title: 'Filtros inteligentes',
      desc: 'Solo prospectos de calidad. Elimina bots, cuentas inactivas y perfiles irrelevantes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
        </svg>
      )
    },
    {
      num: '03',
      title: 'Automatización 24/7',
      desc: 'Configura una vez, crece siempre. Attrio trabaja mientras duermes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      )
    },
    {
      num: '04',
      title: 'Exportar a Meta Ads',
      desc: 'Tu audiencia lista para campañas. Compatible con Facebook e Instagram Ads.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      )
    }
  ];

  const metrics = [
    { value: '34%', label: 'Conversión', desc: 'tasa de follow-back' },
    { value: '500+', label: 'Negocios', desc: 'activos en la plataforma' },
    { value: '2.4M', label: 'Leads', desc: 'generados este mes' },
    { value: '0', label: 'Suspensiones', desc: 'cuentas afectadas' }
  ];

  const industries = [
    { name: 'Restaurantes', growth: '+620%', time: '3 meses' },
    { name: 'Clínicas', growth: '+480%', time: '4 meses' },
    { name: 'E-commerce', growth: '+890%', time: '2 meses' },
    { name: 'Servicios', growth: '+340%', time: '5 meses' },
    { name: 'Fitness', growth: '+720%', time: '3 meses' },
    { name: 'Agencias', growth: '+550%', time: '4 meses' }
  ];

  const testimonials = [
    {
      quote: '3,000 seguidores reales en 2 meses. Ahora tenemos lista de espera los fines de semana.',
      author: 'Carlos M.',
      role: 'Restaurante La Esquina',
      metric: '+3,000'
    },
    {
      quote: 'Cada semana llegan pacientes nuevos que nos encontraron en Instagram.',
      author: 'María R.',
      role: 'Clínica Dental Smile',
      metric: '+5,200'
    },
    {
      quote: 'Manejamos 15 cuentas con Attrio. Nuestros clientes están felices.',
      author: 'Jorge L.',
      role: 'MediaLab Agency',
      metric: '15 cuentas'
    }
  ];

  const steps = [
    { num: '01', title: 'Conecta', desc: 'Tu cuenta de Instagram en 2 minutos' },
    { num: '02', title: 'Selecciona', desc: 'Los competidores que quieres analizar' },
    { num: '03', title: 'Extrae', desc: 'Miles de seguidores automáticamente' },
    { num: '04', title: 'Crece', desc: 'Attrio trabaja 24/7 por ti' }
  ];

  const logos = ['Nike', 'Adidas', 'Zara', 'H&M', 'Mango', 'Pull&Bear', 'Bershka', 'Massimo'];

  const timeline = [
    { week: 'Semana 1', followers: '500+', event: 'Primeros seguidores reales' },
    { week: 'Semana 2', followers: '1,200+', event: 'Engagement aumenta 40%' },
    { week: 'Semana 4', followers: '3,000+', event: 'Primeras conversiones' },
    { week: 'Mes 2', followers: '8,000+', event: 'ROI positivo confirmado' },
    { week: 'Mes 3', followers: '15,000+', event: 'Escala automática' }
  ];

  const nightActivity = [
    { time: '11:47 PM', action: 'Análisis de @competidor_fitness iniciado', type: 'analyze' },
    { time: '12:23 AM', action: '+18 nuevos seguidores captados', type: 'followers' },
    { time: '2:15 AM', action: 'Lead de alto valor detectado', type: 'lead' },
    { time: '3:41 AM', action: '+32 seguidores mientras dormías', type: 'followers' },
    { time: '5:08 AM', action: 'Engagement rate subió a 4.2%', type: 'stats' },
    { time: '6:30 AM', action: 'Resumen: +67 seguidores esta noche', type: 'summary' }
  ];

  return (
    
    <div className="attrio">
          <Header></Header>

      {/* Entry Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="entry-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={EntryLoading} alt="Loading" className="entry-gif" />
          </motion.div>
        )}
      </AnimatePresence>

      {showContent && (
        <>
          {/* Cursor follower */}
          <div 
            className="cursor-glow"
            style={{ left: mousePos.x, top: mousePos.y }}
          />

          {/* ==================== HERO ==================== */}
          <section className="hero">
            <div className="hero-bg" style={{ transform: `translateY(${scrollY * 0.4}px)` }} />
            
            <div className="hero-content">
              <motion.div 
                className="hero-badge"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="badge-pulse" />
                <span className="badge-text">{liveCount.toLocaleString()} leads generados hoy</span>
              </motion.div>
              
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="title-line">Los seguidores de</span>
                <span className="title-line title-accent">tu competencia</span>
                <span className="title-line">pueden ser tus clientes.</span>
              </motion.h1>
              
              <motion.p 
                className="hero-sub"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Extrae, filtra y convierte automáticamente. Sin riesgos. Sin complicaciones.
              </motion.p>
              
              <motion.div 
                className="hero-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <button className="btn-primary">
                  <span>Comenzar gratis</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                <button className="btn-outline">Ver demo</button>
              </motion.div>

              <motion.div 
                className="hero-trust"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="trust-avatars">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="trust-avatar" style={{ '--delay': i }} />
                  ))}
                </div>
                <span>+500 negocios creciendo</span>
              </motion.div>
            </div>

            {/* BENTO GRID */}
            <motion.div 
              className="hero-bento"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bento-card bento-main">
                <div className="bento-stat">
                  <span className="bento-value">12,847</span>
                  <span className="bento-label">Seguidores totales</span>
                </div>
                <div className="bento-chart">
                  <svg viewBox="0 0 200 60" className="chart-line">
                    <path d="M 0 50 Q 25 45 50 35 T 100 25 T 150 15 T 200 5" fill="none" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1"/>
                        <stop offset="100%" stopColor="#a855f7"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="bento-trend">
                  <span className="trend-up">↑ 23%</span>
                  <span>vs semana pasada</span>
                </div>
              </div>

              <div className="bento-card bento-notif">
                <div className="notif-icon green">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="8.5" cy="7" r="4"/>
                    <line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>
                  </svg>
                </div>
                <div className="notif-text">
                  <strong>+847</strong>
                  <span>nuevos esta semana</span>
                </div>
              </div>

              <div className="bento-card bento-rate">
                <span className="rate-value">34%</span>
                <span className="rate-label">Follow-back rate</span>
                <div className="rate-bar">
                  <div className="rate-fill" />
                </div>
              </div>

              <div className="bento-card bento-live">
                <div className="live-dot" />
                <span>Activo 24/7</span>
              </div>

              <div className="bento-card bento-activity">
                <span className="activity-label">Actividad</span>
                <div className="activity-bars">
                  {[65, 80, 45, 90, 70, 85, 55].map((h, i) => (
                    <div key={i} className="activity-bar" style={{ '--height': `${h}%`, '--delay': i }} />
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="scroll-indicator">
              <div className="scroll-line" />
            </div>
          </section>

          {/* ==================== METRICS BANNER ==================== */}
          <section className="metrics-banner">
            <div className="metrics-track">
              {[...metrics, ...metrics].map((m, i) => (
                <div key={i} className="metric-item">
                  <span className="metric-value">{m.value}</span>
                  <div className="metric-info">
                    <strong>{m.label}</strong>
                    <span>{m.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== PARALLAX TEXT ==================== */}
          <section className="parallax-text">
            <div className="parallax-line" style={{ transform: `translateX(${scrollY * -0.15}px)` }}>
              <span>EXTRAE</span>
              <span className="dot">●</span>
              <span>FILTRA</span>
              <span className="dot">●</span>
              <span>CONVIERTE</span>
              <span className="dot">●</span>
              <span>EXTRAE</span>
              <span className="dot">●</span>
              <span>FILTRA</span>
              <span className="dot">●</span>
              <span>CONVIERTE</span>
            </div>
            <div className="parallax-line reverse" style={{ transform: `translateX(${scrollY * 0.15 - 200}px)` }}>
              <span>CRECE</span>
              <span className="dot">●</span>
              <span>AUTOMATIZA</span>
              <span className="dot">●</span>
              <span>DOMINA</span>
              <span className="dot">●</span>
              <span>CRECE</span>
              <span className="dot">●</span>
              <span>AUTOMATIZA</span>
              <span className="dot">●</span>
              <span>DOMINA</span>
            </div>
          </section>

          {/* ==================== FEATURES ==================== */}
          <section className="features">
            <div className="section-intro">
              <span className="intro-tag">Características</span>
              <h2>Todo lo que necesitas<br />para dominar Instagram</h2>
            </div>

            <div className="features-grid">
              {features.map((f, i) => (
                <motion.div 
                  key={i} 
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="feature-header">
                    <span className="feature-num">{f.num}</span>
                    <div className="feature-icon">{f.icon}</div>
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <div className="feature-hover" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* ==================== SHOWCASE BLACK ==================== */}
          <section className="showcase">
            <div className="showcase-bg" style={{ transform: `translateY(${(scrollY - 1000) * 0.25}px)` }} />
            <div className="showcase-content">
              <div className="showcase-left">
                <span className="showcase-tag">Cómo funciona</span>
                <h2>De cero a miles de seguidores en 4 pasos</h2>
                <p>Sin complicaciones técnicas. Sin riesgos para tu cuenta. Resultados desde la primera semana.</p>
                
                <div className="steps-list">
                  {steps.map((s, i) => (
                    <motion.div 
                      key={i} 
                      className="step-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 8 }}
                    >
                      <span className="step-num">{s.num}</span>
                      <div className="step-content">
                        <strong>{s.title}</strong>
                        <span>{s.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="showcase-right">
                <div className="showcase-visual">
                  <div className="stream-container">
                    <div className="stream stream-1" />
                    <div className="stream stream-2" />
                    <div className="stream stream-3" />
                    <div className="stream stream-4" />
                    <div className="stream stream-5" />
                  </div>
                  <div className="visual-core">
                    <div className="core-inner">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      </svg>
                    </div>
                    <div className="core-pulse pulse-1" />
                    <div className="core-pulse pulse-2" />
                    <div className="core-pulse pulse-3" />
                  </div>
                  <div className="data-particles">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="particle" style={{ '--i': i }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== NIGHT MODE SECTION ==================== */}
          <section className="night-mode">
            <div className="night-bg" style={{ transform: `translateY(${(scrollY - 1800) * 0.2}px)` }} />
            <div className="night-content">
              <div className="night-left">
                <span className="night-tag">Automatización Nocturna</span>
                <h2>Mientras tú duermes,<br /><span>Attrio trabaja.</span></h2>
                <p>A las 3 AM, mientras tu competencia duerme, Attrio sigue captando clientes potenciales para tu negocio.</p>
                
                <div className="night-stats">
                  <div className="night-stat">
                    <span className="ns-value">+67</span>
                    <span className="ns-label">seguidores promedio por noche</span>
                  </div>
                  <div className="night-stat">
                    <span className="ns-value">8hrs</span>
                    <span className="ns-label">de trabajo automático</span>
                  </div>
                </div>
              </div>

              <div className="night-right">
                <div className="activity-feed">
                  {nightActivity.map((item, i) => (
                    <motion.div 
                      key={i}
                      className={`activity-item activity-${item.type}`}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="activity-time">{item.time}</span>
                      <span className="activity-action">{item.action}</span>
                      <div className="activity-dot" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ==================== TIMELINE ==================== */}
          <section className="timeline-section">
            <div className="section-intro">
              <span className="intro-tag">Progreso</span>
              <h2>Tu crecimiento<br />semana a semana</h2>
            </div>

            <div className="timeline">
              <div className="timeline-line" />
              {timeline.map((t, i) => (
                <motion.div 
                  key={i} 
                  className="timeline-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-week">{t.week}</span>
                    <span className="timeline-followers">{t.followers}</span>
                    <span className="timeline-event">{t.event}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ==================== INDUSTRIES ==================== */}
          <section className="industries">
            <div className="section-intro">
              <span className="intro-tag">Resultados</span>
              <h2>Crecimiento real<br />en cada industria</h2>
            </div>

            <div className="industries-grid">
              {industries.map((ind, i) => (
                <motion.div 
                  key={i} 
                  className="industry-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="industry-bar" />
                  <span className="industry-name">{ind.name}</span>
                  <span className="industry-growth">{ind.growth}</span>
                  <span className="industry-time">en {ind.time}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ==================== LOGOS MARQUEE ==================== */}
          <section className="logos-section">
            <p>Empresas que confían en nosotros</p>
            <div className="logos-track">
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="logo-item">{logo}</div>
              ))}
            </div>
          </section>

          {/* ==================== TESTIMONIALS ==================== */}
          <section className="testimonials">
            <div className="testimonials-header">
              <span className="intro-tag">Testimonios</span>
              <h2>Historias de éxito</h2>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i} 
                  className="testimonial-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="testimonial-metric">{t.metric}</div>
                  <blockquote>"{t.quote}"</blockquote>
                  <div className="testimonial-author">
                    <div className="author-avatar">{t.author.charAt(0)}</div>
                    <div className="author-info">
                      <strong>{t.author}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ==================== COMPARISON BLACK ==================== */}
          <section className="comparison">
            <div className="comparison-bg" style={{ transform: `translateY(${(scrollY - 3500) * 0.2}px)` }} />
            <div className="comparison-content">
              <div className="comparison-text">
                <span className="intro-tag light">¿Por qué Attrio?</span>
                <h2>La única herramienta que realmente funciona</h2>
                <p>Mientras otros prometen, nosotros entregamos resultados medibles.</p>
              </div>

              <div className="comparison-grid">
                <div className="compare-col">
                  <span className="compare-header others">Otras herramientas</span>
                  <ul>
                    <li><span className="x">✕</span> Seguidores falsos y bots</li>
                    <li><span className="x">✕</span> Riesgo de suspensión</li>
                    <li><span className="x">✕</span> Sin filtros de calidad</li>
                    <li><span className="x">✕</span> Soporte inexistente</li>
                  </ul>
                </div>
                <div className="compare-col attrio-col">
                  <span className="compare-header attrio">Attrio</span>
                  <ul>
                    <li><span className="check">✓</span> Seguidores 100% reales</li>
                    <li><span className="check">✓</span> Comportamiento humano</li>
                    <li><span className="check">✓</span> Filtros avanzados</li>
                    <li><span className="check">✓</span> Soporte 24/7 en español</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== BIG NUMBER SECTION ==================== */}
          <section className="big-number">
            <motion.div 
              className="bn-content"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="bn-stat">
                <span className="bn-value">2.4M</span>
                <span className="bn-label">leads generados para nuestros clientes</span>
              </div>
              <div className="bn-sub">
                <div className="bn-item">
                  <span>500+</span>
                  <small>negocios activos</small>
                </div>
                <div className="bn-divider" />
                <div className="bn-item">
                  <span>98%</span>
                  <small>satisfacción</small>
                </div>
                <div className="bn-divider" />
                <div className="bn-item">
                  <span>0</span>
                  <small>cuentas baneadas</small>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ==================== FINAL CTA ==================== */}
          <section className="final-cta">
            <div className="cta-bg" style={{ transform: `translateY(${(scrollY - 4500) * 0.15}px)` }} />
            <div className="cta-content">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                ¿Listo para crecer?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Únete a más de 500 negocios que ya están dominando Instagram
              </motion.p>
              
              <motion.button 
                className="btn-cta"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <span>Comenzar gratis ahora</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.button>

              <motion.div 
                className="cta-features"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span>✓ 7 días gratis</span>
                <span>✓ Sin tarjeta de crédito</span>
                <span>✓ Setup en 2 minutos</span>
              </motion.div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
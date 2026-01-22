import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import './HIW.css';
import Header from './Header';
import Footer from './Footer';


const HIW = () => {
  const [activeStep, setActiveStep] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // Auto-rotate steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Conecta tu cuenta',
      subtitle: 'En 2 minutos',
      desc: 'Ingresa tus credenciales de Instagram de forma segura. Soportamos 2FA y encriptamos todo con AES-256.',
      color: 'yellow',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
          <polyline points="10 17 15 12 10 7"/>
          <line x1="15" y1="12" x2="3" y2="12"/>
        </svg>
      )
    },
    {
      num: '02',
      title: 'Agrega competidores',
      subtitle: 'Selecciona tu nicho',
      desc: 'Añade las cuentas de tu competencia. Analizamos sus seguidores, engagement y estrategias de contenido.',
      color: 'green',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
          <line x1="11" y1="8" x2="11" y2="14"/>
          <line x1="8" y1="11" x2="14" y2="11"/>
        </svg>
      )
    },
    {
      num: '03',
      title: 'Configura filtros',
      subtitle: 'Audiencia de calidad',
      desc: 'Filtra por ubicación, intereses, actividad y más. Solo prospectos reales que se convierten en clientes.',
      color: 'pink',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
        </svg>
      )
    },
    {
      num: '04',
      title: 'Crece automáticamente',
      subtitle: '24/7 sin parar',
      desc: 'Attrio interactúa de forma inteligente mientras duermes. Comportamiento humano simulado para máxima seguridad.',
      color: 'blue',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      )
    }
  ];

  const bentoFeatures = [
    {
      id: 'extraction',
      title: 'Extracción masiva',
      subtitle: '10,000+ perfiles',
      desc: 'Extrae seguidores de cualquier cuenta pública en minutos.',
      color: 'yellow',
      size: 'large',
      visual: 'counter'
    },
    {
      id: 'filters',
      title: 'Filtros inteligentes',
      desc: 'Bio, ubicación, actividad',
      color: 'green',
      size: 'small',
      visual: 'checkmarks'
    },
    {
      id: 'safety',
      title: '0 Suspensiones',
      desc: 'Comportamiento humano',
      color: 'pink',
      size: 'small',
      visual: 'shield'
    },
    {
      id: 'analytics',
      title: 'Analytics en tiempo real',
      subtitle: 'Métricas que importan',
      desc: 'Visualiza tu crecimiento, tasa de conversión y mejores horarios.',
      color: 'blue',
      size: 'medium',
      visual: 'chart'
    },
    {
      id: 'automation',
      title: '24/7',
      desc: 'Automático',
      color: 'yellow',
      size: 'tiny',
      visual: 'pulse'
    },
    {
      id: 'speed',
      title: 'Resultados en 7 días',
      desc: 'Primeros seguidores garantizados',
      color: 'green',
      size: 'medium',
      visual: 'rocket'
    }
  ];

  const securityFeatures = [
    { icon: '🔐', title: 'Encriptación AES-256', desc: 'Tus datos siempre seguros' },
    { icon: '🌐', title: 'Proxies residenciales', desc: 'IPs reales por país' },
    { icon: '🤖', title: 'Comportamiento humano', desc: 'Delays aleatorios' },
    { icon: '⚠️', title: 'Auto-pausa', desc: 'Detecta warnings al instante' }
  ];

  const AnimatedCounter = ({ end, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
      if (!inView) return;
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }, [inView, end, duration]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
  };

  return (
    <div className="hiw">
      <Header />

      {/* ==================== HERO ==================== */}
      <section className="hiw-hero">
        <motion.div 
          className="hiw-hero-bg"
          style={{ y: backgroundY }}
        />
        
        <div className="hiw-hero-content">
          <motion.span 
            className="hiw-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Cómo funciona
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Simple como
            <span className="gradient-text"> 1, 2, 3, 4.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            De cero a miles de seguidores reales sin complicaciones técnicas.
            <br />Configura una vez, crece para siempre.
          </motion.p>
        </div>

        {/* Floating shapes */}
        <div className="floating-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
          <div className="shape shape-4" />
        </div>
      </section>

      {/* ==================== STEPS SECTION ==================== */}
      <section className="hiw-steps">
        <div className="steps-container">
          <div className="steps-left">
            <div className="steps-sticky">
              <span className="section-tag">El proceso</span>
              <h2>4 pasos para dominar Instagram</h2>
              <p>Sin conocimientos técnicos. Sin riesgos. Resultados desde la primera semana.</p>

              <div className="steps-nav">
                {steps.map((step, i) => (
                  <button
                    key={i}
                    className={`step-nav-btn ${activeStep === i ? 'active' : ''} color-${step.color}`}
                    onClick={() => setActiveStep(i)}
                  >
                    <span className="step-nav-num">{step.num}</span>
                    <span className="step-nav-title">{step.title}</span>
                    <div className="step-nav-progress" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="steps-right">
            <div className="step-cards-container">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className={`step-card color-${step.color} ${activeStep === i ? 'active' : ''}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: activeStep === i ? 1 : 0.3,
                    x: activeStep === i ? 0 : 30,
                    scale: activeStep === i ? 1 : 0.95
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="step-card-icon">
                    {step.icon}
                  </div>
                  <div className="step-card-content">
                    <span className="step-card-num">{step.num}</span>
                    <h3>{step.title}</h3>
                    <span className="step-card-subtitle">{step.subtitle}</span>
                    <p>{step.desc}</p>
                  </div>
                  <div className="step-card-decoration" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BENTO GRID SECTION ==================== */}
      <section className="hiw-bento">
        <div className="bento-header">
          <span className="section-tag">Características</span>
          <h2>Todo lo que necesitas.<br /><span>Nada que no.</span></h2>
        </div>

        <div className="bento-grid">
          {/* Large Yellow Card - Extraction */}
          <motion.div 
            className="bento-item bento-large bento-yellow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bento-content">
              <h3>Extracción masiva</h3>
              <p>10,000+ perfiles por competidor</p>
            </div>
            <div className="bento-visual">
              <div className="counter-visual">
                <span className="counter-value">
                  <AnimatedCounter end={10847} />
                </span>
                <span className="counter-label">perfiles extraídos</span>
              </div>
              <div className="extraction-animation">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="extraction-dot" style={{ '--i': i }} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Small Green Card - Filters */}
          <motion.div 
            className="bento-item bento-small bento-green"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bento-content">
              <h3>Filtros inteligentes</h3>
              <div className="filter-checks">
                <span>✓ Ubicación</span>
                <span>✓ Bio keywords</span>
                <span>✓ Actividad</span>
              </div>
            </div>
          </motion.div>

          {/* Small Pink Card - Safety */}
          <motion.div 
            className="bento-item bento-small bento-pink"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bento-content">
              <h3>0 Suspensiones</h3>
              <p>Comportamiento humano</p>
            </div>
            <div className="shield-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
          </motion.div>

          {/* Medium Blue Card - Analytics */}
          <motion.div 
            className="bento-item bento-medium bento-blue"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bento-content">
              <h3>Analytics en tiempo real</h3>
              <p>Métricas que importan</p>
            </div>
            <div className="chart-visual">
              <svg viewBox="0 0 200 80" className="mini-chart">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.3)"/>
                    <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M 0 70 Q 30 60 50 50 T 100 30 T 150 20 T 200 10" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="chart-line-animated"
                />
                <path 
                  d="M 0 70 Q 30 60 50 50 T 100 30 T 150 20 T 200 10 L 200 80 L 0 80 Z" 
                  fill="url(#chartGradient)"
                  className="chart-fill-animated"
                />
              </svg>
              <div className="chart-stats">
                <div className="chart-stat">
                  <span className="stat-value">+34%</span>
                  <span className="stat-label">Follow-back</span>
                </div>
                <div className="chart-stat">
                  <span className="stat-value">+847</span>
                  <span className="stat-label">Esta semana</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tiny Yellow Card - 24/7 */}
          <motion.div 
            className="bento-item bento-tiny bento-yellow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.08 }}
          >
            <div className="pulse-container">
              <div className="pulse-dot" />
              <div className="pulse-ring pulse-1" />
              <div className="pulse-ring pulse-2" />
            </div>
            <span className="tiny-label">24/7</span>
          </motion.div>

          {/* Medium Green Card - Speed */}
          <motion.div 
            className="bento-item bento-medium bento-green"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bento-content">
              <h3>Resultados en 7 días</h3>
              <p>Primeros seguidores garantizados</p>
            </div>
            <div className="rocket-visual">
              <div className="rocket-icon">🚀</div>
              <div className="rocket-trail">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="trail-particle" style={{ '--i': i }} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== SECURITY SECTION ==================== */}
      <section className="hiw-security">
        <div className="security-bg" />
        
        <div className="security-content">
          <div className="security-header">
            <span className="section-tag light">Seguridad</span>
            <h2>Tu cuenta está<br /><span>100% protegida.</span></h2>
            <p>Simulamos comportamiento humano real. Instagram no puede distinguir a Attrio de un usuario normal.</p>
          </div>

          <div className="security-grid">
            {securityFeatures.map((feature, i) => (
              <motion.div
                key={i}
                className="security-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <span className="security-icon">{feature.icon}</span>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Animated security visual */}
          <div className="security-visual">
            <div className="shield-container">
              <div className="shield-main">
                <svg viewBox="0 0 80 90" fill="none">
                  <path 
                    d="M40 5 L75 20 V50 C75 70 40 85 40 85 C40 85 5 70 5 50 V20 L40 5Z" 
                    fill="url(#shieldGrad)"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22c55e"/>
                      <stop offset="100%" stopColor="#16a34a"/>
                    </linearGradient>
                  </defs>
                  <polyline 
                    points="25 45 35 55 55 35" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shield-check"
                  />
                </svg>
              </div>
              <div className="shield-orbit">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="orbit-dot" style={{ '--i': i }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TIMELINE VISUAL ==================== */}
      <section className="hiw-timeline">
        <div className="timeline-header">
          <span className="section-tag">Tu progreso</span>
          <h2>Así crece tu cuenta</h2>
        </div>

        <div className="timeline-visual">
          <div className="timeline-track">
            {[
              { week: 'Día 1', value: '+50', event: 'Primeras interacciones' },
              { week: 'Semana 1', value: '+500', event: 'Momentum inicial' },
              { week: 'Semana 2', value: '+1,200', event: 'Crecimiento acelerado' },
              { week: 'Mes 1', value: '+3,000', event: 'Comunidad activa' },
              { week: 'Mes 2', value: '+8,000', event: 'ROI positivo' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="timeline-point"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring' }}
              >
                <div className="point-marker" style={{ '--color': ['#FFE566', '#4ADE80', '#F472B6', '#60A5FA', '#FFE566'][i] }}>
                  <span className="point-value">{item.value}</span>
                </div>
                <div className="point-info">
                  <span className="point-week">{item.week}</span>
                  <span className="point-event">{item.event}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="timeline-line-bg" />
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="hiw-cta">
        <div className="cta-shapes">
          <div className="cta-shape cta-shape-1" />
          <div className="cta-shape cta-shape-2" />
          <div className="cta-shape cta-shape-3" />
        </div>

        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>¿Listo para comenzar?</h2>
          <p>7 días gratis. Sin tarjeta de crédito. Setup en 2 minutos.</p>
          
          <motion.button 
            className="cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Comenzar gratis ahora</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.button>

          <div className="cta-features">
            <span>✓ Sin compromisos</span>
            <span>✓ Cancela cuando quieras</span>
            <span>✓ Soporte en español</span>
          </div>
        </motion.div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default HIW;
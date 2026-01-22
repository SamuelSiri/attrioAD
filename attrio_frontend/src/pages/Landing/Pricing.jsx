import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Pricing.css';
import Header from './Header';
import Footer from './Footer';


const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      tagline: 'Para empezar',
      price: { monthly: 29, annual: 23 },
      color: 'yellow',
      metrics: { accounts: '1', competitors: '3', follows: '1,500' },
      features: ['Auto-follow', 'Auto-like', 'Auto-unfollow', 'Filtros básicos', 'Dashboard', 'Soporte email'],
      notIncluded: ['Story views', 'DM templates', 'Export']
    },
    {
      id: 'growth',
      name: 'Growth',
      tagline: '73% lo eligen',
      price: { monthly: 79, annual: 63 },
      color: 'green',
      popular: true,
      metrics: { accounts: '3', competitors: '10', follows: '5,000' },
      features: ['Todo de Starter', 'Story views', 'Filtros avanzados', 'DM templates', 'Analytics pro', 'Ghost detector', 'Soporte prioritario'],
      notIncluded: ['Meta Ads export', 'API']
    },
    {
      id: 'pro',
      name: 'Pro',
      tagline: 'Para escalar',
      price: { monthly: 149, annual: 119 },
      color: 'pink',
      metrics: { accounts: '5', competitors: '25', follows: '10,000' },
      features: ['Todo de Growth', 'Export CSV', 'Meta Ads export', 'Smart Queue', 'Best Time', 'Competitor Alerts', 'Account manager'],
      notIncluded: []
    },
    {
      id: 'agency',
      name: 'Agency',
      tagline: 'Sin límites',
      price: { monthly: 299, annual: 239 },
      color: 'purple',
      metrics: { accounts: '15', competitors: '∞', follows: '30,000' },
      features: ['Todo de Pro', 'Competidores ∞', 'White label', 'API completa', 'Reportes custom', 'Onboarding', 'SLA', 'Línea directa'],
      notIncluded: []
    }
  ];

  const faqs = [
    { q: '¿Y si me arrepiento?', a: 'Cancelas cuando quieras. Un click, sin llamadas, sin drama.' },
    { q: '¿Mi cuenta está segura?', a: '2 años operando. Cero suspensiones. Proxies residenciales + comportamiento humano.' },
    { q: '¿Cómo pago?', a: 'Tarjeta o PayPal. Factura automática cada mes o año.' },
    { q: '¿Puedo cambiar de plan?', a: 'Sube o baja cuando quieras. Diferencia prorrateada.' },
    { q: '¿Tienen garantía?', a: '7 días. No te convence, te devolvemos todo.' },
    { q: '¿Soporte en español?', a: 'Sí. Humanos reales, respuesta en menos de 4 horas.' }
  ];

  const objections = [
    { 
      objection: '"Ya intenté otras herramientas y no funcionaron"',
      response: 'Nosotros también las probamos. Por eso creamos Attrio. La diferencia está en los filtros inteligentes y el comportamiento humano simulado. No es follow masivo a cuentas random.',
      stat: '34%',
      statLabel: 'tasa de follow-back promedio'
    },
    {
      objection: '"No tengo tiempo para configurar otra herramienta"',
      response: 'Setup en 2 minutos. Literal. Conectas tu cuenta, agregas 3 competidores, y Attrio hace el resto. No hay dashboards complicados ni tutoriales de 2 horas.',
      stat: '2 min',
      statLabel: 'tiempo de configuración'
    },
    {
      objection: '"Me da miedo que me baneen la cuenta"',
      response: 'Llevamos 2 años. Más de 500 negocios. Cero cuentas suspendidas. Usamos proxies residenciales, límites conservadores y delays aleatorios. Instagram no puede distinguirnos de un humano.',
      stat: '0',
      statLabel: 'cuentas suspendidas'
    }
  ];

  const whyNow = [
    { icon: 'clock', text: 'Cada día sin Attrio son seguidores que van a tu competencia' },
    { icon: 'chart', text: 'El algoritmo favorece cuentas que crecen consistentemente' },
    { icon: 'users', text: 'Tu competencia ya está usando automatización (aunque no lo admitan)' },
    { icon: 'zap', text: 'Los primeros 1,000 seguidores son los más difíciles. Attrio los consigue por ti' }
  ];

  return (
    <div className="pricing">
      <Header />
      
      <div className="cursor-glow" style={{ left: mousePos.x, top: mousePos.y }} />

      {/* HERO */}
      <section className="pr-hero">
        <div className="pr-hero-bg" />
        
        <motion.div 
          className="pr-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="pr-badge">
            <span className="badge-dot" />
            Precios simples
          </div>
          
          <h1 className="pr-title">
            <span>Sin trucos.</span>
            <span className="pr-title-accent">Sin sorpresas.</span>
          </h1>
          
          <p className="pr-subtitle">
            7 días gratis en todos los planes. Sin tarjeta. Cancela cuando quieras.
          </p>

          <div className="pr-toggle">
            <button 
              className={`pr-toggle-btn ${!isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(false)}
            >
              Mensual
            </button>
            <button 
              className={`pr-toggle-btn ${isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(true)}
            >
              Anual
              <span className="pr-toggle-save">-20%</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* PLANS */}
      <section className="pr-plans">
        <div className="pr-plans-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              className={`pr-card pr-card-${plan.color} ${plan.popular ? 'pr-card-popular' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              {plan.popular && <div className="pr-card-badge">Más popular</div>}
              
              <div className="pr-card-header">
                <span className="pr-card-tagline">{plan.tagline}</span>
                <h3 className="pr-card-name">{plan.name}</h3>
              </div>

              <div className="pr-card-price">
                <span className="pr-price-currency">$</span>
                <span className="pr-price-amount">{isAnnual ? plan.price.annual : plan.price.monthly}</span>
                <span className="pr-price-period">/mes</span>
              </div>
              
              {isAnnual && (
                <span className="pr-price-billed">${plan.price.annual * 12}/año</span>
              )}

              <div className="pr-card-metrics">
                <div className="pr-metric">
                  <span className="pr-metric-val">{plan.metrics.accounts}</span>
                  <span className="pr-metric-label">cuentas</span>
                </div>
                <div className="pr-metric">
                  <span className="pr-metric-val">{plan.metrics.competitors}</span>
                  <span className="pr-metric-label">competidores</span>
                </div>
                <div className="pr-metric">
                  <span className="pr-metric-val">{plan.metrics.follows}</span>
                  <span className="pr-metric-label">follows</span>
                </div>
              </div>

              <button className="pr-card-btn">Empezar gratis</button>

              <ul className="pr-card-features">
                {plan.features.map((f, j) => (
                  <li key={j}><span className="check">✓</span>{f}</li>
                ))}
                {plan.notIncluded.map((f, j) => (
                  <li key={j} className="not-included"><span className="x">×</span>{f}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="pr-compare">
        <div className="pr-compare-bg" />
        <div className="pr-compare-content">
          <motion.div 
            className="pr-compare-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="intro-tag light">La matemática</span>
            <h2>$79 vs $2,000</h2>
            <p>
              Una agencia cobra $2,000/mes. Un CM freelance, $800.
              <br /><br />
              Attrio trabaja 24/7 por $79. Y no renuncia, no se enferma, 
              y no se distrae con TikTok.
            </p>
          </motion.div>

          <div className="pr-compare-bars">
            {[
              { label: 'Agencia', value: '$2,000', width: '100%' },
              { label: 'CM Freelance', value: '$800', width: '40%' },
              { label: 'Attrio Growth', value: '$79', width: '4%', highlight: true }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className={`pr-bar-item ${item.highlight ? 'pr-bar-highlight' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="pr-bar-info">
                  <span className="pr-bar-label">{item.label}</span>
                  <span className="pr-bar-value">{item.value}<small>/mes</small></span>
                </div>
                <div className="pr-bar-track">
                  <motion.div 
                    className="pr-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>
            ))}
            <div className="pr-bar-savings">Ahorras $1,921/mes</div>
          </div>
        </div>
      </section>

      {/* OBJECTIONS - "Ya sé lo que estás pensando" */}
      <section className="pr-objections">
        <div className="section-intro">
          <span className="intro-tag">Ya sé lo que estás pensando...</span>
          <h2>Déjame adivinar</h2>
        </div>

        <div className="pr-objections-grid">
          {objections.map((obj, i) => (
            <motion.div
              key={i}
              className="pr-objection-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="pr-objection-bubble">
                <span>{obj.objection}</span>
              </div>
              <div className="pr-objection-response">
                <p>{obj.response}</p>
                <div className="pr-objection-stat">
                  <span className="pr-obj-stat-value">{obj.stat}</span>
                  <span className="pr-obj-stat-label">{obj.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REAL TALK - What you're really paying for */}
      <section className="pr-realtalk">
        <div className="pr-realtalk-bg" />
        <div className="pr-realtalk-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="intro-tag light">Hablemos claro</span>
            <h2>No estás pagando por una herramienta</h2>
            <p className="pr-realtalk-sub">Estás pagando por:</p>
          </motion.div>

          <div className="pr-realtalk-grid">
            {[
              { title: 'Tiempo', desc: '8 horas diarias que NO gastas haciendo follow manual', value: '240h', label: 'al mes' },
              { title: 'Clientes', desc: 'Seguidores que se convierten en compradores reales', value: '34%', label: 'conversión' },
              { title: 'Paz mental', desc: 'Cero estrés de "¿estoy creciendo lo suficiente?"', value: '24/7', label: 'automático' },
              { title: 'Ventaja', desc: 'Mientras tu competencia duerme, tú creces', value: '+67', label: 'follows/noche' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="pr-realtalk-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="pr-rt-value">
                  <span>{item.value}</span>
                  <small>{item.label}</small>
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="pr-realtalk-quote"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p>"$79/mes por un empleado que trabaja 24/7, nunca pide vacaciones, y genera clientes mientras duermo. Es la mejor inversión que he hecho."</p>
            <div className="pr-quote-author">
              <div className="pr-quote-avatar">MR</div>
              <div>
                <span className="pr-quote-name">María Rodríguez</span>
                <span className="pr-quote-role">Boutique de ropa</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY NOW - Urgency without being pushy */}
      <section className="pr-whynow">
        <div className="pr-whynow-content">
          <div className="pr-whynow-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="intro-tag">La verdad</span>
              <h2>¿Por qué hoy y no mañana?</h2>
              <p>No te voy a meter presión con "oferta por tiempo limitado". Eso es mentira y lo sabes. Pero sí hay razones reales:</p>
            </motion.div>

            <div className="pr-whynow-list">
              {whyNow.map((item, i) => (
                <motion.div
                  key={i}
                  className="pr-whynow-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="pr-whynow-icon">
                    {item.icon === 'clock' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                    )}
                    {item.icon === 'chart' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
                      </svg>
                    )}
                    {item.icon === 'users' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    )}
                    {item.icon === 'zap' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      </svg>
                    )}
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="pr-whynow-right"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="pr-whynow-calculator">
              <h4>Mientras lees esto...</h4>
              <div className="pr-calc-item">
                <span className="pr-calc-num">~12</span>
                <span className="pr-calc-text">personas siguieron a tu competencia</span>
              </div>
              <div className="pr-calc-item">
                <span className="pr-calc-num">~3</span>
                <span className="pr-calc-text">de esas pudieron ser tus clientes</span>
              </div>
              <div className="pr-calc-item highlight">
                <span className="pr-calc-num">$0</span>
                <span className="pr-calc-text">te costaba evitarlo con el trial gratis</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="pr-guarantee">
        <motion.div 
          className="pr-guarantee-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="pr-guarantee-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9 12 11 14 15 10"/>
            </svg>
          </div>
          <h3>Garantía "Sin Excusas"</h3>
          <p>
            7 días para probar. Si no te convence —por la razón que sea— te devolvemos 
            el 100%. Sin preguntas incómodas, sin formularios eternos, sin "¿por qué te vas?". 
            Un email y listo.
          </p>
          <div className="pr-guarantee-stats">
            <div className="pr-g-stat">
              <span>500+</span>
              <small>negocios activos</small>
            </div>
            <div className="pr-g-stat">
              <span>&lt;2%</span>
              <small>tasa de reembolso</small>
            </div>
            <div className="pr-g-stat">
              <span>4.9/5</span>
              <small>satisfacción</small>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="pr-faq">
        <div className="section-intro">
          <span className="intro-tag">FAQ</span>
          <h2>Lo que todos preguntan</h2>
        </div>

        <div className="pr-faq-grid">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`pr-faq-item ${activeFaq === i ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setActiveFaq(activeFaq === i ? null : i)}
            >
              <div className="pr-faq-q">
                <h4>{faq.q}</h4>
                <div className="pr-faq-icon">
                  <span className="pr-faq-plus" />
                </div>
              </div>
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div
                    className="pr-faq-a"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pr-cta">
        <div className="pr-cta-bg" />
        <motion.div 
          className="pr-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>¿Empezamos?</h2>
          <p>7 días gratis. Setup en 2 minutos. Cancela cuando quieras.</p>
          <motion.button 
            className="pr-cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Crear cuenta gratis</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.button>
          <div className="pr-cta-trust">
            <span>✓ Sin tarjeta</span>
            <span>✓ Soporte en español</span>
            <span>✓ Garantía 7 días</span>
          </div>
        </motion.div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Pricing;
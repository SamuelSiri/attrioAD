import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';
import Header from './Header';
import Footer from './Footer';

const About = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const values = [
    {
      title: 'Funciona o devolvemos',
      desc: 'No creemos en vender humo. 7 días para probar, si no ves resultados, te devolvemos todo.',
      color: 'green'
    },
    {
      title: 'Simple siempre gana',
      desc: 'Si necesitas un tutorial de 2 horas, la herramienta está mal. Setup en 2 minutos o menos.',
      color: 'yellow'
    },
    {
      title: 'Humanos reales',
      desc: 'Cero bots, cero respuestas copiadas. Te responde alguien que entiende Instagram.',
      color: 'pink'
    },
    {
      title: 'Tu cuenta es sagrada',
      desc: 'Preferimos perder un cliente antes que arriesgar su cuenta. Límites conservadores siempre.',
      color: 'purple'
    }
  ];

  const stats = [
    { value: '500+', label: 'negocios confían en nosotros' },
    { value: '2.4M', label: 'leads generados' },
    { value: '0', label: 'cuentas suspendidas' },
    { value: '34%', label: 'tasa de follow-back' }
  ];

  const notList = [
    { no: 'No somos magia', yes: 'Somos consistencia automatizada' },
    { no: 'No vendemos seguidores', yes: 'Atraemos seguidores reales' },
    { no: 'No prometemos 10K en una semana', yes: 'Prometemos crecimiento real' },
    { no: 'No reemplazamos buen contenido', yes: 'Amplificamos tu alcance' },
    { no: 'No funcionamos para todos', yes: 'Funcionamos para negocios serios' }
  ];

  return (
    <div className="about">
      <Header />
      
      <div className="cursor-glow" style={{ left: mousePos.x, top: mousePos.y }} />

      {/* HERO - Big Statement */}
      <section className="ab-hero" ref={heroRef}>
        <motion.div className="ab-hero-bg" style={{ y: heroY }}>
          <div className="ab-hero-gradient" />
          <div className="ab-hero-grid-pattern" />
        </motion.div>
        
        <div className="ab-hero-content">
          <motion.div
            className="ab-hero-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1>
              <span className="ab-hero-line">Creamos Attrio</span>
              <span className="ab-hero-line">porque gastamos</span>
              <span className="ab-hero-line ab-hero-highlight">$3,000 en humo.</span>
            </h1>
          </motion.div>

          <motion.p
            className="ab-hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Una agencia. Tres meses. 200 seguidores falsos.
            <br />
            Ese día decidimos construir algo que realmente funcione.
          </motion.p>

          <motion.div 
            className="ab-hero-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="ab-scroll-line" />
          </motion.div>
        </div>
      </section>

      {/* THE STORY - Cards */}
      <section className="ab-story">
        <div className="ab-story-grid">
          <motion.div 
            className="ab-story-card ab-story-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="ab-card-label">El problema</span>
            <h2>Instagram está diseñado para que NO crezcas</h2>
            <p>
              El algoritmo favorece a quienes ya tienen audiencia. Si empiezas de cero, 
              estás compitiendo con las manos atadas contra cuentas con millones de seguidores.
            </p>
            <p>
              Las opciones tradicionales son caras, lentas, o peligrosas.
              Queríamos una cuarta opción.
            </p>
          </motion.div>

          <motion.div 
            className="ab-story-card ab-story-stat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="ab-big-number">12</span>
            <span className="ab-stat-text">herramientas probamos antes de construir la nuestra</span>
          </motion.div>

          <motion.div 
            className="ab-story-card ab-story-quote"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <blockquote>
              "Si nadie ha construido lo que necesitamos, lo construimos nosotros."
            </blockquote>
            <span className="ab-quote-author">— La mentalidad que nos trajo aquí</span>
          </motion.div>

          <motion.div 
            className="ab-story-card ab-story-result"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="ab-card-label">El resultado</span>
            <div className="ab-result-numbers">
              <div className="ab-result-item">
                <span>6</span>
                <small>meses de desarrollo</small>
              </div>
              <div className="ab-result-item">
                <span>500+</span>
                <small>negocios activos</small>
              </div>
              <div className="ab-result-item">
                <span>0</span>
                <small>cuentas baneadas</small>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VS SECTION */}
      <section className="ab-versus">
        <div className="ab-versus-bg" />
        
        <div className="ab-versus-content">
          <motion.div
            className="ab-versus-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="intro-tag light">Las opciones</span>
            <h2>Elige tu veneno</h2>
            <p>O elige Attrio.</p>
          </motion.div>

          <div className="ab-versus-grid">
            {[
              { 
                title: 'Agencia de marketing', 
                price: '$2,000+/mes',
                items: ['Contratos de 6 meses', 'Resultados "eventualmente"', 'Reuniones interminables', 'Reportes que no entiendes'],
                verdict: 'Para presupuestos infinitos'
              },
              { 
                title: 'Community manager', 
                price: '$800+/mes',
                items: ['Depende de una persona', 'Se enferma, renuncia, desaparece', 'Horario limitado', 'Calidad variable'],
                verdict: 'Para los que les gusta el riesgo'
              },
              { 
                title: 'Hacerlo tú mismo', 
                price: '4+ horas/día',
                items: ['Repetitivo y agotador', 'Inconsistente', 'Quita tiempo de tu negocio', 'Resultados lentos'],
                verdict: 'Para quienes no valoran su tiempo'
              }
            ].map((option, i) => (
              <motion.div
                key={i}
                className="ab-versus-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h4>{option.title}</h4>
                <span className="ab-versus-price">{option.price}</span>
                <ul>
                  {option.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
                <span className="ab-versus-verdict">{option.verdict}</span>
              </motion.div>
            ))}

            <motion.div
              className="ab-versus-card ab-versus-attrio"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="ab-attrio-badge">La cuarta opción</div>
              <h4>Attrio</h4>
              <span className="ab-versus-price">$79/mes</span>
              <ul>
                <li>Automático 24/7</li>
                <li>Comportamiento humano</li>
                <li>Cero suspensiones</li>
                <li>Cancela cuando quieras</li>
              </ul>
              <span className="ab-versus-verdict ab-verdict-good">Para quienes quieren resultados</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="ab-values">
        <div className="ab-values-header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="intro-tag">Nuestras reglas</span>
            <h2>En lo que creemos</h2>
          </motion.div>
        </div>

        <div className="ab-values-grid">
          {values.map((value, i) => (
            <motion.div
              key={i}
              className={`ab-value-card ab-value-${value.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <span className="ab-value-num">0{i + 1}</span>
              <h4>{value.title}</h4>
              <p>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS MARQUEE */}
      <section className="ab-stats">
        <div className="ab-stats-track">
          {[...stats, ...stats].map((stat, i) => (
            <div key={i} className="ab-stat-item">
              <span className="ab-stat-value">{stat.value}</span>
              <span className="ab-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HONESTY - What we're NOT */}
      <section className="ab-honesty">
        <div className="ab-honesty-content">
          <motion.div
            className="ab-honesty-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="intro-tag">Honestidad brutal</span>
            <h2>Lo que NO somos</h2>
            <p>Porque prometer de más es la norma. Nosotros preferimos la verdad.</p>
          </motion.div>

          <div className="ab-honesty-list">
            {notList.map((item, i) => (
              <motion.div
                key={i}
                className="ab-honesty-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="ab-honesty-no">
                  <span className="ab-icon-x">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </span>
                  <span>{item.no}</span>
                </div>
                <div className="ab-honesty-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <div className="ab-honesty-yes">
                  <span className="ab-icon-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span>{item.yes}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="ab-team">
        <div className="ab-team-bg" />
        <motion.div
          className="ab-team-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="intro-tag light">El equipo</span>
          <h2>Pequeño. Enfocado. Obsesionado.</h2>
          <p>
            No somos 200 personas en una oficina de Silicon Valley con ping pong y snacks gratis.
            Somos un equipo pequeño que responde emails, arregla bugs los domingos, y celebra 
            cada vez que un cliente nos cuenta que consiguió su primer cliente por Instagram.
          </p>
          
          <div className="ab-team-grid">
            {[
              { role: 'Desarrollo', count: '2' },
              { role: 'Producto', count: '1' },
              { role: 'Soporte', count: '1' },
              { role: 'Growth', count: '1' }
            ].map((member, i) => (
              <motion.div
                key={i}
                className="ab-team-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="ab-team-count">{member.count}</span>
                <span className="ab-team-role">{member.role}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="ab-cta">
        <div className="ab-cta-bg">
          <div className="ab-cta-gradient" />
        </div>
        
        <motion.div
          className="ab-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>¿Te suena familiar?</h2>
          <p>
            Si llegaste hasta aquí, probablemente tienes el mismo problema que teníamos nosotros.
          </p>
          <motion.button
            className="ab-cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Probar 7 días gratis</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.button>
          <div className="ab-cta-trust">
            <span>Sin tarjeta</span>
            <span>Setup en 2 min</span>
            <span>Soporte en español</span>
          </div>
        </motion.div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default About;
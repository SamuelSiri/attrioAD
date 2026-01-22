import { useState } from 'react';
import './Plan.css';

const Plan = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Current user plan - replace with real data
  const currentPlan = {
    id: 'growth',
    name: 'Growth',
    renewalDate: '15 Feb, 2025',
    daysLeft: 25,
    usage: {
      follows: { used: 1847, limit: 3000 },
      campaigns: { used: 3, limit: 5 },
      competitors: { used: 8, limit: 15 },
    },
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Ideal para comenzar a crecer tu cuenta',
      priceMonthly: 29,
      priceYearly: 290,
      features: [
        { text: '1,000 follows por mes', included: true },
        { text: '2 campañas activas', included: true },
        { text: '5 competidores', included: true },
        { text: 'Filtros básicos', included: true },
        { text: 'Soporte por email', included: true },
        { text: 'Auto-likes', included: false },
        { text: 'Ver stories', included: false },
        { text: 'Exportar a Meta Ads', included: false },
        { text: 'Analytics avanzado', included: false },
        { text: 'API access', included: false },
      ],
      color: 'gray',
    },
    {
      id: 'growth',
      name: 'Growth',
      description: 'Para creadores serios sobre su crecimiento',
      priceMonthly: 59,
      priceYearly: 590,
      popular: true,
      features: [
        { text: '3,000 follows por mes', included: true },
        { text: '5 campañas activas', included: true },
        { text: '15 competidores', included: true },
        { text: 'Filtros avanzados', included: true },
        { text: 'Soporte prioritario', included: true },
        { text: 'Auto-likes', included: true },
        { text: 'Ver stories', included: true },
        { text: 'Exportar a Meta Ads', included: false },
        { text: 'Analytics avanzado', included: false },
        { text: 'API access', included: false },
      ],
      color: 'green',
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Máximo poder para marcas y agencias',
      priceMonthly: 99,
      priceYearly: 990,
      features: [
        { text: '10,000 follows por mes', included: true },
        { text: 'Campañas ilimitadas', included: true },
        { text: '50 competidores', included: true },
        { text: 'Todos los filtros', included: true },
        { text: 'Soporte 24/7', included: true },
        { text: 'Auto-likes', included: true },
        { text: 'Ver stories', included: true },
        { text: 'Exportar a Meta Ads', included: true },
        { text: 'Analytics avanzado', included: true },
        { text: 'API access', included: false },
      ],
      color: 'purple',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Solución personalizada para grandes equipos',
      priceMonthly: null,
      priceYearly: null,
      features: [
        { text: 'Follows ilimitados', included: true },
        { text: 'Campañas ilimitadas', included: true },
        { text: 'Competidores ilimitados', included: true },
        { text: 'Todos los filtros', included: true },
        { text: 'Account manager dedicado', included: true },
        { text: 'Auto-likes', included: true },
        { text: 'Ver stories', included: true },
        { text: 'Exportar a Meta Ads', included: true },
        { text: 'Analytics avanzado', included: true },
        { text: 'API access', included: true },
      ],
      color: 'black',
    },
  ];

  const getPrice = (plan) => {
    if (plan.priceMonthly === null) return null;
    return billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly;
  };

  const getSavings = (plan) => {
    if (plan.priceMonthly === null) return 0;
    const yearlyMonthly = plan.priceYearly / 12;
    return Math.round(((plan.priceMonthly - yearlyMonthly) / plan.priceMonthly) * 100);
  };

  const handleUpgrade = (plan) => {
    setSelectedPlan(plan);
    setShowConfirmModal(true);
  };

  const confirmUpgrade = () => {
    console.log('Upgrading to:', selectedPlan.name);
    setShowConfirmModal(false);
    // Handle payment/upgrade logic
  };

  const getButtonText = (plan) => {
    if (plan.id === currentPlan.id) return 'Plan actual';
    if (plan.priceMonthly === null) return 'Contactar ventas';
    const currentIndex = plans.findIndex(p => p.id === currentPlan.id);
    const planIndex = plans.findIndex(p => p.id === plan.id);
    return planIndex > currentIndex ? 'Upgrade' : 'Downgrade';
  };

  const getButtonClass = (plan) => {
    if (plan.id === currentPlan.id) return 'btn-current';
    if (plan.priceMonthly === null) return 'btn-contact';
    const currentIndex = plans.findIndex(p => p.id === currentPlan.id);
    const planIndex = plans.findIndex(p => p.id === plan.id);
    return planIndex > currentIndex ? 'btn-upgrade' : 'btn-downgrade';
  };

  return (
    <div className="plan-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-text">
          <h1>Mi Plan</h1>
          <p>Gestiona tu suscripción y facturación</p>
        </div>
      </header>

      {/* Current Plan Summary */}
      <div className="current-plan-card">
        <div className="current-plan-header">
          <div className="current-plan-info">
            <span className="current-label">Plan actual</span>
            <h2 className="current-name">{currentPlan.name}</h2>
            <p className="current-renewal">
              Se renueva el {currentPlan.renewalDate}
              <span className="days-badge">{currentPlan.daysLeft} días restantes</span>
            </p>
          </div>
          <div className="current-plan-actions">
            <button className="btn-manage">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              Gestionar facturación
            </button>
            <button className="btn-cancel">Cancelar suscripción</button>
          </div>
        </div>

        <div className="usage-section">
          <h3>Uso este mes</h3>
          <div className="usage-grid">
            <div className="usage-item">
              <div className="usage-header">
                <span className="usage-label">Follows realizados</span>
                <span className="usage-value">
                  {currentPlan.usage.follows.used.toLocaleString()} / {currentPlan.usage.follows.limit.toLocaleString()}
                </span>
              </div>
              <div className="usage-bar">
                <div 
                  className="usage-fill" 
                  style={{ width: `${(currentPlan.usage.follows.used / currentPlan.usage.follows.limit) * 100}%` }}
                />
              </div>
              <span className="usage-percent">
                {Math.round((currentPlan.usage.follows.used / currentPlan.usage.follows.limit) * 100)}% utilizado
              </span>
            </div>

            <div className="usage-item">
              <div className="usage-header">
                <span className="usage-label">Campañas activas</span>
                <span className="usage-value">
                  {currentPlan.usage.campaigns.used} / {currentPlan.usage.campaigns.limit}
                </span>
              </div>
              <div className="usage-bar">
                <div 
                  className="usage-fill" 
                  style={{ width: `${(currentPlan.usage.campaigns.used / currentPlan.usage.campaigns.limit) * 100}%` }}
                />
              </div>
              <span className="usage-percent">
                {Math.round((currentPlan.usage.campaigns.used / currentPlan.usage.campaigns.limit) * 100)}% utilizado
              </span>
            </div>

            <div className="usage-item">
              <div className="usage-header">
                <span className="usage-label">Competidores monitoreados</span>
                <span className="usage-value">
                  {currentPlan.usage.competitors.used} / {currentPlan.usage.competitors.limit}
                </span>
              </div>
              <div className="usage-bar">
                <div 
                  className="usage-fill" 
                  style={{ width: `${(currentPlan.usage.competitors.used / currentPlan.usage.competitors.limit) * 100}%` }}
                />
              </div>
              <span className="usage-percent">
                {Math.round((currentPlan.usage.competitors.used / currentPlan.usage.competitors.limit) * 100)}% utilizado
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Billing Toggle */}
      <div className="billing-toggle-section">
        <h2>Planes disponibles</h2>
        <div className="billing-switcher">
          <button 
            className={`billing-option ${billingCycle === 'monthly' ? 'selected' : ''}`}
            onClick={() => setBillingCycle('monthly')}
          >
            Mensual
          </button>
          <button 
            className={`billing-option ${billingCycle === 'yearly' ? 'selected' : ''}`}
            onClick={() => setBillingCycle('yearly')}
          >
            Anual
            <span className="billing-discount">Ahorra 17%</span>
          </button>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="plans-grid">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`plan-card ${plan.id === currentPlan.id ? 'current' : ''} ${plan.popular ? 'popular' : ''} color-${plan.color}`}
          >
            {plan.popular && <span className="popular-badge">Más popular</span>}
            {plan.id === currentPlan.id && <span className="current-badge">Tu plan</span>}
            
            <div className="plan-header">
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
            </div>

            <div className="plan-pricing">
              {getPrice(plan) !== null ? (
                <>
                  <span className="price-currency">$</span>
                  <span className="price-amount">{getPrice(plan)}</span>
                  <span className="price-period">
                    /{billingCycle === 'monthly' ? 'mes' : 'año'}
                  </span>
                  {billingCycle === 'yearly' && (
                    <span className="price-monthly">
                      ${Math.round(plan.priceYearly / 12)}/mes facturado anual
                    </span>
                  )}
                </>
              ) : (
                <span className="price-custom">Precio personalizado</span>
              )}
            </div>

            <ul className="plan-features">
              {plan.features.map((feature, index) => (
                <li key={index} className={feature.included ? 'included' : 'not-included'}>
                  {feature.included ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>

            <button 
              className={`plan-btn ${getButtonClass(plan)}`}
              onClick={() => plan.id !== currentPlan.id && handleUpgrade(plan)}
              disabled={plan.id === currentPlan.id}
            >
              {getButtonText(plan)}
            </button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Preguntas frecuentes</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>¿Puedo cambiar de plan en cualquier momento?</h4>
            <p>Sí, puedes upgradear o downgradear tu plan cuando quieras. Los cambios se aplican inmediatamente y se ajusta el cobro proporcionalmente.</p>
          </div>
          <div className="faq-item">
            <h4>¿Qué métodos de pago aceptan?</h4>
            <p>Aceptamos todas las tarjetas de crédito y débito principales (Visa, Mastercard, Amex) y PayPal.</p>
          </div>
          <div className="faq-item">
            <h4>¿Hay garantía de devolución?</h4>
            <p>Ofrecemos 14 días de garantía de devolución sin preguntas en todos los planes.</p>
          </div>
          <div className="faq-item">
            <h4>¿Qué pasa si excedo mis límites?</h4>
            <p>Te notificaremos cuando estés cerca del límite. Las campañas se pausarán automáticamente hasta el próximo ciclo o puedes upgradear tu plan.</p>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && selectedPlan && (
        <div className="modal-overlay" onClick={() => setShowConfirmModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowConfirmModal(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="modal-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 12 15 16 10" />
              </svg>
            </div>

            <h2>Confirmar cambio de plan</h2>
            <p>Estás por cambiar de <strong>{currentPlan.name}</strong> a <strong>{selectedPlan.name}</strong></p>

            <div className="modal-summary">
              <div className="summary-row">
                <span>Nuevo plan</span>
                <span>{selectedPlan.name}</span>
              </div>
              <div className="summary-row">
                <span>Precio</span>
                <span>${getPrice(selectedPlan)}/{billingCycle === 'monthly' ? 'mes' : 'año'}</span>
              </div>
              <div className="summary-row">
                <span>Ciclo de facturación</span>
                <span>{billingCycle === 'monthly' ? 'Mensual' : 'Anual'}</span>
              </div>
              <div className="summary-row total">
                <span>Cobro hoy (prorrateado)</span>
                <span>${Math.round(getPrice(selectedPlan) * 0.8)}</span>
              </div>
            </div>

            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => setShowConfirmModal(false)}>
                Cancelar
              </button>
              <button className="btn-primary" onClick={confirmUpgrade}>
                Confirmar y pagar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plan;
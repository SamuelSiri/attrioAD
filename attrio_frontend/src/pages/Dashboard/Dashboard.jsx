import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const stats = [
    { label: 'Nuevos Seguidores', value: '+2,847', change: '+12.5%', type: 'positive', color: 'green' },
    { label: 'Tasa Followback', value: '34.2%', change: '+2.1%', type: 'positive', color: 'blue' },
    { label: 'Follows Realizados', value: '8,341', change: '+847', type: 'neutral', color: 'purple' },
    { label: 'Likes Enviados', value: '12,493', change: '+1,234', type: 'neutral', color: 'pink' },
    { label: 'Stories Vistos', value: '3,892', change: '+456', type: 'neutral', color: 'orange' },
    { label: 'Campanas Activas', value: '3', change: 'En vivo', type: 'active', color: 'yellow' },
  ];

  const recentActivity = [
    { type: 'follow', user: '@carlos_fitness', time: 'Hace 2 min', campaign: 'Fitness Nicho' },
    { type: 'follow', user: '@maria_yoga', time: 'Hace 5 min', campaign: 'Fitness Nicho' },
    { type: 'like', user: '@foodie_mx', time: 'Hace 8 min', campaign: 'Food & Lifestyle' },
    { type: 'story', user: '@tech_startup', time: 'Hace 12 min', campaign: 'Tech Entrepreneurs' },
    { type: 'follow', user: '@travel_lover', time: 'Hace 15 min', campaign: 'Food & Lifestyle' },
    { type: 'like', user: '@lifestyle_co', time: 'Hace 18 min', campaign: 'Food & Lifestyle' },
  ];

  const campaigns = [
    { name: 'Fitness Nicho', todayActions: 42, followers: '+847', rate: '38%', progress: 78 },
    { name: 'Tech Entrepreneurs', todayActions: 28, followers: '+623', rate: '32%', progress: 65 },
    { name: 'Food & Lifestyle', todayActions: 35, followers: '+412', rate: '29%', progress: 45 },
  ];

  const topCompetitors = [
    { name: '@fitnessguru', followers: '125K', extracted: '8,420', lastExtract: 'Hace 2h' },
    { name: '@techmasters', followers: '89K', extracted: '5,230', lastExtract: 'Hace 5h' },
    { name: '@foodielife', followers: '67K', extracted: '3,890', lastExtract: 'Hace 1d' },
  ];

  const chartData = [
    { month: 'Ene', gained: 420 },
    { month: 'Feb', gained: 380 },
    { month: 'Mar', gained: 520 },
    { month: 'Abr', gained: 450 },
    { month: 'May', gained: 680 },
    { month: 'Jun', gained: 590 },
    { month: 'Jul', gained: 720 },
    { month: 'Ago', gained: 650 },
    { month: 'Sep', gained: 810 },
    { month: 'Oct', gained: 540 },
    { month: 'Nov', gained: 730 },
    { month: 'Dic', gained: 620 },
  ];

  const maxValue = Math.max(...chartData.map(d => d.gained));

  const getActivityIcon = (type) => {
    switch (type) {
      case 'follow':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <line x1="20" y1="8" x2="20" y2="14" />
            <line x1="23" y1="11" x2="17" y2="11" />
          </svg>
        );
      case 'like':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        );
      case 'story':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Bienvenido de vuelta</h1>
          <p>Aqui esta el resumen de tu crecimiento en Instagram</p>
        </div>
        <div className="header-right">
          <div className="time-selector">
            {['24h', '7d', '30d', '90d'].map((range) => (
              <button
                key={range}
                className={`time-btn ${timeRange === range ? 'active' : ''}`}
                onClick={() => setTimeRange(range)}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Stats Grid */}
      <section className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card stat-${stat.color}`}>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-value">{stat.value}</span>
            <span className={`stat-change ${stat.type}`}>
              {stat.type === 'active' && <span className="active-dot"></span>}
              {stat.change}
            </span>
          </div>
        ))}
      </section>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Left Column */}
        <div className="content-left">
          {/* Chart */}
          <section className="chart-card">
            <div className="card-header">
              <h2>Crecimiento de Seguidores</h2>
              <div className="chart-legend">
                <span className="legend-item">
                  <span className="dot green"></span>
                  Ganados
                </span>
                <span className="legend-item">
                  <span className="dot gray"></span>
                  Perdidos
                </span>
              </div>
            </div>
            <div className="chart-area">
              {chartData.map((data, i) => (
                <div key={i} className="chart-column">
                  <div className="bar-wrapper">
                    <span className="bar-value">{data.gained}</span>
                    <div 
                      className="bar" 
                      style={{ height: `${(data.gained / maxValue) * 100}%` }}
                    ></div>
                  </div>
                  <span className="bar-label">{data.month}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Activity */}
          <section className="activity-card">
            <div className="card-header">
              <h2>Actividad Reciente</h2>
              <div className="live-badge">
                <span className="pulse"></span>
                En vivo
              </div>
            </div>
            <div className="activity-list">
              {recentActivity.map((item, i) => (
                <div key={i} className={`activity-item ${item.type}`}>
                  <div className="activity-icon">{getActivityIcon(item.type)}</div>
                  <div className="activity-info">
                    <span className="activity-user">{item.user}</span>
                    <span className="activity-type">
                      {item.type === 'follow' && 'Nuevo follow'}
                      {item.type === 'like' && 'Like enviado'}
                      {item.type === 'story' && 'Story visto'}
                    </span>
                  </div>
                  <span className="activity-campaign">{item.campaign}</span>
                  <span className="activity-time">{item.time}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="content-right">
          {/* Campaigns */}
          <section className="campaigns-card">
            <div className="card-header">
              <h2>Campanas Activas</h2>
              <Link to="/dashboard/campaigns" className="card-link">Ver todas</Link>
            </div>
            <div className="campaigns-list">
              {campaigns.map((c, i) => (
                <div key={i} className="campaign-item">
                  <div className="campaign-top">
                    <div>
                      <span className="campaign-name">{c.name}</span>
                      <span className="campaign-actions">{c.todayActions} acciones hoy</span>
                    </div>
                    <div className="campaign-live">
                      <span className="live-dot"></span>
                      Activa
                    </div>
                  </div>
                  <div className="campaign-stats">
                    <div className="cstat">
                      <span className="cstat-value">{c.followers}</span>
                      <span className="cstat-label">seguidores</span>
                    </div>
                    <div className="cstat">
                      <span className="cstat-value">{c.rate}</span>
                      <span className="cstat-label">conversion</span>
                    </div>
                    <div className="cstat">
                      <span className="cstat-value">{c.progress}%</span>
                      <span className="cstat-label">progreso</span>
                    </div>
                  </div>
                  <div className="campaign-bar">
                    <div className="campaign-fill" style={{ width: `${c.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Competitors */}
          <section className="competitors-card">
            <div className="card-header">
              <h2>Top Competidores</h2>
              <Link to="/dashboard/competitors" className="card-link">Gestionar</Link>
            </div>
            <div className="competitors-list">
              {topCompetitors.map((c, i) => (
                <div key={i} className="competitor-item">
                  <span className="competitor-rank">{i + 1}</span>
                  <div className="competitor-info">
                    <span className="competitor-name">{c.name}</span>
                    <span className="competitor-followers">{c.followers} seguidores</span>
                  </div>
                  <div className="competitor-extracted">
                    <span className="extracted-num">{c.extracted}</span>
                    <span className="extracted-label">extraidos</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Quick Actions - Bottom with Solid Colors */}
      <section className="quick-actions">
        <h3>Acciones Rapidas</h3>
        <div className="actions-row">
          <Link to="/dashboard/campaigns" className="qaction yellow">
            <div className="qaction-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <span>Nueva Campana</span>
          </Link>
          <Link to="/dashboard/competitors" className="qaction green">
            <div className="qaction-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
            <span>Agregar Competidor</span>
          </Link>
          <Link to="/dashboard/audience" className="qaction pink">
            <div className="qaction-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
            </div>
            <span>Configurar Filtros</span>
          </Link>
          <Link to="/dashboard/analytics" className="qaction blue">
            <div className="qaction-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
            <span>Exportar Datos</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
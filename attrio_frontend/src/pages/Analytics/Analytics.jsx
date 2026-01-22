import { useState } from 'react';
import './Analytics.css';

const Analytics = () => {
  const [dateRange, setDateRange] = useState('7d');
  const [selectedCampaign, setSelectedCampaign] = useState('all');

  const dateRanges = [
    { id: '7d', label: '7 días' },
    { id: '14d', label: '14 días' },
    { id: '30d', label: '30 días' },
    { id: '90d', label: '90 días' },
  ];

  const campaigns = [
    { id: 'all', name: 'Todas las campañas' },
    { id: '1', name: 'Madres Santo Domingo' },
    { id: '2', name: 'Fitness Enthusiasts' },
    { id: '3', name: 'Emprendedores RD' },
  ];

  const overviewStats = {
    followers: { current: 1247, previous: 1089, change: 14.5 },
    following: { current: 892, previous: 756, change: 18.0 },
    followbacks: { current: 687, previous: 589, change: 16.6 },
    rate: { current: 77, previous: 72, change: 6.9 },
    engagement: { current: 4.2, previous: 3.8, change: 10.5 },
    reach: { current: 12400, previous: 9800, change: 26.5 },
  };

  const growthData = [
    { date: '15 Ene', followers: 1089, following: 756, followbacks: 589 },
    { date: '16 Ene', followers: 1112, following: 782, followbacks: 612 },
    { date: '17 Ene', followers: 1134, following: 805, followbacks: 628 },
    { date: '18 Ene', followers: 1156, following: 831, followbacks: 645 },
    { date: '19 Ene', followers: 1189, following: 854, followbacks: 661 },
    { date: '20 Ene', followers: 1218, following: 873, followbacks: 674 },
    { date: '21 Ene', followers: 1247, following: 892, followbacks: 687 },
  ];

  const campaignPerformance = [
    { 
      name: 'Madres Santo Domingo', 
      follows: 234, 
      followbacks: 89, 
      rate: 38,
      likes: 512,
      status: 'active',
      trend: 'up',
    },
    { 
      name: 'Fitness Enthusiasts', 
      follows: 156, 
      followbacks: 52, 
      rate: 33,
      likes: 289,
      status: 'active',
      trend: 'up',
    },
    { 
      name: 'Emprendedores RD', 
      follows: 89, 
      followbacks: 34, 
      rate: 38,
      likes: 0,
      status: 'paused',
      trend: 'neutral',
    },
    { 
      name: 'Campaña Navidad', 
      follows: 500, 
      followbacks: 187, 
      rate: 37,
      likes: 1250,
      status: 'completed',
      trend: 'neutral',
    },
  ];

  const bestTimes = [
    { hour: '06:00', mon: 12, tue: 8, wed: 15, thu: 10, fri: 14, sat: 22, sun: 18 },
    { hour: '08:00', mon: 28, tue: 32, wed: 25, thu: 30, fri: 27, sat: 35, sun: 30 },
    { hour: '10:00', mon: 35, tue: 38, wed: 42, thu: 36, fri: 40, sat: 28, sun: 25 },
    { hour: '12:00', mon: 45, tue: 48, wed: 52, thu: 47, fri: 50, sat: 38, sun: 32 },
    { hour: '14:00', mon: 38, tue: 42, wed: 45, thu: 40, fri: 43, sat: 30, sun: 28 },
    { hour: '16:00', mon: 32, tue: 35, wed: 38, thu: 34, fri: 36, sat: 25, sun: 22 },
    { hour: '18:00', mon: 48, tue: 52, wed: 55, thu: 50, fri: 53, sat: 42, sun: 38 },
    { hour: '20:00', mon: 55, tue: 58, wed: 62, thu: 56, fri: 60, sat: 48, sun: 45 },
    { hour: '22:00', mon: 42, tue: 45, wed: 48, thu: 44, fri: 47, sat: 52, sun: 48 },
  ];

  const topSources = [
    { source: '@gymshark_rd', follows: 156, followbacks: 62, rate: 40, quality: 88 },
    { source: '@maaborns', follows: 134, followbacks: 51, rate: 38, quality: 85 },
    { source: '@empikiRD', follows: 89, followbacks: 34, rate: 38, quality: 82 },
    { source: '@crossfitsd', follows: 78, followbacks: 28, rate: 36, quality: 79 },
    { source: '@bebemundo_rd', follows: 65, followbacks: 22, rate: 34, quality: 76 },
  ];

  const recentActivity = [
    { type: 'followback', user: '@mariafitness_rd', time: '2 min', campaign: 'Fitness Enthusiasts' },
    { type: 'follow', user: '@carlos_business', time: '5 min', campaign: 'Emprendedores RD' },
    { type: 'like', user: '@laura.lifestyle', time: '8 min', campaign: 'Madres Santo Domingo' },
    { type: 'followback', user: '@juanfitpro', time: '12 min', campaign: 'Fitness Enthusiasts' },
    { type: 'follow', user: '@negociosrd', time: '15 min', campaign: 'Emprendedores RD' },
    { type: 'story', user: '@sofia_wellness', time: '18 min', campaign: 'Fitness Enthusiasts' },
    { type: 'followback', user: '@pedro_coach', time: '22 min', campaign: 'Fitness Enthusiasts' },
    { type: 'like', user: '@mama_moderna', time: '25 min', campaign: 'Madres Santo Domingo' },
  ];

  const getHeatmapColor = (value) => {
    if (value >= 55) return 'heat-5';
    if (value >= 45) return 'heat-4';
    if (value >= 35) return 'heat-3';
    if (value >= 25) return 'heat-2';
    if (value >= 15) return 'heat-1';
    return 'heat-0';
  };

  const getActivityIcon = (type) => {
    switch(type) {
      case 'follow':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <line x1="20" y1="8" x2="20" y2="14" />
            <line x1="23" y1="11" x2="17" y2="11" />
          </svg>
        );
      case 'followback':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'like':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    <div className="analytics-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-text">
          <h1>Analytics</h1>
          <p>Monitorea el rendimiento de tus campañas y crecimiento</p>
        </div>
        <div className="header-controls">
          <select 
            className="select-campaign"
            value={selectedCampaign}
            onChange={(e) => setSelectedCampaign(e.target.value)}
          >
            {campaigns.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <div className="date-range-selector">
            {dateRanges.map(range => (
              <button
                key={range.id}
                className={`range-btn ${dateRange === range.id ? 'active' : ''}`}
                onClick={() => setDateRange(range.id)}
              >
                {range.label}
              </button>
            ))}
          </div>
          <button className="btn-export">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Exportar Reporte
          </button>
        </div>
      </header>

      {/* Overview Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-title">Seguidores</span>
            <span className={`stat-change ${overviewStats.followers.change >= 0 ? 'positive' : 'negative'}`}>
              {overviewStats.followers.change >= 0 ? '+' : ''}{overviewStats.followers.change}%
            </span>
          </div>
          <div className="stat-value">{overviewStats.followers.current.toLocaleString()}</div>
          <div className="stat-comparison">vs {overviewStats.followers.previous.toLocaleString()} anterior</div>
          <div className="stat-chart mini-chart followers"></div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-title">Seguidos</span>
            <span className={`stat-change ${overviewStats.following.change >= 0 ? 'positive' : 'negative'}`}>
              {overviewStats.following.change >= 0 ? '+' : ''}{overviewStats.following.change}%
            </span>
          </div>
          <div className="stat-value">{overviewStats.following.current.toLocaleString()}</div>
          <div className="stat-comparison">vs {overviewStats.following.previous.toLocaleString()} anterior</div>
          <div className="stat-chart mini-chart following"></div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-title">Followbacks</span>
            <span className={`stat-change ${overviewStats.followbacks.change >= 0 ? 'positive' : 'negative'}`}>
              {overviewStats.followbacks.change >= 0 ? '+' : ''}{overviewStats.followbacks.change}%
            </span>
          </div>
          <div className="stat-value">{overviewStats.followbacks.current.toLocaleString()}</div>
          <div className="stat-comparison">vs {overviewStats.followbacks.previous.toLocaleString()} anterior</div>
          <div className="stat-chart mini-chart followbacks"></div>
        </div>

        <div className="stat-card highlight">
          <div className="stat-header">
            <span className="stat-title">Tasa Followback</span>
            <span className={`stat-change ${overviewStats.rate.change >= 0 ? 'positive' : 'negative'}`}>
              {overviewStats.rate.change >= 0 ? '+' : ''}{overviewStats.rate.change}%
            </span>
          </div>
          <div className="stat-value">{overviewStats.rate.current}%</div>
          <div className="stat-comparison">vs {overviewStats.rate.previous}% anterior</div>
          <div className="stat-chart mini-chart rate"></div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-title">Engagement</span>
            <span className={`stat-change ${overviewStats.engagement.change >= 0 ? 'positive' : 'negative'}`}>
              {overviewStats.engagement.change >= 0 ? '+' : ''}{overviewStats.engagement.change}%
            </span>
          </div>
          <div className="stat-value">{overviewStats.engagement.current}%</div>
          <div className="stat-comparison">vs {overviewStats.engagement.previous}% anterior</div>
          <div className="stat-chart mini-chart engagement"></div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-title">Alcance</span>
            <span className={`stat-change ${overviewStats.reach.change >= 0 ? 'positive' : 'negative'}`}>
              {overviewStats.reach.change >= 0 ? '+' : ''}{overviewStats.reach.change}%
            </span>
          </div>
          <div className="stat-value">{(overviewStats.reach.current / 1000).toFixed(1)}K</div>
          <div className="stat-comparison">vs {(overviewStats.reach.previous / 1000).toFixed(1)}K anterior</div>
          <div className="stat-chart mini-chart reach"></div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="analytics-grid">
        {/* Growth Chart */}
        <div className="analytics-card growth-card">
          <div className="card-header">
            <h3>Crecimiento</h3>
            <div className="chart-legend">
              <span className="legend-item followers">
                <span className="legend-dot"></span>
                Seguidores
              </span>
              <span className="legend-item following">
                <span className="legend-dot"></span>
                Siguiendo
              </span>
              <span className="legend-item followbacks">
                <span className="legend-dot"></span>
                Followbacks
              </span>
            </div>
          </div>
          <div className="growth-chart">
            <div className="chart-y-axis">
              <span>1.3K</span>
              <span>1.2K</span>
              <span>1.1K</span>
              <span>1.0K</span>
              <span>900</span>
              <span>800</span>
              <span>700</span>
              <span>600</span>
            </div>
            <div className="chart-content">
              <div className="chart-grid">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="grid-line"></div>
                ))}
              </div>
              <div className="chart-bars">
                {growthData.map((day, i) => (
                  <div key={i} className="bar-group">
                    <div className="bar-stack">
                      <div 
                        className="bar followers" 
                        style={{ height: `${((day.followers - 600) / 700) * 100}%` }}
                        title={`Seguidores: ${day.followers}`}
                      ></div>
                      <div 
                        className="bar following" 
                        style={{ height: `${((day.following - 600) / 700) * 100}%` }}
                        title={`Siguiendo: ${day.following}`}
                      ></div>
                      <div 
                        className="bar followbacks" 
                        style={{ height: `${((day.followbacks - 400) / 700) * 100}%` }}
                        title={`Followbacks: ${day.followbacks}`}
                      ></div>
                    </div>
                    <span className="bar-label">{day.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Performance */}
        <div className="analytics-card">
          <div className="card-header">
            <h3>Rendimiento por Campaña</h3>
          </div>
          <div className="campaign-table">
            <div className="campaign-table-header">
              <span>Campaña</span>
              <span>Follows</span>
              <span>Followbacks</span>
              <span>Tasa</span>
              <span>Likes</span>
            </div>
            {campaignPerformance.map((campaign, i) => (
              <div key={i} className="campaign-table-row">
                <div className="campaign-name">
                  <span className={`status-dot ${campaign.status}`}></span>
                  {campaign.name}
                </div>
                <span className="campaign-stat">{campaign.follows}</span>
                <span className="campaign-stat">{campaign.followbacks}</span>
                <span className="campaign-stat highlight">{campaign.rate}%</span>
                <span className="campaign-stat">{campaign.likes}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Best Times Heatmap */}
        <div className="analytics-card heatmap-card">
          <div className="card-header">
            <h3>Mejores Horarios</h3>
            <span className="card-subtitle">Tasa de followback por hora y día</span>
          </div>
          <div className="heatmap">
            <div className="heatmap-header">
              <span></span>
              <span>Lun</span>
              <span>Mar</span>
              <span>Mié</span>
              <span>Jue</span>
              <span>Vie</span>
              <span>Sáb</span>
              <span>Dom</span>
            </div>
            {bestTimes.map((row, i) => (
              <div key={i} className="heatmap-row">
                <span className="heatmap-hour">{row.hour}</span>
                <div className={`heatmap-cell ${getHeatmapColor(row.mon)}`} title={`Lun ${row.hour}: ${row.mon}%`}>{row.mon}</div>
                <div className={`heatmap-cell ${getHeatmapColor(row.tue)}`} title={`Mar ${row.hour}: ${row.tue}%`}>{row.tue}</div>
                <div className={`heatmap-cell ${getHeatmapColor(row.wed)}`} title={`Mié ${row.hour}: ${row.wed}%`}>{row.wed}</div>
                <div className={`heatmap-cell ${getHeatmapColor(row.thu)}`} title={`Jue ${row.hour}: ${row.thu}%`}>{row.thu}</div>
                <div className={`heatmap-cell ${getHeatmapColor(row.fri)}`} title={`Vie ${row.hour}: ${row.fri}%`}>{row.fri}</div>
                <div className={`heatmap-cell ${getHeatmapColor(row.sat)}`} title={`Sáb ${row.hour}: ${row.sat}%`}>{row.sat}</div>
                <div className={`heatmap-cell ${getHeatmapColor(row.sun)}`} title={`Dom ${row.hour}: ${row.sun}%`}>{row.sun}</div>
              </div>
            ))}
            <div className="heatmap-legend">
              <span>Menor</span>
              <div className="legend-scale">
                <span className="heat-0"></span>
                <span className="heat-1"></span>
                <span className="heat-2"></span>
                <span className="heat-3"></span>
                <span className="heat-4"></span>
                <span className="heat-5"></span>
              </div>
              <span>Mayor</span>
            </div>
          </div>
        </div>

        {/* Top Sources */}
        <div className="analytics-card">
          <div className="card-header">
            <h3>Mejores Fuentes</h3>
            <span className="card-subtitle">Competidores con mejor conversión</span>
          </div>
          <div className="sources-list">
            {topSources.map((source, i) => (
              <div key={i} className="source-item">
                <div className="source-rank">#{i + 1}</div>
                <div className="source-info">
                  <span className="source-name">{source.source}</span>
                  <div className="source-stats">
                    <span>{source.follows} follows</span>
                    <span className="dot">·</span>
                    <span>{source.followbacks} followbacks</span>
                  </div>
                </div>
                <div className="source-metrics">
                  <div className="metric">
                    <span className="metric-value">{source.rate}%</span>
                    <span className="metric-label">Tasa</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">{source.quality}</span>
                    <span className="metric-label">Calidad</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="analytics-card activity-card">
          <div className="card-header">
            <h3>Actividad Reciente</h3>
            <button className="btn-text-sm">Ver todo</button>
          </div>
          <div className="activity-list">
            {recentActivity.map((activity, i) => (
              <div key={i} className="activity-item">
                <div className={`activity-icon ${activity.type}`}>
                  {getActivityIcon(activity.type)}
                </div>
                <div className="activity-content">
                  <span className="activity-user">{activity.user}</span>
                  <span className="activity-type">
                    {activity.type === 'follow' && 'Seguido'}
                    {activity.type === 'followback' && 'Te siguió de vuelta'}
                    {activity.type === 'like' && 'Like enviado'}
                    {activity.type === 'story' && 'Story vista'}
                  </span>
                </div>
                <div className="activity-meta">
                  <span className="activity-campaign">{activity.campaign}</span>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div className="analytics-card insights-card">
          <div className="card-header">
            <h3>Insights</h3>
          </div>
          <div className="insights-list">
            <div className="insight-item positive">
              <div className="insight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div className="insight-content">
                <strong>Tu mejor día es el miércoles</strong>
                <p>Los miércoles a las 20:00 tienes un 62% de tasa de followback, 15% más que el promedio.</p>
              </div>
            </div>
            <div className="insight-item positive">
              <div className="insight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="insight-content">
                <strong>@gymshark_rd es tu mejor fuente</strong>
                <p>Los seguidores de este competidor tienen 40% de conversión, 8% más que el promedio.</p>
              </div>
            </div>
            <div className="insight-item warning">
              <div className="insight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div className="insight-content">
                <strong>Evita los domingos temprano</strong>
                <p>Los domingos antes de las 10:00 tienen solo 18% de conversión. Considera pausar en ese horario.</p>
              </div>
            </div>
            <div className="insight-item info">
              <div className="insight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <div className="insight-content">
                <strong>Aumenta likes por follow</strong>
                <p>Los perfiles con 3 likes antes del follow tienen 12% más de conversión que con 1 like.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
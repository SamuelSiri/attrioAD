import { useState } from 'react';
import './Inbox.css';

const Inbox = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [showTemplates, setShowTemplates] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'all', label: 'Todos', count: 156 },
    { id: 'unread', label: 'Sin leer', count: 12 },
    { id: 'leads', label: 'Leads', count: 34 },
    { id: 'customers', label: 'Clientes', count: 28 },
    { id: 'scheduled', label: 'Programados', count: 5 },
  ];

  const conversations = [
    {
      id: 1,
      user: {
        username: '@mariafitness_rd',
        fullName: 'María García',
        avatar: null,
        isVerified: false,
        followers: 2341,
      },
      lastMessage: {
        text: 'Hola! Me interesa saber más sobre sus servicios de entrenamiento personalizado',
        time: '10:32 AM',
        isFromUser: true,
        isRead: false,
      },
      unreadCount: 2,
      tags: ['lead', 'hot'],
      source: 'Campaña Fitness',
      followedAt: '2024-01-18',
      notes: 'Interesada en plan mensual',
    },
    {
      id: 2,
      user: {
        username: '@carlos_emprendedor',
        fullName: 'Carlos Méndez',
        avatar: null,
        isVerified: true,
        followers: 4521,
      },
      lastMessage: {
        text: 'Gracias por la información! Les escribo la próxima semana para confirmar',
        time: '9:15 AM',
        isFromUser: true,
        isRead: true,
      },
      unreadCount: 0,
      tags: ['customer'],
      source: 'Campaña Emprendedores',
      followedAt: '2024-01-15',
      notes: 'Cliente desde enero, plan premium',
    },
    {
      id: 3,
      user: {
        username: '@laura.lifestyle',
        fullName: 'Laura Rodríguez',
        avatar: null,
        isVerified: false,
        followers: 1876,
      },
      lastMessage: {
        text: 'Hola Laura! Gracias por seguirnos. Tenemos una oferta especial para ti...',
        time: 'Ayer',
        isFromUser: false,
        isRead: true,
      },
      unreadCount: 0,
      tags: ['lead'],
      source: 'Campaña Madres',
      followedAt: '2024-01-20',
      notes: '',
    },
    {
      id: 4,
      user: {
        username: '@juanfitpro',
        fullName: 'Juan Pérez',
        avatar: null,
        isVerified: false,
        followers: 3245,
      },
      lastMessage: {
        text: 'Perfecto, entonces quedamos así. Muchas gracias!',
        time: 'Ayer',
        isFromUser: true,
        isRead: true,
      },
      unreadCount: 0,
      tags: ['customer', 'vip'],
      source: 'Campaña Fitness',
      followedAt: '2024-01-10',
      notes: 'Cliente VIP, referido 3 personas',
    },
    {
      id: 5,
      user: {
        username: '@sofia_wellness',
        fullName: 'Sofía Martínez',
        avatar: null,
        isVerified: false,
        followers: 1523,
      },
      lastMessage: {
        text: 'Cuáles son los horarios disponibles?',
        time: '18 Ene',
        isFromUser: true,
        isRead: false,
      },
      unreadCount: 1,
      tags: ['lead', 'warm'],
      source: 'Campaña Fitness',
      followedAt: '2024-01-16',
      notes: 'Preguntó por yoga',
    },
    {
      id: 6,
      user: {
        username: '@negociosrd',
        fullName: 'Negocios RD',
        avatar: null,
        isVerified: true,
        followers: 8923,
      },
      lastMessage: {
        text: 'Gracias por su interés en colaborar',
        time: '17 Ene',
        isFromUser: false,
        isRead: true,
      },
      unreadCount: 0,
      tags: ['partner'],
      source: 'Orgánico',
      followedAt: '2024-01-12',
      notes: 'Posible colaboración',
    },
  ];

  const templates = [
    {
      id: 1,
      name: 'Bienvenida nuevo seguidor',
      text: 'Hola {nombre}! 👋 Gracias por seguirnos. Somos [tu negocio] y nos especializamos en [servicio]. ¿Te gustaría saber más?',
      usage: 234,
    },
    {
      id: 2,
      name: 'Oferta especial',
      text: 'Hola {nombre}! Tenemos una oferta especial para nuevos seguidores: 20% de descuento en tu primera compra. ¿Te interesa?',
      usage: 156,
    },
    {
      id: 3,
      name: 'Seguimiento lead',
      text: 'Hola {nombre}! Vi que estabas interesado/a en nuestros servicios. ¿Tienes alguna pregunta? Estoy aquí para ayudarte.',
      usage: 89,
    },
    {
      id: 4,
      name: 'Agradecimiento compra',
      text: 'Hola {nombre}! Gracias por tu compra. Esperamos que disfrutes tu [producto]. Si tienes alguna pregunta, no dudes en escribirnos.',
      usage: 67,
    },
  ];

  const scheduledMessages = [
    {
      id: 1,
      recipient: '@mariafitness_rd',
      text: 'Hola María! Solo quería dar seguimiento...',
      scheduledFor: '2024-01-22 10:00',
      template: 'Seguimiento lead',
    },
    {
      id: 2,
      recipient: '@sofia_wellness',
      text: 'Hola Sofía! Los horarios disponibles son...',
      scheduledFor: '2024-01-22 14:00',
      template: null,
    },
  ];

  const messages = selectedConversation ? [
    {
      id: 1,
      text: 'Hola! Gracias por seguirnos 🙌',
      time: '10:00 AM',
      isFromUser: false,
      status: 'read',
    },
    {
      id: 2,
      text: 'Hola! Me interesa saber más sobre sus servicios de entrenamiento personalizado',
      time: '10:32 AM',
      isFromUser: true,
      status: 'delivered',
    },
    {
      id: 3,
      text: 'Claro! Ofrecemos planes personalizados según tus objetivos. ¿Qué tipo de entrenamiento te interesa?',
      time: '10:35 AM',
      isFromUser: false,
      status: 'read',
    },
    {
      id: 4,
      text: 'Me gustaría algo enfocado en fuerza y acondicionamiento',
      time: '10:40 AM',
      isFromUser: true,
      status: 'delivered',
    },
  ] : [];

  const getTagStyle = (tag) => {
    const styles = {
      lead: { bg: '#dbeafe', color: '#1d4ed8' },
      hot: { bg: '#fee2e2', color: '#dc2626' },
      warm: { bg: '#fef3c7', color: '#b45309' },
      customer: { bg: '#dcfce7', color: '#15803d' },
      vip: { bg: '#f3e8ff', color: '#7c3aed' },
      partner: { bg: '#fce7f3', color: '#be185d' },
    };
    return styles[tag] || { bg: '#f3f4f6', color: '#6b7280' };
  };

  const filteredConversations = conversations.filter(conv => {
    if (activeTab === 'unread') return conv.unreadCount > 0;
    if (activeTab === 'leads') return conv.tags.includes('lead');
    if (activeTab === 'customers') return conv.tags.includes('customer');
    if (activeTab === 'scheduled') return false;
    return true;
  });

  const ConversationList = () => (
    <div className="conversations-panel">
      {/* Search */}
      <div className="conversations-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Buscar conversación..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Tabs */}
      <div className="conversations-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`conv-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {tab.count > 0 && <span className="tab-badge">{tab.count}</span>}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="conversations-list">
        {activeTab === 'scheduled' ? (
          <div className="scheduled-list">
            {scheduledMessages.map(msg => (
              <div key={msg.id} className="scheduled-item">
                <div className="scheduled-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="scheduled-content">
                  <span className="scheduled-recipient">{msg.recipient}</span>
                  <span className="scheduled-preview">{msg.text}</span>
                  <span className="scheduled-time">{msg.scheduledFor}</span>
                </div>
                <div className="scheduled-actions">
                  <button className="btn-icon-sm" title="Editar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </button>
                  <button className="btn-icon-sm danger" title="Cancelar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          filteredConversations.map(conv => (
            <div
              key={conv.id}
              className={`conversation-item ${conv.unreadCount > 0 ? 'unread' : ''} ${selectedConversation?.id === conv.id ? 'selected' : ''}`}
              onClick={() => setSelectedConversation(conv)}
            >
              <div className="conv-avatar">
                {conv.user.avatar ? (
                  <img src={conv.user.avatar} alt={conv.user.username} />
                ) : (
                  <span>{conv.user.username.charAt(1).toUpperCase()}</span>
                )}
                {conv.unreadCount > 0 && (
                  <span className="unread-badge">{conv.unreadCount}</span>
                )}
              </div>
              <div className="conv-content">
                <div className="conv-header">
                  <span className="conv-username">
                    {conv.user.fullName}
                    {conv.user.isVerified && (
                      <svg className="verified-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    )}
                  </span>
                  <span className="conv-time">{conv.lastMessage.time}</span>
                </div>
                <p className="conv-preview">
                  {!conv.lastMessage.isFromUser && <span className="you-label">Tú: </span>}
                  {conv.lastMessage.text}
                </p>
                <div className="conv-meta">
                  {conv.tags.map(tag => {
                    const style = getTagStyle(tag);
                    return (
                      <span
                        key={tag}
                        className="conv-tag"
                        style={{ background: style.bg, color: style.color }}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

  const ChatPanel = () => (
    <div className="chat-panel">
      {selectedConversation ? (
        <>
          {/* Chat Header */}
          <div className="chat-header">
            <div className="chat-user-info">
              <div className="chat-avatar">
                {selectedConversation.user.avatar ? (
                  <img src={selectedConversation.user.avatar} alt="" />
                ) : (
                  <span>{selectedConversation.user.username.charAt(1).toUpperCase()}</span>
                )}
              </div>
              <div className="chat-user-details">
                <span className="chat-username">{selectedConversation.user.fullName}</span>
                <span className="chat-handle">{selectedConversation.user.username}</span>
              </div>
            </div>
            <div className="chat-header-actions">
              <button className="btn-icon-sm" title="Ver perfil">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>
              <button className="btn-icon-sm" title="Agregar etiqueta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
              </button>
              <button className="btn-icon-sm" title="Más opciones">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>
            </div>
          </div>

          {/* User Info Card */}
          <div className="chat-user-card">
            <div className="user-card-stats">
              <div className="user-stat">
                <span className="user-stat-value">{selectedConversation.user.followers.toLocaleString()}</span>
                <span className="user-stat-label">Seguidores</span>
              </div>
              <div className="user-stat">
                <span className="user-stat-value">{selectedConversation.followedAt}</span>
                <span className="user-stat-label">Seguido</span>
              </div>
              <div className="user-stat">
                <span className="user-stat-value">{selectedConversation.source}</span>
                <span className="user-stat-label">Fuente</span>
              </div>
            </div>
            {selectedConversation.notes && (
              <div className="user-notes">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <span>{selectedConversation.notes}</span>
              </div>
            )}
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`message ${msg.isFromUser ? 'from-user' : 'from-me'}`}
              >
                <div className="message-bubble">
                  <p>{msg.text}</p>
                  <span className="message-time">
                    {msg.time}
                    {!msg.isFromUser && (
                      <svg className="message-status" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="chat-input-container">
            <div className="chat-input-wrapper">
              <button
                className="btn-templates"
                onClick={() => setShowTemplates(!showTemplates)}
                title="Templates"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </button>
              <textarea
                placeholder="Escribe un mensaje..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                rows={1}
              />
              <button className="btn-send" disabled={!messageText.trim()}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
            <div className="chat-input-actions">
              <button className="btn-schedule" title="Programar mensaje">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Programar
              </button>
            </div>

            {/* Templates Dropdown */}
            {showTemplates && (
              <div className="templates-dropdown">
                <div className="templates-header">
                  <h4>Templates</h4>
                  <button className="btn-text-sm" onClick={() => setShowTemplates(false)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
                <div className="templates-list">
                  {templates.map(template => (
                    <div
                      key={template.id}
                      className="template-item"
                      onClick={() => {
                        setMessageText(template.text);
                        setShowTemplates(false);
                      }}
                    >
                      <span className="template-name">{template.name}</span>
                      <span className="template-preview">{template.text}</span>
                      <span className="template-usage">{template.usage} usos</span>
                    </div>
                  ))}
                </div>
                <div className="templates-footer">
                  <button className="btn-text-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Crear template
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="chat-empty">
          <div className="empty-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h3>Selecciona una conversación</h3>
          <p>Elige una conversación de la lista para ver los mensajes</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="inbox-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-text">
          <h1>Mensajes</h1>
          <p>Gestiona tus conversaciones y mensajes directos</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
            Templates
          </button>
          <button className="btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Nuevo Mensaje
          </button>
        </div>
      </header>

      {/* Summary Stats */}
      <div className="summary-bar">
        <div className="summary-item">
          <div className="summary-icon messages">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-num">156</span>
            <span className="summary-label">Conversaciones</span>
          </div>
        </div>
        <div className="summary-item">
          <div className="summary-icon unread">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-num">12</span>
            <span className="summary-label">Sin leer</span>
          </div>
        </div>
        <div className="summary-item">
          <div className="summary-icon leads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-num">34</span>
            <span className="summary-label">Leads activos</span>
          </div>
        </div>
        <div className="summary-item highlight">
          <div className="summary-icon response">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-num">89%</span>
            <span className="summary-label">Tasa respuesta</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="inbox-container">
        <ConversationList />
        <ChatPanel />
      </div>
    </div>
  );
};

export default Inbox;
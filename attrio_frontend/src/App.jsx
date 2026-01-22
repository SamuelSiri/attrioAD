import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Landing/Home';
import HIW from './pages/Landing/HIW';
import Pricing from './pages/Landing/Pricing';
import About from './pages/Landing/About';
import Login from './pages/Auth/Login';
import DashboardLayout from '../src/layouts/DashboardLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Campaigns from './pages/Campaigns/Campaigns';
import Audience from './pages/Audience/Audience';
import Competitors from './pages/Competitors/Competitors'
import Inbox from './pages/Inbox/Inbox';
import Analytics from './pages/Analytics/Analytics';
import Reports from './pages/Reports/Reports';
import Meta from './pages/Meta/Meta';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import Plan from './pages/Plan/Plan';
import Help from './pages/Help/Help';



import './App.css';

// Resetea scroll al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/como-funciona" element={<HIW />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        
        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        
        {/* Dashboard Pages */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          {/* Futuras rutas del dashboard */}
           <Route path="/dashboard/help" element={<Help />} /> 
          <Route path="audience" element={<Audience />} /> 
         <Route path="/dashboard/campaigns" element={<Campaigns />} />
         <Route path="/dashboard/competitors" element={<Competitors />} />
         <Route path="/dashboard/messages" element={<Inbox />} />
         <Route path="/dashboard/analytics" element={<Analytics />} />
         <Route path="/dashboard/reports" element={<Reports />} />
         <Route path="/dashboard/export-meta" element={<Meta/>} />
          <Route path="/dashboard/Plan" element={<Plan />} /> 
         <Route path="/dashboard/profile" element={<Profile />} /> 
          <Route path="settings" element={<Settings />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
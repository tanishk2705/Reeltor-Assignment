import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode and update document class
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`flex ${darkMode ? 'dark' : ''}`}>
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <Dashboard darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
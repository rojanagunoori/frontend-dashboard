import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import { fetchUsers } from './api/api';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
//import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUsers().then((data) => setUser(data[0]));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <Router>
      <Navbar username={user.name} user={user} />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => alert('Logged out')}>Logout</button>
    </div>
  );
}

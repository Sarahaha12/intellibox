import React from 'react';
import '../styles/Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div className="card" onClick={handleClick}>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;

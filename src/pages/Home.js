import React from 'react';
import Card from '../components/Card';
import '../styles/Pages.css';

const Home = () => {
  const cards = [
    { title: 'Email Processing', route: '/email-processing' },
    { title: 'LLM Usage', route: '/llm-usage' },
    { title: 'Processing Queue', route: '/processing-queue' },
    { title: 'Chatbox', route: '/chatbox' },
    { title: 'Support', route: '/support' },
  ];

  return (
    <div className="page-container">
      <div className="card-grid">
        {cards.map((card, idx) => (
          <Card key={idx} title={card.title} route={card.route} />
        ))}
      </div>
    </div>
  );
};

export default Home;

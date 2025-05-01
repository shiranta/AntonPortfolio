import React from 'react';
import './CertificationCard.css';

function CertificationCard({ title, provider, link }) {
  return (
    <div className="cert-card">
      <h3>{title}</h3>
      <p><strong>Provider:</strong> {provider}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Certificate 📄</a>
    </div>
  );
}

export default CertificationCard;

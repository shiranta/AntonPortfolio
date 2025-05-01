import React from 'react';
import CertificationCard from './CertificationCard';
import './Certifications.css';

function Certifications() {
  const certs = [
    {
      title: "React Developer Certification",
      provider: "Coursera",
      link: "https://coursera.org/some-react-cert",
    },
    {
      title: "JavaScript Mastery",
      provider: "Udemy",
      link: "https://udemy.com/some-js-cert",
    },
    {
      title: "AWS Cloud Practitioner",
      provider: "Amazon",
      link: "https://aws.amazon.com/some-cert",
    },
  ];

  return (
    <div className="certifications-container" id="certifications">
      <h2>My Certifications</h2>
      <div className="cert-grid">
        {certs.map((cert, index) => (
          <CertificationCard
            key={index}
            title={cert.title}
            provider={cert.provider}
            link={cert.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Certifications;

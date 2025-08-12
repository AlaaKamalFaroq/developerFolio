import React from "react";
import { certifications } from "../portfolio";
import "./Certifications.css";

export default function Certifications() {
  return (
    <div className="certifications-section">
      <h1 className="cert-title">{certifications.title}</h1>
      <div className="cert-grid">
        {certifications.items.map((cert, index) => (
          <div key={index} className="cert-card">
            <img
              src={`/images/${cert.image}`}
              alt={cert.name}
              className="cert-image"
            />
            <p className="cert-name">{cert.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


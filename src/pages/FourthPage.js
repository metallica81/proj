import React, { useState } from 'react';
import './FourthPage.css';
import ConfidenceModal from '../components/ConfidenceModal';

function FourthPage({ onBack, onNext, retailerData }) {
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const items = [
      'вышла из строя',
      'подарок родственнику',
      'для себя',
      'для производства',
      'для обучения'
  ];

  const handleDeveloperClick = (developer) => {
    setSelectedDeveloper(developer);
    setShowModal(true);
  };

  const handleConfidenceSubmit = (confidenceValue) => {
    setShowModal(false);
    onNext({
      ...retailerData,
      developer: selectedDeveloper,
      developerConfidence: confidenceValue
    });
  };

  return (
    <div className="fourth-page">
      <button className="back-button" onClick={onBack}>
        ← Назад
      </button>

      <div className="developers-container">
        <h2 className="developers-title">Выберите причину покупки</h2>
        <div className="developers-list">
          {items.map((developer, index) => (
            <button
              key={index}
              className={`developer-button ${selectedDeveloper === developer ? 'selected' : ''}`}
              onClick={() => handleDeveloperClick(developer)}
            >
              {developer}
            </button>
          ))}
        </div>
      </div>

      {showModal && (
        <ConfidenceModal
          retailerName={selectedDeveloper}
          onSubmit={handleConfidenceSubmit}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default FourthPage;

import React, { useState } from 'react';
import './SecondPage.css';
import ConfidenceModal from '../components/ConfidenceModal';

function SecondPage({ onBack, onNext }) {
  const [selectedRetailer, setSelectedRetailer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [confidence, setConfidence] = useState('');

  const items = [
      "IKEA",
      "Avito",
      "Yandex Market",
      "Wildberries",
      "Ozon",
      "AliExpress",
      "Joom",
      "Lamoda",
      "Мебель.ру",
      "DaoDao"
  ];

  const handleRetailerClick = (retailer) => {
    setSelectedRetailer(retailer);
    setShowModal(true);
  };

  const handleConfidenceSubmit = (confidenceValue) => {
    setConfidence(confidenceValue);
    setShowModal(false);
    // Переходим на следующую страницу
    onNext({ retailer: selectedRetailer, confidence: confidenceValue });
  };

  return (
    <div className="second-page">
      <button className="back-button" onClick={onBack}>
        ← Назад
      </button>

      <div className="retailers-container">
        <h2 className="retailers-title">Выберите онлайн платформу</h2>
        <div className="retailers-list">
          {items.map((retailer, index) => (
            <button
              key={index}
              className={`retailer-button ${selectedRetailer === retailer ? 'selected' : ''}`}
              onClick={() => handleRetailerClick(retailer)}
            >
              {retailer}
            </button>
          ))}
        </div>
      </div>

      {showModal && (
        <ConfidenceModal
          retailerName={selectedRetailer}
          onSubmit={handleConfidenceSubmit}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default SecondPage;

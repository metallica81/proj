import React, { useState } from 'react';
import './SeventhPage.css';
import ConfidenceModal from '../components/ConfidenceModal';

function SeventhPage({ onBack, onNext, previousData }) {
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);
  const [showModal, setShowModal] = useState(false);

    const items = [
        "Курьер",
        "Самовывоз",
        "Постамат",
        "Почта России",
        "Пункт выдачи"
    ];

  const handleManufacturerClick = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
    setShowModal(true);
  };

  const handleConfidenceSubmit = (confidenceValue) => {
    setShowModal(false);
    onNext({
      ...previousData,
      manufacturer: selectedManufacturer,
      manufacturerConfidence: confidenceValue
    });
  };

  return (
    <div className="seventh-page">
      <button className="back-button" onClick={onBack}>
        ← Назад
      </button>

      <div className="manufacturers-container">
        <h2 className="manufacturers-title">Выберите способ получения покупки</h2>
        <div className="manufacturers-list">
          {items.map((manufacturer, index) => (
            <button
              key={index}
              className={`manufacturer-button ${selectedManufacturer === manufacturer ? 'selected' : ''}`}
              onClick={() => handleManufacturerClick(manufacturer)}
            >
              {manufacturer}
            </button>
          ))}
        </div>
      </div>

      {showModal && (
        <ConfidenceModal
          retailerName={selectedManufacturer}
          onSubmit={handleConfidenceSubmit}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default SeventhPage;

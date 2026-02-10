import React, { useState } from 'react';
import './SixthPage.css';
import ConfidenceModal from '../components/ConfidenceModal';

function SixthPage({ onBack, onNext, previousData }) {
  const [selectedAirline, setSelectedAirline] = useState(null);
  const [showModal, setShowModal] = useState(false);

    const items = [
        "Онлайн оплата",
        "Кредит",
        "При получении",
        "Сплит",
        "Рассрочка"
    ];

  const handleAirlineClick = (airline) => {
    setSelectedAirline(airline);
    setShowModal(true);
  };

  const handleConfidenceSubmit = (confidenceValue) => {
    setShowModal(false);
    onNext({
      ...previousData,
      airline: selectedAirline,
      airlineConfidence: confidenceValue
    });
  };

  return (
    <div className="sixth-page">
      <button className="back-button" onClick={onBack}>
        ← Назад
      </button>

      <div className="airlines-container">
        <h2 className="airlines-title">Выберите способ оплаты покупки</h2>
        <div className="airlines-list">
          {items.map((airline, index) => (
            <button
              key={index}
              className={`airline-button ${selectedAirline === airline ? 'selected' : ''}`}
              onClick={() => handleAirlineClick(airline)}
            >
              {airline}
            </button>
          ))}
        </div>
      </div>

      {showModal && (
        <ConfidenceModal
          retailerName={selectedAirline}
          onSubmit={handleConfidenceSubmit}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default SixthPage;

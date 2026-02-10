import React, { useState } from 'react';
import './FifthPage.css';
import ConfidenceModal from '../components/ConfidenceModal';

function FifthPage({ onBack, onNext, previousData }) {
  const [selectedBank, setSelectedBank] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const items = [
      "Диван",
      "Кровать",
      "Шкаф",
      "Комод",
      "Стол обеденный",
      "Стол письменный",
      "Стул",
      "Кресло",
      "Полка",
      "Тумба",
      "Шкаф купе",
      "Сервант",
      "Буфет",
      "Банкетка",
      "Этажерка"
  ];

  const handleBankClick = (bank) => {
    setSelectedBank(bank);
    setShowModal(true);
  };

  const handleConfidenceSubmit = (confidenceValue) => {
    setShowModal(false);
    onNext({
      ...previousData,
      bank: selectedBank,
      bankConfidence: confidenceValue
    });
  };

  return (
    <div className="fifth-page">
      <button className="back-button" onClick={onBack}>
        ← Назад
      </button>

      <div className="banks-container">
        <h2 className="banks-title">Выберите товар</h2>
        <div className="banks-list">
          {items.map((bank, index) => (
            <button
              key={index}
              className={`bank-button ${selectedBank === bank ? 'selected' : ''}`}
              onClick={() => handleBankClick(bank)}
            >
              {bank}
            </button>
          ))}
        </div>
      </div>

      {showModal && (
        <ConfidenceModal
          retailerName={selectedBank}
          onSubmit={handleConfidenceSubmit}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default FifthPage;

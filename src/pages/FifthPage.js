import React, { useState } from 'react';
import './FifthPage.css';
import ConfidenceModal from '../components/ConfidenceModal';

function FifthPage({ onBack, onNext, previousData }) {
  const [selectedBank, setSelectedBank] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const items = [
      { name: "Диван", price: "15 000 ₽" },
      { name: "Кровать", price: "12 000 ₽" },
      { name: "Шкаф", price: "8 500 ₽" },
      { name: "Комод", price: "6 000 ₽" },
      { name: "Стол обеденный", price: "9 000 ₽" },
      { name: "Стол письменный", price: "7 000 ₽" },
      { name: "Стул", price: "2 500 ₽" },
      { name: "Кресло", price: "5 000 ₽" },
      { name: "Полка", price: "2 000 ₽" },
      { name: "Тумба", price: "4 500 ₽" },
      { name: "Шкаф купе", price: "18 000 ₽" },
      { name: "Сервант", price: "11 000 ₽" },
      { name: "Буфет", price: "13 000 ₽" },
      { name: "Банкетка", price: "3 500 ₽" },
      { name: "Этажерка", price: "3 000 ₽" },
      { name: "Шведская стенка", price: "5 500 ₽" }
  ];

  const handleBankClick = (item) => {
    setSelectedBank(item);
    setShowModal(true);
  };

  const handleConfidenceSubmit = (confidenceValue) => {
    setShowModal(false);
    onNext({
      ...previousData,
      bank: selectedBank.name,
      bankPrice: selectedBank.price,
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
          {items.map((item, index) => (
            <button
              key={index}
              className={`bank-button ${selectedBank?.name === item.name ? 'selected' : ''}`}
              onClick={() => handleBankClick(item)}
            >
              <div className="bank-name">{item.name}</div>
              <div className="bank-price">{item.price}</div>
            </button>
          ))}
        </div>
      </div>

      {showModal && (
        <ConfidenceModal
          retailerName={selectedBank?.name}
          onSubmit={handleConfidenceSubmit}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default FifthPage;

import React, { useState } from 'react';
import './ConfidenceModal.css';

function ConfidenceModal({ retailerName, onSubmit, onCancel }) {
  const [confidence, setConfidence] = useState('100');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (confidence === '') {
      setError('Пожалуйста, введите значение');
      return;
    }

    const value = parseInt(confidence);
    if (isNaN(value) || value < 0 || value > 100) {
      setError('Введите число от 0 до 100');
      return;
    }

    onSubmit(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Оцените степень уверенности</h2>
        <p className="modal-subtitle">для "{retailerName}"</p>

        <input
          type="number"
          className="confidence-input"
          placeholder="Введите число от 0 до 100"
          value={confidence}
          onChange={(e) => {
            setConfidence(e.target.value);
            setError('');
          }}
          onKeyPress={handleKeyPress}
          min="0"
          max="100"
          autoFocus
        />

        {error && <p className="error-message">{error}</p>}

        <div className="modal-buttons">
          <button className="cancel-button" onClick={onCancel}>
            Отмена
          </button>
          <button className="submit-button" onClick={handleSubmit}>
            Далее
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfidenceModal;

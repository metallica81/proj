import React from 'react';
import './ThirdPage.css';

function ThirdPage({ onBack, data }) {
  const calculateAverageConfidence = () => {
    const confidences = [
      data?.confidence,
      data?.developerConfidence,
      data?.bankConfidence,
      data?.airlineConfidence,
      data?.manufacturerConfidence
    ].filter(val => typeof val === 'number');

    if (confidences.length === 0) return 0;
    const sum = confidences.reduce((acc, val) => acc + val, 0);
    return Math.round(sum / confidences.length);
  };

  const averageConfidence = calculateAverageConfidence();

  return (
    <div className="third-page">
      <button className="back-button" onClick={onBack}>
        ← Назад
      </button>

      <div className="content-container">
        <h1 className="title">Спасибо!</h1>

        <div className="info-group">
          <div className="info-item">
            <p className="info-label">Выбранный ретейлер:</p>
            <p className="info-value">{data?.retailer}</p>
          </div>
          <div className="info-item">
            <p className="info-label">Уверенность в ретейлере:</p>
            <p className="info-value">{data?.confidence}%</p>
          </div>
        </div>

        <div className="info-group">
          <div className="info-item">
            <p className="info-label">Выбранный девелопер:</p>
            <p className="info-value">{data?.developer}</p>
          </div>
          <div className="info-item">
            <p className="info-label">Уверенность в девелопере:</p>
            <p className="info-value">{data?.developerConfidence}%</p>
          </div>
        </div>

        <div className="info-group">
          <div className="info-item">
            <p className="info-label">Выбранный банк:</p>
            <p className="info-value">{data?.bank}</p>
          </div>
          <div className="info-item">
            <p className="info-label">Уверенность в банке:</p>
            <p className="info-value">{data?.bankConfidence}%</p>
          </div>
        </div>

        <div className="info-group">
          <div className="info-item">
            <p className="info-label">Выбранная авиакомпания:</p>
            <p className="info-value">{data?.airline}</p>
          </div>
          <div className="info-item">
            <p className="info-label">Уверенность в авиакомпании:</p>
            <p className="info-value">{data?.airlineConfidence}%</p>
          </div>
        </div>

        <div className="info-group">
          <div className="info-item">
            <p className="info-label">Выбранный производитель:</p>
            <p className="info-value">{data?.manufacturer}</p>
          </div>
          <div className="info-item">
            <p className="info-label">Уверенность в производителе:</p>
            <p className="info-value">{data?.manufacturerConfidence}%</p>
          </div>
        </div>

        <div className="average-block">
          <p className="average-label">Средний процент уверенности:</p>
          <p className="average-value">{averageConfidence}%</p>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;

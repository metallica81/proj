import React from 'react';
import './LastPage.css';

function LastPage({ onBack, data }) {
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
        <div className="info-group">
          <div className="info-item">
            <p className="info-label">Выбранная платформа:</p>
            <p className="info-value">{data?.retailer} {`(${data?.confidence}%)`}</p>
          </div>
        </div>

        <div className="info-group">
          <div className="info-item">
            <p className="info-label">Причина покупки:</p>
            <p className="info-value">{data?.developer} {`(${data?.developerConfidence}%)`}</p>
          </div>
        </div>

        <div className="info-group">
          <div className="info-item">
            <p className="info-label">Выбранный товар:</p>
            <p className="info-value">{data?.bank} {`(${data?.bankConfidence}%)`}</p>
          </div>
        </div>

        <div className="info-group">
          <div className="info-item">
            <p className="info-label">Способ оплаты:</p>
            <p className="info-value">{data?.airline} {`(${data?.airlineConfidence}%)`}</p>
          </div>
        </div>

        <div className="info-group">
          <div className="info-item">
            <p className="info-label">Способ получения:</p>
            <p className="info-value">{data?.manufacturer} {`(${data?.manufacturerConfidence}%)`}</p>
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

export default LastPage;

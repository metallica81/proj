import React from 'react';
import './FirstPage.css';

function FirstPage({ onNext, onBack }) {
  return (
    <div className="first-page">
        <button className="back-button" onClick={onBack}>
            ← Назад
        </button>
      <div className="content-container">
        <h1 className="title">Студента ЭПИ-311</h1>
        <p className="subtitle">работа по предмету</p>
        <button className="next-button" onClick={onNext}>
          Далее
        </button>
      </div>
    </div>
  );
}

export default FirstPage;

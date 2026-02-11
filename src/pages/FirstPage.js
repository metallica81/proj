import React from 'react';
import './FirstPage.css';

function FirstPage({ onNext, onBack }) {
  return (
    <div className="first-page">
        <button className="back-button" onClick={onBack}>
            ← Назад
        </button>
      <div className="content-container">
        <h1 className="title">Помощник покупок</h1>
        <p className="subtitle">Разработчик: Мокрушин В.О.</p>
        <button className="next-button" onClick={onNext}>
          Далее
        </button>
      </div>
    </div>
  );
}

export default FirstPage;

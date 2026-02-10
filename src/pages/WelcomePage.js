import React, { useState } from 'react';
import './WelcomePage.css';

function WelcomePage({ onNext }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (name.trim() === '') {
      setError('Пожалуйста, введите ваше имя');
      return;
    }
    onNext(name);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="welcome-page">
      <div className="welcome-container">
        <h1 className="welcome-title">Добро пожаловать!</h1>
        <p className="welcome-subtitle">Введите ваше имя для продолжения</p>

        <input
          type="text"
          className="name-input"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError('');
          }}
          onKeyPress={handleKeyPress}
          autoFocus
        />

        {error && <p className="error-message">{error}</p>}

        <button className="submit-button" onClick={handleSubmit}>
          Начать
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;

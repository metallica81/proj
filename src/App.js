import React, { useState } from 'react';
import './App.css';
import WelcomePage from './pages/WelcomePage';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import FourthPage from './pages/FourthPage';
import FifthPage from './pages/FifthPage';
import SixthPage from './pages/SixthPage';
import SeventhPage from './pages/SeventhPage';
import ThirdPage from './pages/ThirdPage';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [userName, setUserName] = useState('');
  const [selectedData, setSelectedData] = useState(null);

  const handleWelcomeNext = (name) => {
    setUserName(name);
    setCurrentPage('first');
  };

  const handleWelcomeBack = () => {
      setCurrentPage('welcome');
  };

  const handleFirstPageNext = () => {
    setCurrentPage('second');
  };

  const handleSecondPageBack = () => {
    setCurrentPage('first');
  };

  const handleSecondPageNext = (data) => {
    setSelectedData(data);
    setCurrentPage('fourth');
  };

  const handleFourthPageBack = () => {
    setCurrentPage('second');
  };

  const handleFourthPageNext = (data) => {
    setSelectedData(data);
    setCurrentPage('fifth');
  };

  const handleFifthPageBack = () => {
    setCurrentPage('fourth');
  };

  const handleFifthPageNext = (data) => {
    setSelectedData(data);
    setCurrentPage('sixth');
  };

  const handleSixthPageBack = () => {
    setCurrentPage('fifth');
  };

  const handleSixthPageNext = (data) => {
    setSelectedData(data);
    setCurrentPage('seventh');
  };

  const handleSeventhPageBack = () => {
    setCurrentPage('sixth');
  };

  const handleSeventhPageNext = (data) => {
    setSelectedData(data);
    setCurrentPage('third');
  };

  const handleThirdPageBack = () => {
    setCurrentPage('seventh');
  };

  return (
    <div className="App">
      {currentPage === 'welcome' && <WelcomePage onNext={handleWelcomeNext} />}
      {currentPage === 'first' && <FirstPage onBack={handleWelcomeBack} onNext={handleFirstPageNext} />}
      {currentPage === 'second' && (
        <SecondPage onBack={handleSecondPageBack} onNext={handleSecondPageNext} />
      )}
      {currentPage === 'fourth' && (
        <FourthPage
          onBack={handleFourthPageBack}
          onNext={handleFourthPageNext}
          retailerData={selectedData}
        />
      )}
      {currentPage === 'fifth' && (
        <FifthPage
          onBack={handleFifthPageBack}
          onNext={handleFifthPageNext}
          previousData={selectedData}
        />
      )}
      {currentPage === 'sixth' && (
        <SixthPage
          onBack={handleSixthPageBack}
          onNext={handleSixthPageNext}
          previousData={selectedData}
        />
      )}
      {currentPage === 'seventh' && (
        <SeventhPage
          onBack={handleSeventhPageBack}
          onNext={handleSeventhPageNext}
          previousData={selectedData}
        />
      )}
      {currentPage === 'third' && (
        <ThirdPage onBack={handleThirdPageBack} data={selectedData} />
      )}
    </div>
  );
}

export default App;

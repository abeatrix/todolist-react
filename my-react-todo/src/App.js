import React from 'react';
import Header from './components/Header';
import Routes from './config/routes';

function App() {
  return (
    <div className="container">
      <Header/>
      <Routes />
    </div>
  );
};

export default App;

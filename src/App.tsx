import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import clsx from 'clsx';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="container">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <main className={clsx('main', showSidebar && 'show-sidebar')}>
        <MainComponent />
      </main>
    </div>
  );
}

export default App;

import './App.scss';
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

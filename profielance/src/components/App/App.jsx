import './App.scss';
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import News from '../News/News';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

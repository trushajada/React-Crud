import './App.css';
import React from 'react';
import { BrowserRouter , Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Componet/Home';
import Create from './Componet/Create';
import Read from './Componet/Read';
import Update from './Componet/Update';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/update/:id  " element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

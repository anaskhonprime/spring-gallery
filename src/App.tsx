import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Importing  Home Component */
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

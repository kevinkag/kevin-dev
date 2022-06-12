import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home/Home';

function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </React.Fragment>
  )
}

export default App
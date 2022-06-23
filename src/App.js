import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home/Home';

function App() {
  //nada
  return (
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/kevin-dev" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </React.Fragment>
  )
}

export default App
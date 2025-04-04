import React from 'react';
import Labs from './Labs';
import Kanbas from './Kanbas';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
    <div className='h-100'>
      <Routes>
        <Route path='/' element={<Navigate to ='Labs'/>}/>
        <Route path='/Labs/*' element={<Labs/>}/>
        <Route path='/Kanbas/*' element={<Kanbas/>} />
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;

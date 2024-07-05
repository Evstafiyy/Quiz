import { useState } from 'react';
import './App.css';
import  Welcome from './pages/Welcome/Welcome';
import { Route, Routes } from 'react-router-dom';
import Category from './components/Category/Category';
import Ask from './components/Ask/Ask';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/category' element={<Category />} />
          <Route path='/category/:id' element={<Ask />} />
        </Routes>
      </div>
    </>
  )
}

export default App

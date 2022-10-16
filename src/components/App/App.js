import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';

function App() {
  return (
    <Routes>
      {/* ProdectedRoute */}
      <Route path='/' element={
        <Main />
      }></Route>
      <Route path='/movies'></Route>
      <Route path='/saved-movies'></Route>
      <Route path='/profile' element={
        <Profile />
      }></Route>
      <Route path='/signup' element={
        <Register />
      }></Route>
      <Route path='/signin'></Route>
    </Routes>
  );
}

export default App;

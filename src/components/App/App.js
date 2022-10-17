import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <Routes>
      {/* ProdectedRoute */}
      <Route path='/' element={
        <Main />
      }></Route>
      <Route path='/movies' element={
        <Movies />
      }></Route>
      <Route path='/saved-movies' element={
        <SavedMovies />
      }></Route>
      <Route path='/profile' element={
        <Profile />
      }></Route>
      <Route path='/signup' element={
        <Register />
      }></Route>
      <Route path='/signin' element={
        <Login />
      }></Route>
      <Route path='*' element={
        <PageNotFound />
      }></Route>
    </Routes>
  );
}

export default App;

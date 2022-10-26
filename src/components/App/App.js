import React from 'react';
import './App.css';
import '../../vendor/fonts/inter-web/inter.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Navigation from '../Navigation/Navigation';

function App() {
  return (
    <>
      <Routes>
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
      <Navigation />
    </>
  );
}

export default App;

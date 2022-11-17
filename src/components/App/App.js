import React from 'react';
import './App.css';
import '../../vendor/fonts/inter-web/inter.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AuthorizedRoute from '../AuthorizedRoute/AuthorizedRoute';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Navigation from '../Navigation/Navigation';

import { checkToken, authorize, register } from '../../auth';
import { getUser, editUser } from '../../utils/MainApi';

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState({
    name: '',
    email: ''
  });
  const [isMenuOpened, setMenuOpened] = React.useState(false);

  const handleCheckToken = () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        })
        .catch(err => console.log(err));
    }
  }

  const handleRegistration = (formData) => {
    register(formData.name, formData.email, formData.password)
      .then((res) => {
        handleLogin(formData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleLogin = (formData) => {
    authorize(formData.email, formData.password)
      .then((data) => {
        localStorage.setItem('token', data.token);
        handleCheckToken();
        history.push('/movies');
        setUser({
          name: formData.name,
          email: formData.email
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleEdit = (formData) => {
    editUser({ name: formData.name, email: formData.email })
      .then((res) => {
        console.log(res)
        setUser({
          name: res.data.name,
          email: res.data.email
        })
      })
      .catch(err => console.log(err))
  }

  const onLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    localStorage.removeItem('input');
    localStorage.removeItem('shortsSlider');
    history.push('/');
  }

  const handleMenuCLick = () => {
    setMenuOpened(!isMenuOpened);
  }

  React.useEffect(() => {
    handleCheckToken();
  })

  React.useEffect(() => {
    handleCheckToken();
    if (loggedIn) {
      getUser()
        .then((res) => {
          setUser({
            name: res.data.name,
            email: res.data.email
          })
        })
        .catch(err => console.log(err));
    }
  }, [loggedIn])

  return (
    <CurrentUserContext.Provider value={user}>
      <Switch>
        <Route exact path='/'>
          <Header
            loggedIn={loggedIn}
            onMenuClick={handleMenuCLick}
          />
          <Main />
          <Footer />
        </Route>
        <ProtectedRoute loggedIn={loggedIn} path='/movies'>
          <Header
            loggedIn={loggedIn}
            onMenuClick={handleMenuCLick}
          />
          <Movies />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute loggedIn={loggedIn} path='/saved-movies'>
          <Header
            loggedIn={loggedIn}
            onMenuClick={handleMenuCLick}
          />
          <SavedMovies />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute loggedIn={loggedIn} path='/profile'>
          <Header
            loggedIn={loggedIn}
            onMenuClick={handleMenuCLick}
          />
          <Profile
            loggedIn={loggedIn}
            logout={onLogout}
            handleEdit={handleEdit}
          />
        </ProtectedRoute>
        <AuthorizedRoute loggedIn={loggedIn} path='/signup'>
          <Register
            handleRegistration={handleRegistration}
          />
        </AuthorizedRoute>
        <AuthorizedRoute loggedIn={loggedIn} path='/signin'>
          <Login
            handleLogin={handleLogin}
          />
        </AuthorizedRoute>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
      <Navigation
        isMenuOpened={isMenuOpened}
        onCloseButtonClick={handleMenuCLick} />
    </CurrentUserContext.Provider>
  );
}

export default App;

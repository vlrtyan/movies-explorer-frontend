import React from 'react';
import './App.css';
import '../../vendor/fonts/inter-web/inter.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        })
    }
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      history.push('/movies');
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

  const handleRegistration = (formData) => {
    register(formData.name, formData.email, formData.password)
      .then((res) => {
        history.push('/signin');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleLogin = (formData) => {
    authorize(formData.email, formData.password)
      .then((data) => {
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
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
    editUser({name: formData.name, email: formData.email})
      .then((res) => {
        setUser({
          name: formData.name,
          email: formData.email
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
    history.push('/signin');
  }

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Header 
          loggedIn={loggedIn}
          />
          <Main />
          <Footer />
        </Route>
        <ProtectedRoute path='/movies' loggedIn={loggedIn}>
          <Header 
          loggedIn={loggedIn}
          />
          <Movies />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path='/saved-movies' loggedIn={loggedIn}>
          <Header 
          loggedIn={loggedIn}
          />
          <SavedMovies />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path='/profile' loggedIn={loggedIn}>
          <Header 
          loggedIn={loggedIn}
          />
          <Profile
            loggedIn={loggedIn}
            logout={onLogout}
            user={user}
            handleEdit={handleEdit}
          />
        </ProtectedRoute>
        <Route path='/signup'>
          <Register
            handleRegistration={handleRegistration}
          />
        </Route>
        <Route path='/signin'>
          <Login
            handleLogin={handleLogin}
          />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
      <Navigation />
    </>
  );
}

export default App;

import React from 'react';
import { Route, Switch, Redirect, useHistory} from 'react-router-dom';

import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';

function App() {

  const loggedIn = false;

  function handleLogin({ email, password}) {
    // return auth.authorize(email, password)
    // .then(data => {

    //   console.log(data);
    //   if (!data || data.statusCode === 400) {
    //     openInfoPopup(false);
    //     // throw new Error('Что-то пошло не так');
    //   }
    //   if (data.token) {
    //     localStorage.setItem('jwt', data.token);
    //     tokenCheck();
    //   }
    // });
    console.log(email);
    console.log(password);
  }

  function handleRegister({ email, password}) {
    console.log(email);
    console.log(password);
  }  

  return (
    <>
      <Switch>
        <Route path="/sing-in">
          <Login 
            onLogin = {handleLogin} 
          />  
        </Route>
        <Route path="/sing-up">
          <Register 
            onRegister = {handleRegister}
          />  
        </Route>
        <Route path="/main">
          <Main/>  
        </Route>
        {/* <ProtectedRoute 
          path      = "/main" 
          loggedIn  = {loggedIn} 
          onSignOut = {handleSignOut} 
          email     = {email}
          component = {MainPage} 
        /> */}
        <Route exact path="/">
          {loggedIn ? <Redirect to="/sing-up" /> : <Redirect to="/sing-in" />}
        </Route> 
      </Switch>    
    </>
  );
}

export default App;

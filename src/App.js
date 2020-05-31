import React, { useReducer } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Ad } from 'pages/Ad';
import { Create } from 'pages/Create';
import { storeReducer, initState, StoreContext } from 'store/reducer';
import { setUserAction, clearUserAction } from 'store/actions';
import { Navbar } from "containers/Navbar";
import { Ads } from 'pages/Ads';

function App() {

  const [state, dispatch] = useReducer(storeReducer);

  const token = state ? state.token : initState.token;
  const login = state ? state.login : initState.login;
  const balance = state ? state.balance : initState.balance;

  return (
    <StoreContext.Provider value={{
      token,
      login,
      balance,
      
      setUser: ({ login, password }) => setUserAction({login, password}, dispatch),
      clearUser: () => dispatch(clearUserAction()),
    }} >

      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/ad/:id" render={Ad} />
        <Route path="/ads/:user" render={Ads} />

        {login && <Route path="/create" render={Create} />}
        
        <Redirect to="/" />
      </Switch>
    </StoreContext.Provider>
  );
}

export default App;
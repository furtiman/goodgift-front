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

  return (
    <StoreContext.Provider value={{
      token: state ? state.token : initState.token,
      login: state ? state.login : initState.login,
      balance: state ? state.balance : initState.balance,
      setUser: ({ login, password }) => setUserAction(login, password, dispatch),
      clearUser: () => dispatch(clearUserAction()),
    }} >

      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/ad/:id" render={Ad} />
        <Route path="/create" render={Create} />
        <Route path="/ads/:user" render={Ads} />
        
        <Redirect to="/" />
      </Switch>
    </StoreContext.Provider>
  );
}

export default App;
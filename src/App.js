import React, { useReducer, useContext, createContext } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from 'pages/Home';
import { Ad } from 'pages/Ad';
import { Create } from 'pages/Create';
import { storeReducer, initState } from 'store/reducer';
import { setUserAction, clearUserAction } from 'store/actions';

const Container = styled.div`  
  display: flex;
  justify-content: space-around;

  color: red;
`;

const Navbar = props => {
  
  const context = useContext(StoreContext);
  console.log(context);

  return (
    <Container>
      <Link to="/" >Home</Link>
      <Link to="/test" >Test</Link>
      <button onClick={() => context.setUser({login: "123", password: "321"})} >1</button>
      <button onClick={context.clearUser} >2</button>
    </Container>
  )
}

const StoreContext = createContext({
  token: initState.token,
  setUser: null,
  clearUser: null,
});

function App() {

  const [state, dispatch] = useReducer(storeReducer);

  return (
    <StoreContext.Provider value={{
      token: state ? state.token : initState.token,
      setUser: ({ login, password }) => setUserAction(login, password, dispatch),
      clearUser: () => dispatch(clearUserAction()),
    }} >
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/ad/:id" render={Ad} />
        <Route path="/create" render={Create} />
        
        <Redirect to="/" />
      </Switch>
    </StoreContext.Provider>
  );
}

export default App;
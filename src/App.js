import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from 'pages/Home';
import { Ad } from 'pages/Ad';
import { Create } from 'pages/Create';

const Container = styled.div`  
  display: flex;
  justify-content: space-around;

  color: red;
`;

const Navbar = props => (
  <Container>
    <Link to="/" >Home</Link>
    <Link to="/test" >Test</Link>
  </Container>
);

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/ad/:id" render={Ad} />
        <Route path="/create" render={Create} />
        
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
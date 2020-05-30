import React from 'react';
import { Switch, Route, Redirect, BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Main } from 'pages/Main';
import { Avatar } from "@material-ui/core";

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

const Home = props => (
  <Avatar alt="test" />
);
const Test = props => (<div>Test</div>);

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/test" render={Test} />
        <Redirect to="/" />
      </Switch>

      <Main />

    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../src/components/Header';
import CoinList from '../src/components/CoinList';
import NotFound from '../src/components/NotFound';

const Appstyles = styled.div`
  margin-right: 10%;
  margin-left: 10%;
`

const App = () => {
  return (
    <Router>
      <Appstyles>  
        <Header />

        <Switch>
          <Route path="/" component={CoinList} exact />
          <Route component={NotFound} />
        </Switch>

      </Appstyles>
    </Router> 
  );
}

export default App;  

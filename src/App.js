import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import Header from '../src/components/Header';
import CoinList from '../src/components/CoinList';

const Appstyles = styled.div`
  margin-right: 10%;
  margin-left: 10%;
`

const App = () => {
  return (
    <BrowserRouter>

      <Appstyles>  
        <Header />
        <CoinList />
      </Appstyles>

    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import Header from '../src/components/Header'
import CoinList from '../src/components/CoinList'

const Appstyles = styled.div`
  margin-right: 10%;
  margin-left: 10%;
`

const App = () => {
  return (
    <Appstyles> 
      <Header />
      <CoinList />
    </Appstyles>
    
  );
}

export default App;

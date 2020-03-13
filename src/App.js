import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from '../src/components/Header';
import CoinList from '../src/components/CoinList';
import NotFound from '../src/components/NotFound';

const defaultLightTheme = {
  body: 'blue',
}

const darktheme = {

}

const DarkModeButton = styled.button`
  background: ${ prop => prop.clicked ? 'white' : 'blue' };
`

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { theme: 'light' }
  }

  handleThemeClick(event) {
    let currentTheme = this.state.theme

    
  }

  render() {
    return (
      <ThemeProvider theme={defaultLightTheme}>
        
        <Router>
           
            <Header />

            <DarkModeButton clicked={true} > dark mode </DarkModeButton>

            <Switch>
              <Route path="/" component={CoinList} exact />
              <Route component={NotFound} />
            </Switch>

        </Router> 
        
      </ThemeProvider>
    );
  }
}

export default App;  

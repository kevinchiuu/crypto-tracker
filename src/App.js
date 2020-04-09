import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from '../src/components/Header';
import CoinList from '../src/components/CoinList';
import NotFound from '../src/components/NotFound';

const defaultLightTheme = {
  body: '#E2E2E2'
}

const darkTheme = {}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { darkMode: false }

    this.toggleDarkMode = this.toggleDarkMode.bind(this)
  }  

  toggleDarkMode() {
    this.setState = { darkMode: true }
  }

  render() {
    return (
      <ThemeProvider theme={defaultLightTheme}>
        
        <Router>
           
            <Header />

            <div> 
              <button> dark mode </button>
            </div>

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

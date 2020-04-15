import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../src/components/Header';
import CoinList from '../src/components/CoinList';
import NotFound from '../src/components/NotFound';

const light = {
  body: '#E2E2E2'
}

const dark = {
  body: 'black',
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { lightTheme: true }

    this.toggleDarkMode = this.toggleDarkMode.bind(this)
  }  

  componentDidMount() {
    const localStorageLayout = localStorage.getItem("lightTheme")

    if (localStorageLayout) {
      this.setState({ lightTheme: JSON.parse(localStorageLayout) })
    }
  }

  toggleDarkMode() {
    this.setState = { lightTheme: true }

    localStorage.setItem("lightTheme", !this.state.lightTheme)
  }

  render() {
    return (
      <ThemeProvider theme={this.state.lightTheme ? light : dark }>
        
        <Router>
           
            <Header />

            <div> 
              <button onClick={() => this.toggleDarkMode()}> dark mode </button>
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

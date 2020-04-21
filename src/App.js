import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../src/components/Header';
import CoinList from '../src/components/CoinList';
import NotFound from '../src/components/NotFound';

const light = {
  main: "#2a2a2a",
  secondary: "white",
  link: "white",
  brand: "rebeccapurple",
  body: "white",
}

const dark = {
  main: "white",
  secondary: "#2a2a2a",
  link: "white",
  brand: "palevioletred",
  body: "#2a2a2a",
}

const LayoutOuter = styled.div`
  background-color: ${ props => props.theme.secondary ? props.theme.body : undefined };

  color: ${ props => ( props.theme.secondary ? props.theme.main : undefined )};
`

const LayoutInner = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`

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
    this.setState({ 
      lightTheme: !this.state.lightTheme
    })

    localStorage.setItem("lightTheme", !this.state.lightTheme)
  }

  render() {
    return (
      <ThemeProvider theme={this.state.lightTheme ? light : dark }>

        <LayoutOuter>

          <LayoutInner>
            <Router>
              
              <Header toggleDarkMode={this.toggleDarkMode}/>

              <Switch>
                <Route path="/" component={CoinList} exact />
                <Route component={NotFound} />
              </Switch>
            
            </Router> 
          </LayoutInner>

        </LayoutOuter>
        
      </ThemeProvider>
    );
  }
}

export default App;  

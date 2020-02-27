import React, { Component } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';



class DarkMode extends Component {

    constructor(props) {
        super(props);

        this.state = { mode: 'light' } 
    }

    handleDarkMode(event) {

    }

    render() {
        return(
            <button> Dark Mode </button>
        )
    }
}

export default DarkMode;

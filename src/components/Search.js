import React, { Component } from 'react';
import styled from 'styled-components';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleSearch() {
        
    }

    render () {
        return (
            <form onSubmit={this.handleSearch}> 
                <input/>
                <button> Search </button>
            </form>
        )
    }
}

export default Search;  
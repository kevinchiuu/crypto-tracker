import React, { Component } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
`

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            input: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const searchQuery = event.target.value;

        this.setState({ search: searchQuery });
        console.log(this.state.search)
    }

    render() {
        return (
            <SearchContainer> 
                <input 
                onChange={this.handleChange} 
                value={this.state.search}
                type="text"
                placeholder="search"
                />
            </SearchContainer>
        )   
    }
}

export default Search;   
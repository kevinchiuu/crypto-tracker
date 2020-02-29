import React, { Component } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`

    padding-bottom: 15px;

    input {
        height: 23px;
        width: 145px;
        border-color: black;
        border-radius: 10px;
        font-size: 15px;

        ::placeholder {
            text-align: center;
            font-size: 15px;
        }

    }
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
                placeholder="search coins"
                />



            </SearchContainer>
        )   
    }
}

export default Search;   
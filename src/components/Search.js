import React, { Component } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
`

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const valueName = event.target.value;

        this.setState({ search: valueName });

        console.log(this.state.search)
    }

    render() {
        return (
            <SearchContainer>
                <form> 
                    <input 
                    onChange={this.handleChange} 
                    value={this.state.search}
                    type="text"
                    placeholder = "search"
                    />
                </form>
            </SearchContainer>
        )   
    }
}

export default Search;   
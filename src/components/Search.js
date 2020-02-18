import React, { Component } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`

`

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);

        const valueName = event.target.value;

        this.setState({ searchQuery: valueName });
    }

    render () {
        return (
            <SearchContainer>
                <form> 
                    <input onChange={this.handleChange} />
                </form>
            </SearchContainer>
        )
    }
}

export default Search;   
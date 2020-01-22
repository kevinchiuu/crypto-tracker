import React, { Component } from 'react';
import Table from './Table';
import styled from 'styled-components';

const PercentUp = styled.span`
    color: green;
`
const PercentDown = styled.span`
    color: red;
`

class CoinList extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            coinList: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        fetch('https://api.coinpaprika.com/v1/tickers')
        .then((response) => response.json())
        .then(data => this.setState({ 
            coinList: data,
            isLoading: false,
        }))
        .catch(error => console.error(error))
    }

    changePercent(percent) {
        if (percent > 0) {
            return <PercentUp> &uarr; {percent} % </PercentUp>
        } else if (percent < 0) {
            return <PercentDown>  &darr; {percent} % </PercentDown>
        } else {
            return <span> {percent} % </span>
        }
    }

    render() {

        const {coinList} = this.state

        return(
            <Table 
                coinList={coinList}
                changePercent={this.changePercent}
            />
        );
    }
}

export default CoinList
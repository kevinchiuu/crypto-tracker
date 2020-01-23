import React, { Component } from 'react';
import Table from './Table';
import styled from 'styled-components';
import axios from 'axios';

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
        axios.get('https://api.coinpaprika.com/v1/tickers')
        .then(data => {this.setState ({
            coinList: data.data,
            isLoading: false,
        })})
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

    formatCurrency(num) {
        return '$ ' + num.toFixed(3).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1, ')
    }

    formatMarketCap(num) {
        return '$ ' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1, ')
    }

    render() {

        const { coinList } = this.state
        const { changePercent, formatCurrency, formatMarketCap } = this

        return(
            <Table 
                coinList={coinList}
                changePercent={changePercent}
                formatCurrency={formatCurrency}
                formatMarketCap={formatMarketCap}
            />
        );
    }
}

export default CoinList
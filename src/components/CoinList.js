import React, { Component } from 'react';
import Table from './Table';
import Pagination from './Pagination';
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
            coinsPerPage: 50,
            currentPage: 1,
        };
    }

    componentDidMount() {
        axios.get('https://api.coinpaprika.com/v1/tickers')
        .then(data => {this.setState ({
            coinList: data.data.sort((a,b) => a.rank - b.rank),
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

    handlePaginationClick() {
        
    }

    render() {
        const { coinList, currentPage, coinsPerPage } = this.state;

        const lastCoinIndex = currentPage * coinsPerPage;
        const firstCoinIndex = lastCoinIndex - coinsPerPage;
        const currentCoinsPage = coinList.slice(firstCoinIndex, lastCoinIndex);
        const totalPages = Math.ceil(coinList.length / coinsPerPage)

        return(
            <div>
                <Table 
                    coinList={currentCoinsPage}
                    changePercent={this.changePercent}
                    formatCurrency={this.formatCurrency}
                    formatMarketCap={this.formatMarketCap}
                />
                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            </div>
        );
    }
}

export default CoinList
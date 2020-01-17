import React, { Component } from 'react';
import Table from './Table'
import styled from 'styled-components'

const PercentRaised = styled.span`
    color: green;
`
const PercentFallen = styled.span`
    color: red;
`

class CoinList extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            coinList: [],
            isLoading: false,
        }
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
            return <PercentRaised> {percent} % </PercentRaised>
        } else if (percent < 0) {
            return <PercentFallen> {percent} % </PercentFallen>
        } else {
            return <span> {percent} % </span>
        }
    }

    render() {
        
        const { coinList } = this.state

        return(
           <div>
                <table>
                    <thead>
                        <tr>
                            <td> name + rank </td>
                            <td> price </td>
                            <td> market cap </td>
                            <td> % Change </td>
                            <td> circulating supply </td>
                            <td> volume </td>
                        </tr>
                    </thead>

                    <tbody>
                        {coinList.map((coin) => 
                            <tr key={coin.id}>
                                <td> <span> {coin.rank} </span> {coin.symbol} </td>
                                <td> {coin.quotes["USD"].price} </td>
                                <td> {coin.quotes["USD"].market_cap} </td>
                                <td> {this.changePercent(coin.quotes["USD"].percent_change_24h)} </td>
                                <td> {coin.circulating_supply} </td>
                                <td> {coin.quotes["USD"].volume_24h} </td>
                            </tr>
                        )}
                    </tbody>
                </table>
           </div>
        )
    }
}

export default CoinList
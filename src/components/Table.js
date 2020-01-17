import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.table`

`

const Table = (props) => {

    return(
        <TableContainer>
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
                        {this.state.coinList.map((coin) => 
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
        </TableContainer>
    )
}

export default Table
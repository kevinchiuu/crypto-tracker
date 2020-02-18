import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.table`
    width: 100%;

    th {
        padding: 10px;
    }

    td {
        border-bottom: 1px solid #ddd;
        padding: 12px;
    }

    tbody {
        text-align: center;
    }
`

const Table = (props) => {

    const { coinList, changePercent, formatCurrency, formatMarketCap } = props

    return(
        <TableContainer>
            <thead>
                <tr>
                    <th> # </th>
                    <th> Name </th>
                    <th> Price </th>
                    <th> % change (24h) </th>
                    <th> Market Cap </th>
                    <th> Circulating Supply </th>
                    <th> Volume (24h) </th>
                </tr>
            </thead>
            <tbody>
                {coinList.map((coin) => 
                    <tr key={coin.id}>
                        <td> {coin.rank} </td>
                        <td> {coin.symbol} </td>
                        <td> {formatCurrency(coin.quotes["USD"].price)} </td>
                        <td> {changePercent(coin.quotes["USD"].percent_change_24h)} </td>
                        <td> {formatMarketCap(coin.quotes["USD"].market_cap)} </td>
                        <td> {formatMarketCap(coin.circulating_supply)} </td>
                        <td> {formatCurrency(coin.quotes["USD"].volume_24h)} </td>
                    </tr>
                )}
            </tbody>
        </TableContainer>
    );
}

export default Table;
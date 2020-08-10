import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.table`
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

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
                    </tr>
                )}
            </tbody>
        </TableContainer>
    );
}

export default Table;
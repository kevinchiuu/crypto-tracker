import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
    
`

const Table = (props) => {

    return(
        <TableContainer> 
            <table>
                <thead>
                    <tr>
                        <th> name + rank </th>
                        <th> price </th>
                        <th> 24h % change </th>
                        <th> market cap </th>
                        <th> circulating supply </th>
                        <th> volume </th>
                    </tr>
                </thead>
                <tbody>
                    {props.coinList.map((coin) => 
                        <tr key={coin.id}>
                            <td> <span> {coin.rank} </span> {coin.symbol} </td>
                            <td> {coin.quotes["USD"].price} </td>
                            <td> {props.changePercent(coin.quotes["USD"].percent_change_24h)} </td>
                            <td> {coin.quotes["USD"].market_cap} </td>
                            <td> {coin.circulating_supply} </td>
                            <td> {coin.quotes["USD"].volume_24h} </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </TableContainer>
    );
}

export default Table;
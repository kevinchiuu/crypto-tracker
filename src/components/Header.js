import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    h1 {
        text-transform: uppercase;
        color: black;
    }
`
const LinkStyle = styled(Link)`
    text-decoration: none;
`

const Header = () => {
    return (
        <HeaderContainer>
            <LinkStyle to="/">
                <h1> Coin Tracker </h1>
            </LinkStyle>
            
            <Search />
        </HeaderContainer>
)}

export default Header
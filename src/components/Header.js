import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    h1 {
        text-transform: uppercase;
        color: black;
        text-decoration: none;
    }
`
const LinkStyle = styled(Link)`
    text-decoration: none;
    color: black;
`

const Header = () => {
    return (
        <HeaderContainer>
            <h1>
                <LinkStyle to="/">
                    Coin Tracker
                </LinkStyle>
            </h1>

            <Search/>
        </HeaderContainer>
)}

export default Header
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    h1 {
        text-transform: uppercase;
        color: black;
        text-decoration: none;
        display: inline-block;
    }
`
const LinkStyle = styled(Link)`
    text-decoration: none;
    color: black;
`

const DMButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1%;
`

const Header = (props) => {

    const {toggleDarkMode} = props

    return (
        <HeaderContainer>
            <h1>
                <LinkStyle to="/">
                    Coin Tracker
                </LinkStyle>
            </h1>

            <DMButton> 
                <button onClick={() => toggleDarkMode()}> dark mode </button>
            </DMButton>

        </HeaderContainer>
)}

export default Header
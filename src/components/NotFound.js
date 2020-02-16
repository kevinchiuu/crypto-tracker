import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundStyle = styled.div`
    text-align: center;
`

const NotFound = () => {
    return(
        <NotFoundStyle>
            <h1> OOPS PAGE NOT FOUND!! </h1>

            <Link to="/">
                Back to Homepage! 
            </Link>
        </NotFoundStyle>
    )
}

export default NotFound; 
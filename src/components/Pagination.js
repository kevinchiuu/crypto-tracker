import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px;
`
const PaginationText = styled.div`
    padding-left: 15px;
    padding-right: 15px;
`

const NextButton = styled.button`
`
const PreviousButton = styled.button`
`

const Pagination = (props) => {

    const { currentPage } = props;

    return(
        <ButtonContainer> 
            <PreviousButton

            > 
                &larr; 
            </PreviousButton>

            <PaginationText> <b>{currentPage}</b> of {} </PaginationText>

            <NextButton> 
                &rarr; 
            </NextButton>
        </ButtonContainer>
    )
}

export default Pagination;
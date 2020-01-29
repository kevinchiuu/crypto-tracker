import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px;
`
const PaginationText = styled.div`
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
`

const NextButton = styled.button`
    font-size: 20px;
    padding: 5px 15px;
    border-radius: 4px;

    :hover {
        background: #3092E8;
    }
`
const PreviousButton = styled.button`
    font-size: 20px;
    padding: 5px 15px;
    border-radius: 4px;

    :hover {
        background: #3092E8;
    }
`

const Pagination = (props) => {

    const { currentPage, totalPages, handlePaginationClick } = props;

    return(
        <ButtonContainer> 
            <PreviousButton 
                onClick={ () => handlePaginationClick('prev') }
                disabled={currentPage <= 1}
            > 
                &larr; 
            </PreviousButton>

            <PaginationText> <b>{currentPage}</b> of {totalPages} </PaginationText>

            <NextButton onClick={() => handlePaginationClick('next')}> 
                &rarr; 
            </NextButton>
        </ButtonContainer>
    )
}

export default Pagination;
import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    margin: 10px 0;
    box-shadow: 0 0 5px #ddd;
`;

export const StyledHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    border-bottom: 1px solid #ddd;
    padding: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledTitle = styled.h2`
    font-size: 20px;
    margin: 0;
`;
import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    margin: 10px 0;
    box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    margin: 0;
`;
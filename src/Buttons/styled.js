import styled from "styled-components";

export const StyledButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledButtons = styled.button`
    color: ${({ theme }) => theme.color.teal};
    background-color: transparent;
    border: none;
    margin-left: 20px;
    transition: color 0.5s;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(110%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }
`;
import styled from "styled-components";

export const Button = styled.button`
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
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
        cursor: auto;

        &:hover {
            filter: brightness(100%);
        }
    }
`;
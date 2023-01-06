import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    border: 2px solid ${({ theme }) => theme.color.alto};
    padding: 10px;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border: none;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
         transform: scale(1.05);
    }

    &:active {
        filter: brightness(120%);
    }
`;
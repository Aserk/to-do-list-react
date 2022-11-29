import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledInput = styled.input`
    border: 2px solid #ddd;
    padding: 10px;
`;

export const StyledButton = styled.button`
    padding: 10px;
    background-color: hsl(180, 100%, 25%);
    color: white;
    border: none;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        background-color: hsl(180, 100%, 30%);
         transform: scale(1.05);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }
`;
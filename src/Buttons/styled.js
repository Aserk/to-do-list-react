import styled from "styled-components";

export const StyledButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledButtons = styled.button`
    color: teal;
    background-color: transparent;
    border: none;
    margin-left: 20px;
    transition: color 0.5s;
    cursor: pointer;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        color: hsl(180, 100%, 30%);
    }

    &:active {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: #ccc;
    }
`;
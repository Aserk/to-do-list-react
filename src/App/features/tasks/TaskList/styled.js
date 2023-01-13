import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    padding: 20px;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
            filter: brightness(110%);
        }

        &:active {
            filter: brightness(120%);
        }
`;

export const DoneButton = styled(Button)`
        background-color: ${({ theme }) => theme.color.forestGreen};
`;

export const RemoveButton = styled(Button)`
        background-color: ${({ theme }) => theme.color.crimson};
`;
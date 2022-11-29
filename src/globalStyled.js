import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #eee;
        word-break: break-word;
    }
`;
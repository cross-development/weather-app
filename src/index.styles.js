//Core
import { createGlobalStyle } from 'styled-components';
import bgImg from './assets/bg-img/9129060qwe.jpg';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, sans-serif;
    }

    body {
        background-image: url(${bgImg});
        background-size: cover;
        background-position: 0 0;
        background-repeat: no-repeat;
    }

    #root {
        height: 100vh;
        padding-top: 1.5rem;
        display: flex;
        flex-direction: column;
    }
`;

export default GlobalStyle;

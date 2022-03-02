import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  --background: #eee;
  --yellow: #FFC145;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #454545;
  }

  #root {
    height: 100vh;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }


  body {
    background: var(--background);
    margin: 0 !important;
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font-family: 'Ubuntu', sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

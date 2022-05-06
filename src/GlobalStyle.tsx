import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    // Font sizes
    --header-font-size: 48px;
    --subtitle-font-size: 24px;
    --normal-font-size: 18px;
    --legenda-font-size: 14px;
    --mobile-title-font-size: 36px;
    --mobile-subtitle-font-size: 18px;
    --mobile-normal-font-size: 16px;
    --mobile-legenda-font-size: 14px;

    // Fonts styles
    --font-family: 'Roboto', 'sans-serif';
    --desktop-line-height: 24px;
    --desktop-letter-spacing: "13%";

    --mobile-line-height: 24px;
    --mobile-letter-spacing: "8%";    
    
    // Color scheme
    --main-color: '#FD2D2D';
    --secondary-color: '#FBC406';
    --black: '#000';
    --white: '#fff';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyle
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    // Desktop Font sizes
    --title-font-size: 48px;
    --subtitle-font-size: 24px;
    --normal-font-size: 18px;
    --legenda-font-size: 14px;

    // Mobile Font Sizes
    --mobile-title-font-size: 36px;
    --mobile-subtitle-font-size: 18px;
    --mobile-normal-font-size: 16px;
    --mobile-legenda-font-size: 12px;

    // Fonts styles
    --font-family: 'Roboto', 'sans-serif';
    --desktop-line-height: 24px;
    --desktop-letter-spacing: "13%";

    --mobile-line-height: 24px;
    --mobile-letter-spacing: "8%";    
    
    // Color scheme
    --main-color: '#FD2D2D';
    --secondary-color: '#FBC406';
    --black-bg: #000;
    --white-bg: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family);
  }
`

export default GlobalStyle
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: "Open Sans";
  src: url("../fonts/open-sans-regular.woff") format("woff");
   font-weight: 400;
   font-style: normal;
}
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;
  }

  form{
    width: 100%;
  }
  
  body{
    max-width: 420px;
    margin: 0 auto;
  }
  
  ul{
    list-style: none;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  img{
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export default GlobalStyles;
import { createGlobalStyle } from 'styled-components';
//import {colors} from '.././components/styles/variables';

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
    max-width: 1024px;
    font-size: 1.6rem;
    font-family: "Open Sans";
  }

  form{
    width: 100%;
  }
  
  body{
    margin: 0 auto;
  }
  
  ul{
    list-style: none;
    padding: 0;
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

  input{
    padding: 0 0.5rem;
    color: #999999;
    border: 1px solid #ddd;
    margin: 1em 0;
    font-size: 1.5rem;
    width: 100%;
    height: 2em;
    border-radius: 3px;
    font-family: 'Open Sans', sans-serif;
    width: 100%;
  }

  p{
    line-height: 1.5;
  }
`;

export default GlobalStyles;
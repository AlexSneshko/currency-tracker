import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  $primary: red;

  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-style: normal;
    color: ${(props) => props.theme.colors.text};
    font-family: 'Poppins', sans-serif;
    line-height: normal;
  }
`

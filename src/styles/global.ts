import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-style: normal;
    color: ${(props) => props.theme.colors.text};
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
    font-family: 'Poppins', sans-serif;
    line-height: normal;
  }
`

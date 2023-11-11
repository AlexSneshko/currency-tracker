import { createGlobalStyle, css } from 'styled-components'

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
    font-family: 'Poppins', sans-serif;
    line-height: normal;
  }

  --primary: linear-gradient(90deg, #00ce2c 0.18%, #aedf23 49.3%, #a3dc00 99.88%);
  --black: #030304;
  --white: #fff;
`
export const whiteColor = () => {
  return css`
    color: #fff;
  `
}

export const primaryTextColor = () => {
  return css`
    background: linear-gradient(
      90deg,
      #00ce2c 0.18%,
      #aedf23 49.3%,
      #a3dc00 99.88%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `
}

export const blackColor = () => {
  return css`
    color: #030304;
  `
}

export const container = () => {
  return css`
    max-width: 76rem;
    margin: 0 auto;
  `
}

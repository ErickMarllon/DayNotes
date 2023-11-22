import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

hmtl,
body,
#root {
  height: 100%;
}

body {
  background: #e4e7ef;
  -webkit-font-smoothing: antialised;
}

body,
input,
button,
textarea {
  font-family: 'Roboto', sans-serif;
}
`

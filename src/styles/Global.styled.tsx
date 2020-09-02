import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'MapoGoldenPier';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoGoldenPierA.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'MapoGoldenPier';
  font-size:14px; 
}
.cf:after,
.cf:before {
  content: "";
  display: block;
  clear: both;
}
a {
  color: inherit;
  text-decoration: none;
}
img {
  border: none;
  max-width: 100%;
  vertical-align: middle;
}
ol,
ul {
  list-style: none;
}
table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}
fieldset {
  border: none;
}
legend,
caption {
  display: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%;
}
header,
section,
footer,
article,
aside,
figure,
video,
audio,
nav {
  display: block;
}
strong,
em {
  font-weight: normal;
  font-style: normal;
}
`;

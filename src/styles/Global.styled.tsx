import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

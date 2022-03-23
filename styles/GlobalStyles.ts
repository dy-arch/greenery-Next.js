import { css } from "@emotion/react";

const reset = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  p,
  blockquote,
  pre,
  code,
  address,
  ul,
  ol,
  li,
  nav,
  section,
  article,
  header,
  footer,
  main,
  aside,
  dl,
  dt,
  dd,
  table,
  thead,
  tbody,
  tfoot,
  label,
  caption,
  th,
  td,
  form,
  fieldset,
  legend,
  hr,
  input,
  button,
  textarea,
  object,
  figure,
  figcaption {
    margin: 0;
    padding: 0;
  }
  body,
  input,
  select,
  textarea,
  button,
  img,
  fieldset {
    border: none;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }
  address,
  cite,
  code,
  em,
  i {
    font-style: normal;
    font-weight: normal;
  }
  label,
  img,
  input,
  select,
  textarea,
  button,
  a {
    vertical-align: middle;
  }
  u,
  ins,
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }

  body {
    font-family: "Noto Sans KR", sans-serif;
  }
  select {
    appearance: none;
  }
  select::-ms-expand {
    display: none;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration,
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input[type="number"],
  input[type="text"],
  input[type="password"],
  input[type="url"],
  input[type="email"],
  input[type="tel"],
  input[type="date"],
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-border-radius: 0;
    outline: 0;
  }
  textarea {
    resize: none;
  }
`;

export default reset;

import { css, Theme } from "@emotion/react";

const reset = (theme: Theme) => css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

  /* 여백 초기화 */
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

  /* 기본 border 제거 */
  body,
  input,
  select,
  textarea,
  button,
  img,
  fieldset {
    border: none;
  }

  /* 리스트 제거 */
  ul,
  ol,
  li {
    list-style: none;
  }

  /* 표 간격 초기화 */
  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }

  /* 이텔릭 제거 */
  address,
  cite,
  code,
  em,
  i {
    font-style: normal;
    font-weight: normal;
  }

  /* 세로 정렬 초기화 */
  /* label,
  img,
  input,
  select,
  textarea,
  button,
  a {
    vertical-align: middle;
  } */

  u,
  ins,
  a {
    text-decoration: none;
    color: #000;
  }

  button {
    cursor: pointer;
  }

  /* 폰트 */
  html {
    font-size: 20px;
  }

  body,
  a {
    font-size: 0.8rem;
    font-family: "Roboto", sans-serif;
  }

  /* 셀렉트 화살 제거 */
  select {
    appearance: none;
  }
  /* IE edge */
  select::-ms-expand {
    display: none;
  }

  /* input 태그 기본 버튼 제거 */
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

  /* 크기 조절 제거 */
  textarea {
    resize: none;
  }

  @media (max-width: ${theme.deviceType.desktop}) {
    html {
      font-size: 17px;
    }
  }
`;

export default reset;

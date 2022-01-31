import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import puzzleImage from './images/puzzle.jpeg';
import App from './App';
import reportWebVitals from './reportWebVitals';

const GlobalStyles = createGlobalStyle`
  body {
    background-image: url(${puzzleImage});
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

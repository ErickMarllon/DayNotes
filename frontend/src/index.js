import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { GlobalStyle } from './GlobalStyle';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>  
     <GlobalStyle/>
    <App />
  </React.StrictMode>
);
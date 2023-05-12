import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { DeviceThemeProvider } from '@salutejs/plasma-ui/components/Device'; // Типографика, имеющая размеры, зависимые от типа устройства
import { GlobalStyle } from './GlobalStyle'; // Тема оформления (цветовая схема)

ReactDOM.render(
  <DeviceThemeProvider responsiveTypo={true}>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DeviceThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

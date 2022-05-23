import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import store from './redux/Redux-store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>

  </Provider>

);
reportWebVitals();

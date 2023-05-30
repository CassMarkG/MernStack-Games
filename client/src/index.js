import React from "react";
import ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App.jsx";
import {store} from './app/store.js';
import "./register.css";

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById("root"));
import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import React from "react";

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
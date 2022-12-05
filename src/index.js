import React from "react";
import ReactDOM from "react-dom";

import "./css/main.css";

import App from "./components/App/App";
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root'),
);

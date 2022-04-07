import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const cont = document.getElementById("root");
const root = ReactDOMClient.createRoot(cont);
root.render(<App />);

reportWebVitals();

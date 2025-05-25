import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/stote.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <CssBaseline />
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);

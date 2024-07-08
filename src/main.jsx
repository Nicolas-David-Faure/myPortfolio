import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
window.props_webchat_insideone = {
  backgroundChat: null,
  colorText: null,
  logoURL: null,
  fontSize: null,
  backgroundHeader: null,
  urlLogoToggleChat: null,
  idAssistant : "asst_7LUpiOqWTmKIoQrxHozJiCFJ",
  coloIconsHeader: "#f2f2f2",
  titleHeader: "Reembolsos sura",
  colorTitleHeader: "white",
};

const script = document.createElement("script");
script.type = "module";
script.src = "https://us-central1-insideone-onebot.cloudfunctions.net/surabotWidget";
script.async = true
document.body.appendChild(script);
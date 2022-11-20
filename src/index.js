import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { FavoritesContextprovider } from "./store/favorites-context";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextprovider>
);
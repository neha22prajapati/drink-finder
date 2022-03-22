import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";

import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import FavoriteList from "./components/favoriteList";

const store = createStore(rootReducer);
//store.subscribe(() => console.log("state", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/fav" element={<FavoriteList />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

import { SocketProvider } from "./socket"; // Import the SocketProvider

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketProvider> {/* Wrap your app with SocketProvider */}
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </SocketProvider>
    </Provider>
  </React.StrictMode>
);

export default store;
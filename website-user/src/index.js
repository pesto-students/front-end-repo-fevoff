import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import * as Sentry from "@sentry/react";
import { Provider } from "react-redux";
import store from "./Store";
import AlertTemplate from "react-alert-template-basic";
import { positions, transitions, Provider as AlertProvider } from "react-alert";


const options ={
  timeout:5000,
  position:positions.BOTTOM_CENTER,
  transitions:transitions.SCALE
}


Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],

  tracesSampleRate: 1.0,

  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>
   
  </Provider>
);

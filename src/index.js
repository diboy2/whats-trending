import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { DataStore } from '@aws-amplify/datastore';
import { TrendingContent } from './models';

Amplify.configure(awsconfig);

await DataStore.save(
  new TrendingContent({
  "text": "Lorem ipsum dolor sit amet",
  "url": "Lorem ipsum dolor sit amet"
})
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

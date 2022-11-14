import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FacebookLogin from 'react-facebook-login';
import reportWebVitals from './reportWebVitals';
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
const responseFacebook = (response) => {
  console.log(response);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FacebookLogin
    appId="839473210534958"
    autoLoad={true}
    fields="name,email,picture"
    // onClick={componentClicked}
    callback={responseFacebook} />,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

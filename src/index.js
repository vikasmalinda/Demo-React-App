import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RouterDemo from './component/RouterDemo';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Addition from './component/Addition';
// import Addtion_of_two_numbers from './component/Addition_of_two_numbers';
// import CrudOperation from './component/CrudOperation';
// import Router from './component/Router';

ReactDOM.render(
  <React.StrictMode>
    {/* <Addition msg = "science-book" msg1="arts-book"/>
    <Addition msg = "social-book"/> */}
    {/* <Addtion_of_two_numbers/> */}
    <RouterDemo/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import Addgame from './components/addmember';
import Addmember from './components/addmember';
import Featured from './components/featured';
import EditGame from './components/edittt';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/signup';
import { SignIn, SignUp } from './components/maps';
import App2 from './components/app2';
import ButtonAppBar from './components/mappbar';
import MenuAppBar from './components/mappbar';
// import Congo from './components/congo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<StrictMode>
    < App/>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
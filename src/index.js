import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css'

import './index.css';
import App from './App';
import CreatContextComponent from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <CreatContextComponent>
    <App/>
   </CreatContextComponent>
  </React.StrictMode>
);

reportWebVitals();

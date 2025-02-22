import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import UserList from './components/userList/UserList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();
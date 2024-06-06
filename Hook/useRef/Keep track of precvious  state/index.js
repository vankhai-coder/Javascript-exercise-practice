// import React from 'react';
import ReactDOM from 'react-dom/client';

// import bootstrap : 
import 'bootstrap/dist/css/bootstrap.min.css'; 

// import App : 
import App from './App.js';


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    // <React.StrictMode>
        <App />
    //  </React.StrictMode>
)

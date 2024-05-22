import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom

// import App : 
import App from '../App.js' ; 


// Render component App vào #root element
const root = ReactDOM.createRoot(document.getElementById('root')) ;
root.render(  <App/> ) ; 




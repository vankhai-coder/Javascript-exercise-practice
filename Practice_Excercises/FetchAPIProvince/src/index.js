import ReactDOM from 'react-dom/client'
import React from 'react'
// import { BrowserRouter as Router } from 'react-router-dom'

// import bootstrap css : 
import 'bootstrap/dist/css/bootstrap.min.css'
// import boorstrap script : 
import 'bootstrap/dist/js/bootstrap.bundle.min'


import App from './ProvinceAPI_Pagination/App'

// import StoreProvider from './/store/Provider'
import StoreProvider from './ProvinceAPI_Pagination/store/Provider'

// import toast : 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    // <React.StrictMode>
    <StoreProvider>
        {/* <Router> */}
        <App />
        {/* </Router> */}
        <ToastContainer />
    </StoreProvider>
    //  </React.StrictMode>
)
import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// import bootstrap css : 
import 'bootstrap/dist/css/bootstrap.min.css'
// import boorstrap script : 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// import redux Provider : 
import { Provider } from 'react-redux'
import store from './redux/Store/store'

// import toast : 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import App : 
import App from './App'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <>
        {/* // <React.StrictMode> */}
        {/* // <StoreProvider> */}
        <Router>
            <Provider store={store}>
                < App />
            </Provider>
        </Router>
        < ToastContainer />
        {/* //  </StoreProvider> */}
        {/* // </React.StrictMode> */}
    </>
)
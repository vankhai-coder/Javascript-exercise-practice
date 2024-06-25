import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// import bootstrap css : 
import 'bootstrap/dist/css/bootstrap.min.css'
// import boorstrap script : 
import 'bootstrap/dist/js/bootstrap.bundle.min'


import App from './manageApplicant/App'
import { StoreProvider } from './manageApplicant/store'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    // <React.StrictMode>
    <StoreProvider>
    {/* // <Router> */}
        <App />
    {/* // </Router> */}

     </StoreProvider>
    //  </React.StrictMode>
)
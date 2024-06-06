// import React from "react";
import { useState } from "react";

import Content from "./Content";
import isValidate from "./isValidate";

function App() {

    const [state, setState] = useState(false);

    const toggle = () => {
        setState(!state);
    }

    return (
        <>
            <button
                className="btn btn-warning"
                onClick={toggle}
            >
                Toggle
            </button>

            {state && <Content isValidate={isValidate} />}
        </>

    )
}

export default App;
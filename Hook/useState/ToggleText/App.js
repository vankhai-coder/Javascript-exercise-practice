import React, { useState } from "react";



function App() {

    const [text, setText] = useState('none');

    const handleText = function () {

        if (text === 'block') {
            setText('none');
        } else {
            setText('block');
        }
        console.log(text);
    }

    return (

        <div>

            <button onClick={handleText} >
                Hide/Show Text !
            </button>

            <h1 style={{ display: text }} >
                Vo Hung TInh
            </h1>

        </div>

    )

}


export default App; 
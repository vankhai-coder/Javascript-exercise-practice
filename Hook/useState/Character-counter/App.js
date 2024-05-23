import React, { useState } from 'react';

function App() {

        const [ number , setNumber ] = useState(0) ; 

        const handleCount = function (event) {
                setNumber( event.target.value.trim().length )
        }

    return (

        <div>

            <textarea rows="5" cols="50" placeholder='Enter here...'  onChange={handleCount} />
            <p>Number of character : {number}  </p>

        </div>
    )


}

export default App; 
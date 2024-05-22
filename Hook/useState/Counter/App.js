import React from 'react';
import { useState } from 'react';


function App() {

    const [counter, setCounter] = useState(2);

    const handleIncreate = () => {
        setCounter(counter + 1);
    }

    const handleDecreate = () => {
        setCounter(counter - 1);
    }



    return (
        <section style={{ "margin": "auto", marginTop: 20 }}  >
            <div>
                <h2>Current number is : {counter}</h2>
                <button onClick={handleIncreate}>Increate</button>
                <button onClick={handleDecreate} >Decreate</button>
            </div>
        </section>
    )


}




export default App; 
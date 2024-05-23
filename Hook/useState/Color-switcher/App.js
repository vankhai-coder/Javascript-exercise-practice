import React, { useState } from 'react';



function App() {

    const [color, setColor] = useState();

    const handleChangeColor = function (e) {
        setColor(e.target.value)
    }

    return (

        <div>

            <div style={{ width: 200, height: 200, margin: 40, backgroundColor: color }} >

            </div>

            <select onChange={handleChangeColor}  >
                <option hidden>Choose an option</option>
                <option value="red" >RED</option>
                <option value="yellow"  >YELLOW</option>
                <option value="green" >GREEN</option>
                <option value="pink" >PINK</option>
            </select>

        </div>
    )

}

export default App; 
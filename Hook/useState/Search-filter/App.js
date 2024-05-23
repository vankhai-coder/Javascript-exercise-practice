import React, { useState } from 'react';


const items = ['Apple', 'Banana', 'Carrot', 'Date', 'Eggplant', 'Fig', 'Grape'];


function App() {

    const [list, setList] = useState([]);

    const handleSearch = function (event) {
        if (event.target.value.trim() !== '' ) {
            setList(items.filter((item) => {
                return item.toLowerCase().includes(event.target.value.trim().toLowerCase());
            }))
        }else{
            setList([]) ; 
        }
    }


    return (
        <div>
            <input placeholder='search...' onChange={handleSearch} />
            <ul>
                {
                    list.map((fruit, index) =>
                        <li key={index}>
                            {fruit}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default App; 
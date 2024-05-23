import React, { useState } from 'react';



function App() {
    const [list, setList] = useState(["jva", "php"]);
    const [current, setCurrent] = useState('');


    const handleChangeCurrent = (event) => {
        console.log('kahi');
        setCurrent(event.target.value);
    }

    const handleAddItem = () => {
        if (current.trim() != '') {
            setList([...list, current]);
            setCurrent('')
        }
    }
    const deleteItem = (index) => {
        setList(list.filter((_, id) => {
            return id !== index;
        }))
    }

    return (
        <div>
            <input type="text" onChange={handleChangeCurrent} value={current} />
            <button onClick={handleAddItem}  >Add item</button>
            <ul>
                {
                    list.map((i, index) =>
                        <li key={index} >
                            <li >
                                {i}
                            <button onClick={() => deleteItem(index)}>
                                X
                            </button>
                            </li>

                        </li>
                    )
                }
            </ul>
        </div>
    )

}


export default App; 
import { useRef } from "react";
import { useState } from "react";


function Content() {

    const [number, setNumber] = useState(60);

    const id = useRef(90);


    const handleStart = () => {
        id.current = setInterval(() => {
            setNumber(prev => prev - 1)
        }, 1000);
    }

    const handleStop = () => {
        clearInterval(id.current);
    }

    return (
        <>
            <span> {number} </span>
            <button
                onClick={handleStart}
            >
                Start
            </button>

            <button
                onClick={handleStop}
            >
                Stop
            </button>
        </>

    )

}

export default Content; 
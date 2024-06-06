import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";


function Content() {

    const [number, setNumber] = useState(60);
    //  phan bai get dom element : 
    const refDOM = useRef(999);

    // phan bai Clear Interval Id : 
    const id = useRef(90);
    const handleStart = () => {
        id.current = setInterval(() => {
            setNumber(prev => prev - 1)
        }, 1000);
    }
    const handleStop = () => {
        clearInterval(id.current);
    }

    useEffect(() => {
        const rect = refDOM.current.getBoundingClientRect();


        console.log(rect);
    }, [])

    return (
        <>
            <span ref={refDOM}> {number} </span>
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
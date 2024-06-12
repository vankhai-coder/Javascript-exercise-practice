

// useReducer : 

import { useEffect, useReducer, useRef, useState } from "react";

//1. set initState : 
const initState = {
    job: '',
    toDoJobs: [],
    completeJobs: [],
    isEmpty: false,
    isExist: false,
}
// 2.Action  : 
const SET_JOB = 'set_job';
const SET_TO_DO_JOB = 'set-to-do-job';
const DELETE_TO_DO_JOB = 'delete_to_do_job';
const SET_COMPLETE_JOB = 'set_complete_job';
const DELETE_COMPLETE_JOB = 'delete_complete_job'
const CLOSE_EMPTY_MESSAGE = 'close_empty_message';
const CLOSE_EXIST_MESSAGE = 'close_exist_message';

const setJob = (payload) => (
    {
        type: SET_JOB,
        payload
    }
)
const setToDoJob = (payload) => (
    {
        type: SET_TO_DO_JOB,
        payload
    }
)
const deleteTodoJob = (payload) => (
    {
        type: DELETE_TO_DO_JOB,
        payload
    }
)
const markAsCompleteJob = (payload) => (
    {
        type: SET_COMPLETE_JOB,
        payload
    }
)

const deleteCompleteJob = (payload) => (
    {
        type: DELETE_COMPLETE_JOB,
        payload
    }
)
const clostEmptyMessage = () => (
    {
        type: CLOSE_EMPTY_MESSAGE,
    }
)
const clostExistMessage = () => (
    {
        type: CLOSE_EXIST_MESSAGE,
    }
)

//3. reducer : 
const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload,
                isEmpty: false,
                isExist: false
            }

        case SET_TO_DO_JOB:

            if (action.payload.trim() === '') {
                return {
                    ...state,
                    isEmpty: true
                }
            } else {
                if (state.toDoJobs.includes(action.payload.trim())) {
                    return {
                        ...state,
                        isExist: true
                    }
                } else {
                    return {
                        ...state,
                        job: '',
                        toDoJobs: [...state.toDoJobs, action.payload.trim()]
                    }
                }


            }
        case DELETE_TO_DO_JOB:
            newState = { ...state }
            newState.toDoJobs.splice(action.payload, 1)

            return (
                newState
            )

        case SET_COMPLETE_JOB:
            newState = {
                ...state,
                completeJobs: [...state.completeJobs, state.toDoJobs[action.payload]],
            }
            newState.toDoJobs.splice(action.payload, 1)
            return newState


        case DELETE_COMPLETE_JOB:
            newState = { ...state }
            newState.completeJobs.splice(action.payload, 1)
            return newState

        case CLOSE_EMPTY_MESSAGE:
            return {
                ...state,
                isEmpty: false
            }
        case CLOSE_EXIST_MESSAGE:
            return {
                ...state,
                isExist: false
            }


        default:
            throw new Error('Invalid action in reducer function..')
    }
}

//4. dispatch : 




function Content() {
    // useReducer : 
    const [state, dispatch] = useReducer(reducer, initState);

    // useState for time now : 
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // tao useState for time continue : 
    const [continuee, setContinue] = useState(true);

    // dung destructuring lay du lieu ra khoi state : 
    const { job, toDoJobs, completeJobs, isEmpty, isExist } = state;

    // tao useRef de xoa input khi add job : 
    const inputRef = useRef();
    // tao useRef de cho hien thi gio now :
    const timeID = useRef();
    // tao useEffect cho time now : 
    useEffect(
        () => {
            if (continuee) {
                timeID.current = setInterval(() => {
                    setTime(new Date().toLocaleTimeString())

                }, 1000);
            }

            // return function : 
            return () => {
                clearInterval(timeID.current)
            }
        }


        , [continuee]
    )


    // useEffect to close error message ; 
    // init timeId_isEmpty : 
    let timeId_isEmpty
    useEffect(
        () => {
            if (isEmpty) {
                timeId_isEmpty = setTimeout(() => {
                    dispatch(clostEmptyMessage())
                }, 2000);
            }
            // clean up function : 
            return () => {
                clearTimeout(timeId_isEmpty);
            }
        }
        , [isEmpty])

    // init timeId_isExist : 
    let timeId_isExist
    useEffect(
        () => {
            if (isExist) {
                timeId_isExist = setTimeout(() => {
                    dispatch(clostExistMessage())
                }, 2000);
            }
            // clean up function : 
            return () => {
                clearTimeout(timeId_isExist);
            }
        }
        , [isExist])

    return (
        <div style={{ margin: 190 }}>
            <input
                ref={inputRef}
                placeholder="enter job..."
                value={job}
                onChange={
                    (e) => {
                        dispatch(setJob(e.target.value))
                    }
                }

            />
            <button
                onClick={
                    () => {
                        dispatch(setJob(''))
                        dispatch(setToDoJob(job))
                        inputRef.current.focus()
                    }
                }
            >
                Add
            </button>
            <br />
            <h1>TO Do</h1>
            <ul>
                {
                    toDoJobs.map((job, index) => (
                        <li key={index}> {job}
                            <button
                                onClick={
                                    () => {
                                        dispatch(deleteTodoJob(index))
                                    }
                                }
                            >Delte</button>
                            <button
                                onClick={() => {
                                    dispatch(markAsCompleteJob(index))
                                }}
                            >Done</button>
                        </li>
                    ))
                }
            </ul>
            <h1>Complete jobs</h1>
            <ul>
                {
                    completeJobs.map((job, index) => {
                        return <li key={index}>
                            {job}
                            <button
                                onClick={
                                    () => {
                                        dispatch(deleteCompleteJob(index))
                                    }
                                }
                            >
                                Delete
                            </button>
                        </li>
                    })
                }
            </ul>
            {/* <div style={{ display: isEmpty ? 'block' : 'none', backgroundColor: 'orange' }}>loi input isEmpty ! </div> */}
            <div style={isEmpty ? { display: 'block', opacity: '1', transition: 'opacity 0.5s ease-in-out', backgroundColor: 'red' } : { display: 'none', opacity: '0', transition: 'opacity 0.5s ease-in-out', backgroundColor: 'yellow' }}>loi input isEmpty ! </div>
            <div style={{ display: isExist ? 'block' : 'none', backgroundColor: 'orange' }}>loi input already exist ! </div>

            {/* time now :  */}
            <div> bay gio la : {time} </div>
            <button
                onClick={
                    () => {
                        clearInterval(timeID.current)
                        setContinue(false)
                    }
                }
            >stop</button>

            <button
                onClick={
                    () => {
                        setContinue(true)
                    }
                }
            >Continue</button>
        </div>
    )
}

export default Content 

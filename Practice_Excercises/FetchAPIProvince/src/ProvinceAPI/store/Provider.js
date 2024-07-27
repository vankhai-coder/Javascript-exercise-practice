
import { useEffect, useReducer } from "react"
import Context from "./Context"
import reducer, { initState } from "../state/reducer"
import axios from "axios"
const Provider = ({ children }) => {

    // use useReducer : 
    const [state, dispatch] = useReducer(reducer, initState)

    // use useEffect to fetch init data : 
    useEffect(
        () => {
            fetchAddressList()
            fetchStudentList()
            console.log('da fetch 2 list');
        }
        , []
    )


    // function to fetch init data : 
    const fetchStudentList = async () => {
        try {
            const response = await axios.get('http://localhost:9999/students')
            // if fetch success then dispatch to set student list:
            console.log('list student :' , response.data ); 
            dispatch(
                {
                    type: 'FETCH_STUDENT_LIST',
                    payload: response.data
                }
            )

        } catch (error) {
            console.log("error when fetch student list: ", error);
        }
    }

    const fetchAddressList = async () => {
        try {
            const response =  await axios.get('http://localhost:9999/address')
            // if fetch success then dispatch to set address list: 
            dispatch(
                {
                    type: 'FETCH_ADDRESS_LIST',
                    payload: response.data
                }
            )

        } catch (error) {
            console.log("error when fetch student list: ", error);
        }
    }

    return (

        // use useContext to transport data around App : 
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export default Provider
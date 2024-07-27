
const initState = {
    listStudent: [],
    listAddress: []
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_STUDENT_LIST':
            return {
                ...state,
                listStudent: action.payload
            }
        case 'FETCH_ADDRESS_LIST':
            return {
                ...state,
                listAddress: action.payload
            }
        case 'ADD_NEW_STUDENT':
            return {
                ...state,
                listStudent: [
                    ...state.listStudent,
                    action.payload
                ]
            }
        case 'DELETE_STUDENT':
            return {
                ...state,
                listStudent: state.listStudent.filter(s => (s.id !== action.payload))
            }
        case 'ADD_NEW_ADDRESS':
            return {
                ...state,
                listAddress: [
                    ...state.listAddress,
                    action.payload
                ]
            }

        default:
            throw new Error('Invalid action..')
    }
}

export { initState }
export default reducer
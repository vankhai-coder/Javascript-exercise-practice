import { FETCH_LIST_USERS_ERROR, FETCH_LIST_USERS_START, FETCH_LIST_USERS_SUCCESS, FETCH_REGISTER_ERROR, FETCH_REGISTER_START, FETCH_REGISTER_SUCCESS, FETCH_TO_MANAGE_ACCOUNT_ERROR, FETCH_TO_MANAGE_ACCOUNT_START, FETCH_TO_MANAGE_ACCOUNT_SUCCESS } from "../Action/userAction/userConstants";

const INIT_STATE = {
    listUsers: '',
    loading: false,
    error: '',
    registerSuccess: '',
    messageLoading: ''
}


const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_LIST_USERS_START:
            return {
                ...state,
                listUsers: [],
                loading: true,
                error: '',
                messageLoading: 'Loading Accounts..'
            }
        case FETCH_LIST_USERS_SUCCESS:
            return {
                ...state,
                listUsers: action.payload,
                loading: false,
                error: ''
            }
        case FETCH_LIST_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FETCH_REGISTER_START:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case FETCH_REGISTER_SUCCESS:
            return {
                ...state,
                listUsers: [
                    ...state.listUsers, action.payload
                ],
                loading: false,
                error: '',
                registerSuccess: true
            }
        case FETCH_REGISTER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FETCH_TO_MANAGE_ACCOUNT_START:
            return {
                ...state,
                error: '',
                loading: true,
                messageLoading: 'Wait for seconds'
            }
        case FETCH_TO_MANAGE_ACCOUNT_SUCCESS:
            return {
                ...state,
                error: '',
                loading: false,
                messageLoading: '',
                listUsers: state.listUsers.map((u) => {
                    return u.id === action.payload.userId ? action.payload.updateAccount : u
                })
            }
        case FETCH_TO_MANAGE_ACCOUNT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                messageLoading: ''
            }
        default:
            return state;
    }
}

export default reducer 
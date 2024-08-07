import axios from "axios"
import { FETCH_LIST_USERS_ERROR, FETCH_LIST_USERS_START, FETCH_LIST_USERS_SUCCESS, FETCH_REGISTER_ERROR, FETCH_REGISTER_START, FETCH_REGISTER_SUCCESS, FETCH_TO_MANAGE_ACCOUNT_ERROR, FETCH_TO_MANAGE_ACCOUNT_START, FETCH_TO_MANAGE_ACCOUNT_SUCCESS } from "./userConstants"

const fetchListUserStart = () => ({
    type: FETCH_LIST_USERS_START
})
const fetchListUserSuccess = (payload) => ({
    type: FETCH_LIST_USERS_SUCCESS,
    payload
})
const fetchListUserError = (payload) => ({
    type: FETCH_LIST_USERS_ERROR,
    payload
})

export const fetchUserData = () => {
    return async (dispatch) => {
        // first , start fetch list user : 
        dispatch(fetchListUserStart())

        // fetch list user : 
        try {
            const response = await axios.get('http://localhost:9999/users')
            // delay 3 seconds if get list success : 
            setTimeout(() => {
                console.log('fetch list user success  : ', response.data);
                dispatch(fetchListUserSuccess(response.data))

            }, 1500);

        } catch (error) {
            // throw error when fail to get list : 
            console.log('error when fetch list user: ', error.message);
            // delay 3 seconds if get list success : 
            setTimeout(() => {
                dispatch(fetchListUserError(error.message))
            }, 1500);


        }
    }
}

// action for Register new account : 
const fetchRegisterStart = () => ({
    type: FETCH_REGISTER_START
})
const fetchRegisterSuccess = (payload) => ({
    type: FETCH_REGISTER_SUCCESS,
    payload
})
const fetchRegisterError = (payload) => ({
    type: FETCH_REGISTER_ERROR,
    payload
})
export const fetchToRegister = (newUser) => {
    return async (dispatch) => {
        // first , start fetch list user : 
        dispatch(fetchRegisterStart())

        // fetch list user : 
        try {
            const response = await axios.post('http://localhost:9999/users', newUser)
            // delay 3 seconds if get list success : 
            setTimeout(() => {
                console.log('create user success  : ', response.data);
                dispatch(fetchRegisterSuccess(newUser))

            }, 1500);

        } catch (error) {
            // throw error when fail to get list : 
            console.log('error when create new user: ', error.message);
            // delay 3 seconds if get list success : 
            setTimeout(() => {
                dispatch(fetchRegisterError('Error when create account : ', error.message))
            }, 1500);


        }
    }
}

// Ban account part : 
const fetchManageAccountStart = () => ({
    type: FETCH_TO_MANAGE_ACCOUNT_START
})
const fetchManageAccountSuccess = (payload) => ({
    type: FETCH_TO_MANAGE_ACCOUNT_SUCCESS,
    payload
})
const fetchManageAccountError= (payload) => ({
    type: FETCH_TO_MANAGE_ACCOUNT_ERROR ,
    payload
})

export const banAccountById = (userId,updateAccount) => {
    return async (dispatch) => {
        // first , start fetch list user : 
        dispatch(fetchManageAccountStart())

        // fetch list user : 
        try {
            const response = await axios.put(`http://localhost:9999/users/${userId}`, updateAccount)
            // delay 3 seconds if get list success : 
            setTimeout(() => {
                console.log('update account success  : ', response.data);
                dispatch(fetchManageAccountSuccess({userId,updateAccount}))
            }, 1500);

        } catch (error) {
            // throw error when fail to get list : 
            console.log('error when update account : ', error.message);
            // delay 3 seconds if get list success : 
            setTimeout(() => {
                dispatch(fetchManageAccountError('Error when update account : ', error.message))
            }, 1500);
        }
    }
}
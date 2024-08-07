import axios from "axios"
import { FETCH_LIST_QUESTION_ERROR, FETCH_LIST_QUESTION_START, FETCH_LIST_QUESTION_SUCCESS, FETCH_TO_CREATE_NEW_QUESTION_ERROR, FETCH_TO_CREATE_NEW_QUESTION_START, FETCH_TO_CREATE_NEW_QUESTION_SUCCESS, FETCH_TO_GET_TOP_SCORE_ERROR, FETCH_TO_GET_TOP_SCORE_START, FETCH_TO_GET_TOP_SCORE_SUCCESS, FETCH_TO_SUBMIT_QUIZ_ERROR, FETCH_TO_SUBMIT_QUIZ_START, FETCH_TO_SUBMIT_QUIZ_SUCCESS, SET_SUBMIT_STATUS_TO_FAIL } from "./quizConstants"

const fetchListAllQuizStart = () => ({
    type: FETCH_LIST_QUESTION_START,
})
const fetchListAllQuizSuccess = (payload) => ({
    type: FETCH_LIST_QUESTION_SUCCESS,
    payload
})
const fetchListAllQuizError = (payload) => ({
    type: FETCH_LIST_QUESTION_ERROR,
    payload
})


export const fetchToGetListAllQuizs = () => {
    return async (dispatch, getState) => {
        // dispatch to start fetch : 
        dispatch(fetchListAllQuizStart())

        try {
            const response = await axios.get('http://localhost:9999/quizs')
            // if get list success , delay for 1,5 sencond : 
            setTimeout(
                () => {
                    console.log('fetch list all quizs success : ', response.data);
                    // dispatch when have list : 
                    dispatch(fetchListAllQuizSuccess(response.data))
                }
                , 1500)

        } catch (error) {
            // fetch list all quizs fail : 
            console.log(' fetch list all quizs fail : ', error);
            dispatch(fetchListAllQuizError('Error when fetch list quizs : ' + error.message))
        }
    }
}

// submit answer part : 
const fetchToSubmitQuizStart = () => ({
    type: FETCH_TO_SUBMIT_QUIZ_START,
})
const fetchToSubmitQuizSuccess = (payload) => ({
    type: FETCH_TO_SUBMIT_QUIZ_SUCCESS,
    payload
})
const fetchToSubmitQuizError = (payload) => ({
    type: FETCH_TO_SUBMIT_QUIZ_ERROR,
    payload
})


export const fetchToSubmitAnswer = (result) => {
    return async (dispatch) => {
        // dispatch to start fetch : 
        dispatch(fetchToSubmitQuizStart())

        try {
            const response = await axios.post('http://localhost:9999/quizResults', result)
            // if submit success , delay for 2,5 sencond : 
            setTimeout(
                () => {
                    console.log('fetch to submit quizs success : ', response.data);
                    // dispatch when have list : 
                    dispatch(fetchToSubmitQuizSuccess(response.data))
                }
                , 2500)

        } catch (error) {
            // fetch list all quizs fail : 
            console.log('Error when submit answer : ' + error.message);
            dispatch(fetchToSubmitQuizError('Error when submit answer : ' + error.message))
        }
    }
}


// set submit status to false : 

export const setSubmitStatusToFalse = () => ({
    type: SET_SUBMIT_STATUS_TO_FAIL
})

// top score part : 
const fetchToGetTopScoreStart = () => ({
    type: FETCH_TO_GET_TOP_SCORE_START,
})
const fetchToGetTopScoreSuccess = (payload) => ({
    type: FETCH_TO_GET_TOP_SCORE_SUCCESS,
    payload
})
const fetchToGetTopScoreError = (payload) => ({
    type: FETCH_TO_GET_TOP_SCORE_ERROR,
    payload
})

export const fetchToGetTopScore = () => {
    return async (dispatch) => {
        // dispatch to start fetch : 
        dispatch(fetchToGetTopScoreStart())

        try {
            const response = await axios.get('http://localhost:9999/quizResults')
            // if get success , delay for 2,5 sencond : 
            setTimeout(
                () => {
                    console.log('fetch to get top score success : ', response.data);
                    // dispatch when have list : 
                    dispatch(fetchToGetTopScoreSuccess(response.data))
                }
                , 2500)

        } catch (error) {
            // fetch list top score fail : 
            console.log('Error when fetch top score : ' + error.message);
            dispatch(fetchToGetTopScoreError('Error when get top score : ' + error.message))
        }
    }
}


// create new question part : 
const fetchToCreateNewQuestionStart = () => ({
    type: FETCH_TO_CREATE_NEW_QUESTION_START,
})
const fetchToCreateNewQuestionSuccess = (payload) => ({
    type: FETCH_TO_CREATE_NEW_QUESTION_SUCCESS,
    payload
})
const fetchToCreateNewQuestionError = (payload) => ({
    type: FETCH_TO_CREATE_NEW_QUESTION_ERROR,
    payload
})

export const fetchToCreateNewQuestion = (newQuestion) => {
    return async (dispatch) => {
        // dispatch to start fetch : 
        dispatch(fetchToCreateNewQuestionStart())

        try {
            const response = await axios.post('http://localhost:9999/quizs', newQuestion)
            // if get success , delay for 2,5 sencond : 
            setTimeout(
                () => {
                    console.log('fetch to create new question success : ', response.data);
                    // dispatch when have list : 
                    dispatch(fetchToCreateNewQuestionSuccess(newQuestion))
                }
                , 2500)

        } catch (error) {
            // fetch list top score fail : 
            console.log('Error when create new question : ' + error.message);
            dispatch(fetchToCreateNewQuestionError('Error when create new question : ' + error.message))
        }
    }
}



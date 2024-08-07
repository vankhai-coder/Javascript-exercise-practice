import { FETCH_LIST_QUESTION_ERROR, FETCH_LIST_QUESTION_START, FETCH_LIST_QUESTION_SUCCESS, FETCH_TO_CREATE_NEW_QUESTION_ERROR, FETCH_TO_CREATE_NEW_QUESTION_START, FETCH_TO_CREATE_NEW_QUESTION_SUCCESS, FETCH_TO_GET_TOP_SCORE_ERROR, FETCH_TO_GET_TOP_SCORE_START, FETCH_TO_GET_TOP_SCORE_SUCCESS, FETCH_TO_SUBMIT_QUIZ_ERROR, FETCH_TO_SUBMIT_QUIZ_START, FETCH_TO_SUBMIT_QUIZ_SUCCESS, SET_SUBMIT_STATUS_TO_FAIL } from '../Action/quizAction/quizConstants'

const INIT_STATE = {
    listAllQuizs: '',
    loading: false,
    error: '',
    messageLoading: '',
    submitSuccess: '',
    listAllQuizResult: '',
    createSuccess: ''
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_LIST_QUESTION_START:
            return {
                ...state,
                loading: true,
                error: '',
                messageLoading: 'loading list questions..'
            }
        case FETCH_LIST_QUESTION_SUCCESS: {
            return {
                ...state,
                listAllQuizs: action.payload,
                error: '',
                loading: false
            }
        }
        case FETCH_LIST_QUESTION_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case FETCH_TO_SUBMIT_QUIZ_START: {
            return {
                ...state,
                loading: true,
                error: '',
                messageLoading: 'Your answers are being saving...'
            }
        }
        case FETCH_TO_SUBMIT_QUIZ_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: '',
                submitSuccess: true,
                listAllQuizResult: [
                    ...state.listAllQuizResult,
                    action.payload
                ]
            }
        }
        case FETCH_TO_SUBMIT_QUIZ_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
                submitSuccess: false
            }
        }
        case SET_SUBMIT_STATUS_TO_FAIL: {
            return {
                ...state,
                submitSuccess: false,
                loading: false
            }
        }
        case FETCH_TO_GET_TOP_SCORE_START: {
            return {
                ...state,
                loading: true,
                error: '',
                messageLoading: 'Loading top score..'
            }
        }
        case FETCH_TO_GET_TOP_SCORE_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: '',
                listAllQuizResult: action.payload

            }
        }
        case FETCH_TO_GET_TOP_SCORE_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        }
        case FETCH_TO_CREATE_NEW_QUESTION_START: {
            return {
                ...state,
                loading: true,
                error: '',
                messageLoading: 'Loading to create new questions..',
                createSuccess : false
            }
        }
        case FETCH_TO_CREATE_NEW_QUESTION_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: '',
                listAllQuizs: [
                    ...state.listAllQuizs,
                    action.payload
                ],
                createSuccess: true
            }
        }
        
        case FETCH_TO_CREATE_NEW_QUESTION_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
                createSuccess : false
            }
        }
        default:
            return state
    }
}

export default reducer
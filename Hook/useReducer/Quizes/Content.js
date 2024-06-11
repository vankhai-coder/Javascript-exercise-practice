import { useReducer } from "react";


// 1. initState : 
const initialState = {
    questions: [
        {
            id: 1,
            question: '1.What is the capital of Australia?',
            options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
            answer: 'Canberra',
        },
        {
            id: 2,
            question: '2.Which planet is known as the Red Planet?',
            options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            answer: 'Mars',
        },
        {
            id: 3,
            question: '3.What is the capital of Australia?',
            options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
            answer: 'Canberra',
        }
        // Add more questions here
        // ...
    ],
    currentQuestion: 0,
    selectedOption: '',
    score: 0,
    showScore: false,
};

// 2. Action : 
const SELECT_OPTION = 'select_option'
const NEXT_QUESTION = 'next_question'
const RESTART_QUIZ = 'restart_quiz'

const handleNextQuestion = (payload) => (
    {
        type: NEXT_QUESTION,
        payload
    }
)
const handleOptionSelect = (payload) => (
    {
        type: SELECT_OPTION,
        payload
    }
)
const handleRestartQuiz  = () => (
    {
        type: RESTART_QUIZ,
        
    }
)


// 3. Reducer : 
const reducer = (state, action) => {
    switch (action.type) {
        case SELECT_OPTION:
            return {
                ...state,
                selectedOption: state.questions[state.currentQuestion].options[action.payload],

            }

        case NEXT_QUESTION:
            return {
                ...state,
                currentQuestion: (action.payload === (state.questions.length - 1)) ? (state.currentQuestion) : state.currentQuestion + 1,
                selectedOption: '',
                score: (state.selectedOption === state.questions[state.currentQuestion].answer) ? (state.score + 1) : (state.score),
                showScore: (action.payload === (state.questions.length - 1)) ? true : false
            }
        case RESTART_QUIZ:
            return {
                ...state,
                currentQuestion: 0,
                selectedOption: '',
                score: 0,
                showScore: false
            }


        default:
            throw new Error('invalid action..')
    }
}

// 4. Dispatch : 




function Content() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const { questions, currentQuestion, selectedOption, score, showScore } = state

    return (
        <div>

            {/* show questions :  */}
            <div style={{ display: showScore ? 'none' : 'block' }} >
                <h1> {questions[currentQuestion].question} </h1>
                {
                    questions[currentQuestion].options.map((option, index) => (
                        <button
                            style={
                                (selectedOption === option) ? { backgroundColor: 'red' } : {}
                            }
                            key={index}
                            onClick={
                                () => {
                                    dispatch(handleOptionSelect(index))
                                }
                            }
                        >
                            {option}
                        </button>
                    ))
                }

                <br />

                <button
                    onClick={
                        () => {
                            dispatch(handleNextQuestion(currentQuestion))
                        }
                    }
                >
                    Next

                </button>
            </div>


            {/* show total score :  */}
            <div style={{ display: showScore ? 'block' : 'none' }} >
                <h1>Total scores :{score} </h1>
                <button
                    onClick={
                        () => {
                            dispatch(handleRestartQuiz())
                        }
                    }
                >
                    Restart
                </button>
            </div>
        </div>
    )
}

export default Content; 
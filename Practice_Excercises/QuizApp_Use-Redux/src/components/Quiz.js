import { useEffect, useState } from "react"
import { Button, Col, Container, Row, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchToGetListAllQuizs, fetchToSubmitAnswer } from "../redux/Action/quizAction/quizActions"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

const Quiz = () => {

    // useSelector and useDispatch : 
    const dispatch = useDispatch()
    const listAllQuizs = useSelector(state => state.quiz.listAllQuizs)
    const loading = useSelector(state => state.quiz.loading)
    const error = useSelector(state => state.quiz.error)
    const messageLoading = useSelector(state => state.quiz.messageLoading)
    const submitSuccess = useSelector(state => state.quiz.submitSuccess)

    // use useState to store list quizs : 
    const [listForTest, setListForTest] = useState()

    // list result after do the test : 
    const [result, setResult] = useState()

    // use useEffect to navigate to user page when after submiti success : 
    useEffect(
        () => {
            if (submitSuccess) {
                navigate('/user', { replace: true })
            }
        }
        , [submitSuccess]
    )
    // use useEffect to create list result when have listForTest : 
    useEffect(
        () => {
            if (listForTest) {
                setResult(
                    listForTest.map((q) => ({
                        ...q,
                        choosen: '',
                        score: 0,
                    }))
                )
            }
        }, [listForTest]
    )
    // use useEffect to get all list quizs : 
    useEffect(
        () => {
            if (!listAllQuizs) {
                dispatch(fetchToGetListAllQuizs())
            }
        }
        , []
    )
    // use useEffect to get list for test : 
    useEffect(
        () => {
            if (listAllQuizs) {
                setListForTest(
                    () => getListForTest(listAllQuizs)
                )
            }
        }
        , [listAllQuizs]
    )
    // if error when get list quizs : 
    useEffect(
        () => {
            if (error) {
                navigate('/error-page', {
                    state: { message: error }
                })
            }
        }
        , [error]
    )
    // navigate : 
    const navigate = useNavigate()

    // function to get list for test : 
    const getListForTest = (listAllQuizs) => {
        const shuffled = listAllQuizs.slice().sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 10);
    }
    //function to reset list result after choose : 
    const resetResult = (event, questionId) => {
        if (result) {
            setResult(
                result.map((r) => {
                    if (r.id === questionId) {
                        return {
                            ...r,
                            choosen: event.target.value,
                            score: r.correctAnswer === event.target.value ? 1 : 0
                        }
                    }
                    return r
                })
            )
        }
    }
    // function to handle submit : 
    const handleSubmit = () => {
        let quizResult = {
            id: `QUIZ_RESULT_${Date.now()}`,
            userId: sessionStorage.userId,
            userName: sessionStorage.userName,
            totalScore: result.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.score
            }, 0),
            time: '12h12ph',
            result
        }
        console.log('result before fetch : ', quizResult);

        dispatch(fetchToSubmitAnswer(quizResult))

    }
    return (
        <Container className="mt-5">
            <Row>
                <Col className="mt-5">
                    <h2 className="text-center fw-bold">
                        Good luck : <span className="text-danger">{sessionStorage.userName}</span>
                    </h2>
                </Col>
            </Row>
            <Row className="justify-content-center my-5">
                <Col sm={6}>
                    <div style={{
                        border: '.5px solid #000',
                        padding: '20px',
                        margin: '10px',
                        borderRadius: '4px',
                        boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)'
                    }} >
                        {/* list all question : */}
                        <Row className="justify-content-center">

                            {listForTest && listForTest.map((q, index) => (
                                // list questions : 
                                <Col sm={10} key={`ques-${index}`}>
                                    <div>
                                        <h4>{(index + 1) + ' . ' + q.question}</h4>
                                        <ul>
                                            {/* list answers :  */}
                                            {q.answers && q.answers.map((a, i) => (
                                                <label key={`ans-${i}`} className="my-3 p-2" style={{ border: '1px solid', borderRadius: '4px', display: 'block' }} htmlFor={a + index}>
                                                    <input
                                                        className="mx-2"
                                                        id={a + index}
                                                        type="radio"
                                                        value={a}
                                                        name={q.id}
                                                        onChange={(event) => {
                                                            resetResult(event, q.id)
                                                        }}
                                                    />
                                                    {a}
                                                </label>
                                            ))}
                                        </ul>
                                    </div>
                                </Col>

                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col sm={2} className="d-flex justify-content-center mb-5">
                    <Button onClick={handleSubmit}>Submit</Button>
                </Col>
            </Row>


            {loading && (
                <div
                    style={{
                        position: 'fixed', /* Fixes the overlay to the viewport */
                        top: 0,
                        left: 0,
                        width: '100%', /* Full width of the viewport */
                        height: '100%', /* Full height of the viewport */
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Semi-transparent black background */
                        zIndex: 9999, /* Ensures the overlay is on top of other content */
                        display: 'flex', /* Center any content if needed */
                        justifyContent: 'center', /* Center horizontally */
                        alignItems: 'center', /* Center vertically */
                    }}
                >
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        {messageLoading}
                    </Button>
                </div>
            )}
        </Container>
    )
}

export default Quiz
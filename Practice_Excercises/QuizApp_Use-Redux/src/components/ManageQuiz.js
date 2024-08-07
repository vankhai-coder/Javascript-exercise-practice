import { useEffect, useState } from "react"
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { fetchToCreateNewQuestion } from "../redux/Action/quizAction/quizActions";



const ManageQuiz = () => {

    // use useDispatch :
    const dispatch = useDispatch()
    const loading = useSelector(state => state.quiz.loading)
    const messageLoading = useSelector(state => state.quiz.messageLoading)
    const createSuccess = useSelector(state => state.quiz.createSuccess)
    console.log('createSuccess : ' , createSuccess);
    

    // use useState : 
    const [question, setQuestion] = useState()
    const [listAnswer, setListAnswer] = useState()
    const [correctAnswer, setCorrectAnswer] = useState()

    console.log('correct answer : ', correctAnswer);
    console.log('list answer : ', listAnswer);
    // function handle submit : 
    const handleSubmit = (e) => {
        e.preventDefault()
        // check if question has any answer : 
        if (!listAnswer) {
            notify('You must create answer!')
            return
        }
        // check list answer more than 1 answer : 
        if (Object.keys(listAnswer).length < 2) {
            notify('Question must contain at least 2 answers')
            return
        }
        // check if user choosse correct answer yet : 
        if (!correctAnswer) {
            notify('You must choose correct answer!')
            return
        }
        // check if correct answer match one of answer : 
        for (const k of Object.keys(listAnswer)) {
            if (listAnswer[k] === correctAnswer) {
                // fetch to create: 
                dispatch(fetchToCreateNewQuestion(
                    {
                        id: `QUIZ_${Date.now()}`,
                        correctAnswer,
                        answers: getArrayAnswer(listAnswer),
                        question
                    }
                ))

                // setCorrectAnswer('')
                // setListAnswer('')
                // setQuestion('')
                console.log('create succ');

                return; // This exits the checkAnswers function
            }
        }

        notify('You must choose correct answer again !')
        return

    }
    // toastify message : 
    const notify = (message) => {
        toast.info(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    // function to get list answer from obj : 
    const getArrayAnswer = (obj) => {
        return Object.values(obj)
    }
    useEffect(
        () => {
            if (createSuccess) {
                notify('Create new question success!')
            }
        }
        ,
        [createSuccess]
    )
    return (
        <Container>
            <Row>
                <h2 className="my-5 text-center">Create quiz</h2>
            </Row>
            <Row className="justify-content-center">
                <Col sm={4}>
                    <Form onSubmit={
                        (e) => {
                            handleSubmit(e)
                        }}>
                        <div>
                            <label>Question : </label>
                            <Form.Control
                                placeholder="Enter question"
                                onChange={(e) => {
                                    setQuestion(e.target.value)
                                }}
                                value={question}
                                required
                            />
                            <label className="mt-5">Answers : </label>
                            <br />
                            {/* list answer :*/}
                            {listAnswer && Object.keys(listAnswer).map((k, index) => (
                                <div key={index}>

                                    <input
                                        type="radio"
                                        name="same"
                                        value={listAnswer[k]}
                                        checked={listAnswer[k] === correctAnswer ? true : false}
                                        onChange={
                                            e => {
                                                setCorrectAnswer(e.target.value)
                                            }
                                        }
                                    />
                                    <input
                                        value={listAnswer[k]}
                                        onChange={(e) => {
                                            setListAnswer(l => ({
                                                ...l,
                                                [k]: e.target.value
                                            }))
                                        }}
                                        required
                                    />
                                    {/* delete icon :  */}
                                    <label
                                        onClick={
                                            () => {
                                                setListAnswer(l => {
                                                    const { [k]: something, ...newObj } = l
                                                    return newObj
                                                })
                                            }
                                        }
                                    >
                                        &#10005;
                                    </label>
                                </div>
                            ))
                            }
                            {/* add answer button : */}
                            <div className="text-center">
                                <i
                                    className="fa fa-plus-square-o"
                                    style={{ fontSize: '30px', cursor: 'pointer' }}
                                    aria-hidden="true"
                                    onClick={
                                        () => {
                                            setListAnswer(l => ({
                                                ...l,
                                                [String(Date.now())]: ''
                                            }))
                                        }
                                    }
                                ></i>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Button
                                    type='submit'
                                >
                                    Create
                                </Button>
                            </div>

                        </div>
                    </Form>
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
        </Container >
    )
}

export default ManageQuiz
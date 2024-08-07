import { useEffect, useState } from "react"
import { Button, Col, Container, Row, Spinner, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchToGetTopScore } from "../redux/Action/quizAction/quizActions"
import { useNavigate } from "react-router"
import ReviewModal from './ReviewModal'



const Review = () => {

    // use useDispatch and useSelector : 
    const dispatch = useDispatch()
    const listAllQuizResult = useSelector((state) => state.quiz.listAllQuizResult)
    const loading = useSelector(state => state.quiz.loading)
    const error = useSelector(state => state.quiz.error)
    const messageLoading = useSelector(state => state.quiz.messageLoading)

    // useState : 
    const [listReview, setListReview] = useState()

    // get all Quiz result : 
    useEffect(
        () => {
            if (!listAllQuizResult) {
                dispatch(fetchToGetTopScore())
            }
        }
        , []
    )
    // get list result for individual : 

    useEffect(
        () => {
            if (listAllQuizResult) {
                setListReview(getListResultForEachUser(sessionStorage.userId))
            }
        }
        , [listAllQuizResult]
    )
    // function to get for individual : 
    const getListResultForEachUser = (userId) => {
        return listAllQuizResult.filter((r) => {
            return r.userId === userId
        })
    }
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

    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="text-center my-5">All tests completed by :<span className="text-danger"> {sessionStorage.userName}</span></h2>
                </Col>
            </Row>
            <Row className="justify-content-center text-center">
                <Col sm={5} >
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Stt</th>
                                <th>Time</th>
                                <th>Score</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listReview && listReview.map((r, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{r.time}</td>
                                    <td>{r.totalScore}</td>
                                    <td>
                                        <ReviewModal result={r.result} totalScore={r.totalScore} time = {r.time}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
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
            </Row>
        </Container>
    )
}

export default Review
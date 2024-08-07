import { useEffect, useState } from "react"
import { Button, Col, Container, Row, Spinner, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { fetchToGetTopScore } from "../redux/Action/quizAction/quizActions"

const TopScore = () => {

    // use useDispatch and useSelector : 
    const dispatch = useDispatch()
    const listAllQuizResult = useSelector((state) => state.quiz.listAllQuizResult)
    const loading = useSelector(state => state.quiz.loading)
    const error = useSelector(state => state.quiz.error)
    const messageLoading = useSelector(state => state.quiz.messageLoading)

    // use useState to set list quizResult : 
    const [topScore, setTopScore] = useState()

    // use useEffect to create list top score when have all result : 
    useEffect(
        () => {
            if (listAllQuizResult) {
                setTopScore(getTopScore(listAllQuizResult))
            }
        },
        [listAllQuizResult]
    )
    // use useEffect to fetch list quiz result : 
    useEffect(
        () => {
            if (!listAllQuizResult) {
                dispatch(fetchToGetTopScore())
            }
        }, []
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

    // function to get top score : 
    const getTopScore = (listAll) => {
        return [...listAll].sort((a, b) => b.totalScore - a.totalScore)
    }
    return (
        <Container>
            <Row>
                <h3 className="text-center my-5">Top score</h3>
            </Row>
            <Row className="justify-content-center">
                <Col sm={7}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Top</th>
                                <th>User Name</th>
                                <th>Time</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topScore && topScore.map((score, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{score.userName}</td>
                                    <td>{score.time}</td>
                                    <td>{score.totalScore}</td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
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

export default TopScore 
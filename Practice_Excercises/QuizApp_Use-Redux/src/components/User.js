import { useEffect } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { setSubmitStatusToFalse } from "../redux/Action/quizAction/quizActions"
import { toast } from "react-toastify"

const User = () => {

    // useSelector and useDispatch : 
    const dispatch = useDispatch()
    const submitSuccess = useSelector(state => state.quiz.submitSuccess)

    // set submit to false when back to user page : 
    useEffect(
        () => {
            if (submitSuccess) {
                dispatch(setSubmitStatusToFalse())
            }
        }
        , []
    )
    // annonce message when submit success : 
    useEffect(
        () => {
            if (submitSuccess) {
                toast.success('Submit answer success!', {
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'dark',
                });
            }
        }
        , [submitSuccess]
    )

    // navigate : 
    const navigate = useNavigate()
    //  log out function : 
    const logOut  = ()=>{
        // cleat session : 
        sessionStorage.clear()
        // navighate to log in page : 
        navigate('/',{replace : true})
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h3 className="text-center mt-5"> User's name :  {sessionStorage.userName}</h3>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5">
               
                <Col sm={2} className="d-flex justify-content-center">
                    <Link to="do-quiz" className="btn btn-primary" >Do Quiz</Link>
                </Col>
               
                <Col sm={2} className="d-flex justify-content-center">
                <Link to="review" className="btn btn-primary" >Review</Link>
                </Col>
               
                <Col sm={2} className="d-flex justify-content-center">
                <Link to="/top-score" className="btn btn-primary" >Top Score</Link>
                </Col>

                <Col sm={2} className="d-flex justify-content-center">
               <Button className="btn btn-danger" onClick={logOut}>Log out</Button>
                </Col>
            </Row>

        </Container>
    )
}

export default User
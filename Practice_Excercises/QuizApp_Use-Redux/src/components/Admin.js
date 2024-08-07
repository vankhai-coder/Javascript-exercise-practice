import { Button, Col, Container, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

const Admin = ()=>{


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
                    <h3 className="text-center mt-5"> Admin page :  {sessionStorage.userName}</h3>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5">
               
                <Col sm={2} className="d-flex justify-content-center">
                    <Link to="manage-account" className="btn btn-primary" >Manage Accounts</Link>
                </Col>
               
                <Col sm={2} className="d-flex justify-content-center">
                <Link to="manage-quiz" className="btn btn-primary" >Manage Quiz</Link>
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

export default Admin
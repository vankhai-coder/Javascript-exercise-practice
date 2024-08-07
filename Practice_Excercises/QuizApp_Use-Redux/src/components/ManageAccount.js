import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserData } from '../redux/Action/userAction/userActions';
import { Button, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router";
import { banAccountById } from '../redux/Action/userAction/userActions'

const ManageAccount = () => {

    // useDispatch to create dispatch : 
    const dispatch = useDispatch()

    // useSelector to get list user : 
    const listUsers = useSelector(state => state.user.listUsers)
    // useSelector to get list user : 
    const loading = useSelector(state => state.user.loading)
    // useSelector to get list user : 
    const error = useSelector(state => state.user.error)
    const messageLoading = useSelector(state => state.user.messageLoading)


    // get list user : 
    useEffect(
        () => {
            if (!listUsers) {
                console.log('dang ley list user ne ...');
                dispatch(fetchUserData())
            }
        }
        , [listUsers]
    )

    // navigate : 
    const navigate = useNavigate()

    // if error when get list user : 
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
    return (
        <Container>

            <h1 className="text-center my-5">ManageAccount</h1>
            <Row className="justify-content-center text-center">
                <Col sm={5} >
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>User's Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers && listUsers.map((u, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{u.userName}</td>
                                    <td>
                                        {u.isBanned ? (
                                            <Button
                                                variant="info"
                                                onClick={() => dispatch(banAccountById(u.id, { ...u, isBanned: false }))}
                                            >
                                                Un Ban
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="danger"
                                                onClick={() => dispatch(banAccountById(u.id, { ...u, isBanned: true }))}
                                            >
                                                Ban
                                            </Button>
                                        )}
                                    </td>
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

export default ManageAccount
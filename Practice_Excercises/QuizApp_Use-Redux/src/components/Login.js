import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Card, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../redux/Action/userAction/userActions';
import { useNavigate } from 'react-router';

const Login = () => {

    // use useState for userName and password : 
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [logInFail, setLogInFail] = useState(false)

    // useDispatch to create dispatch : 
    const dispatch = useDispatch()

    // useSelector to get list user : 
    const listUsers = useSelector(state => state.user.listUsers)
    // useSelector to get list user : 
    const loading = useSelector(state => state.user.loading)
    // useSelector to get list user : 
    const error = useSelector(state => state.user.error)
    // path after login : 
    const [path, setPath] = useState()

    // useEffect to check if log in yet : 
    useEffect(
        () => {
            if (sessionStorage.userName) {
                navigate(path, { replace: true })
            }
        }
        , []
    )

    // use useEffect to get list user : 
    useEffect(
        () => {
            if (!listUsers) {
                console.log('trong useeffect lay list user')
                dispatch(fetchUserData())
            }
        }
        , []
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
    // function to check log in : 
    const checkLogIn = (userName, password, event) => {
        event.preventDefault()
        if (!listUsers) {
            console.log('list users is empty..');
            return false
        }

        for (const u of listUsers) {
            if (u.userName === userName && u.password === password) {
                if (u.isBanned) {
                    navigate('/error-page', {
                        state: { message: "This account is banned!" }
                    })
                } else {
                    console.log('log in success');
                    sessionStorage.setItem('userName', u.userName)
                    sessionStorage.setItem('password', u.password)
                    sessionStorage.setItem('role', u.role)
                    sessionStorage.setItem('userId', u.id)
                    setPath(u.role === 'admin' ? '/admin' : '/user')
                    return true
                }
            }
        }
        setLogInFail(true)
        return false
    }


    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card className="p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
                <Card.Title className="text-center mb-4">Login</Card.Title>
                <Form onSubmit={
                    (e) => {
                        if (checkLogIn(userName, password, e)) {
                            if (path) {
                                navigate(path, { replace: true })
                            }
                        }
                    }}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value.trim())
                            }}
                            required
                            isInvalid={logInFail ? true : false}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value.trim())
                            }}
                            required
                            isInvalid={logInFail ? true : false}
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-between">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <Button
                            variant="link"
                            className="align-self-center"
                            onClick={() => {
                                navigate('register-page')
                            }}
                        >
                            Register
                        </Button>
                    </div>
                    {logInFail && <div className='text-center text-danger mt-3'>
                        <h5> UserName or password is wrong..</h5>
                    </div>}
                </Form>
            </Card>

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
                        Fetching user account...
                    </Button>
                </div>
            )}
        </Container >
    );
};

export default Login;

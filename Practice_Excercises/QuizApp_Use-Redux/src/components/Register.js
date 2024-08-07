import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToRegister } from '../redux/Action/userAction/userActions';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setError] = useState('');

    // use useDispatch : 
    const dispatch = useDispatch()

    // get state : 
    // useSelector to get list user : 
    const registerSuccess = useSelector(state => state.user.registerSuccess)
    // useSelector to get list user : 
    const loading = useSelector(state => state.user.loading)
    // useSelector to get list user : 
    const error = useSelector(state => state.user.error)

    // annouce message when register success : 
    useEffect(
        () => {
            if (registerSuccess) {
                toast.success('Register account success!', {
                    position: "top-right",
                    autoClose: 2000, // Duration in milliseconds
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
        , [registerSuccess]
    )

    // function to handle submit : 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError('');
            // Handle registration logic here : 
            dispatch(fetchToRegister({
                "userName": username,
                "password": password,
                "role": 'user',
                "id": `USER_${Date.now()}`,
                "isBanned": false
            }))

        }
    };
    // navigate : 
    const navigate = useNavigate()
    // if error when get register new user : 
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
        <Container className="register-container mt-5">
            <Row className="justify-content-md-center">
                <Col md={6} lg={4}>
                    <div className="register-card">
                        <h2 className="text-center">Create an Account</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                            <Button variant="primary" type="submit" className="w-100 mt-3">
                                Register
                            </Button>
                            <Button
                                variant="primary"
                                type="submit"
                                className="w-100 mt-3"
                                onClick={() => {
                                    navigate('/', { replace: true })
                                }}

                            >
                                Back to Login
                            </Button>
                        </Form>
                    </div>
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
                        Regitering account...
                    </Button>
                </div>
            )}
        </Container>
    );
};

export default Register;

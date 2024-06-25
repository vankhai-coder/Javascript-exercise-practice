import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Col, Row } from 'react-bootstrap';
import { useStore } from '../state/hooks';
import { actions } from '../state';
import { validateCreateForm } from '../validation';

function UpdateModal({ index }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // lay du lieu tu Reducer : 
    const [state, dispatch] = useStore()
    const { prepateUpdateApplicant, applicants } = state

    // use useRef de focus khi bam vao cay but : 
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()

    // ham check active update button : 
    const checkChange = () => {
        return (prepateUpdateApplicant.firstName.trim() !== applicants[index].firstName.trim() || prepateUpdateApplicant.lastName.trim() !== applicants[index].lastName.trim()
            || prepateUpdateApplicant.email.trim() !== applicants[index].email.trim()
            || prepateUpdateApplicant.phone.trim() !== applicants[index].phone.trim())
            && (
                (prepateUpdateApplicant.valid.isValidFirstName === true || prepateUpdateApplicant.valid.isValidFirstName === '')
                && (prepateUpdateApplicant.valid.isValidLastName === true || prepateUpdateApplicant.valid.isValidLastName === '')
                && (prepateUpdateApplicant.valid.isValidEmail === true || prepateUpdateApplicant.valid.isValidEmail === '')
                && (prepateUpdateApplicant.valid.isValidPhone === true || prepateUpdateApplicant.valid.isValidPhone === '')
            )
    }


    return (
        <>
            <Button
                variant="success"
                size="sm"
                onClick={
                    () => {
                        handleShow()
                        dispatch(actions.handleUpdatePrepareUpdateApplicant(index))
                        dispatch(actions.handleCleanPrepareApplicantValid())
                    }
                }

            >

                Update
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Update Applicant</Modal.Title>
                </Modal.Header>


                <Modal.Body>
                    <Row className='justify-content-center'>

                        <Col sm={10}>
                            <Form.Group>
                                <Form.Label className='fw-bold'>First name</Form.Label>

                                <InputGroup className="mb-3">
                                    <Form.Control
                                        value={prepateUpdateApplicant.firstName}
                                        ref={firstNameRef}
                                        onChange={
                                            (e) => {
                                                dispatch(actions.handleUpdatePrepateUpdateApplicantFirstName(e.target.value))
                                                dispatch(actions.handleUpdatePrepateUpdateApplicantValidFirstName(validateCreateForm.checkValidFirstName(e.target.value)))
                                            }
                                        }

                                        isValid={prepateUpdateApplicant.valid.isValidFirstName === true ? true : false}
                                        isInvalid={prepateUpdateApplicant.valid.isValidFirstName !== true && prepateUpdateApplicant.valid.isValidFirstName !== '' ? true : false}

                                    />
                                    <Button
                                        variant="outline-secondary"
                                        onClick={
                                            () => {
                                                firstNameRef.current.focus()
                                            }
                                        }
                                    >
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                    </Button>

                                    <Form.Control.Feedback
                                        type='valid'
                                    >
                                        Valid First Name
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback
                                        type='invalid'
                                    >
                                        {prepateUpdateApplicant.valid.isValidFirstName}
                                    </Form.Control.Feedback>
                                </InputGroup>

                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='fw-bold' >Last name</Form.Label>
                                <InputGroup className="mb-3" >
                                    <Form.Control
                                        value={prepateUpdateApplicant.lastName}
                                        ref={lastNameRef}
                                        onChange={
                                            (e) => {
                                                dispatch(actions.handleUpdatePrepateUpdateApplicantLastName(e.target.value))
                                                dispatch(actions.handleUpdatePrepateUpdateApplicantValidLastName(validateCreateForm.checkValidLastName(e.target.value)))

                                            }
                                        }
                                        isValid={prepateUpdateApplicant.valid.isValidLastName === true ? true : false}
                                        isInvalid={prepateUpdateApplicant.valid.isValidLastName !== true && prepateUpdateApplicant.valid.isValidLastName !== '' ? true : false}

                                    />
                                    <Button
                                        variant="outline-secondary"
                                        onClick={
                                            () => {
                                                lastNameRef.current.focus()
                                            }
                                        }
                                    >
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                    </Button>
                                    <Form.Control.Feedback
                                        type='valid'
                                    >
                                        Valid Last Name
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback
                                        type='invalid'
                                    >
                                        {prepateUpdateApplicant.valid.isValidLastName}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='fw-bold' >Email</Form.Label>
                                <InputGroup className="mb-3" >
                                    <Form.Control
                                        type='text'
                                        value={prepateUpdateApplicant.email}

                                        ref={emailRef}
                                        onChange={
                                            (e) => {
                                                dispatch(actions.handleUpdatePrepateUpdateApplicantEmail(e.target.value))
                                                dispatch(actions.handleUpdatePrepateUpdateApplicantValidEmail(validateCreateForm.checkValidEmail(e.target.value)))
                                            }
                                        }
                                        isValid={prepateUpdateApplicant.valid.isValidEmail === true ? true : false}
                                        isInvalid={prepateUpdateApplicant.valid.isValidEmail !== true && prepateUpdateApplicant.valid.isValidEmail !== '' ? true : false}


                                    />
                                    <Button
                                        variant="outline-secondary"
                                        onClick={
                                            () => {
                                                emailRef.current.focus()
                                            }
                                        }
                                    >
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                    </Button>
                                    <Form.Control.Feedback
                                        type='valid'
                                    >
                                        Valid email
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback
                                        type='invalid'
                                    >
                                        {prepateUpdateApplicant.valid.isValidEmail}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='fw-bold' >Phone</Form.Label>
                                <InputGroup className="mb-3" >
                                    <Form.Control
                                        type='number'
                                        value={+prepateUpdateApplicant.phone}
                                        ref={phoneRef}
                                        onChange={
                                            (e) => {
                                                dispatch(actions.handleUpdatePrepateUpdateApplicantPhone(e.target.value))
                                                dispatch(actions.handleUpdatePrepateUpdateApplicantValidPhone(validateCreateForm.checkValidPhone(e.target.value)))
                                            }
                                        }
                                        isValid={prepateUpdateApplicant.valid.isValidPhone === true ? true : false}
                                        isInvalid={prepateUpdateApplicant.valid.isValidPhone !== true && prepateUpdateApplicant.valid.isValidPhone !== '' ? true : false}


                                    />
                                    <Button
                                        variant="outline-secondary"
                                        onClick={
                                            () => {
                                                phoneRef.current.focus()
                                            }
                                        }
                                    >

                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                    </Button>
                                    <Form.Control.Feedback
                                        type='valid'
                                    >
                                        Valid phone
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback
                                        type='invalid'
                                    >
                                        {prepateUpdateApplicant.valid.isValidPhone}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>


                        </Col>

                    </Row>

                </Modal.Body>


                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={
                            () => {
                                handleClose()
                                dispatch(actions.handleCancleUpdateApplicant(index))

                            }
                        }>
                        Cancle
                    </Button>
                    <Button
                        variant="success"
                        onClick={
                            () => {
                                handleClose()
                                dispatch(actions.handleUpdateApplicant(index))

                            }
                        }
                        disabled={checkChange() === true ? false : true}

                    >
                        {console.log('chay check change', checkChange())}
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateModal;
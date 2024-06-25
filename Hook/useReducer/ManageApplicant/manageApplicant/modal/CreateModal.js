import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Row, Col } from 'react-bootstrap';
import { hooks } from '../state'
import { actions } from '../state'
import { validateCreateForm } from '../validation'

function CreateModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // use useContext to get global state : 
    const [state, dispatch] = hooks.useStore()
    const { prepareApplicant, validateCreate } = state

    return (
        <>
            <Button variant="primary" className='ms-3' onClick={handleShow}>
                Create new
            </Button>

            <Modal show={show} onHide={() => {
                handleClose()
                // dispatch(actions.handleCleanPrepareApplicantInfo())
                // dispatch(actions.handleCleanvalidationCreate())
            }}>

                <Modal.Header closeButton>
                    <Modal.Title>Create new applicants</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form noValidate onSubmit={() => { }}>
                        <Row className="mb-3 justify-content-center">
                            <Form.Group className='mt-2' as={Col} md="10">

                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    autoFocus
                                    value={prepareApplicant.firstName}
                                    onChange={
                                        (e) => {
                                            dispatch(actions.handleUpdatePrepareApplicantFirstName(e.target.value))
                                            dispatch(actions.handleUpdateValidateCreateFirstName(validateCreateForm.checkValidFirstName(e.target.value)))
                                        }
                                    }
                                    isValid={
                                        validateCreate.isValidFirstName === true ? true : false
                                    }
                                    isInvalid={
                                        validateCreate.isValidFirstName === true ? false : true
                                    }
                                />
                                <Form.Control.Feedback type="valid">
                                    Valid First Name !
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {validateCreate.isValidFirstName ? validateCreate.isValidFirstName : 'This field can not empty..'}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className='mt-2' as={Col} md="10">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={prepareApplicant.lastName}
                                    onChange={
                                        e => {
                                            dispatch(actions.handleUpdatePrepareApplicantLastName(e.target.value))
                                            dispatch(actions.handleUpdateValidateCreateLasttName(validateCreateForm.checkValidLastName(e.target.value)))
                                        }
                                    }
                                    isValid={validateCreate.isValidLastName === true ? true : false}
                                    isInvalid={validateCreate.isValidLastName === true ? false : true}
                                />
                                <Form.Control.Feedback type="valid">
                                    Valid Last Name !
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {validateCreate.isValidLastName ? validateCreate.isValidLastName : 'This field can not empty!'}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className='mt-2' as={Col} md="10">

                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={prepareApplicant.email}
                                    onChange={
                                        e => {
                                            dispatch(actions.handleUpdatePrepareApplicantEmail(e.target.value))
                                            dispatch(actions.handleUpdateValidateCreateEmail(validateCreateForm.checkValidEmail(e.target.value)))
                                        }
                                    }
                                    isValid={validateCreate.isValidEmail === true ? true : false}
                                    isInvalid={validateCreate.isValidEmail === true ? false : true}
                                />
                                <Form.Control.Feedback type="valid">
                                    Valid Email !
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {validateCreate.isValidEmail ? validateCreate.isValidEmail : 'This field can not empty !'}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className='mt-2' as={Col} md="10">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={prepareApplicant.phone}
                                    onChange={e => {
                                        dispatch(actions.handleUpdatePrepareApplicantPhone(e.target.value))
                                        dispatch(actions.handleUpdateValidateCreatePhone(validateCreateForm.checkValidPhone(e.target.value)))
                                    }}
                                    isValid={validateCreate.isValidPhone === true ? true : false}
                                    isInvalid={validateCreate.isValidPhone === true ? false : true}
                                />
                                <Form.Control.Feedback type="valid">
                                    Valid Phone !
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {validateCreate.isValidPhone ? validateCreate.isValidPhone : 'This field can not empty !'}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                    </Form>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={
                        () => {
                            handleClose()
                            dispatch(actions.handleCleanPrepareApplicantInfo())
                            dispatch(actions.handleCleanvalidationCreate())
                        }
                    }>
                        Cancle
                    </Button>
                    <Button variant="primary" className={(validateCreate.isValidFirstName === true && validateCreate.isValidLastName === true && validateCreate.isValidPhone === true && validateCreate.isValidEmail === true) ? '' : 'disabled'} onClick={() => {
                        dispatch(actions.handleAddNewApplicant())
                        dispatch(actions.handleCleanPrepareApplicantInfo())
                        handleClose()
                        dispatch(actions.handleCleanvalidationCreate())
                    }}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateModal
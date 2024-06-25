import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useStore } from '../state/hooks';
import { actions } from '../state'

function DeleteApplicantModal({ index }) {

    const [state, dispatch] = useStore()
    const { applicants } = state

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="danger"
                size="sm"
                className="ms-2"
                onClick={handleShow

                }>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Appicant</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Firstname</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{applicants[index].id}</td>
                                <td>{applicants[index].firstName.trim()}</td>
                                <td>{applicants[index].email}</td>
                                <td>{applicants[index].phone}</td>
                            </tr>
                        </tbody>
                    </Table>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button
                        variant="danger"
                        onClick={
                            () => {
                                dispatch(actions.handleDeleteApplicantByIndex(index))
                                handleClose()
                            }
                        }>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteApplicantModal;
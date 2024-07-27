import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Context from '../store/Context';
import { fetchToDeleteStudent } from '../fetchFunction/fetch';
import { toast } from 'react-toastify';

function DeleteModal({ id }) {
    //  modal part : 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // get state : 
    const {dispatch } = useContext(Context)
    // get listStudent and listAddress from state : 
    // toast part : 
    const notifyDelete = () => {
        toast("Delete successfully !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type: "success"
        });
    };


    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Detele
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete student</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete this student ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button variant="danger" onClick={
                        () => {
                            fetchToDeleteStudent(id, dispatch)
                            handleClose()
                            notifyDelete()
                        }
                    }>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;
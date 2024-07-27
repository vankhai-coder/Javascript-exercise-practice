import { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Context from '../store/Context';
import { fetchToAddNewStudent } from '../fetchFunction/fetch';
import { toast } from 'react-toastify';


function AddModal() {
    // modal part : 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // get state : 
    const {dispatch } = useContext(Context)
    // get listStudent and listAddress from state : 
    // add new student part : 
    const [newStudent, setNewStudent] = useState({
        id: `STU_${Date.now()}`,
        name: '',
        age: '',
        gender: ''
    })
    // clear form function: 
    const clearForm = () => {
        setNewStudent({
            id: `STU-${Date.now()}`,
            name: '',
            age: '',
            gender: ''
        })
    }
    // function to submit form : 
    const handleSubmitForm = (e) => {
        e.preventDefault()
        fetchToAddNewStudent(newStudent, dispatch)
        handleClose()
        notifyAdd()
        clearForm()
    }
    // add toast : 
    const notifyAdd = () => {
        toast("Add successfully !", {
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
            <Button variant="success" onClick={handleShow}>
                Add student
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => { handleSubmitForm(e) }}>
                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                value={newStudent.id}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                value={newStudent.name}
                                type='text'
                                placeholder='Enter name...'
                                required
                                onChange={(e) => {
                                    setNewStudent(
                                        (s) => ({
                                            ...s,
                                            name: e.target.value
                                        })
                                    )
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='abc'>Age</Form.Label>
                            <Form.Control
                                id='abc'
                                value={newStudent.age}
                                type='number'
                                placeholder='Enter Age...'
                                required
                                onChange={(e) => {
                                    setNewStudent(s => ({
                                        ...s,
                                        age: +e.target.value
                                    }))
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Check
                                type="radio"
                                label="Male"
                                name="radioGroup"
                                value="Male"
                                required
                                onChange={(e) => {
                                    setNewStudent(s => ({
                                        ...s,
                                        gender: e.target.value
                                    }))
                                }}
                            />
                            <Form.Check
                                type="radio"
                                label="Female"
                                name="radioGroup"
                                value="Female"
                                required
                                onChange={(e) => {
                                    setNewStudent(s => ({
                                        ...s,
                                        gender: e.target.value
                                    }))
                                }}
                            />
                            <Form.Check
                                type='radio'
                                label='Orther'
                                name="radioGroup"
                                value="Orther"
                                required
                                onChange={(e) => {
                                    setNewStudent(s => ({
                                        ...s,
                                        gender: e.target.value
                                    }))
                                }}
                            />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancle
                            </Button>
                            <Button variant="success" type='submit'>
                                Add
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default AddModal;
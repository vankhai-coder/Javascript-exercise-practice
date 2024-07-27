import { useContext } from 'react'
import { Col, Container, Row, Table } from "react-bootstrap"
import Context from './store/Context'
import AddModal from './modal/AddStudentModal'
import DeleteModal from './modal/DeleteModal'
import ViewAddressModal from './modal/ViewAddressModal'
import AddAddressModal from './modal/AddAddressModal'



const App = () => {

    // get state : 
    const { state } = useContext(Context)
    // get listStudent and listAddress from state : 
    const { listStudent } = state

    console.log('trong apppppp');
    return (
        <Container>
            {/* heading :  */}
            <Row className="justify-content-center my-4">
                <Col sm={4}>
                    <h2 className="text-center">Manage Student App</h2>
                </Col>
            </Row>
            {/* add button :  */}
            <Row className='justify-content-center mb-5'>
                <Col sm={2} className='d-flex justify-content-center'>
                    <AddModal />
                </Col>
            </Row>

            {/* table :  */}
            <Row className="justify-content-center">
                <Col sm={7} className="text-center">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listStudent.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.gender}</td>
                                    <td>
                                        <ViewAddressModal id={student.id} />
                                        <AddAddressModal studentId={student.id} />
                                    </td>
                                    <td>
                                        <DeleteModal id={student.id} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

        </Container>

    )
}

export default App
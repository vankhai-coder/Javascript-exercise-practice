import { Container, Button, Table, Row, Col } from 'react-bootstrap'
import { CreateModal, DeleteModal, UpdateModal } from './modal'
import { hooks } from './state'

function App() {
    const [state] = hooks.useStore()

    const { applicants } = state

    return (
        <Container>
            {/* heading :  */}
            <h3 className='text-center my-4' >Manage Applicants App
                {/* modal :  */}
                <CreateModal />
            </h3>


            {/* table :  */}
            <Row className="justify-content-center">
                <Col>
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Education</th>
                                <th>WorkExperience</th>
                                <th>Skills</th>
                                <th>Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {applicants.map((applicant, index) => (
                                <tr key={index}>
                                    <td>{applicant.id}</td>
                                    <td>{applicant.firstName.trim()}</td>
                                    <td>{applicant.lastName}</td>
                                    <td>{applicant.email}</td>
                                    <td>{applicant.phone}</td>
                                    <td>
                                        <Button variant="outline-info" size="sm" className="me-2" >View</Button>
                                        <Button variant="outline-info" size="sm">Add</Button>
                                    </td>
                                    <td>
                                        <Button variant="outline-info" size="sm" className="me-2" >View</Button>
                                        <Button variant="outline-info" size="sm">Add</Button>
                                    </td>
                                    <td>
                                        <Button variant="outline-info" size="sm" className="me-2" >View</Button>
                                        <Button variant="outline-info" size="sm">Add</Button>
                                    </td>
                                    <td>
                                        <Button variant="outline-info" size="sm" className="me-2" >View</Button>
                                        <Button variant="outline-info" size="sm">Add</Button>
                                    </td>
                                    <td>
                                        <UpdateModal index={index} />
                                        <DeleteModal index={index} />
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
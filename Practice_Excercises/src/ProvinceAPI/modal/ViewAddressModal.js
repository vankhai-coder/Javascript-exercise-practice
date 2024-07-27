import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Context from '../store/Context';
import { Pagination, Table } from 'react-bootstrap';

function ViewAddressModal({ id }) {
  // modal part  : 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // display list part : 
  // get state : 
  const { state } = useContext(Context)
  // get listStudent and listAddress from state : 
  const { listAddress } = state

  const getListAddressById = (stuId) => {
    return listAddress.filter(a => (a.studentID === stuId))
  }

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        View
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {getListAddressById(id) && getListAddressById(id).map((address, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{address.streetNumber + ' , ' + address.commute + ' , ' + address.district + ' , ' + address.province}</td>
                </tr>
              ))}
            </tbody>
          </Table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewAddressModal;
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ReviewModal({ result, totalScore, time }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className='text-center'>
              Total Score : {totalScore}
            </h4>
            <h4 className='text-center'>
              Time : <span style={{ color: 'blue' }}>{time}</span>
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* list all question : */}
          <Row className="justify-content-center">

            {result && result.map((q, index) => (
              // list questions : 
              <Col sm={10} key={`ques-${index}`}>

                <div>
                  <h4>{(index + 1) + ' . ' + q.question}</h4>
                  <ul>
                    {/* list answers :  */}
                    {q.answers && q.answers.map((a, i) => (
                      <label key={`ans-${i}`}
                        className="my-3 p-2"
                        style={
                          {
                            backgroundColor: a === q.correctAnswer ? 'rgb(211 238 211)' : a !== q.correctAnswer && a === q.choosen ? '#ffcaca' : '',

                            border: '1px solid',
                            borderRadius: '4px',
                            display: 'block'
                          }}
                        htmlFor={a + index}>
                        <input
                          className="mx-2"
                          id={a + index}
                          type="checkbox"

                          value={a}
                          name={q.id}
                          disabled
                          checked={q.choosen === a ? true : false}
                        />
                        {a}
                      </label>
                    ))}
                  </ul>
                  <span>Score : {q.choosen === q.correctAnswer ? 1 : 0}</span>

                  {q.choosen === q.correctAnswer ? <p style={{ color: 'green' }}>Correct answer</p> : (!q.choosen ? <p style={{ color: 'red' }}>Not choosen !</p> : <p style={{ color: 'red' }}>Wrong answer</p>)}
                </div>
              </Col>

            ))}
          </Row>
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

export default ReviewModal;
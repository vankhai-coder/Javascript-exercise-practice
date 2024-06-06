import { useState } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";


function Content({ isValidate }) {
    // useState cho error message : 
    const [error, seterror] = useState('Default error...');

    // useState cho valid message : 
    const [valid, setValid] = useState(false);

    // function handle check validation : 
    const checkvalidate = (e) => {
        
        if (isValidate(e.target.value) === true) {
            seterror('valid input !')
            setValid(true);
        } else {
            seterror(isValidate(e.target.value))
            setValid(false);

        }
    }
    return (
        <>
            <Container>
                <Row className="justify-content-center" >
                    <Col sm={3} className="text-center" >
                        <InputGroup>
                            <InputGroupText>@</InputGroupText>
                            <FormControl className={`${valid ? 'is-valid' : 'is-invalid'}`} placeholder="type something..." onChange={checkvalidate} />
                            <div
                                className={`text-start  ${valid ? 'text-d valid-feedback' : 'invalid-feedback'}`}

                            >
                                {error}

                            </div>
                        </InputGroup>
                    </Col>
                </Row>
            </Container >
        </>
    )

}

export default Content;
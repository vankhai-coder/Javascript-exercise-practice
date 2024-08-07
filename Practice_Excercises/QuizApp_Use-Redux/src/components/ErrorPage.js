import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function ErrorPage() {

    const location = useLocation()

    return (
        <Container className="mt-5">
            <Row>
                <Col md={12}>
                    <div className="text-center">
                        <h1>Something went wrong my friend :D </h1>
                        <p>
                            {location.state?.message}
                        </p>
                        <Link to="/">
                            <Button variant="primary">Go to Homepage</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ErrorPage;

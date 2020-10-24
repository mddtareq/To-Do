import React from 'react';
import './MenuItem.css';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuItem = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} xl={{ span: 6, offset: 3 }}>
                    <div className="custom-nav text-center mt-3">
                        <Link className="mr-3" to="/all">All</Link>
                        <Link className="mr-3" to="/active">Active</Link>
                        <Link className="mr-3" to="/done">Done</Link>
                    </div>
                </Col>
            </Row>
            <br/>
        </Container>
    );
};

export default MenuItem;
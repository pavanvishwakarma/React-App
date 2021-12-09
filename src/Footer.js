import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col lg={12} className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.25s">
                            <p>© Copyright 2021 Space Dynamic Co. All Rights Reserved.
                                <br />Design: 
                                <Link to="https://templatemo.com/">TemplateMo</Link>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
export default Footer;
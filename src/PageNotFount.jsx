import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';

const PageNotFount = () => {
    return (
        <>
            <div className="main-banner wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={12} className="align-self-center text-center">
                            <div>
                                <h1 style={{fontSize: "120px"}}>404 </h1>
                                <h1 style={{fontSize: "20px"}}>Not Found </h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default PageNotFount;
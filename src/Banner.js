import { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';

import BanerImg from '../src/assets/images/banner-right-image.png';
const Banner = ()=> {

    const Title = (
        <h2>We Make <em>Digital Ideas</em> &amp; <span>SEO</span> Marketing</h2>
    )
    const subTitle = (
        <h6>Welcome to Space Dynamic</h6>
    )
    const description = (
        <p>Space Dynamic is a professional looking HTML template using a Bootstrap 5 (beta 2). This CSS template is free for you provided by
            <a rel="nofollow" href="https://templatemo.com/page/1" target="_parent">TemplateMo.</a>
        </p>
    )





    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        email: ''
    });

    

    const handleModal = () => {
        setShow(!show);
    }

    const inputEvent = (event) =>{
        const {name, value} = event.target;

        setData((preVal) => {
            return{
                ...preVal,
                [name] : value,
            }
        })
        
    }

    const loginHandle = (e) => {
        e.preventDefault();
        handleModal();
    }


    const searchForm = (
        <>
            <Form id="search" onSubmit={loginHandle}>
                <fieldset>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    className="email"
                    name="email"
                    value={data.email}
                    onChange={inputEvent} 
                    />
                </fieldset>
                <fieldset>
                    <Button type="submit" variant={false} className="main-button">Analyze Site</Button>
                </fieldset>
            </Form>

            <Modal show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Form Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h3>Email : {data.email}</h3>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleModal()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )





    return (
        <>
            <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col xs={12} md={6} lg={6} className="align-self-center">
                                    <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">

                                        {subTitle}

                                        {Title}

                                        {description}

                                        {searchForm}

                                    </div>

                                </Col>
                                <Col xs={12} md={6} lg={6}>
                                    <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <img src={BanerImg} alt="team meeting" />
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Banner;
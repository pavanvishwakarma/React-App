
import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Modal, Alert, ToastContainer, Toast } from 'react-bootstrap';
import contactImg from '../src/assets/images/contact-decoration.png';
import './App.css';
const contactData = (
    {
        title: "Feel Free To Send Us a Message About Your Website Needs",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doer ket eismod tempor incididunt ut labore et dolores",
        enquiry: {
            text: "For any enquiry, Call Us:",
            number: "010-020-0340"
        }
    }
)


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            msg: {
                success: "",
                faild: ""
            },
            errors: {
                firstNameError: "",
                lastNameError: "",
                emailError: ""
            },
            data: {
                fName: "",
                lName: "",
                eMail: "",
                messageD: ""
            }
        };

    }
    closeModal = e => {
        this.setState({
            show: false
        })
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    formValidation = () => {
        const { firstName, lastName, email } = this.state;

        let isValid = true;
        const errors = {}
        if (firstName.trim().length < 6) {
            errors.firstNameError = "First Name length should be 6";
            isValid = false;
        }
        if (lastName.trim().length < 4) {
            errors.lastNameError = "Last Name length should be 4";
            isValid = false;
        }
        if (!email.includes("@")) {
            errors.emailError = "Invalid Email Address";
            isValid = false;
        }
        this.setState({ errors });
        return isValid;
    }


    modalShow() {
        this.setState({ show: true })
    }


    onSubmit = (e) => {
        e.preventDefault();
        const isValid = this.formValidation();
        if (isValid === true) {
            this.setState({
                data: {
                    fName: this.state.firstName,
                    lName: this.state.lastName,
                    eMail: this.state.email,
                    messageD: this.state.message
                },
                msg: {
                    success: "Form Submitted SuccessFully !"
                }
            })
            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
            })
            setTimeout(() => this.modalShow(), 2000);
        }
        else {
            this.setState({
                msg: {
                    faild: "oops! Form Submitted Faild !"
                }
            })
        }


    }



    render() {
        const { firstName, lastName, email, message, errors } = this.state;
        const { firstNameError, lastNameError, emailError } = this.state;
        const { msg } = this.state;

        return (
            <>
                <div id="contact" className="contact-us section">
                    <Container>
                        <Row>
                            <Col lg={6} className="align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
                                <div className="section-heading">
                                    <h2>{contactData.title}</h2>
                                    <p>{contactData.description}</p>
                                    <div className="phone-info">
                                        <h4>{contactData.enquiry.text}
                                            <span><i className="fa fa-phone"></i>
                                                <a href={`tel:${contactData.enquiry.number}`}>{contactData.enquiry.number}</a>
                                            </span>
                                        </h4>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
                                <Form id="contact" onSubmit={this.onSubmit} noValidate>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <fieldset className="position-relative" className="position-relative">
                                                <Form.Control
                                                    bsPrefix
                                                    type="text"
                                                    placeholder="Enter First Name"
                                                    name="firstName"
                                                    noValidate
                                                    value={this.state.firstName}
                                                    onChange={this.onChange}
                                                />
                                                {
                                                    errors.firstNameError ?
                                                        <span className="errorMessage">{errors.firstNameError}</span>
                                                        : null
                                                }
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset className="position-relative">
                                                <Form.Control
                                                    bsPrefix
                                                    type="text"
                                                    placeholder="Enter Last Name"
                                                    name="lastName"
                                                    noValidate
                                                    value={this.state.lastName}
                                                    onChange={this.onChange}
                                                />
                                                {
                                                    errors.lastNameError ?
                                                        <span className="errorMessage">{errors.lastNameError}</span>
                                                        : null
                                                }
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset className="position-relative">
                                                <Form.Control
                                                    bsPrefix
                                                    type="email"
                                                    placeholder="Enter Email"
                                                    name="email"
                                                    noValidate
                                                    value={this.state.email}
                                                    onChange={this.onChange}
                                                />
                                                {
                                                    errors.emailError ?
                                                        <span className="errorMessage">{errors.emailError}</span>
                                                        : null
                                                }
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset className="position-relative">
                                                <Form.Control
                                                    bsPrefix
                                                    as="textarea"
                                                    rows={3}
                                                    placeholder="Message"
                                                    name="message"
                                                    noValidate
                                                    value={this.state.message}
                                                    onChange={this.onChange}
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <Button bsPrefix variant={false} type="submit" id="form-submit" className="main-button">Send Message</Button>
                                            </fieldset>
                                        </div>
                                        {
                                            msg.success ?
                                                <span className="successMsg">{msg.success}</span>
                                                : null
                                        }
                                        {
                                            msg.faild ?
                                                <span className="faildMsg">{msg.faild}</span>
                                                : null
                                        }
                                    </div>
                                    <div className="contact-dec">
                                        <img src={contactImg} alt={contactImg} />
                                    </div>
                                    {
                                        this.state.msg == "success" ?
                                            <div className="m-3">
                                                <Alert
                                                    variant="success"
                                                    className="show"
                                                >
                                                    <p className="m-0">{this.state.msg}</p>
                                                </Alert>
                                            </div> :
                                            this.state.msg === "error" ?
                                                <div className="m-3">
                                                    <Alert
                                                        variant="danger" >
                                                        <p className="m-0">Faild</p>
                                                    </Alert>
                                                </div>
                                                : null

                                    }
                                </Form>




                            </Col>
                        </Row>
                    </Container>



                    <Modal show={this.state.show} onHide={() => this.closeModal()}>
                        <Modal.Header closeButton>
                            <Modal.Title>Form Details</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                            <h4>First Name : <b>{this.state.data.fName}</b></h4>
                            <h4>Last Name : <b>{this.state.data.lName}</b></h4>
                            <h4>Email : <b>{this.state.data.eMail}</b></h4>
                            <h4>Message : <b>{this.state.data.messageD}</b></h4>
                        </Modal.Body>




                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.closeModal()}>Close</Button>
                        </Modal.Footer>
                    </Modal>


                </div>
            </>
        );
    }
}

import React, { Component } from "react";

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

class FormValidation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        const { formErrors } = this.state;

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
                                <Form id="contact" onSubmit={this.handleSubmit} noValidate>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter First Name"
                                                    className={formErrors.firstName.length > 0 ? "error" : null}
                                                    name="firstName"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                                {formErrors.firstName.length > 0 && (
                                                    <span className="errorMessage">{formErrors.firstName}</span>
                                                )}
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Last Name"
                                                    className={formErrors.lastName.length > 0 ? "error" : null}
                                                    name="lastName"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                                {formErrors.lastName.length > 0 && (
                                                    <span className="errorMessage">{formErrors.lastName}</span>
                                                )}
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter Email"
                                                    pattern="[^ @]*@[^ @]*"
                                                    className={formErrors.email.length > 0 ? "error" : null}
                                                    name="email"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                                {formErrors.email.length > 0 && (
                                                    <span className="errorMessage">{formErrors.email}</span>
                                                )}
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    placeholder="Message"
                                                    name="message"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <Button variant={false} type="submit" id="form-submit" className="main-button">Send Message</Button>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="contact-dec">
                                        <img src="assets/images/contact-decoration.png" alt="" />
                                    </div>
                                </Form>

                                {
                                    succMsg.successMsg ?
                                        <ToastContainer className="p-3" position="top-end">
                                            <Toast bg="info" show={showA} onClose={() => this.toggleShowA()}>
                                                <Toast.Header>
                                                    <img
                                                        src="holder.js/20x20?text=%20"
                                                        className="rounded me-2"
                                                        alt=""
                                                    />
                                                    <strong className="me-auto">localhost:3000</strong>
                                                    <small>Just Now</small>
                                                </Toast.Header>
                                                <Toast.Body>{succMsg.successMsg}</Toast.Body>
                                            </Toast>
                                        </ToastContainer>
                                        : "null"
                                }
                            </Col>
                        </Row>
                    </Container>

                    <Modal show={show} onHide={handleModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Form Details</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <h4>First Name : {data.firstName}</h4>
                            <h4>Last Name : {data.lastName}</h4>
                            <h4>Email : {data.email}</h4>
                            <h4>Message : {data.message}</h4>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => handleModal()}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </>
        );
    }
}

export default FormValidation;
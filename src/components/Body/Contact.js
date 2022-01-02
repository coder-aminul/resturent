import React, { Component } from "react";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { Control, Form, Errors, actions } from "react-redux-form";
import { connect } from "react-redux";

const mapDispatchToprops = (dispatch) => {
  return {
    resetForm: () => {
      dispatch(actions.reset("contactForm"));
    },
  };
};
//Check Form Validation Expression
const required = (value) => value && value.length;
const isPhone = (value) =>
  /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value);
const isEmail = (value) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

class Contact extends Component {
  submitHandler = (value) => {
    console.log(value);
    this.props.resetForm();
  };
  render() {
    return (
      <div className="container">
        <h2 className="my-2 text-center">Contact Form</h2>
        <Form
          model="contactForm"
          onSubmit={(value) => this.submitHandler(value)}
        >
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>First Name</Label>
                <Control.text
                  model=".fname"
                  name="fname"
                  placeholder="First Name"
                  className="form-control"
                  validators={{ required }}
                />
                <Errors
                  className="text-danger"
                  model=".fname"
                  show="touched"
                  messages={{
                    required: "Required",
                  }}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Last Name</Label>
                <Control.text
                  model=".lname"
                  placeholder="Last Name"
                  name="lname"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".lname"
                  show="touched"
                  messages={{
                    required: "Required",
                  }}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>E-Mail</Label>
                <Control.text
                  model=".email"
                  placeholder="Type Your Email"
                  name="email"
                  className="form-control"
                  validators={{
                    required,
                    isEmail,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: "Required",
                    isEmail: (value) => `${value} isnot a valid Emial Address`,
                  }}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Mobile Number</Label>
                <Control.text
                  model=".phone"
                  placeholder="Mobile Number"
                  name="phone"
                  className="form-control"
                  validators={{
                    required,
                    isPhone,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".phone"
                  show="touched"
                  messages={{
                    required: "Required",
                    isPhone: (value) => `${value} isnot a valid Phone`,
                  }}
                />
              </FormGroup>
            </Col>
            <Col md={{ size: 2 }}>
              <FormGroup>
                <Label>Contact Type</Label>
                <Control.select
                  model=".conctType"
                  type="select"
                  name="conctType"
                  className="form-control"
                  validators={{
                    required,
                  }}
                >
                  <option>TelePhone</option>
                  <option>E-Mail</option>
                </Control.select>
                <Errors
                  className="text-danger"
                  model=".conctType"
                  show="touched"
                  messages={{
                    required: "Required",
                  }}
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label>Type Message</Label>
                <Control.textarea
                  model=".text"
                  placeholder="Type Your Message"
                  name="text"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".text"
                  show="touched"
                  messages={{
                    required: "Required",
                  }}
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup check>
                <Control.checkbox
                  model=".checkbox"
                  type="checkbox"
                  name="checkbox"
                  className="form-check-input"
                />
                <Label check>Check me out</Label>
              </FormGroup>
            </Col>
            <Col md={12}>
              <button className="btn-block btn btn-success my-2">Send</button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToprops)(Contact);

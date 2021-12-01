import React, { Component } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      checkbox: false,
      text: "",
      conctType: "E-mail",
    };
    this.InputChangeHandle = this.InputChangeHandle.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  InputChangeHandle = (event) => {
    const value =
      event.target.type === "chekbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (event) => {
    console.log(this.state);
    this.setState({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      checkbox: false,
      text: "",
      conctType: "E-mail",
    });
    event.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <h2 className="my-2 text-center">Contact Form</h2>
        <Form onSubmit={this.submitHandler}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>First Name</Label>
                <Input
                  name="fname"
                  placeholder="First Name"
                  value={this.state.fname}
                  onChange={this.InputChangeHandle}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  value={this.state.lname}
                  onChange={this.InputChangeHandle}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>E-Mail</Label>
                <Input
                  type="email"
                  placeholder="Type Your Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.InputChangeHandle}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Mobile Number</Label>
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.InputChangeHandle}
                />
              </FormGroup>
            </Col>
            <Col md={{ size: 2 }}>
              <FormGroup>
                <Label>Contact Type</Label>
                <Input
                  type="select"
                  name="conctType"
                  value={this.state.conctType}
                  onChange={this.InputChangeHandle}
                >
                  <option>TelePhone</option>
                  <option>E-Mail</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label>Type Message</Label>
                <Input
                  type="textarea"
                  placeholder="Type Your Message"
                  name="text"
                  value={this.state.text}
                  onChange={this.InputChangeHandle}
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup check>
                <Input
                  type="checkbox"
                  name="checkbox"
                  checked={this.state.checkbox}
                  onChange={this.InputChangeHandle}
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

export default Contact;

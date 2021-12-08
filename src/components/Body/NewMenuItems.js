import React, { Component } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

class NewMenuItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemname: "",
      price: "",
      description: "",
      filename: "",
      category: "Biriany",
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <Form className="my-3" onSubmit={this.onSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="itemname">Menu Name</Label>
                <Input
                  type="text"
                  name="itemname"
                  placeholder="Item Name"
                  value={this.state.itemname}
                  onChange={this.onChangeInput}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="prices">Price</Label>
                <Input
                  type="text"
                  name="price"
                  placeholder="Item Price"
                  value={this.state.price}
                  onChange={this.onChangeInput}
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  placeholder="Item Description"
                  value={this.state.description}
                  onChange={this.onChangeInput}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="filename">Upload Image</Label>
                <Input
                  type="file"
                  name="filename"
                  value={this.state.filename}
                  onChange={this.onChangeInput}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="category">Category</Label>
                <Input
                  type="select"
                  name="category"
                  value={this.state.category}
                  onChange={(this, this.onChangeInput)}
                >
                  <option>Biriany</option>
                  <option>Burgar</option>
                  <option>Kacci</option>
                  <option>Halim</option>
                </Input>
              </FormGroup>
            </Col>
            <Col>
              <button className="btn btn-block btn-success" name="btn">
                Add Item
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default NewMenuItems;

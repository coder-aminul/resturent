import React, { Component } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

class NewMenuItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      description: "",
      image: "",
      category: "Biriany",
      label: "New",
      featured: false,
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeInput = (event) => {
    const value =
      event.target.type === "chekbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
    this.setState({
      itemname: "",
      price: "",
      description: "",
      image: "",
      category: "Biriany",
      label: "New",
      featured: false,
    });
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
                  name="name"
                  placeholder="Item Name"
                  value={this.state.name}
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
            <Col md={3}>
              <FormGroup check className="p-3">
                <Input
                  type="checkbox"
                  name="featured"
                  checked={this.state.featured}
                  onChange={this.onChangeInput}
                />
                <Label for="featured">Featured Products</Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="filename">Upload Image</Label>
                <Input
                  type="file"
                  name="image"
                  value={this.state.image}
                  onChange={this.onChangeInput}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="label">Category</Label>
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
            <Col md={3}>
              <FormGroup>
                <Label for="category">Category</Label>
                <Input
                  type="select"
                  name="label"
                  value={this.state.label}
                  onChange={(this, this.onChangeInput)}
                >
                  <option>New</option>
                  <option>Hot</option>
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

import React, { Component } from "react";
import { Col, FormGroup, Alert, Label, Row } from "reactstrap";
import axios from "axios";
import { BaseURL } from "../../redux/BaseURL";
import { Control, LocalForm } from "react-redux-form";

class NewMenuItems extends Component {
  state = {
    alertShow: false,
    alertText: null,
    alertType: null,
  };
  onSubmit = (value) => {
    axios
      .post(BaseURL + "dishes", value)
      .then((response) => response.status)
      .then((status) => {
        if (status === 201) {
          this.setState({
            alertShow: true,
            alertText: "Submited Successfully",
            alertType: "success",
          });
          setTimeout(() => {
            this.setState({
              alertShow: false,
            });
          }, 2000);
        }
      })
      .catch((error) => {
        this.setState({
          alertShow: true,
          alertText: error.message,
          alertType: "danger",
        });
        setTimeout(() => {
          this.setState({
            alertShow: false,
          });
        }, 2000);
      });
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-center my-2">New Item Add</h2>
        <Alert isOpen={this.state.alertShow} color={this.state.alertType}>
          {this.state.alertText}
        </Alert>
        <LocalForm className="my-3" onSubmit={(value) => this.onSubmit(value)}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="itemname">Menu Name</Label>
                <Control.text
                  model=".name"
                  name="name"
                  placeholder="Item Name"
                  className="form-control"
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="prices">Price</Label>
                <Control.text
                  model=".price"
                  name="price"
                  className="form-control"
                  placeholder="Item Price"
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="description">Description</Label>
                <Control.textarea
                  model=".description"
                  className="form-control"
                  name="description"
                  placeholder="Item Description"
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup check className="p-3">
                <Control.checkbox
                  model=".featured"
                  name="featured"
                  className="form-control-input mx-2"
                />
                <Label for="featured">Featured Products</Label>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="filename">Upload Image</Label>
                <Control.file model=".image" name="image" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="label">Category</Label>
                <Control.select
                  model=".category"
                  name="category"
                  className="form-control"
                >
                  <option>Biriany</option>
                  <option>Burgar</option>
                  <option>Kacci</option>
                  <option>Halim</option>
                </Control.select>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="category">Category</Label>
                <Control.select
                  model=".label"
                  name="label"
                  className="form-control"
                >
                  <option>New</option>
                  <option>Hot</option>
                </Control.select>
              </FormGroup>
            </Col>
            <Col>
              <button className="btn btn-block btn-success" name="btn">
                Add Item
              </button>
            </Col>
          </Row>
        </LocalForm>
      </div>
    );
  }
}

export default NewMenuItems;

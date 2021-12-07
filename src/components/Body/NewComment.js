import React, { Component } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      rating: "",
      comment: "",
    };
    this.onchangeInput = this.onchangeInput.bind(this);
    this.onsubmit = this.onsubmit.bind(this);
  }
  onchangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onsubmit = (event) => {
    this.props.addComment(
      this.props.dishId,
      this.state.author,
      this.state.rating,
      this.state.comment
    );
    this.setState({
      author: "",
      rating: "",
      comment: "",
    });
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onsubmit}>
          <Row form>
            <h4 className="my-2">Comments</h4>
            <Col md={12}>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Your Name"
                  name="author"
                  value={this.state.author}
                  onChange={this.onchangeInput}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="rating">Your Rating</Label>
                <Input
                  type="select"
                  name="rating"
                  value={this.state.rating}
                  onChange={this.onchangeInput}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Input
                  type="textarea"
                  placeholder="Type Your Comments"
                  name="comment"
                  value={this.state.comment}
                  onChange={this.onchangeInput}
                />
              </FormGroup>
            </Col>
            <Button color="info">Comment</Button>
          </Row>
        </Form>
      </div>
    );
  }
}

export default NewComment;

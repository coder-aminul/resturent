import React, { Component } from "react";
import { Control, Form, Errors, actions } from "react-redux-form";
import { Button, Col, FormGroup, Label, Row } from "reactstrap";
import { connect } from "react-redux";

const mapdispatchToprops = (dispatch) => {
  return {
    resetCommentForm: () => {
      dispatch(actions.reset("commentForm"));
    },
  };
};

//validators
const required = (value) => value && value.length;
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
    this.props.resetCommentForm();
  };
  render() {
    return (
      <div>
        <Form model="commentForm" onSubmit={this.onsubmit}>
          <Row form>
            <h4 className="my-2">Comments</h4>
            <Col md={12}>
              <FormGroup>
                <Control.text
                  model=".author"
                  type="text"
                  placeholder="Your Name"
                  name="author"
                  value={this.state.author}
                  onChange={this.onchangeInput}
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  model=".author"
                  className="text-danger"
                  show="touched"
                  messages={{
                    required: "Author Name Required!",
                  }}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="rating">Your Rating</Label>
                <Control.select
                  model=".rating"
                  type="select"
                  name="rating"
                  value={this.state.rating}
                  onChange={this.onchangeInput}
                  className="form-control"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Control.textarea
                  model=".comment"
                  type="textarea"
                  placeholder="Type Your Comments"
                  name="comment"
                  value={this.state.comment}
                  onChange={this.onchangeInput}
                  className="form-control"
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

export default connect(null, mapdispatchToprops)(NewComment);

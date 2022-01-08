import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Alert,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import {
  addComment,
  fetchDishes,
  fetchComment,
} from "../../redux/actionCreator";
import DishDetails from "./DishDetails";
import Loading from "./Loading";
import MenuItems from "./MenuItems";

const mapStateTopops = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

const mapTopoprs = (dispacth) => {
  return {
    addComment: (dishid, author, rating, comment) =>
      dispacth(addComment(dishid, author, rating, comment)),
    fetchDishes: () => {
      dispacth(fetchDishes());
    },
    fetchComments: () => {
      dispacth(fetchComment());
    },
  };
};
class Menu extends Component {
  state = {
    seletDishes: null,
    modalOpen: false,
  };
  onDishSelect = (dish) => {
    this.setState({
      seletDishes: dish,
      modalOpen: !this.state.modalOpen,
    });
  };

  onToggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
  }
  render() {
    document.title = "Menu";
    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else if (this.props.dishes.errMess != null) {
      return (
        <div className="container my-2">
          <Alert color="danger fw-bold">
            <b>{this.props.dishes.errMess}</b>
          </Alert>
        </div>
      );
    } else {
      const menu = this.props.dishes.dishes.map((item) => {
        return (
          <MenuItems
            dish={item}
            key={item.id}
            dishesSelect={() => this.onDishSelect(item)}
          />
        );
      });
      let dishSelect = null;
      if (this.state.seletDishes != null) {
        const comments = this.props.comments.comments.filter((comment) => {
          return comment.dishId === this.state.seletDishes.id;
        });
        dishSelect = (
          <DishDetails
            dish={this.state.seletDishes}
            addComment={this.props.addComment}
            comments={comments}
            commentisLoading={this.props.isLoading}
          />
        );
      }
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="grid-container">{menu}</div>
              <Modal
                isOpen={this.state.modalOpen}
                onClick={() => this.onToggleModal}
              >
                <ModalHeader>
                  <span className="modal-close" onClick={this.onToggleModal}>
                    &times;
                  </span>
                </ModalHeader>
                <ModalBody>{dishSelect}</ModalBody>
                <ModalFooter>
                  <Button color="danger" onClick={this.onToggleModal}>
                    Close
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default connect(mapStateTopops, mapTopoprs)(Menu);

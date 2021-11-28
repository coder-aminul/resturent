import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import DishDetails from "./DishDetails";
import MenuItems from "./MenuItems";

const mapStateTopops = (state) => {
  return {
    dishes: state.dishes,
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
  render() {
    const menu = this.props.dishes.map((item) => {
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
      dishSelect = <DishDetails dish={this.state.seletDishes} />;
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
              <ModalHeader>{}</ModalHeader>
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
export default connect(mapStateTopops)(Menu);

import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import DISHES from "../.././Data/Dishes";
import DishDetails from "./DishDetails";
import MenuItems from "./MenuItems";
import Modals from "./Modals";

class Menu extends Component {
  state = {
    dishes: DISHES,
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
    const menu = this.state.dishes.map((item) => {
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
            <Modals />
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
export default Menu;

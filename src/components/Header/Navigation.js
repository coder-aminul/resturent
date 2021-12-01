import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }
  navToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  render() {
    return (
      <Navbar dark color="dark" expand="sm">
        <div className="container">
          <NavbarToggler onClick={this.navToggle} />
          <NavbarBrand href="/">myResturent</NavbarBrand>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact to="/" className="nav-link">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/menus" className="nav-link">
                  Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/newmwnuadd" className="nav-link">
                  MenuAdd
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/about" className="nav-link">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/contact" className="nav-link">
                  contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/service" className="nav-link">
                  Service
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Navigation;

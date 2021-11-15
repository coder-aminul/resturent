import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

const Navigation=()=>{
    return(
        <div>
            <Navbar dark color="dark" expand="md">
                <div className="container">
                    <NavbarBrand href="/">
                        myRestureant
                    </NavbarBrand>
                  <Nav>
                      <NavItem>
                          <NavLink href="/">Home</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href="/menu-list">Menu</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href="/new-item">Add Item</NavLink>
                      </NavItem>
                  </Nav>
                </div>
            </Navbar>
        </div>
    );
}

export default Navigation;
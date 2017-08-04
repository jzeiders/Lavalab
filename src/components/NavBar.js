import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../App.css';

class NavBar extends Component {
  render() {
    return (

    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">LavaBabies</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Dolla</NavItem>
        <NavItem eventKey={2} href="#">Dolla</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Bill</NavItem>
        <NavItem eventKey={2} href="#">Yall</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

    );
  }
}
export default NavBar;

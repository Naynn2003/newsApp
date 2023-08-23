import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={NavLink} to="/">News App</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <NavLink className="nav-link" to="/all">All News</NavLink>
          <NavLink className="nav-link" to="/top">Top News</NavLink>
          <NavLink className="nav-link" to="/trending">Trending News</NavLink>
          <NavLink className="nav-link" to="/science">Science News</NavLink>
          <NavLink className="nav-link" to="/entertainment">Entertainment News</NavLink>
          <NavLink className="nav-link" to="/sports">Sports News</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;

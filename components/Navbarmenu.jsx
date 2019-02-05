import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import '../scss/Navbarmenu.scss';
class Navbarmenu extends Component {
    render() {
        return (
            <div className="navbar-style">
                <Nav className="navs-style">
                    <NavItem >
                        <NavLink className="nav-links" href="#">Home Page</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-links" href="#">About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-links" href="#">What We Do</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-links" href="#">Special Offers</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-links" href="#">Testimonials</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-links" href="#">Latest News</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-links" href="#">Blog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-links" href="#">Our Team</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-links" href="#">Contact Us</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default Navbarmenu;
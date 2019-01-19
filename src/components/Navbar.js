import React, { Component } from 'react'
import { Navbar, Nav,  NavDropdown, MenuItem } from 'react-bootstrap'
import axios from 'axios'


class NavbarMy extends Component {
    state = {
        abc: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M',
                 'N', 'O', 'P', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'Y', 'Z', 'Ź', 'Ż'],
        koledy: []
    }
    

    render(){
        const abcList = this.state.abc.map(letter => {
            return (
                <NavDropdown key={Math.random()} eventKey={Math.random()} title={letter} bsStyle="default" noCaret id="dropdown-no-caret">
                </NavDropdown>
            )})
        return(
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    {abcList}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
    }
}

export default NavbarMy
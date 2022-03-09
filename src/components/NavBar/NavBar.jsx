import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import {connect} from "react-redux";
import {setType} from "../../redux/pokemon_reducer";
import logo from "../../assets/logo.svg"

const NavBar = ({ types, type, setType }) => {

    return (
        <Navbar bg="dark" variant="dark" fixed={"top"}>
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src={logo}
                        width="60"
                        height="30"
                        className="d-inline-block align-top"
                    />{'  '}
                    Pokedex App
                </Navbar.Brand>
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title={type.toUpperCase()}
                            menuVariant="dark"
                        >
                            {types.map(type => <NavDropdown.Item key={type} onClick={() => setType(type)}>{type.toUpperCase()}</NavDropdown.Item>)}
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => setType('All types')}>Show all types</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const mapStateToProps = (state) => ({
    types: state.main.types,
    type: state.listPokemons.type,
})

export default connect(mapStateToProps, {setType})(NavBar);
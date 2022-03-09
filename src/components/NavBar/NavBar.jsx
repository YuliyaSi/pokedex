import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import {connect} from "react-redux";
import {setType} from "../../redux/pokemon_reducer";

const NavBar = ({ types, type, setType }) => {

    return (
        <Navbar bg="dark" variant="dark" fixed={"top"}>
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src="https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{'  '}
                    Pokedex App
                </Navbar.Brand>
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title={type}
                            menuVariant="dark"
                        >
                            {types.map(type => <NavDropdown.Item key={type} onClick={() => setType(type.toUpperCase())}>{type.toUpperCase()}</NavDropdown.Item>)}
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
import { Fragment } from "react";
import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Form,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function BootstrapNav() {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="me-2">
                                Home
                            </Link>
                            <Link to="/product" className="me-2">
                                Product
                            </Link>
                            <Link to="/about" className="me-2">
                                About
                            </Link>
                            <Link to="/login">Login</Link>
                            {/* <Nav.Link onClick={(e) => e.preventDefault()}>
                            </Nav.Link> */}
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}

export default BootstrapNav;

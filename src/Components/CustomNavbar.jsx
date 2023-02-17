import { Nav,Navbar, Container, NavDropdown, Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link, useLocation } from "react-router-dom"

const CustomNavbar = () => {
    const location = useLocation
    const dispatch = useDispatch()
    return(
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className={`nav-Link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>            
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Inserisci una località"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                dispatch({
                    type:"SEARCH-LOCATION",
                    payload: e.target.value
                })
              }}
            />
            <Link to="/ShowWeather"><Button variant="outline-success">Search</Button></Link >
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default CustomNavbar
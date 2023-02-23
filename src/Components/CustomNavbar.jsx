import { useState } from "react"
import { Nav,Navbar, Container, NavDropdown, Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"

const CustomNavbar = () => {

  const navigate = useNavigate()
  const [searchBarValue, setSearchBarValue] = useState("")
    
  const locationSubmit = e => {
    e.preventDefault()
    dispatch({
      type:"SEARCH-LOCATION",
      payload: searchBarValue
  })
  navigate("/ShowWeather")
  }

    const location = useLocation
    const dispatch = useDispatch()
    return(
        <Navbar className="navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand className="title" href="#">Epimeteo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className={`nav-Link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>            
            
          </Nav>
          <Form className="d-flex" onSubmit={locationSubmit}>
            <Form.Control
              type="search"
              placeholder="Inserisci una località"
              className="me-2"
              aria-label="Search"
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default CustomNavbar



// const CustomNavbar = () => {

    


//     const location = useLocation
//     const dispatch = useDispatch()
//     return(
//         <Navbar className="navbar" expand="lg">
//       <Container fluid>
//         <Navbar.Brand className="title" href="#">Epimeteo</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Link to="/" className={`nav-Link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>            
            
//           </Nav>
//           <Form className="d-flex" >
//             <Form.Control
//               type="search"
//               placeholder="Inserisci una località"
//               className="me-2"
//               aria-label="Search"
//               onChange={(e) => {
//                 dispatch({
//                     type:"SEARCH-LOCATION",
//                     payload: e.target.value
//                 })
//               }}
//             />
//             <Link to="/ShowWeather"><Button variant="outline-success">Search</Button></Link >
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     )
// }

// export default CustomNavbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './navbar.css'




export const NavBar = () => {


  return (

      <Navbar bg="dark" variant="dark" >
      <Container fluid >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ display:"flex" , justifyContent: "center", height: "50px", alignItems: "center"}}
            navbarScroll
          >
            <Nav.Item >
              <NavLink className={ ({isActive}) => (isActive ? "active": "no-active")} to={"/Home"}>Home</NavLink>
            </Nav.Item>
            <Nav.Item >
              <NavLink  className={({isActive}) => (isActive ? "active": "no-active")} to={"/Pokemon"}>Pokemon</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <img src="https://cdn-icons-png.flaticon.com/512/528/528101.png" style={{width: "40px"}}/>
      </Container>
    </Navbar>
      

  );
}

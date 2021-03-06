import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
// import {logout} from '../actions/userActions'

const Header = () => {
  // const dispatch = useDispatch()
  // const userLogin = useSelector(state => state.userLogin)
  // const { userInfo } = userLogin

  // const logoutHandler = () => {
  //   dispatch(logout())

  // }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>

          <LinkContainer to='/'>
            <Navbar.Brand>Fit Tracker</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to='/'>
                <Nav.Link>
                  <i className="fas fa-shopping-cart"/>Exercises
                </Nav.Link>
              </LinkContainer> 

              <LinkContainer to='/create'>
                <Nav.Link>
                  <i className="fas fa-shopping-cart"/>Add log
                </Nav.Link>
              </LinkContainer>
              
              <LinkContainer to='/user'>
                <Nav.Link>
                  <i className="fas fa-shopping-cart"/>Create User
                </Nav.Link>
              </LinkContainer>

              {/* {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) :
                <LinkContainer to='/login'>
                  <Nav.Link ><i className="fas fa-user"/>Sign In</Nav.Link>
                </LinkContainer>
              } */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

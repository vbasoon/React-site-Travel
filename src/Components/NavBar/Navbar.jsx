import React, { useState } from 'react'
import { Navbar, Nav, Button, Container, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Styles = styled.div`
   a, .navbar-brand, .navbar-nav .nav-link {
      color: #adb1b8;
      &:hover {
         color: white
      }
   }
   `

function Navibar() {

   const [showLogIn, setShowLogIn] = useState(false);
   const [showPass, setShowPass] = useState(false);
   const closeModalLogin = () => setShowLogIn(false);
   const showModalLogin = () => setShowLogIn(true);
   const closeModalPass = () => setShowPass(false);
   const showModalPass = () => setShowPass(true)


   return (
      <div>
         <Styles>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
               <Container>
                  <Navbar.Brand>Logo</Navbar.Brand>
                  <Navbar.Toggle aria-controls="toggle-navbar"></Navbar.Toggle>
                  <Navbar.Collapse id="toggle-navbar">
                     <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>

                     </Nav>
                     <Nav className="ml-auto">
                        <Button variant="danger" className="mr-2" onClick={showModalPass}>Sign Up</Button>
                        <Button variant="primary" onClick={showModalLogin} >Log In</Button>
                     </Nav>

                  </Navbar.Collapse>
               </Container>

            </Navbar>
         </Styles>
         <Modal show={showLogIn} onHide={closeModalLogin}>
            <Modal.Header closeButton>
               <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Form.Group controlId="fromBasicEmail">
                     <Form.Label>Email Adress</Form.Label>
                     <Form.Control type="text" placeholder="Enter E-Mail or Log in" />
                     <Form.Text className="text-muted">
                        Your email address will never be shared with any 3rd parties.
                     </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="fromBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="text" placeholder="Enter password" />
                  </Form.Group>
                  <Form.Group controlId="fromBasicCheckbox">
                     <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                  <Button onClick={closeModalLogin}>Save</Button>
                  <Button variant="danger" className="ml-2" onClick={closeModalLogin}>Cancel</Button>
               </Form>
            </Modal.Body>
         </Modal>
         <Modal show={showPass} onHide={closeModalPass}>
            <Modal.Header closeButton>
               <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Form.Group controlId="fromBasicEmail">
                     <Form.Label>Email Adress or NickName</Form.Label>
                     <Form.Control type="text" placeholder="Enter E-Mail or Log in" />
                     <Form.Text className="text-muted">
                        Your email address will never be shared with any 3rd parties.
                     </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="fromBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="text" placeholder="Enter password" />
                  </Form.Group>
                  <Form.Group controlId="fromBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="text" placeholder="Enter password again" />
                  </Form.Group>
                  <Form.Group controlId="fromBasicCheckbox">
                     <Form.Check type="checkbox" label="I agree to the Terms of Service and Privacy Policy" />
                  </Form.Group>
                  <Button onClick={closeModalPass}>Save</Button>
                  <Button variant="danger" className="ml-2" onClick={closeModalPass}>Cancel</Button>
               </Form>
            </Modal.Body>
         </Modal>
      </div>
   )
}

export default Navibar

import { NavDropdown,Nav,Navbar,Container,Row,Col,Form,Button } from "react-bootstrap";



 const MainHeader=()=>{



  return(
  <header className='header ' >
  
  <Navbar expand="lg" className=" p-3 navbar">
      <Container>
        <Navbar.Brand href="./App.js" target="_blank" >Women's  beauty</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"className=" basic-navbar-nav  " >
          <Nav className="me-auto px-5">
            <Nav.Link className="nav-link px-4  me-2 ms-5 border-bottom  border-success" href="./App.js"  >Home </Nav.Link>
            <Nav.Link className="nav-link  px-3 me-2 ms-5 border-bottom  border-success" href="#link">Care&Tips</Nav.Link>
            <NavDropdown className="ms-5   border-bottom border-success" title="Products" id="basic-nav-dropdown" >
           
              <NavDropdown.Item className="navdropdownitem" href="/Products" target="/blank" >Products</NavDropdown.Item>
              <NavDropdown.Item className="navdropdownitem"  href="/Faceproducts" target="/blank">
                Faceproducts
              </NavDropdown.Item>
              <NavDropdown.Item className="navdropdownitem"  href="/Bodyproducts" target="/blank">Bodyproducts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="navdropdownitem"  href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
            id="search"
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              style={{fontFamily:"arial"}}
            />
          </Col>
          <Col xs="auto">
            <Button className="bg-success border border-success" type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </header>
  )
}

export default MainHeader;
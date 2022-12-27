import React from 'react'
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
 
const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
          <div className='logo'>
            <div>
              <h1 className='text-white'>NeuSmart</h1>
            </div>
          </div>
          <p className='footer__text mt-4'>Consequat officia anim duis duis et consectetur nostrud exercitation. Enim eiusmod non irure tempor anim nostrud quis velit tempor excepteur adipisicing voluptate laboris enim. Pariatur incididunt ex ex et excepteur dolor exercitation consectetur est anim dolor ad nisi.</p>
          </Col>

          <Col lg='3' md='3' className='mb-4'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Categorias top</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Celulares</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Sofas modernos</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2' md='3' className='mb-4'>
          <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Links útiles</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shopping</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Carro</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Inicio de sesión</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Politica de privacidad</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          
          <Col lg='3' md='4'>
          <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Contacto</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Neuquén Capital, San Martin 223</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+54 9 299 9999 999</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  <p>ttomycastro@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className='footer__copyright'>
              Copyright {year} - creado por Castro Tomás. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
import React from 'react'

import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import '../styles/checkout.css'

import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'

import { useSelector } from 'react-redux'


const Checkout = () => {

  const totalQty = useSelector((state) => state.cart.totalQuantity)
  const totalAmount = useSelector((state) => state.cart.totalAmount)

  return (
    <Helmet title='Checkout'>
    <CommonSection title='Checkout '/>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <h6 className='mb-4 fw-bold'>Información de facturación</h6>
            <Form className='billing__form'>
              <FormGroup className='form__group'>
                <input type='text' placeholder='Escribe tu nombre'/>
              </FormGroup>

              <FormGroup className='form__group'>
                <input type='email' placeholder='Escribe tu email'/>
              </FormGroup>

              <FormGroup className='form__group'>
                <input type='number' placeholder='Escribe tu número de celular'/>
              </FormGroup>

              <FormGroup className='form__group'>
                <input type='text' placeholder='Escribe tu dirección'/>
              </FormGroup>

              <FormGroup className='form__group'>
                <input type='text' placeholder='Escribe tu ciudad'/>
              </FormGroup>

              <FormGroup className='form__group'>
                <input type='text' placeholder='Código postal'/>
              </FormGroup>

              <FormGroup className='form__group'>
                <input type='text' placeholder='Escribe tu país'/>
              </FormGroup>
            </Form>
          </Col>

          <Col lg='4'>
            <div className='checkout__cart'>
              <h6>Cantidad total: <span>{totalQty} productos</span></h6>
              <h6>Subtotal: <span>${totalAmount}</span></h6>
              <h6><span>Shipping: <br/>Envío gratis</span> <span>$0</span></h6>
              <h4>Total: <span>${totalAmount}</span></h4>
            </div>
            <button className='buy__btn auth__btn w-100'>Hacer el pedido</button>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default Checkout
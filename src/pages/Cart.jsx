import React from 'react'

import '../styles/cart.css'
import tdImg from '../assets/images/arm-chair-01.jpg'
import { Container,Row,Col } from 'reactstrap'
import {motion} from 'framer-motion'

import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'


const Cart = () => {
  return (
    <Helmet title='Cart'>
      <CommonSection title='Carrito de compras'/>
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              <table className='table bordered'>
                <thead>
                  <tr>
                    <th>Imágen</th>
                    <th>Título</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td><img src={tdImg} alt=''/></td>
                    <td>Modern Arm Chair</td>
                    <td>$222</td>
                    <td>2px</td>
                    <td><i class="ri-delete-bin-line"></i></td>
                  </tr>
                </tbody>
              </table>
            </Col>

            <Col lg='3'></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Cart
import React from 'react';

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

import products from '../assets/data/products'

import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';

import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';

import { Services } from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import { useEffect, useState } from 'react';

const Home = () => {

  const [data, setData] = useState(products)
  const year = new Date().getFullYear()

  useEffect(() => {
    const filterdProducts = products.filter(item => item.category === 'chair');

    setData(filterdProducts)
  }, [])

  return <Helmet title={'Home'}>
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero__content'>
              <p className='hero__subtitle'>Productos de moda en {year}</p>
              <h2>Con nuestros nuevos productos, puedes hacer tu hogar mucho mas moderno</h2>
              <p>Cillum nostrud adipisicing voluptate dolor eiusmod ea irure ex adipisicing ipsum ex fugiat. Do sunt velit eu ut eiusmod. Consequat adipisicing nisi amet nostrud Lorem ad in consequat do labore fugiat ut aliqua. Eiusmod nulla esse esse commodo mollit sint pariatur. Est enim commodo amet irure veniam ipsum commodo voluptate ullamco tempor irure deserunt tempor.</p>

              <motion.button whileTap={{scale: 1.2}} className='buy__btn'><Link to='/shop'>¡Compra ahora!</Link></motion.button>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className='hero__img'>
              <img src={heroImg} alt=''></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Services />
    <section className='trending__products'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Productos en tendencia</h2>
          </Col>
          <ProductsList data={data}/>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home
import React from 'react';

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

import products from '../assets/data/products'

import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';

import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';
import counterImg from '../assets/images/counter-timer-img.png'

import { Services } from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';
import { useEffect, useState } from 'react';

const Home = () => {

  const [trendingProducts, setTendringProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobilesProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year = new Date().getFullYear()

  useEffect(() => {
    const filterdTrendingProducts = products.filter(item => item.category === 'chair');

    const filterdBestSalesProducts = products.filter(item => item.category === 'sofa');

    const filterdMobilesProducts = products.filter(item => item.category === 'mobile');

    const filterdWirelessProducts = products.filter(item => item.category === 'wireless');

    const filterdPopularProducts = products.filter(item => item.category === 'watch');

    setTendringProducts(filterdTrendingProducts)
    setBestSalesProducts(filterdBestSalesProducts)
    setMobilesProducts(filterdMobilesProducts)
    setWirelessProducts(filterdWirelessProducts)
    setPopularProducts(filterdPopularProducts)
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
          <ProductsList data={trendingProducts}/>
        </Row>
      </Container>
    </section>

    <section className='best__sales'>
      <Container>
        <Row>
            <Col lg='12' className='text-center'>
             <h2 className='section__title'>Las mejores ventas</h2>
           </Col>

           <ProductsList data={bestSalesProducts}/>
        </Row>
      </Container>
    </section>

    <section className='timer__count'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='clock__top-content'>
              <h4 className='text-white fs-6 mb-2'>Ofertas limitadas</h4>
              <h3 className='text-white fs-5 mb-3'>Quality armchair</h3>
            </div>
            <Clock />

            <motion.button whileTap={{scale: 1.2}} className='buy__btn store__btn'><Link to='/shop'>Visitar la tienda</Link></motion.button>
          </Col>

          <Col lg='6' md='6' className='text-end'>
            <img src={counterImg} alt=''/>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='new__arrivals'>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>Productos recién llegados</h2>
          </Col>
        <ProductsList data={mobileProducts}/>
        <ProductsList data={wirelessProducts}/>
        </Row>
      </Container>
    </section>

    <section className='popular__category'>
    <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>Productos populares</h2>
          </Col>
        <ProductsList data={popularProducts}/>
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default Home
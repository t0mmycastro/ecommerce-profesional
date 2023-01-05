import React, {useRef,useEffect} from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import './header.css'

import {motion} from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import { Container, Row } from 'reactstrap'
import { useSelector } from 'react-redux'
import useAuth from '../../custom-hooks/useAuth'

import { Link } from 'react-router-dom'

const nav__links = [
  {
    path: 'home',
    display: 'Inicio'
  },
  {
    path: 'shop',
    display: 'Shopping'
  },
  {
    path: 'cart',
    display: 'Carro'
  },
]

const Header = () => {

  // Con esto podemos ver el total que vamos llevando 
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const profileActionRef = useRef(null)

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const {currentUser} = useAuth()

  // Nos deja navegar por la página y el menu de navegación se desplega con un efecto 'Scroll'

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()

    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  })

  /* Función la cual si el usuario presiona el menu mobile, se le activará un menu*/

  const menuToggle = () => menuRef.current.classList.toggle('active__menu')

  const navigateToCart = () => {
      navigate("/cart")
  }

  const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profileActions')

  return <header className='header' ref={headerRef}>
    <Container>
      <Row>
        <div className='nav__wrapper'>
          <div className='logo'>
            <img src={logo} alt='logo '/>
            <div>
              <h1>NeuSmart</h1>
            </div>
          </div>

          <div className='navigation' ref={menuRef} onClick={menuToggle}>
            <ul className='menu'>
              {nav__links.map((item, index) => (
                <li className='nav__item' key={index}>
                <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className='nav__icons'>


            <span className='fav__icon'>
              <i class="ri-service-line"></i>
            <span className='badge'>1</span>
            </span>
            <span className='cart__icon' onClick={navigateToCart}>
              <i class="ri-shopping-basket-line"></i>
              <span className='badge'>{totalQuantity}</span>
            </span>

            <div className='profile'>
              <motion.img whileTap={{scale: 1.2}} src={currentUser ? currentUser.photoURL : userIcon} alt='' onClick={toggleProfileActions}/>
              <div className='profile__actions' ref={profileActionRef} onClick={toggleProfileActions}>
                  {currentUser ? (<span>Salir</span>) :
                   (<div>
                    <Link to='/signup'>Registrarse</Link>
                    <Link to='/login'>Logearse</Link>
                   </div>)
                   
                   }
              </div>
            </div>
            <div className='mobile__menu'>
              <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header
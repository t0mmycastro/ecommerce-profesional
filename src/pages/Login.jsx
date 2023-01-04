import React, { useState } from 'react'

import Helmet from '../components/Helmet/Helmet'
import { Link, useNavigate } from 'react-router-dom'

import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import '../styles/login.css'

//Firebase
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'

import { toast } from 'react-toastify'


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      console.log(user)
      setLoading(false)
      toast.success('Te has logeado correctamente')
      navigate('/checkout')

    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  return <Helmet title='Iniciar sesión'>
    <section>
      <Container>
        <Row>
          {
            loading ? <Col lg='12' className='text-center'><h5 className='fw-bold'>Cargando.....</h5></Col> : <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold mb-4'>Inicio de sesión</h3>

            <Form className='auth__form' onSubmit={signIn}>
              <FormGroup className='form__group'>
                <input type='email' placeholder='Escribe tu email' value={email} onChange={e => setEmail(e.target.value)}/>
              </FormGroup>

              <FormGroup className='form__group'>
                <input type='password' placeholder='Escribe la contraseña' value={password} onChange={e => setPassword(e.target.value)}/>
              </FormGroup>

              <button type='submit' className='buy__btn auth__btn'>Loguearse</button>
              <p>¿No tienes cuenta? <Link to='/signup'>Create una</Link></p>
            </Form>
          </Col>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Login
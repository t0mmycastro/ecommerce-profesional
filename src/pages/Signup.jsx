import React, { useState } from 'react'

import Helmet from '../components/Helmet/Helmet'
import { Link } from 'react-router-dom'

import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import '../styles/login.css'

//Firebase 
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase.config'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase.config'
import { setDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'

import { toast } from 'react-toastify'
import { upload } from '@testing-library/user-event/dist/upload'

import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signup = async(e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log(user)

      const storageRef = ref(storage, `images/${Date.now() + username}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on((error) => {
        toast.error(error.message)
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          // Actualiza el perfil del usuario
         await updateProfile(user, {
            displayName: username,
            photoURL: downloadURL
          });

          // Informacion del usuario guardada en firestore
          await setDoc(doc(db,'users', user.uid), {
            uid: user.uid,
            displayName: username,
            email,
            photoURL: downloadURL
          })


        })
      })

      setLoading(false)
      toast.success('Su cuenta ha sido creada con éxito')
    } catch (error) {
      setLoading(false)
      toast.error('Algo salió mal')
    }
  }

  return <Helmet title='Registro'>
    <section>
      <Container>
        <Row>
          {
            loading ? <Col lg='12' className='text-center'><h5 className='fw-bold'>Cargando.....</h5></Col> : <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold mb-4'>Registrate</h3>
            <Form className='auth__form' onSubmit={signup}>

              <FormGroup className='form__group'>
                <input type='text' placeholder='Escribe tu usuario' value={username} onChange={e => setUsername(e.target.value)}/>
              </FormGroup>

              <FormGroup className='form__group'>
                <input type='email' placeholder='Escribe tu email' value={email} onChange={e => setEmail(e.target.value)}/>
              </FormGroup>

              <FormGroup className='form__group'>
                <input type='password' placeholder='Escribe la contraseña' value={password} onChange={e => setPassword(e.target.value)}/>
              </FormGroup>

              <FormGroup className='form__group'>
                <input type='file' onChange={e => setFile(e.target.files[0])}/>
              </FormGroup>

              <button type='submit' className='buy__btn auth__btn'>Crear</button>
              <p>¿Ya tienes una cuenta? <Link to='/login'>Logueate</Link></p>
            </Form>
          </Col>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Signup
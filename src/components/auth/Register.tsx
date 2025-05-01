import React, { useState } from 'react'
import Header from '../headers/Header'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { app } from '../../data/firebase'

const auth = getAuth(app)
const db = getFirestore(app)

const Register: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')

  const signupUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      // Save additional details in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        fullName,
        phone,
        address,
        gender,
        createdAt: new Date(),
      })

      console.log('User created and details saved:', user)
    } catch (error) {
      console.error('Signup error:', error)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signupUser()
  }

  return (
    <div>
      <Header />
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card shadow'>
              <div className='card-body'>
                <h3 className='card-title text-center mb-4'>Register</h3>
                <form onSubmit={handleSubmit}>
                  <div className='mb-3'>
                    <label className='form-label'>Full Name</label>
                    <input
                      type='text'
                      className='form-control'
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Phone</label>
                    <input
                      type='text'
                      className='form-control'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Address</label>
                    <input
                      type='text'
                      className='form-control'
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Gender</label>
                    <select
                      className='form-control'
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                    >
                      <option value=''>Select</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                      type='email'
                      className='form-control'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input
                      type='password'
                      className='form-control'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type='submit' className='btn btn-primary w-100'>Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

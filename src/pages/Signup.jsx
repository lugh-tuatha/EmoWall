import React from 'react'
import './pages.css'

import LoginHeader from '../components/login-header'
import SignupForm from '../components/signup-form'

function Signup() {
  return (
    <div>
      <div className="row">
        <LoginHeader />

        <div className="col-lg-8 vh-100 login-hero-container d-flex justify-content-center align-items-center">
          <div>
            <p>Welcome to EmoWall</p>
            <h2 className='fw-bold'>Share Your Emotions Anonymously and Find Support in Our Safe and Caring Community</h2>
          </div>

        </div>

        <div className="col-lg-4 vh-100 signup-container d-flex justify-content-center align-items-center">
          <SignupForm />
        </div>
      </div>
    </div>
  )
}

export default Signup
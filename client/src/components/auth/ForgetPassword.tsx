import React, { useState } from 'react';
import { app } from '../../data/firebase';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import Header from '../headers/Header';

const auth = getAuth(app);

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage('Password reset email sent successfully!');
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to send password reset email.');
        setMessage(null);
      });
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="mb-3">Forgot Password</h4>
                <form onSubmit={handleSubmit}>
                  <label className="form-label">Enter your email</label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className="btn btn-primary w-100" type="submit">
                    Send Reset Email
                  </button>
                </form>
                {message && <div className="alert alert-success mt-3">{message}</div>}
                {error && <div className="alert alert-danger mt-3">{error}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword

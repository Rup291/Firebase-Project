import React, { useState } from "react";
import Header from "../headers/Header";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../data/firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log("User logged in:", value.user);
        navigate("/");
      })
      .catch((error) => console.error("Login error:", error));
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google user:", result.user);
      navigate("/");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInUser();
  };

  return (
    <>
      <Header />
      <div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body">
                  <h3 className="card-title text-center mb-4">Login</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Login
                    </button>
                  </form>

                  <button
                    className="btn w-100 mt-2 d-flex align-items-center justify-content-center border"
                    style={{ backgroundColor: "#fff", color: "#757575" }}
                    onClick={signInWithGoogle}
                  >
                    <img
                      src="https://developers.google.com/identity/images/g-logo.png"
                      alt="Google logo"
                      style={{ width: 20, height: 20, marginRight: 10 }}
                    />
                    Sign in with Google
                  </button>
                  <button
                    className="btn btn-success w-100 mt-2"
                    onClick={() => navigate("/forget-password")}
                  >
                    Forget Password
                  </button>
                  <a onClick={()=>navigate("/register")}>Be a part!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

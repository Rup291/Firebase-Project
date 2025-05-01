import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { app } from "../../data/firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Header: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            {user ? (
              <>
                <span className="me-2">Hello, {user.email}</span>
                <button onClick={handleLogout} className="btn btn-outline-danger">
                  Logout
                </button>
              </>
            ) : (
              <>
                <button onClick={() => navigate("/login")} className="btn btn-outline-primary">
                  Login
                </button>
                <button onClick={() => navigate("/register")} className="btn btn-outline-secondary">
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

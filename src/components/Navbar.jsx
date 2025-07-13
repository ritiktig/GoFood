import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import {useCart} from '../components/ContextReducer';
import Model from "../Model";
import Cart from '../screens/Cart';

function Navbar(props) {
  const [cartView,setCartView] =useState(false)
  let data =useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    navigate("/Login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            GoFood
          </Link>
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
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="#"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authtoken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="#"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authtoken") ? (
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/Login">
                  Login
                </Link>
                <Link
                  className="btn bg-white text-success mx-1"
                  to="/createuser"
                >
                  Signup
                </Link>
              </div>
            ) : 
              <div>
                <div className="btn bg-white text-sucess mx-2" onClick={()=>{setCartView(true)}}>
                  Mycart {" "}
                  <Badge pill bg="danger">{data.length}</Badge>
                </div>
                {cartView? <Model onClose={()=>setCartView(false)}><Cart /></Model>: ""}
                
                <div
                  className="btn bg-white text-danger mx-2"
                  onClick={handleLogout}>
                  Logout
                </div>
              </div>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

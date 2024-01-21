import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar-dark bg-dark text-light shadow ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav class="navbar navbar-expand-lg bg-dark text-light">
                <div class="container-fluid">
                  <Link
                    className="navbar-brand"
                    to="/"
                    style={{
                      color: "orangered",
                      fontSize: "25px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <img
                      src="/fundaicon.png"
                      alt="funda"
                      style={{ height: "35px" }}
                    />
                    FUNDA SAMPLE
                  </Link>

                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <Link className="nav-link active text-light" to="/Home">
                          Home
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          className="nav-link active text-light"
                          to="/About"
                        >
                          About
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          className="nav-link active text-light"
                          to="/Contact"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

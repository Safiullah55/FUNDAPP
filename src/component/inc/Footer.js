import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
// import {} from "bootstrap-icons";
const Footer = () => {
  return (
    <>
      <section className=" section footer bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5">
              <h6>Company Information</h6>
              <hr />
              <p className="text-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                voluptatem, est nobis placeat excepturi doloribus!Lorem Ips et
                du consectetur adip tempor et just euismod tempor et just e
              </p>
            </div>
            <div className="col-md-4 mb-5">
              <h6>Quick Links</h6>
              <hr />
              <div className="mb-3">
                <Link to="/Home" className="nav-link">
                  <i class="bi bi-house"></i> Home
                </Link>
              </div>
              <div className="mb-3">
                <Link to="/About" className="nav-link  ">
                  <i class="bi bi-file-person-fill"></i> About
                </Link>
              </div>
              <div className="mb-3">
                <Link to="/Contact" className="nav-link ">
                  <i class="bi bi-person-lines-fill"></i> Contact
                </Link>
              </div>
              <div className="mb-3">
                <Link to="/Blog" className="nav-link ">
                  <i className="bi bi-pencil-square"></i> Blog
                </Link>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h6>Contact Information</h6>
              <hr />
              <div className="mb-3">
                <p className="text-white mb-1">
                  <i class="bi bi-houses-fill"></i> street#4 House-234 phase-9
                  near Youns masjid Islamabad,Pakistan
                </p>
              </div>
              <div className="mb-3">
                <p className="text-white mb-1">
                  <i class="bi bi-phone"></i> #92-345435453
                </p>
              </div>
              <div className="mb-3">
                <p className="text-white mb-1">
                  <i className="bi bi-telephone"></i> Telephone : 712313
                </p>
              </div>
              <div className="mb-3">
                <p className="text-white mb-1">
                  <i class="bi bi-envelope-at-fill"></i> khan.marwat@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      {/* breadcrumbs menu */}
      <section className="section bg-c-info">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4  ">
              <h2 className="contact-heading">Contact Us</h2>
              <div className="underline mr-auto"></div>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-8">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mx-5">
                  <li className="breadcrumb-item ms-auto">
                    <Link to="/Home" className="nav-link text-light">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form mb-5">
        <div className="container">
          <div className="form-card shadow rounded-4 p-5">
            <div className="form-body">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <h6 className="main-heading mb-3">Contact Form</h6>
                    <hr />
                    <div class="mb-3">
                      <label class="form-label">Full Name</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Phone Number</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Email Address</label>
                      <input type="email" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Message</label>
                      <textarea class="form-control" rows="3"></textarea>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary w-100 my-4"
                    >
                      Send Message
                    </button>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 border-start">
                    <h1 className="main-heading">Address Information</h1>
                    <hr />
                    <div className="mb-3">
                      <p className="mb-1">
                        <i class="bi bi-houses-fill"></i> street#4 House-234
                        phase-9 near Youns masjid Islamabad,Pakistan
                      </p>
                    </div>
                    <div className="mb-3">
                      <p className="mb-1">
                        <i class="bi bi-phone"></i> #92-345435453
                      </p>
                    </div>
                    <div className="mb-3">
                      <p className=" mb-1">
                        <i className="bi bi-telephone"></i> Telephone : 712313
                      </p>
                    </div>
                    <div className="mb-3">
                      <p className="mb-1">
                        <i class="bi bi-envelope-at-fill"></i>{" "}
                        khan.marwat@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

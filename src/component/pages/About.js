import React from "react";
import { Link } from "react-router-dom";
import Vmc from "../inc/Vmc";

const About = () => {
  return (
    <>
      {/* breadcrumbs menu */}
      <section className="section bg-c-info">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4  ">
              <h2 className="main-heading">About Us</h2>
              <div className="underline mr-auto"></div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mx-5">
                  <li className="breadcrumb-item ms-auto">
                    <Link to="/Home" className="nav-link text-light">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* body section */}
      <section className="section border-top mb-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h5 className="main-heading">Our Company</h5>
              <div className="underline"></div>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                fugiat voluptatibus iusto hic voluptas nemo suscipit minus fuga
                aperiam aspernatur, praesentium reiciendis distinctio mollitia
                cumque doloremque, dicta itaque ab ipsam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our VISION MISSION AND CORE VALUES */}
      <Vmc />
    </>
  );
};

export default About;

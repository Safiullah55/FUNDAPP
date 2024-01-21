import React from "react";
import service1 from "../images/service1.jpg";
import service2 from "../images/service2.jpg";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <section className="section border-top">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-12 col-lg-12 mb-5  text-center">
            <h3 className="main-heading">Our Services</h3>
            <div className="underline mx-auto"></div>
          </div>
          <div className=" col-sm-12 col-md-4 col-lg-4">
            <div className="card rounded-3 mb-5 p-3 shadow">
              <img
                src={service1}
                alt="Service1"
                className="w-100 rounded-top border-bottom"
              />
              <div className="card-body">
                <h6 className="text-center">Services</h6>
                <div className="underline mx-auto"></div>
                <p className="text-start">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  officiis placeat assumenda necessitatibus.
                </p>
                <Link to="/Services" className="btn btn-link">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className=" col-sm-12 col-md-4 col-lg-4">
            <div className="card rounded-3 mb-5 p-3 shadow">
              <img
                src={service2}
                alt="Service2"
                className="w-100 rounded-top border-bottom"
              />
              <div className="card-body">
                <h6 className="text-center">Services</h6>
                <div className="underline mx-auto"></div>
                <p className="text-start">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  officiis placeat assumenda necessitatibus.
                </p>
                <Link to="/Services" className="btn btn-link">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className=" col-sm-12 col-md-4 col-lg-4">
            <div className="card rounded-3 mb-5 p-3 shadow ">
              <img
                src={service1}
                alt="Service1"
                className="w-100 rounded-top border-bottom"
              />
              <div className="card-body">
                <h6 className="text-center">Services</h6>
                <div className="underline mx-auto"></div>
                <p className="text-start">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  officiis placeat assumenda necessitatibus.
                </p>
                <Link to="/Services" className="btn btn-link">
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

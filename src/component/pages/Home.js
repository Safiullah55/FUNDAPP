import React from "react";
import Slider from "../inc/Slider";
import Vmc from "../inc/Vmc";
import Services from "../inc/Services";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div>
        <Slider />
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col .col-sm-12 col-md-12 .col-lg-8 text-center">
                <h3 className="main-heading">Our Company</h3>
                <div className="underline mx-auto"></div>
                <p className="text-xl-start">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  officiis placeat assumenda necessitatibus. Voluptatum cumque
                  ab omnis dolor laboriosam expedita, vero cum enim laborum,
                  fugit recusandae excepturi eligendi, aut sint labore
                  distinctio? Omnis a, modi numquam eos delectus beatae quam
                  possimus provident? Nesciunt, saepe earum dolores accusantium
                  aperiam cupiditate necessitatibus nihil maiores a temporibus
                  accusamus ut provident, rerum reiciendis error eos amet
                  praesentium et soluta molestias molestiae? Expedita minima
                  dignissimos alias debitis quaerat unde tempore, a repellat
                  tenetur. Odit distinctio praesentium fugit magnam iure sed
                  beatae, velit animi illo vero?
                </p>
                <Link to="/About" className="btn btn-warning">
                  {" "}
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our VISION MISSION AND CORE VALUES */}
        <Vmc />

        {/* OUR Services */}
        <Services />
      </div>
    </>
  );
};

export default Home;

import React from "react";
import "../../App.css";

import img2 from "../images/coding.jpg";
import img3 from "../images/train.jpg";
import img4 from "../images/computerTable.jpg";

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="image-container">
              <img
                src={img3}
                style={{ width: "100%", height: "100%" }}
                class="d-block "
                alt="..."
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p className="text-white">
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <div className="image-container">
              <img
                src={img4}
                style={{ width: "100%", height: "100%" }}
                class="d-block "
                alt="..."
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p className="text-white">
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <div className="image-container">
              <img
                src={img2}
                style={{ width: "100%", height: "100%" }}
                class="d-block"
                alt="..."
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p className="text-white">
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          {/* <div class="carousel-item">
            <img src={img4} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div> */}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;

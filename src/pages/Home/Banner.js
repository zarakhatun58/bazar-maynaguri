import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <div className="container">
            <div className="row res_padd">
              <ul className="carousel-indicators">
                <li
                  data-target="#demo"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>
            </div>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://i.ibb.co/fxqnH5j/banner1.jpg" alt="" />
              <div className="container">
                <div className="row res_padd">
                  <div className="sliderr_ttxt">
                    <div className="carousel-caption">
                      <h3>Quality Assurance</h3>
                      <p>Free weighting Machine for our members.</p>
                      <a href="#">Call For Enquiry</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src="https://i.ibb.co/xjt88Zz/banner2.jpg" alt="" />
              <div className="container">
                <div className="row res_padd">
                  <div className="sliderr_ttxt">
                    <div className="carousel-caption">
                      <h3>Simply Dummy Caption Here</h3>
                      <p>Free weighting Machine for our members.</p>
                      <a href="#">Call For Enquiry</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src="https://i.ibb.co/FHmjLjW/banner3.jpg" alt="" />
              <div className="container">
                <div className="row res_padd">
                  <div className="sliderr_ttxt">
                    <div className="carousel-caption">
                      <h3>Quality Assurance</h3>
                      <p>Free weighting Machine for our members.</p>
                      <a href="#">Call For Enquiry</a>
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

export default Banner;

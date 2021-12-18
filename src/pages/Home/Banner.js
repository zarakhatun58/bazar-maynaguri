import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <section class="banner">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <div class="container">
            <div class="row res_padd">
              <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>
            </div>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://i.ibb.co/fxqnH5j/banner1.jpg" alt="" />
              <div class="container">
                <div class="row res_padd">
                  <div class="sliderr_ttxt">
                    <div class="carousel-caption">
                      <h3>Quality Assurance</h3>
                      <p>Free weighting Machine for our members.</p>
                      <a href="#">Call For Enquiry</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <img src="https://i.ibb.co/xjt88Zz/banner2.jpg" alt="" />
              <div class="container">
                <div class="row res_padd">
                  <div class="sliderr_ttxt">
                    <div class="carousel-caption">
                      <h3>Simply Dummy Caption Here</h3>
                      <p>Free weighting Machine for our members.</p>
                      <a href="#">Call For Enquiry</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <img src="https://i.ibb.co/FHmjLjW/banner3.jpg" alt="" />
              <div class="container">
                <div class="row res_padd">
                  <div class="sliderr_ttxt">
                    <div class="carousel-caption">
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

import { Box, Slider } from "@material-ui/core";

import React from "react";
import "./Search.css";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

const Search = () => {
  function valuetext(value) {
    return `${value}%`;
  }

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert("Your Order Successful");
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("hello world ");
  //   alert("order successfully");
  // };
  return (
    <>
      <div>
        <div className="search_main_section">
          <div className="container">
            <div className="row res_padd">
              <div className="bread_crumb">
                <a href="#">Home</a>
                <span>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </span>
                <a href="#">Vegetables</a>
              </div>

              <div className="mobile_filter">
                {" "}
                <i className="fa fa-filter" aria-hidden="true"></i>
                <p>Show Filter</p>
              </div>

              <div className="laft_search_panel">
                <h3>Filter Options</h3>

                <div className="form_group" style={{ position: "relative" }}>
                  <input
                    type="text"
                    placeholder="Keyword"
                    className="search-input"
                  />
                  <img
                    src="https://i.ibb.co/mqMS4pM/icon36.png"
                    className="search_icon"
                    alt=""
                  />
                </div>

                <div className="form_group">
                  <label className="search_label">Category</label>
                  <select className="slectt">
                    <option>Vegetable</option>
                    <option>Fruits</option>
                    <option>Dairy products</option>
                    <option>Organic Products</option>
                    <option>Grocery Items</option>
                  </select>
                </div>

                <div className="form_group">
                  <label className="search_label">Sub Category</label>
                  <ul className="c_ul">
                    <li>
                      <label className="contect_container_checkBox">
                        Sub Category one
                        <input type="checkbox" checked="checked" name="text" />
                        <span className="contect_checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="contect_container_checkBox">
                        Sub Category two
                        <input type="checkbox" checked="checked" name="text" />
                        <span className="contect_checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="contect_container_checkBox">
                        Sub Category
                        <input type="checkbox" checked="checked" name="text" />
                        <span className="contect_checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="contect_container_checkBox">
                        Sub Categoru name here
                        <input type="checkbox" checked="checked" name="text" />
                        <span className="contect_checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="contect_container_checkBox">
                        Sub Category
                        <input type="checkbox" checked="checked" name="text" />
                        <span className="contect_checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </div>

                <div className="form_group">
                  <label className="search_label">Price Range</label>
                  <div className="slider_rnge">
                    <Box sx={{ width: 300 }}>
                      <Slider
                        getAriaLabel={() => " Price range"}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                      />
                    </Box>
                    <div
                      id="slider-range"
                      className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                    >
                      <div
                        className="ui-slider-range ui-widget-header ui-corner-all"
                        style={{ left: "0%", width: "100%" }}
                      >
                        <span className="range-text">
                          <input
                            type="text"
                            className="price_numb"
                            readonly
                            id="amount"
                          />
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="search-submit1">
                  Filter
                </button>
              </div>

              <div className="right_search_panel">
                <div className="evnt_shot_by_main">
                  <label className="event-sort">
                    Showing 1-20 out of 100 product for Vegetable
                  </label>
                  <div className="sort-filter">
                    <p>Sort by :</p>
                    <select className="sort-select">
                      <option>Select</option>
                      <option>Price - Low to High</option>
                      <option>Price - High to Low </option>
                    </select>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/vBRpFVs/search01.jpg" alt="" />
                    <span>
                      <a href="/">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="/">Fresh Onion</a>
                    <p>Rs.40.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/2YtrWgn/search02.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.20.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/FwJvk5G/search03.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.40.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/CQJJ2gb/search04.jpg" alt="" />
                    <span>
                      <a href="/">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="/">Fresh Onion</a>
                    <p>Rs.30.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/W6RTvSD/search05.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/xjM1tvZ/search05.png" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/tsPN021/search07.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/cgBKwBM/search08.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/N3kGvNZ/search09.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/W6RTvSD/search05.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/r0XpFCy/search10.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/vxBTPFc/search11.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/W6RTvSD/search05.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.40.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/vBRpFVs/search01.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.20.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/r0XpFCy/search10.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Strawberry</a>
                    <p>Rs.40.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/vxBTPFc/search11.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Chilli</a>
                    <p>Rs.30.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/FwJvk5G/search03.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Tomato</a>
                    <p>Rs.80.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img src="https://i.ibb.co/vxBTPFc/search11.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img
                      src="https://i.ibb.co/wW8PQyg/icon21-Copy-Copy.jpg"
                      alt=""
                    />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="search_proo">
                  <div className="">
                    <img
                      src="https://i.ibb.co/ftvPNCB/icon34-Copy.jpg"
                      alt=""
                    />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div className="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                    <div className="text-center"></div>
                  </div>
                </div>

                <div className="w-100"></div>

                <div className="pagination_area">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li className="active">
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                    <li>
                      <a href="#">25</a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

/*


                {services.length === 0 ? (
                  <Spinner animation="Booking" />
                ) : (
                  <div className="col">
                    {services.map((service) => (
                      <SingleProduct
                        key={service.name}
                        service={service}
                      ></SingleProduct>
                    ))}
                  </div>
                )}

function valuetext(value) {
    return `${value}%`;
  }

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option,
  });

  // Sample options for search box
  const myOptions = [
    "onion",
    "potato",
    "tomato",
    "orange",
    "pineapple",
    "ginger",
    "capsicum",
    "bin",
    "meal",
    "breakfast",
    " lunch",
    "snacks",
    "dinner",
  ];

      <div style={{ marginLeft: "", marginTop: "" }}>
        <Autocomplete
          style={{ width: "500" }}
          freeSolo
          filterOptions={filterOptions}
          options={myOptions}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Search for Products"
            >
              <span style={{ textColor: "black" }}>
                <FaSistrix />{" "}
              </span>
            </TextField>
          )}
        />
      </div>


*/

import { Box, Slider, TextField } from "@material-ui/core";
import { Autocomplete, createFilterOptions } from "@material-ui/lab";
import { FaSistrix } from "react-icons/fa";
import React from "react";
import "./Search.css";

const Search = () => {
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

  return (
    <>
      <div>
        <div class="search_main_section">
          <div class="container">
            <div class="row res_padd">
              <div class="bread_crumb">
                <a href="#">Home</a>
                <span>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
                <a href="#">Vegetables</a>
              </div>

              <div class="mobile_filter">
                {" "}
                <i class="fa fa-filter" aria-hidden="true"></i>
                <p>Show Filter</p>
              </div>

              <div class="laft_search_panel">
                <h3>Filter Options</h3>

                <div class="form_group" style={{ position: "relative" }}>
                  <input
                    type="text"
                    placeholder="Keyword"
                    class="search-input"
                  />
                  <img
                    src="https://i.ibb.co/mqMS4pM/icon36.png"
                    class="search_icon"
                    alt=""
                  />
                </div>

                <div class="form_group">
                  <label class="search_label">Category</label>
                  <select class="slectt">
                    <option>Vegetable</option>
                    <option>Fruits</option>
                    <option>Dairy products</option>
                    <option>Organic Products</option>
                    <option>Grocery Items</option>
                  </select>
                </div>

                <div class="form_group">
                  <label class="search_label">Sub Category</label>
                  <ul class="c_ul">
                    <li>
                      <label class="contect_container_checkBox">
                        Sub Category one
                        <input type="checkbox" checked="checked" name="text" />
                        <span class="contect_checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label class="contect_container_checkBox">
                        Sub Category two
                        <input type="checkbox" checked="checked" name="text" />
                        <span class="contect_checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label class="contect_container_checkBox">
                        Sub Category
                        <input type="checkbox" checked="checked" name="text" />
                        <span class="contect_checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label class="contect_container_checkBox">
                        Sub Categoru name here
                        <input type="checkbox" checked="checked" name="text" />
                        <span class="contect_checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label class="contect_container_checkBox">
                        Sub Category
                        <input type="checkbox" checked="checked" name="text" />
                        <span class="contect_checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </div>

                <div class="form_group">
                  <label class="search_label">Price Range</label>
                  <div class="slider_rnge">
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
                      class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                    >
                      <div
                        class="ui-slider-range ui-widget-header ui-corner-all"
                        style={{ left: "0%", width: "100%" }}
                      >
                        <span class="range-text">
                          <input
                            type="text"
                            class="price_numb"
                            readonly
                            id="amount"
                          />
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" class="search-submit1">
                  Filter
                </button>
              </div>

              <div class="right_search_panel">
                <div class="evnt_shot_by_main">
                  <label class="event-sort">
                    Showing 1-20 out of 100 product for Vegetable
                  </label>
                  <div class="sort-filter">
                    <p>Sort by :</p>
                    <select class="sort-select">
                      <option>Select</option>
                      <option>Price - Low to High</option>
                      <option>Price - High to Low </option>
                    </select>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/vBRpFVs/search01.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.40.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/2YtrWgn/search02.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.20.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/FwJvk5G/search03.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.40.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/CQJJ2gb/search04.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.30.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/W6RTvSD/search05.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/xjM1tvZ/search05.png" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/tsPN021/search07.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/cgBKwBM/search08.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/N3kGvNZ/search09.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/W6RTvSD/search05.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/r0XpFCy/search10.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/vxBTPFc/search11.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/W6RTvSD/search05.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.40.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/vBRpFVs/search01.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.20.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/r0XpFCy/search10.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Strawberry</a>
                    <p>Rs.40.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/vxBTPFc/search11.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Chilli</a>
                    <p>Rs.30.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/FwJvk5G/search03.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Tomato</a>
                    <p>Rs.80.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img src="https://i.ibb.co/vxBTPFc/search11.jpg" alt="" />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img
                      src="https://i.ibb.co/wW8PQyg/icon21-Copy-Copy.jpg"
                      alt=""
                    />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                  </div>
                </div>

                <div class="search_proo">
                  <div class="srch_pic_box">
                    <img
                      src="https://i.ibb.co/ftvPNCB/icon34-Copy.jpg"
                      alt=""
                    />
                    <span>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                  <div class="srch_dtls_box">
                    <a href="#">Fresh Onion</a>
                    <p>Rs.80.00</p>
                  </div>
                </div>

                <div class="w-100"></div>

                <div class="pagination_area">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa fa-angle-left" aria-hidden="true"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li class="active">
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
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
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
